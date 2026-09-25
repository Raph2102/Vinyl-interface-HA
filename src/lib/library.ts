/**
 * Bibliothèque : albums, playlists, recherche et file d'attente.
 *
 * Deux sources derrière la même interface : Music Assistant à travers Home
 * Assistant, et un jeu fictif pour le mode démonstration. La vue en bac à
 * disques ne sait pas laquelle elle utilise.
 *
 * Côté Home Assistant, `music_assistant.get_library` se cible par
 * `config_entry_id` — pas par entité — et ce config_entry_id ne s'obtient que
 * par le WebSocket. La file, elle, passe si possible par Music Assistant en
 * direct : voir mass.ts pour le pourquoi.
 */

import { favoriteCover, generateCover } from "./covers";
import { injectedAlbums, injectedPlaylists } from "./demo";
import type { MassLink } from "./mass";
import type { PlayerClient } from "./types";

export type MediaKind = "album" | "playlist" | "track";

/** Ce qu'on range dans le bac : un album, une playlist, ou un morceau trouvé. */
export interface Media {
  uri: string;
  name: string;
  artist: string;
  image: string | null;
  kind: MediaKind;
  /** Playlist des favoris, épinglée en tête du bac. */
  pinned?: boolean;
}

/** Un morceau de la file d'attente. */
export interface QueueItem {
  /** Identifiant DANS la file : c'est lui qu'on déplace et sur lequel on saute. */
  id: string;
  uri: string;
  name: string;
  artist: string;
  image: string | null;
  duration: number;
}

/**
 * L'index courant vient de Music Assistant, il ne se devine pas.
 * Repérer le morceau en cours en comparant les titres marchait sur la démo et
 * se serait cassé sur un album où deux pistes portent le même nom.
 */
export interface QueueView {
  items: QueueItem[];
  /** Rang du morceau en cours dans `items`, -1 s'il est inconnu. */
  current: number;
  /**
   * Dernier rang déjà chargé par le lecteur. Music Assistant refuse de déplacer
   * un morceau jusque-là, ou d'en glisser un avant : il est déjà parti vers
   * l'enceinte. Tout ce qui suit se réordonne librement.
   */
  locked: number;
  /** Liste complète, qui se réordonne ; sinon un simple aperçu. */
  full: boolean;
  /** Nombre total de morceaux, même quand on n'en montre qu'une partie. */
  total: number;
  /** Pourquoi on ne montre qu'un aperçu, le cas échéant. */
  note: string | null;
}

export interface SearchResults {
  albums: Media[];
  playlists: Media[];
  tracks: Media[];
}

export interface LibrarySource {
  albums(): Promise<Media[]>;
  playlists(): Promise<Media[]>;
  play(item: Media): Promise<void>;
  /** Recherche globale chez le fournisseur — donc dans tout Deezer. */
  search(query: string): Promise<SearchResults>;
  /** Ce qui va suivre sur l'enceinte. */
  queue(): Promise<QueueView>;
  /** Déplace la lecture en cours vers une autre enceinte, sans la couper. */
  transferTo(entityId: string): Promise<void>;
  /** Saute directement sur un morceau de la file. */
  jumpTo(item: QueueItem): Promise<void>;
  /** Décale un morceau de `shift` rangs dans la file (négatif : vers le haut). */
  move(item: QueueItem, shift: number): Promise<void>;
  /** Prévient quand la file change. Renvoie de quoi se désabonner. */
  watchQueue(onChange: () => void): () => void;
  /**
   * Paroles synchronisées que Music Assistant connaît déjà pour le morceau en
   * cours, ou null. Elles viennent du fournisseur pour CE pressage-là : leur
   * calage est exact, là où une base communautaire doit deviner la version.
   */
  currentLyrics(title: string): Promise<string | null>;
}

/** Morceaux déjà joués qu'on garde au-dessus du morceau en cours. */
const PAST_SHOWN = 20;
/** Morceaux à venir qu'on affiche. Au-delà, la liste ne se lit plus. */
const AHEAD_SHOWN = 400;
/** Plafond d'une page de get_library, fixé par Home Assistant. */
const PAGE = 500;

// -------------------------------------------------------------- Music Assistant

interface MassCapableClient extends PlayerClient {
  configEntry(domain: string): Promise<string | null>;
  callServiceWithResponse(
    domain: string,
    service: string,
    data: Record<string, unknown>,
    entityId?: string,
  ): Promise<unknown>;
}

export function haLibrary(
  client: MassCapableClient,
  entityId: string,
  mass: MassLink | null,
): LibrarySource {
  let entryId: string | null = null;
  /** File de Music Assistant derrière l'entité ; apprise au premier get_queue. */
  let queueId: string | null = null;

  const entry = async () => {
    if (!entryId) entryId = await client.configEntry("music_assistant");
    if (!entryId) throw new Error("Intégration Music Assistant introuvable dans Home Assistant.");
    return entryId;
  };

  const image = (url: string | null) => reachable(mass ? mass.imageUrl(url) : url);

  /** Le résumé de Home Assistant : il donne au moins l'identifiant de la file. */
  const summary = async () => {
    const brut = await client.callServiceWithResponse("music_assistant", "get_queue", {}, entityId);
    const resume = readQueueSummary(brut, entityId);
    if (resume?.queue_id) queueId = String(resume.queue_id);
    return resume;
  };

  const library = async (mediaType: MediaKind, max: number) => {
    const tout: Media[] = [];
    // Une page plafonne à 500 : une grosse collection se lit en plusieurs fois.
    for (let offset = 0; offset < max; offset += PAGE) {
      const reponse = await client.callServiceWithResponse("music_assistant", "get_library", {
        config_entry_id: await entry(),
        media_type: mediaType,
        limit: PAGE,
        offset,
        order_by: "sort_name",
      });
      const page = parseMedia(reponse, mediaType);
      tout.push(...page);
      if (page.length < PAGE) break;
    }
    // La liaison d'abord : c'est elle qui sait réécrire les images servies
    // par Music Assistant lui-même.
    if (mass) await mass.ready();
    return tout.map((m) => ({ ...m, image: image(m.image) }));
  };

  return {
    albums: () => library("album", 5000),

    async playlists() {
      return arrangePlaylists(await library("playlist", 2000));
    },

    async play(item) {
      /*
       * Album et playlist REMPLACENT la file : on pose un disque, on ne l'ajoute
       * pas à une pile. Un morceau trouvé par la recherche passe devant sans
       * effacer la suite — c'est un « mets-moi ça », pas un changement d'album.
       */
      await client.callService(
        "music_assistant",
        "play_media",
        {
          media_id: item.uri,
          media_type: item.kind,
          enqueue: item.kind === "track" ? "play" : "replace",
        },
        entityId,
      );
    },

    /*
     * Recherche : elle se cible par config_entry_id, PAS par entité — c'est une
     * interrogation du fournisseur, pas une commande d'enceinte. Elle porte donc
     * sur tout Deezer, et non sur la seule bibliothèque enregistrée.
     */
    async search(query) {
      const reponse = (await client.callServiceWithResponse("music_assistant", "search", {
        config_entry_id: await entry(),
        name: query,
        limit: 12,
      })) as Record<string, unknown> | undefined;

      const lire = (cle: string, kind: MediaKind) =>
        parseMedia({ items: reponse?.[cle] ?? [] }, kind).map((m) => ({ ...m, image: image(m.image) }));
      return {
        albums: lire("albums", "album"),
        playlists: lire("playlists", "playlist"),
        tracks: lire("tracks", "track"),
      };
    },

    async queue() {
      const resume = await summary();

      if (mass && queueId && (await mass.ready())) {
        try {
          return await fullQueue(mass, queueId, image);
        } catch {
          /* liaison tombée entre-temps : l'aperçu fera l'affaire */
        }
      }
      return previewQueue(resume, image, mass?.unavailable ?? null);
    },

    /*
     * Transfert : la file passe d'une enceinte à l'autre sans repartir de zéro.
     * C'est ce que fait Music Assistant nativement — reprendre la lecture à la
     * même seconde dans une autre pièce.
     */
    async transferTo(cible) {
      await client.callService(
        "music_assistant",
        "transfer_queue",
        { source_player: entityId, auto_play: true },
        cible,
      );
    },

    /*
     * Sauter sur un morceau de la file.
     *
     * Par Music Assistant, `play_index` joue la ligne touchée, telle qu'elle est
     * dans la file. Le repli par Home Assistant, `play_media` en mode « play »,
     * marche aussi mais INSÈRE une copie du morceau : sauter trois fois
     * laissait trois doublons dans la file.
     */
    async jumpTo(item) {
      if (mass?.connected && queueId) {
        await mass.command("player_queues/play_index", { queue_id: queueId, index: item.id });
        return;
      }
      if (!item.uri) throw new Error("Ce morceau n'a pas d'URI : impossible d'y sauter.");
      await client.callService(
        "music_assistant",
        "play_media",
        { media_id: item.uri, media_type: "track", enqueue: "play" },
        entityId,
      );
    },

    async move(item, shift) {
      // pos_shift = 0 veut dire « à jouer ensuite » chez Music Assistant, pas
      // « ne bouge pas » : on ne l'envoie jamais.
      if (!shift) return;
      if (!mass || !queueId) throw new Error("Réordonner la file demande la liaison Music Assistant.");
      await mass.command("player_queues/move_item", {
        queue_id: queueId,
        queue_item_id: item.id,
        pos_shift: shift,
      });
    },

    watchQueue(onChange) {
      if (!mass) return () => {};
      return mass.onEvent((event) => {
        if (!queueId || event.object_id !== queueId) return;
        if (event.event === "queue_items_updated" || event.event === "queue_updated") onChange();
      });
    },

    async currentLyrics(title) {
      // La liaison d'abord : sans elle (pas de module, pas d'administrateur),
      // inutile d'interroger Home Assistant à chaque changement de morceau.
      if (!mass || !title || !(await mass.ready())) return null;
      if (!queueId) await summary();
      if (!queueId) return null;
      const file = await mass.command<Record<string, any> | null>("player_queues/get", {
        queue_id: queueId,
      });
      const media = file?.current_item?.media_item;
      // La file peut avoir un temps d'avance ou de retard sur l'entité : on ne
      // prend ces paroles que si elles sont bien celles du titre affiché.
      if (!media || normalize(String(media.name ?? "")) !== normalize(title)) return null;
      const lrc = media.metadata?.lrc_lyrics;
      return typeof lrc === "string" && lrc.trim() ? lrc : null;
    },
  };
}

/** La file entière, lue chez Music Assistant. */
async function fullQueue(
  mass: MassLink,
  queueId: string,
  image: (url: string | null) => string | null,
): Promise<QueueView> {
  const file = await mass.command<Record<string, any> | null>("player_queues/get", {
    queue_id: queueId,
  });
  if (!file) throw new Error("file introuvable");

  const courant = toIndex(file.current_index);
  const charge = toIndex(file.index_in_buffer);
  // On ne remonte pas tout l'historique : une vingtaine de morceaux passés
  // suffisent à se situer, et gardent la liste légère.
  const offset = Math.max(0, courant - PAST_SHOWN);
  const brut = await mass.command<unknown[]>("player_queues/items", {
    queue_id: queueId,
    limit: PAST_SHOWN + AHEAD_SHOWN,
    offset,
  });
  const items = (Array.isArray(brut) ? brut : []).map((e) => toQueueItem(e, image));
  const verrou = Math.max(courant, charge);

  return {
    items,
    current: courant >= 0 ? courant - offset : -1,
    locked: verrou >= 0 ? verrou - offset : -1,
    full: true,
    total: Number(file.items) || items.length,
    note: null,
  };
}

/** Ce que Home Assistant sait dire seul : le morceau en cours et le suivant. */
function previewQueue(
  resume: Record<string, any> | null,
  image: (url: string | null) => string | null,
  pourquoi: string | null,
): QueueView {
  if (!resume) {
    return { items: [], current: -1, locked: Infinity, full: false, total: 0, note: pourquoi };
  }

  // Une version de l'intégration qui rendrait la liste entière : on la prend.
  if (Array.isArray(resume.items)) {
    const items = resume.items.map((e: unknown) => toQueueItem(e, image));
    return {
      items,
      current: toIndex(resume.current_index),
      locked: Infinity,
      full: false,
      total: items.length,
      note: pourquoi,
    };
  }

  const items = [resume.current_item, resume.next_item]
    .filter(Boolean)
    .map((e: unknown) => toQueueItem(e, image));
  const total = Number(resume.items) || items.length;
  return {
    items,
    current: resume.current_item ? 0 : -1,
    locked: Infinity,
    full: false,
    total,
    note:
      total > items.length
        ? (pourquoi ?? "Home Assistant ne transmet que le morceau en cours et le suivant.")
        : null,
  };
}

/**
 * La réponse de get_queue est rangée SOUS L'ENTITÉ : { "media_player.x": {…} }.
 * C'est ce que l'app lisait mal — elle cherchait la file à la racine, et ne
 * trouvait rien.
 */
export function readQueueSummary(brut: unknown, entityId: string): Record<string, any> | null {
  const r = brut as Record<string, any> | null | undefined;
  if (!r || typeof r !== "object") return null;
  if (r[entityId] && typeof r[entityId] === "object") return r[entityId];
  if ("queue_id" in r || "current_item" in r) return r;
  // Une seule file sous un autre nom (lecteur groupé…) : c'est la nôtre.
  const files = Object.values(r).filter(
    (v): v is Record<string, any> =>
      Boolean(v) && typeof v === "object" && ("queue_id" in v || "current_item" in v),
  );
  return files.length === 1 ? files[0]! : null;
}

function toQueueItem(e: unknown, image: (url: string | null) => string | null): QueueItem {
  const entree = (e ?? {}) as Record<string, any>;
  const media = (entree.media_item ?? {}) as Record<string, any>;
  /*
   * Le nom de la LIGNE de file est « Artiste - Titre ». On prend le titre du
   * morceau lui-même, sans quoi l'artiste s'affichait deux fois.
   */
  const titre = media.name ?? entree.name ?? "—";
  const version = typeof media.version === "string" && media.version.trim() ? media.version : "";
  return {
    id: String(entree.queue_item_id ?? entree.item_id ?? media.uri ?? titre),
    uri: String(media.uri ?? entree.uri ?? ""),
    name: version ? `${titre} (${version})` : String(titre),
    artist: readArtist(media) || readArtist(entree),
    image: image(readImage(entree) ?? readImage(media) ?? readImage(media.album ?? {})),
    duration: Number(entree.duration ?? media.duration ?? 0) || 0,
  };
}

function toIndex(v: unknown): number {
  const n = typeof v === "number" ? v : v === null || v === undefined ? NaN : Number(v);
  return Number.isFinite(n) ? n : -1;
}

/**
 * Les playlists, rangées pour le bac.
 *
 *  - Les FAVORIS passent devant : c'est la playlist qu'on vient chercher.
 *  - Une image partagée par plusieurs playlists n'est pas une pochette, c'est
 *    l'image de remplacement que Music Assistant donne à toutes celles qu'il
 *    génère. On la remplace par une pochette dessinée, propre à chacune.
 */
export function arrangePlaylists(list: Media[]): Media[] {
  const usage = new Map<string, number>();
  for (const p of list) if (p.image) usage.set(p.image, (usage.get(p.image) ?? 0) + 1);

  const rangees = list.map((p) => {
    const nom = p.name.trim();
    const pinned = FAVORIS.test(nom);
    const partagee = p.image !== null && (usage.get(p.image) ?? 0) >= 3;
    const image =
      p.image && !partagee ? p.image : pinned ? favoriteCover() : generateCover(`playlist ${nom}`);
    return { ...p, name: GENEREES[nom] ?? nom, pinned, image };
  });

  /*
   * Tri stable : les favoris d'abord, et parmi eux ceux qui s'appellent
   * « coups de cœur » — celle du fournisseur, celle qu'on a en tête — avant la
   * liste que Music Assistant tient de son côté.
   */
  const rang = (p: Media) => (!p.pinned ? 2 : /c(œ|oe)ur/i.test(p.name) ? 0 : 1);
  // Le reste par ordre alphabétique — sur les noms TRADUITS, sinon « Un album
  // au hasard » restait rangé à la lettre R de « Random ».
  const alpha = new Intl.Collator("fr", { sensitivity: "base", numeric: true });
  return [...rangees].sort((x, y) => rang(x) - rang(y) || (rang(x) === 2 ? alpha.compare(x.name, y.name) : 0));
}

/** Noms des playlists de favoris, chez Deezer et chez Music Assistant. */
const FAVORIS =
  /^(mes )?(coups? de c(œ|oe)ur|titres (favoris|aimés|likés)|tous mes favoris|all favou?rited tracks|favou?rite tracks|loved tracks|liked songs)$/i;

/**
 * Music Assistant fabrique quelques playlists à lui, toujours en anglais. On
 * les nomme comme le reste de l'interface ; un nom inconnu reste tel quel.
 */
const GENEREES: Record<string, string> = {
  "All favorited tracks": "Tous mes favoris",
  "Random Artist (from library)": "Un artiste au hasard",
  "Random Album (from library)": "Un album au hasard",
  "500 Random tracks (from library)": "500 titres au hasard",
  "Recently played tracks": "Écoutés récemment",
  "Recently added tracks": "Ajoutés récemment",
  "Infinite Mix (library)": "Mix sans fin · bibliothèque",
  "Infinite Mix (favorites)": "Mix sans fin · favoris",
};

/**
 * Lecture défensive de la réponse.
 *
 * La documentation de Music Assistant ne fige pas la forme exacte des éléments,
 * et elle a déjà changé entre deux versions. On accepte donc plusieurs noms de
 * champs plutôt que de casser sur une installation un peu différente.
 */
export function parseMedia(payload: unknown, kind: MediaKind = "album"): Media[] {
  const record = payload as Record<string, unknown> | undefined;
  const raw = (record?.items ?? record?.albums ?? record?.result ?? []) as unknown[];
  if (!Array.isArray(raw)) return [];

  return raw
    .map((entry): Media => {
      const item = entry as Record<string, any>;
      const type = item.media_type;
      return {
        uri: String(item.uri ?? item.media_id ?? item.item_id ?? ""),
        name: String(item.name ?? item.title ?? "—"),
        artist: readArtist(item),
        image: readImage(item),
        kind: type === "album" || type === "playlist" || type === "track" ? type : kind,
      };
    })
    .filter((m) => m.uri.length > 0);
}

function readArtist(item: Record<string, any>): string {
  if (typeof item.artist === "string") return item.artist;
  const candidate = item.artists?.[0] ?? item.album_artist ?? item.artist;
  if (!candidate) return "";
  return typeof candidate === "string" ? candidate : String(candidate.name ?? "");
}

function readImage(item: Record<string, any>): string | null {
  const candidate =
    item.image ?? item.images?.[0] ?? item.metadata?.images?.[0] ?? item.thumbnail ?? null;
  if (!candidate) return null;
  if (typeof candidate === "string") return candidate;
  const path = candidate.path ?? candidate.url ?? null;
  return typeof path === "string" ? path : null;
}

/**
 * Une image en http:// depuis une page en https:// ne s'affichera jamais : le
 * navigateur la bloque. Mieux vaut la pochette dessinée qu'un trou.
 */
function reachable(url: string | null): string | null {
  if (!url) return null;
  if (window.location.protocol === "https:" && url.startsWith("http:")) return null;
  return url;
}

function normalize(v: string): string {
  return v
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

// -------------------------------------------------------------- démonstration

const DEMO_ALBUMS: [string, string][] = [
  ["Vagues courtes", "Léonie Ferrand"],
  ["Le bruit du jour", "Atelier Nord"],
  ["Sillons", "Marta Vieira"],
  ["Cinq heures du matin", "Le Bureau des Ondes"],
  ["Nord magnétique", "Hélios Quartet"],
  ["Papier calque", "Jonas Brenner"],
  ["Terrasse en hiver", "Claire Vasseur"],
  ["Sable et néon", "Kimiko Arata"],
  ["Longue exposition", "Atelier Nord"],
  ["Les heures creuses", "Léonie Ferrand"],
  ["Rivage", "Ensemble Pluie"],
  ["Tout près du sol", "Marta Vieira"],
  ["Chambre 214", "Jonas Brenner"],
  ["Marée basse", "Ensemble Pluie"],
  ["格子 · Treillis", "Kimiko Arata"],
  ["Le dernier métro", "Hélios Quartet"],
  ["Aube blanche", "Claire Vasseur"],
  ["Contretemps", "Le Bureau des Ondes"],
  ["Feux de position", "Atelier Nord"],
  ["Sept nuits", "Léonie Ferrand"],
  ["Poussière d'or", "Marta Vieira"],
  ["Le fil du jour", "Jonas Brenner"],
  ["Horizon bas", "Ensemble Pluie"],
  ["Ville morte, ville vive", "Kimiko Arata"],
  ["Deux degrés au sud", "Hélios Quartet"],
  ["Radio nuit", "Claire Vasseur"],
  ["Lisière", "Le Bureau des Ondes"],
  ["Retour de plage", "Atelier Nord"],
];

const DEMO_PLAYLISTS = [
  "Coups de cœur",
  "Dimanche matin",
  "Route de nuit",
  "Cuisine et radio",
  "Jazz de minuit",
  "Pluie sur la ville",
  "Énergie",
  "Années 80",
  "Concentration",
  "Été indien",
];

const demoUri = (kind: MediaKind, name: string, artist: string) =>
  `demo://${kind}/${encodeURIComponent(name)}/${encodeURIComponent(artist)}`;

/**
 * Le faux lecteur passe par la MÊME action que Home Assistant
 * (music_assistant.play_media) : la démonstration exerce ainsi le vrai chemin
 * de code, et rien de spécifique à la démo ne remonte dans l'interface.
 * Le nom et l'artiste voyagent dans l'URI, faute de base de données derrière.
 */
export function demoLibrary(client: PlayerClient, entityId: string): LibrarySource {
  const albumsDemo = (): Media[] => {
    // De vraies pochettes ont pu être posées pour une session de captures.
    const vraies = injectedAlbums();
    if (vraies) {
      return vraies.map((a) => ({
        uri: demoUri("album", a.name, a.artist),
        name: a.name,
        artist: a.artist,
        image: a.image,
        kind: "album",
      }));
    }
    return DEMO_ALBUMS.map(([name, artist]) => ({
      uri: demoUri("album", name, artist),
      name,
      artist,
      image: generateCover(`${name} ${artist}`),
      kind: "album",
    }));
  };

  /*
   * Une vraie file, en mémoire : on peut la réordonner et y sauter, et la
   * démonstration prévient ses abonnés comme le ferait Music Assistant.
   */
  let file: QueueItem[] = albumsDemo()
    .slice(0, 14)
    .map((a, i) => ({
      id: `demo-${i}`,
      uri: a.uri,
      name: `${a.name} · piste ${i + 1}`,
      artist: a.artist,
      image: a.image,
      duration: 190 + ((i * 37) % 140),
    }));
  let courant = 2;
  const abonnes = new Set<() => void>();
  const prevenir = () => setTimeout(() => abonnes.forEach((f) => f()), 60);

  const jouer = (item: Media) =>
    client.callService(
      "music_assistant",
      "play_media",
      { media_id: item.uri, media_type: item.kind, enqueue: "replace" },
      entityId,
    );

  return {
    async albums() {
      return albumsDemo();
    },

    async playlists() {
      const vraies = injectedPlaylists();
      const liste: Media[] = vraies
        ? vraies.map((p) => ({
            uri: demoUri("playlist", p.name, ""),
            name: p.name,
            artist: "",
            image: p.image,
            kind: "playlist",
          }))
        : DEMO_PLAYLISTS.map((name) => ({
            uri: demoUri("playlist", name, ""),
            name,
            artist: "",
            image: null,
            kind: "playlist",
          }));
      return arrangePlaylists(liste);
    },

    async play(item) {
      await jouer(item);
    },

    async search(query) {
      const q = query.trim().toLowerCase();
      const trouves = albumsDemo().filter(
        (a) => a.name.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q),
      );
      const playlists = (await this.playlists()).filter((p) => p.name.toLowerCase().includes(q));
      return {
        albums: trouves.slice(0, 12),
        playlists,
        tracks: trouves.slice(0, 4).map((a) => ({ ...a, name: `${a.name} · piste 1`, kind: "track" })),
      };
    },

    async queue() {
      return {
        items: [...file],
        current: courant,
        locked: courant,
        full: true,
        total: file.length,
        note: null,
      };
    },

    async transferTo() {
      /* rien à transférer en démonstration */
    },

    async jumpTo(item) {
      const rang = file.findIndex((f) => f.id === item.id);
      if (rang >= 0) courant = rang;
      await client.callService(
        "music_assistant",
        "play_media",
        { media_id: item.uri, media_type: "track", enqueue: "play" },
        entityId,
      );
      prevenir();
    },

    async move(item, shift) {
      const de = file.findIndex((f) => f.id === item.id);
      const vers = de + shift;
      if (de < 0 || !shift || vers <= courant || vers >= file.length) return;
      const copie = [...file];
      const [pris] = copie.splice(de, 1);
      copie.splice(vers, 0, pris!);
      file = copie;
      prevenir();
    },

    watchQueue(onChange) {
      abonnes.add(onChange);
      return () => abonnes.delete(onChange);
    },

    async currentLyrics() {
      return null;
    },
  };
}

/** Relit le nom et l'artiste encodés dans une URI de démonstration. */
export function readDemoUri(uri: string): { name: string; artist: string } | null {
  const match = /^demo:\/\/(?:album|playlist|track)\/([^/]+)\/([^/]*)$/.exec(uri);
  if (!match || !match[1]) return null;
  return { name: decodeURIComponent(match[1]), artist: decodeURIComponent(match[2] ?? "") };
}
