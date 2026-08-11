/**
 * Bibliothèque d'albums.
 *
 * Deux sources derrière la même interface : Music Assistant à travers Home
 * Assistant, et un jeu d'albums fictifs pour le mode démonstration. La vue en
 * bac à disques ne sait pas laquelle elle utilise.
 *
 * Côté Home Assistant, l'action `music_assistant.get_library` se cible par
 * `config_entry_id` — pas par entité — et ce config_entry_id ne s'obtient que
 * par le WebSocket. D'où le détour par HaClient plutôt qu'un simple appel REST.
 */

import { generateCover } from "./covers";
import type { PlayerClient } from "./types";

export interface Album {
  uri: string;
  name: string;
  artist: string;
  image: string | null;
}

/** Un morceau de la file d'attente. */
export interface QueueItem {
  id: string;
  /** URI du morceau : c'est elle qui permet de sauter dessus. */
  uri: string;
  name: string;
  artist: string;
  image: string | null;
  duration: number;
}

/**
 * L'index courant vient de Music Assistant, il ne se devine pas.
 * Repérer le morceau en cours en comparant les titres marchait sur la démo et
 * se serait cassé sur un album où deux pistes portent le même nom, ou dès que
 * l'entité affiche un titre légèrement différent de celui de la file.
 */
export interface QueueView {
  items: QueueItem[];
  current: number;
}

export interface SearchResults {
  albums: Album[];
  tracks: Album[];
}

export interface LibrarySource {
  albums(): Promise<Album[]>;
  play(album: Album): Promise<void>;
  /** Recherche globale chez le fournisseur — donc dans tout Deezer. */
  search(query: string): Promise<SearchResults>;
  /** Ce qui va suivre sur l'enceinte. */
  queue(): Promise<QueueView>;
  /** Déplace la lecture en cours vers une autre enceinte, sans la couper. */
  transferTo(entityId: string): Promise<void>;
  /** Saute directement sur un morceau de la file. */
  jumpTo(item: QueueItem): Promise<void>;
}

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

export function haLibrary(client: MassCapableClient, entityId: string): LibrarySource {
  let entryId: string | null = null;

  const entry = async () => {
    if (!entryId) entryId = await client.configEntry("music_assistant");
    if (!entryId) throw new Error("Intégration Music Assistant introuvable dans Home Assistant.");
    return entryId;
  };

  return {
    async albums() {
      const response = await client.callServiceWithResponse("music_assistant", "get_library", {
        config_entry_id: await entry(),
        media_type: "album",
        limit: 300,
        order_by: "name",
      });
      return parseAlbums(response);
    },

    async play(album) {
      await client.callService(
        "music_assistant",
        "play_media",
        { media_id: album.uri, media_type: "album", enqueue: "replace" },
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

      return {
        albums: parseAlbums({ items: reponse?.albums ?? [] }),
        tracks: parseAlbums({ items: reponse?.tracks ?? [] }),
      };
    },

    /* La file, elle, appartient à une enceinte : ciblage par entité. */
    async queue() {
      const reponse = (await client.callServiceWithResponse(
        "music_assistant",
        "get_queue",
        {},
        entityId,
      )) as Record<string, any> | undefined;

      const file = reponse?.queue ?? reponse ?? {};
      const brut = file.items ?? [];
      if (!Array.isArray(brut)) return { items: [], current: -1 };

      const items = brut.map((entree: Record<string, any>, i: number): QueueItem => {
        const media = entree.media_item ?? entree;
        return {
          id: String(entree.queue_item_id ?? entree.item_id ?? i),
          uri: String(media.uri ?? entree.uri ?? ""),
          name: String(entree.name ?? media.name ?? "—"),
          artist: readArtist(media),
          image: readImage(media),
          duration: Number(entree.duration ?? media.duration ?? 0) || 0,
        };
      });

      const index = Number(file.current_index ?? file.index_in_buffer ?? -1);
      return { items, current: Number.isFinite(index) ? index : -1 };
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
     * Music Assistant n'expose pas d'action « lire l'élément numéro n » : la
     * seule prise depuis Home Assistant est play_media. Avec `enqueue: "play"`,
     * le morceau demandé passe en lecture immédiatement et LE RESTE DE LA FILE
     * EST CONSERVÉ — c'est bien un saut, pas un remplacement de file.
     */
    async jumpTo(item) {
      if (!item.uri) throw new Error("Ce morceau n'a pas d'URI : impossible d'y sauter.");
      await client.callService(
        "music_assistant",
        "play_media",
        { media_id: item.uri, media_type: "track", enqueue: "play" },
        entityId,
      );
    },
  };
}

/**
 * Lecture défensive de la réponse.
 *
 * La documentation de Music Assistant ne fige pas la forme exacte des éléments,
 * et elle a déjà changé entre deux versions. On accepte donc plusieurs noms de
 * champs plutôt que de casser sur une installation un peu différente.
 */
export function parseAlbums(payload: unknown): Album[] {
  const record = payload as Record<string, unknown> | undefined;
  const raw = (record?.items ?? record?.albums ?? record?.result ?? []) as unknown[];
  if (!Array.isArray(raw)) return [];

  return raw
    .map((entry): Album => {
      const item = entry as Record<string, any>;
      return {
        uri: String(item.uri ?? item.media_id ?? item.item_id ?? ""),
        name: String(item.name ?? item.title ?? "—"),
        artist: readArtist(item),
        image: readImage(item),
      };
    })
    .filter((album) => album.uri.length > 0);
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

/**
 * Le faux lecteur passe par la MÊME action que Home Assistant
 * (music_assistant.play_media) : la démonstration exerce ainsi le vrai chemin
 * de code, et rien de spécifique à la démo ne remonte dans l'interface.
 * Le nom et l'artiste voyagent dans l'URI, faute de base de données derrière.
 */
export function demoLibrary(client: PlayerClient, entityId: string): LibrarySource {
  return {
    async albums() {
      return DEMO_ALBUMS.map(([name, artist]) => ({
        uri: `demo://album/${encodeURIComponent(name)}/${encodeURIComponent(artist)}`,
        name,
        artist,
        image: generateCover(`${name} ${artist}`),
      }));
    },
    async play(album) {
      await client.callService(
        "music_assistant",
        "play_media",
        { media_id: album.uri, media_type: "album", enqueue: "replace" },
        entityId,
      );
    },

    async search(query) {
      const q = query.trim().toLowerCase();
      const tous = DEMO_ALBUMS.map(([name, artist]) => ({
        uri: `demo://album/${encodeURIComponent(name)}/${encodeURIComponent(artist)}`,
        name,
        artist,
        image: generateCover(`${name} ${artist}`),
      }));
      const trouves = tous.filter(
        (a) => a.name.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q),
      );
      return {
        albums: trouves.slice(0, 12),
        tracks: trouves.slice(0, 4).map((a) => ({ ...a, name: `${a.name} · piste 1` })),
      };
    },

    async queue() {
      return {
        items: DEMO_ALBUMS.slice(0, 7).map(([name, artist], i) => ({
          id: `demo-${i}`,
          uri: `demo://album/${encodeURIComponent(name)}/${encodeURIComponent(artist)}`,
          name: `${name} · piste ${i + 1}`,
          artist,
          image: generateCover(`${name} ${artist}`),
          duration: 190 + i * 21,
        })),
        current: 1,
      };
    },

    async transferTo() {
      /* rien à transférer en démonstration */
    },

    async jumpTo(item) {
      await client.callService(
        "music_assistant",
        "play_media",
        { media_id: item.uri, media_type: "track", enqueue: "play" },
        entityId,
      );
    },
  };
}

/** Relit le nom et l'artiste encodés dans une URI de démonstration. */
export function readDemoUri(uri: string): { name: string; artist: string } | null {
  const match = /^demo:\/\/album\/([^/]+)\/([^/]+)$/.exec(uri);
  if (!match || !match[1] || !match[2]) return null;
  return { name: decodeURIComponent(match[1]), artist: decodeURIComponent(match[2]) };
}
