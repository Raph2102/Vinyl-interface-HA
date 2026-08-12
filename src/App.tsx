import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Controls, TopBar } from "./components/Controls";
import { Library } from "./components/Library";
import { LyricsPane } from "./components/LyricsPane";
import { Queue } from "./components/Queue";
import { Rest } from "./components/Rest";
import { Speakers } from "./components/Speakers";
import { Setup } from "./components/Setup";
import { Turntable } from "./components/Turntable";

import { HaClient, fetchMediaPlayers, resolveImage } from "./lib/ha";
import type { HassClient } from "./lib/hass";
import {
  DEMO_ENTITY,
  DEMO_LRC,
  DEMO_SPEAKERS,
  DemoClient,
  demoOverrides,
  isDemo,
} from "./lib/demo";
import { ARM_REST_ANGLE, armAngleForProgress } from "./lib/geometry";
import {
  demoLibrary,
  haLibrary,
  type Album,
  type LibrarySource,
  type QueueItem,
} from "./lib/library";
import { NO_LYRICS, fetchLyrics, lineAt, parseLrc, type Lyrics } from "./lib/lyrics";
import { NEUTRAL, extractPalette, type Palette } from "./lib/palette";
import { formatTime, readPlayback, syncClock } from "./lib/position";
import { isArmed, isConfigured, loadSettings, saveSettings, type Settings } from "./lib/settings";
import type { ConnectionStatus, HaEntity, PlayerClient } from "./lib/types";

declare const __BUILD_ID__: string;

/** Les commandes s'effacent après ce délai sans geste. */
const QUIET_AFTER = 3800;
/** On affiche une ligne de paroles un poil en avance : le regard a besoin de ce temps. */
const LYRIC_LEAD = 0.25;

const DEMO = isDemo();

/**
 * @param embedded  Client fourni par Home Assistant quand l'app tourne comme
 *                  panneau de la barre latérale. Sa présence change deux choses
 *                  et deux seulement : on ne crée plus de connexion (elle
 *                  existe déjà), et on ne demande plus ni adresse ni jeton —
 *                  l'utilisateur est déjà authentifié par le frontend.
 */
export function App({ embedded }: { embedded?: HassClient } = {}) {
  const [settings, setSettings] = useState<Settings>(() => {
    const saved = loadSettings();
    return DEMO && !saved.entityId ? { ...saved, entityId: DEMO_ENTITY } : saved;
  });
  const [showSetup, setShowSetup] = useState(() =>
    embedded ? !loadSettings().entityId : !DEMO && !isConfigured(loadSettings()),
  );

  const [entity, setEntity] = useState<HaEntity | null>(null);
  const [status, setStatus] = useState<ConnectionStatus>("idle");
  const [palette, setPalette] = useState<Palette>(NEUTRAL);

  const [lyrics, setLyrics] = useState<Lyrics>(NO_LYRICS);
  const [lyricsLoading, setLyricsLoading] = useState(false);
  const [showLyrics, setShowLyrics] = useState(
    () => DEMO && new URLSearchParams(window.location.search).has("lyrics"),
  );
  const [lyricIndex, setLyricIndex] = useState(-1);

  const [showLibrary, setShowLibrary] = useState(false);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [libraryLoading, setLibraryLoading] = useState(false);
  const [libraryError, setLibraryError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Album[] | null>(null);
  const [searching, setSearching] = useState(false);

  const [showQueue, setShowQueue] = useState(false);
  const [queueItems, setQueueItems] = useState<QueueItem[]>([]);
  const [queueCurrent, setQueueCurrent] = useState(-1);
  /** Morceau visé par un saut, tant que Home Assistant n'a pas confirmé. */
  const [queuePending, setQueuePending] = useState<string | null>(null);
  const [queueLoading, setQueueLoading] = useState(false);
  const [queueError, setQueueError] = useState<string | null>(null);

  const [showSpeakers, setShowSpeakers] = useState(false);
  const [players, setPlayers] = useState<HaEntity[]>([]);
  const [playersLoading, setPlayersLoading] = useState(false);
  const [playersError, setPlayersError] = useState<string | null>(null);

  const [sleeveFront, setSleeveFront] = useState(false);
  const [quiet, setQuiet] = useState(false);
  const [resting, setResting] = useState(
    () => DEMO && new URLSearchParams(window.location.search).has("rest"),
  );

  const rootRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const clientRef = useRef<PlayerClient | null>(null);
  const armOverride = useRef<number | null>(null);

  // Cibles écrites image par image, sans passer par React ni par la racine.
  const spinRef = useRef<HTMLDivElement>(null);
  const armRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  // Refs miroirs : la boucle d'animation lit l'état courant sans être relancée
  // à chaque changement, sinon on perdrait l'angle du disque à chaque morceau.
  const entityRef = useRef<HaEntity | null>(null);
  const lyricsRef = useRef<Lyrics>(NO_LYRICS);
  const lastActivity = useRef(Date.now());

  const attrs = entity?.attributes;
  const title = attrs?.media_title ?? "";
  const artist = attrs?.media_artist ?? "";
  const album = attrs?.media_album_name ?? "";
  const duration = attrs?.media_duration ?? 0;
  const roomName = attrs?.friendly_name ?? "";
  const playing = entity?.state === "playing";

  // ------------------------------------------------------------- connexion

  const { haUrl, token, entityId } = settings;

  useEffect(() => {
    if (embedded) {
      if (!entityId) return;
      entityRef.current = null;
      setEntity(null);
      clientRef.current = embedded;
      embedded.onStatus = setStatus;
      embedded.onState = (next) => {
        entityRef.current = next;
        setEntity(next);
      };
      embedded.connect([entityId]);
      /*
       * Pas de close() ici : la connexion appartient à Home Assistant, pas à
       * nous. On se contente de changer l'entité observée.
       *
       * Pas de syncClock non plus : il lit l'heure du serveur dans un en-tête
       * HTTP, ce qui suppose un jeton. Dans le panneau, la page et Home
       * Assistant tournent sur la même machine pour le navigateur — l'écart
       * d'horloge qu'on corrigeait n'existe pas.
       */
      return;
    }

    if (!DEMO && (!token || !entityId)) return;

    entityRef.current = null;
    setEntity(null);

    const connection = { haUrl, token };
    const client: PlayerClient = DEMO ? new DemoClient() : new HaClient(connection);
    clientRef.current = client;
    client.onStatus = setStatus;
    client.onState = (next) => {
      entityRef.current = next;
      setEntity(next);
    };
    client.connect([entityId]);
    if (!DEMO) void syncClock(connection);

    return () => {
      client.close();
      clientRef.current = null;
    };
  }, [embedded, haUrl, token, entityId]);

  // ------------------------------------------------------------- pochette

  const coverUrl = useMemo(
    () => resolveImage({ haUrl, token }, attrs?.entity_picture),
    [haUrl, token, attrs?.entity_picture],
  );

  useEffect(() => {
    if (!coverUrl) {
      setPalette(NEUTRAL);
      return;
    }
    let cancelled = false;
    void extractPalette(coverUrl).then((p) => {
      if (!cancelled) setPalette(p);
    });
    return () => {
      cancelled = true;
    };
  }, [coverUrl]);

  // ------------------------------------------------------------- paroles

  useEffect(() => {
    if (!settings.lyrics || !title || !artist) {
      setLyrics(NO_LYRICS);
      lyricsRef.current = NO_LYRICS;
      return;
    }

    if (DEMO) {
      const demo: Lyrics = {
        lines: parseLrc(DEMO_LRC),
        synced: true,
        plain: null,
        instrumental: false,
      };
      lyricsRef.current = demo;
      setLyrics(demo);
      setLyricsLoading(false);
      return;
    }

    const controller = new AbortController();
    setLyricsLoading(true);
    setLyricIndex(-1);

    fetchLyrics({ title, artist, album, duration }, controller.signal)
      .then((found) => {
        lyricsRef.current = found;
        setLyrics(found);
        setLyricsLoading(false);
      })
      .catch(() => {
        /* requête annulée par un changement de morceau : rien à signaler */
      });

    return () => controller.abort();
  }, [settings.lyrics, title, artist, album, duration]);

  // ------------------------------------------------------------- animation

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let spin = 0;
    let speed = 0;
    let arm = ARM_REST_ANGLE;
    let lift = 1;
    let shownTime = "";
    let shownLyric = -1;

    /*
     * Vitesse de rotation à l'écran, volontairement infidèle sur deux points.
     *
     * 1. L'ÉCHELLE. À taille réelle, 33⅓ tr/min font 200 °/s ; sur un disque de
     *    quelques centimètres à l'écran, cela donne une toupie. Le réglage
     *    « 45 tours » est donc calé à 200 °/s — la vitesse que « 33 tours »
     *    avait avant — et sert de repère haut.
     *
     * 2. L'ÉCART entre les deux vitesses est EXAGÉRÉ. Le rapport réel, 33⅓/45,
     *    vaut 0,74 : mesuré, cela donnait 149 °/s contre 201, et personne ne
     *    voyait la différence. C'est logique — la texture d'un disque est
     *    concentrique, donc invisible en rotation ; seule l'étiquette trahit la
     *    vitesse, et 35 % d'écart sur un petit repère ne se lisent pas. En
     *    élevant le rapport au carré, l'écart passe à 45 % et devient franc,
     *    sans jamais inverser l'ordre des deux vitesses.
     *
     * Résultat : 45 tours à 200 °/s, 33 tours à 110 °/s.
     */
    const degPerSecond = 200 * (settings.rpm / 45) ** 2;

    const frame = (now: number) => {
      // Un onglet remis au premier plan peut sauter plusieurs secondes :
      // on plafonne le pas pour ne pas faire faire un tour complet au disque.
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;

      const playback = readPlayback(entityRef.current, Date.now());

      // Moteur : un plateau ne démarre ni ne s'arrête d'un coup. La montée est
      // plus vive que la descente, comme sur une platine à entraînement direct.
      const target = playback.playing ? 1 : 0;
      const tau = target > speed ? 0.45 : 1.1;
      speed += (target - speed) * (1 - Math.exp(-dt / tau));
      if (speed < 0.0005) speed = 0;
      spin = (spin + speed * degPerSecond * dt) % 360;

      /*
       * Le bras EST l'indicateur de lecture : à l'arrêt il rejoint son
       * repose-bras, hors du disque, et il se relève. C'est le geste d'une vraie
       * platine — on ne met pas un disque en pause, on retire l'aiguille.
       */
      const engaged = playback.duration > 0 && playback.playing;
      const wanted =
        armOverride.current ?? (engaged ? armAngleForProgress(playback.progress) : ARM_REST_ANGLE);
      // Réponse immédiate au doigt, lissage quand la valeur vient du réseau.
      const armTau = armOverride.current !== null ? 0.05 : 0.4;
      arm += (wanted - arm) * (1 - Math.exp(-dt / armTau));

      const liftTarget = playback.playing ? 0 : 1;
      lift += (liftTarget - lift) * (1 - Math.exp(-dt / 0.4));

      spinRef.current?.style.setProperty("--spin", `${spin.toFixed(2)}deg`);
      armRef.current?.style.setProperty("--arm", `${arm.toFixed(3)}deg`);
      armRef.current?.style.setProperty("--lift", lift.toFixed(3));
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${playback.progress.toFixed(4)})`;
      }

      const text = formatTime(playback.position);
      if (text !== shownTime) {
        shownTime = text;
        if (timeRef.current) timeRef.current.textContent = text;
      }

      const lines = lyricsRef.current.lines;
      if (lines.length > 0) {
        const index = lineAt(lines, playback.position + LYRIC_LEAD);
        if (index !== shownLyric) {
          shownLyric = index;
          setLyricIndex(index);
        }
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [settings.rpm]);

  // ------------------------------------------------------------- palette → CSS

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.style.setProperty("--pal-a", palette.a);
    root.style.setProperty("--pal-b", palette.b);
    root.style.setProperty("--pal-deep", palette.deep);
    /*
     * Couleur des matières colorées. À défaut de choix explicite, on reprend la
     * dominante de la pochette : le disque change alors avec la musique, ce qui
     * est le comportement qu'on attend par défaut.
     */
    root.style.setProperty("--vinyl-tint", settings.vinylTint || palette.a);
  }, [palette, settings.vinylTint]);

  // ------------------------------------------------------------- activité

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const armTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setQuiet(true), QUIET_AFTER);
    };

    const wake = () => {
      lastActivity.current = Date.now();
      setQuiet(false);
      setResting(false);
      armTimer();
    };

    // Au montage on arme seulement le minuteur : afficher la page n'est pas un
    // geste de l'utilisateur, et le traiter comme tel réveillait l'écran de
    // repos à l'instant même où il devait apparaître.
    armTimer();
    for (const type of ["pointerdown", "pointermove", "keydown", "wheel"] as const) {
      window.addEventListener(type, wake, { passive: true });
    }
    return () => {
      clearTimeout(timer);
      for (const type of ["pointerdown", "pointermove", "keydown", "wheel"] as const) {
        window.removeEventListener(type, wake);
      }
    };
  }, []);

  // Écran de repos : ni musique ni geste depuis un moment.
  useEffect(() => {
    if (settings.idleMinutes <= 0) return;
    const limit = settings.idleMinutes * 60_000;
    const timer = setInterval(() => {
      if (entityRef.current?.state === "playing") {
        lastActivity.current = Date.now();
        return;
      }
      if (Date.now() - lastActivity.current > limit) setResting(true);
    }, 15_000);
    return () => clearInterval(timer);
  }, [settings.idleMinutes]);

  // Une nouvelle version déposée dans /local/ resterait invisible : Home Assistant
  // sert ce dossier avec un cache de trente jours. On vérifie donc nous-mêmes.
  useEffect(() => {
    const check = async () => {
      try {
        const res = await fetch(`./version.json?_=${Date.now()}`, { cache: "no-store" });
        const data = (await res.json()) as { build?: string };
        if (data.build && data.build !== __BUILD_ID__) window.location.reload();
      } catch {
        /* hors ligne : on retentera */
      }
    };
    const timer = setInterval(check, 15 * 60_000);
    return () => clearInterval(timer);
  }, []);

  // ------------------------------------------------------------- bibliothèque

  const librarySource = useRef<LibrarySource | null>(null);
  /** Dernière pochette regardée dans le bac ; null tant qu'on n'y est pas allé. */
  const lastBrowsed = useRef<number | null>(null);

  /**
   * La source vaut pour la bibliothèque, la recherche ET la file : on la
   * fabrique à la demande, une seule fois par enceinte.
   */
  const source = useCallback((): LibrarySource | null => {
    const client = clientRef.current;
    if (!client) return null;
    librarySource.current =
      librarySource.current ??
      (DEMO ? demoLibrary(client, entityId) : haLibrary(client as never, entityId));
    return librarySource.current;
  }, [entityId]);

  // Changer d'enceinte invalide la source : la file appartient au lecteur.
  useEffect(() => {
    librarySource.current = null;
    setQueueItems([]);
  }, [entityId]);

  /** Va chercher la bibliothèque, une seule fois, quel que soit le déclencheur. */
  const loadLibrary = useCallback(async () => {
    if (albums.length > 0 || libraryLoading) return;

    // Le mode démonstration lit la pochette générée ; sinon on interroge
    // Music Assistant à travers Home Assistant.
    if (!source()) return;

    setLibraryLoading(true);
    setLibraryError(null);
    try {
      setAlbums(await librarySource.current!.albums());
    } catch (err) {
      setLibraryError(
        `Impossible de lire la bibliothèque : ${err instanceof Error ? err.message : String(err)}`,
      );
    } finally {
      setLibraryLoading(false);
    }
  }, [albums.length, libraryLoading, source]);

  const openLibrary = useCallback(() => {
    setShowLibrary(true);
    void loadLibrary();
  }, [loadLibrary]);

  /*
   * La bibliothèque part en fond dès que la platine est en place.
   *
   * L'attente ressentie à l'ouverture du bac n'était pas du dessin : c'était
   * l'aller-retour vers Music Assistant, qui rend jusqu'à trois cents albums.
   * En le lançant à l'avance, l'ouverture ne coûte plus que l'affichage.
   *
   * On attend que l'entité soit arrivée : avant, la connexion sert d'abord à
   * peindre la platine, et une requête lourde en parallèle retarderait
   * précisément ce qu'on veut voir en premier.
   */
  const prefetched = useRef(false);
  useEffect(() => {
    // Pas en démonstration : la bibliothèque y est locale, donc déjà instantanée,
    // et la fabriquer coûte l'encodage de vingt-huit pochettes en PNG. Ce petit
    // blocage au démarrage suffisait à faire manquer un geste sur l'aiguille.
    if (DEMO || prefetched.current || !entity) return;
    prefetched.current = true;

    const lancer = () => void loadLibrary();
    // requestIdleCallback n'est arrivé qu'avec Safari 17 : l'iPad peut être plus
    // ancien, d'où le repli sur un simple délai.
    const auRepos = typeof window.requestIdleCallback === "function";
    const id = auRepos
      ? window.requestIdleCallback(lancer, { timeout: 3000 })
      : window.setTimeout(lancer, 1200);
    return () => {
      if (auRepos) window.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, [entity, loadLibrary]);

  // ------------------------------------------------------------- recherche

  /*
   * On laisse retomber la frappe avant d'interroger le fournisseur : sans ce
   * délai, « Radiohead » part en neuf recherches, et c'est la dernière arrivée —
   * pas la dernière demandée — qui gagnerait l'affichage.
   */
  useEffect(() => {
    const texte = query.trim();
    if (texte.length < 2) {
      setResults(null);
      setSearching(false);
      return;
    }

    let vivant = true;
    setSearching(true);
    const timer = setTimeout(async () => {
      const lib = source();
      if (!lib) return;
      try {
        const trouve = await lib.search(texte);
        // Albums d'abord, puis les morceaux : on cherche un disque à poser.
        if (vivant) setResults([...trouve.albums, ...trouve.tracks]);
      } catch (err) {
        if (vivant) {
          setLibraryError(
            `Recherche impossible : ${err instanceof Error ? err.message : String(err)}`,
          );
          setResults([]);
        }
      } finally {
        if (vivant) setSearching(false);
      }
    }, 320);

    return () => {
      vivant = false;
      clearTimeout(timer);
    };
  }, [query, source]);

  // ------------------------------------------------------------- file d'attente

  const refreshQueue = useCallback(async () => {
    const lib = source();
    if (!lib) return;
    setQueueLoading(true);
    setQueueError(null);
    try {
      const vue = await lib.queue();
      setQueueItems(vue.items);
      setQueueCurrent(vue.current);
    } catch (err) {
      setQueueError(
        `Impossible de lire la file : ${err instanceof Error ? err.message : String(err)}`,
      );
    } finally {
      setQueueLoading(false);
    }
  }, [source]);

  // La file suit le morceau : elle se relit quand la platine change de titre.
  useEffect(() => {
    if (showQueue) void refreshQueue();
  }, [showQueue, title, refreshQueue]);

  /**
   * Le morceau visé par le saut, gardé le temps que la file l'annonce.
   *
   * Se fier au changement de titre ne suffisait pas : Home Assistant confirme la
   * commande bien avant que Music Assistant n'ait remis à jour son index de file.
   * On relâchait donc la marque trop tôt, et la pastille repartait une fraction
   * de seconde sur le morceau PRÉCÉDENT avant de se poser au bon endroit — ce
   * clignotement en arrière était exactement ce qu'on voyait.
   *
   * On compare par URI et non par identifiant de file : `enqueue: play` insère
   * le morceau, qui reçoit alors un nouvel identifiant de file.
   */
  const jumpUri = useRef<string | null>(null);

  useEffect(() => {
    if (queuePending === null) return;
    const enCours = queueItems[queueCurrent];
    if (enCours && enCours.uri === jumpUri.current) setQueuePending(null);
  }, [queueItems, queueCurrent, queuePending]);

  // Filet : si la file ne confirme jamais, la marque ne doit pas rester à vie.
  useEffect(() => {
    if (queuePending === null) return;
    const timer = setTimeout(() => setQueuePending(null), 8000);
    return () => clearTimeout(timer);
  }, [queuePending]);

  /*
   * Une relecture différée après le saut : Music Assistant met un instant à
   * recomposer sa file, et la relecture déclenchée par le changement de titre
   * arrive parfois avant lui.
   */
  const relire = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Sauter sur un morceau de la file.
   *
   * On marque la ligne visée immédiatement plutôt que d'attendre le retour de
   * Home Assistant : le geste doit répondre tout de suite, quitte à être corrigé
   * une seconde plus tard par l'état réel.
   */
  const jumpTo = useCallback(
    async (item: QueueItem) => {
      const lib = source();
      if (!lib) return;
      jumpUri.current = item.uri;
      setQueuePending(item.id);
      try {
        await lib.jumpTo(item);
        if (relire.current) clearTimeout(relire.current);
        relire.current = setTimeout(() => void refreshQueue(), 1200);
      } catch (err) {
        setQueuePending(null);
        setQueueError(
          `Impossible d'aller à ce morceau : ${err instanceof Error ? err.message : String(err)}`,
        );
      }
    },
    [refreshQueue, source],
  );

  // ------------------------------------------------------------- enceintes

  const openSpeakers = useCallback(async () => {
    setPlayersLoading(true);
    setPlayersError(null);
    try {
      setPlayers(
        embedded
          ? embedded.players()
          : DEMO
          ? DEMO_SPEAKERS.map((s) => ({
              entity_id: s.entity_id,
              state: s.entity_id === entityId ? (entity?.state ?? "idle") : "idle",
              attributes: { friendly_name: s.name },
            }))
          : await fetchMediaPlayers({ haUrl, token }),
      );
    } catch (err) {
      setPlayersError(
        `Impossible de lister les enceintes : ${err instanceof Error ? err.message : String(err)}`,
      );
    } finally {
      setPlayersLoading(false);
    }
  }, [embedded, entity?.state, entityId, haUrl, token]);

  /** Regarder une autre enceinte : la musique en cours n'est pas touchée. */
  const listenOn = useCallback((cible: string) => {
    setSettings((s) => {
      const next = { ...s, entityId: cible };
      saveSettings(next);
      return next;
    });
    setShowSpeakers(false);
  }, []);

  /**
   * Emmener la musique ailleurs. On transfère AVANT de changer d'enceinte :
   * transfer_queue a besoin de l'ancienne comme source, et la source est fixée
   * à la construction de librarySource.
   */
  const moveTo = useCallback(
    async (cible: string) => {
      const lib = source();
      if (lib) {
        try {
          await lib.transferTo(cible);
        } catch (err) {
          setPlayersError(
            `Transfert refusé : ${err instanceof Error ? err.message : String(err)}`,
          );
          return;
        }
      }
      listenOn(cible);
    },
    [listenOn, source],
  );

  /**
   * Vol de la pochette vers la platine.
   *
   * On ne fait pas disparaître la bibliothèque pour faire réapparaître l'album
   * ailleurs : c'est le MÊME objet qui sort du bac, se retourne et va se poser.
   * Une copie volante prend le relais entre les deux vues, ce qui laisse la
   * pochette visible d'un bout à l'autre — et masque au passage le temps de
   * réponse de Home Assistant, puisque le disque n'apparaît qu'à l'atterrissage.
   */
  const playAlbum = useCallback((album: Album, from: HTMLElement) => {
    void librarySource.current?.play(album);

    const crate = from.parentElement;
    const sleeve = document.querySelector<HTMLElement>(".sleeve");
    const panel = document.querySelector<HTMLElement>(".library");

    if (!crate || !sleeve) {
      setShowLibrary(false);
      return;
    }

    const target = sleeve.getBoundingClientRect();
    const size = from.offsetWidth;

    /*
     * La copie doit partir de LÀ OÙ L'ALBUM SE TROUVE À L'ÉCRAN.
     *
     * Les pochettes sont toutes posées au même endroit dans le document et
     * réparties par leur transformation : partir de leur position non
     * transformée les faisait donc surgir au centre du bac avant de s'envoler.
     * On prend le rectangle réellement occupé, et on rejoue l'angle qu'elles ont
     * sur la roue.
     */
    const box = from.getBoundingClientRect();
    const arc = parseFloat(crate.style.getPropertyValue("--arc")) || 8;
    // Position et rang viennent des attributs de données : la roue n'écrit plus
    // sa position dans une propriété CSS, qui coûtait un recalcul par image.
    const offset = parseFloat(crate.dataset.offset ?? "") || 0;
    const index = parseFloat(from.dataset.i ?? "") || 0;
    const tilt = `${90 + (index - offset) * arc}deg`;

    // La copie est un carré à la taille de la pochette, centré sur elle.
    const left = box.left + box.width / 2 - size / 2;
    const top = box.top + box.height / 2 - size / 2;

    const scale = target.width / size;
    const dx = target.left + target.width / 2 - (left + size / 2);
    const dy = target.top + target.height / 2 - (top + size / 2);

    const flyer = document.createElement("div");
    /*
     * La copie volante vit DANS notre racine, pas dans le document.
     *
     * Elle était ajoutée à `document.body`. Dans la page autonome c'est le même
     * document, donc elle héritait de nos styles. Dans le panneau, `document.body`
     * appartient à Home Assistant : la copie atterrissait hors de notre arbre
     * d'ombre, sans une seule de nos règles — donc sans ombre, sans plan, sans
     * rien. L'animation partait dans le vide.
     *
     * En la posant dans notre racine, les positions doivent être relatives à
     * elle : les rectangles mesurés sont en coordonnées de fenêtre, on en
     * retranche donc l'origine de la racine.
     */
    const racine = rootRef.current ?? document.body;
    const cadre = racine.getBoundingClientRect();

    flyer.className = "flyer";
    // Rotation autour du centre, comme sur la roue.
    flyer.style.transformOrigin = "50% 50%";
    flyer.style.left = `${left - cadre.left}px`;
    flyer.style.top = `${top - cadre.top}px`;
    flyer.style.width = `${size}px`;
    flyer.style.height = `${size}px`;
    if (album.image) flyer.style.backgroundImage = `url("${album.image}")`;
    racine.appendChild(flyer);

    /*
     * Le disque et le bras s'effacent AVANT que la pochette n'arrive.
     *
     * Sans ça, la copie volante passe forcément par-dessus le disque — elle doit
     * être au-dessus de la bibliothèque — puis se retrouve d'un coup derrière lui
     * quand la vraie pochette prend le relais. C'est ce saut d'un plan à l'autre
     * qui rendait la transition bizarre. En retirant le disque le temps du vol,
     * il n'y a plus de conflit : la pochette se pose, puis le disque revient
     * par-dessus, ce qui est aussi le bon ordre des gestes.
     */
    const hide = (selector: string, delay: number) =>
      document
        .querySelector<HTMLElement>(selector)
        ?.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 260,
          delay,
          easing: "ease-out",
          fill: "forwards",
        });

    const hidden = [hide(".disc", 0), hide(".tonearm", 0), hide(".tonearm-base", 0)];

    const flight = flyer.animate(
      [
        { transform: `perspective(2400px) rotateY(${tilt}) scale(1)`, offset: 0 },
        // Elle se déhanche d'abord hors du bac, avant de partir.
        { transform: `perspective(2400px) rotateY(${tilt}) scale(1.06) translateY(-3%)`, offset: 0.22 },
        {
          transform: `perspective(2400px) rotate(-3deg) rotateY(0deg) translate(${dx}px, ${dy}px) scale(${scale})`,
          offset: 1,
        },
      ],
      { duration: 880, easing: "cubic-bezier(0.32, 0.72, 0, 1)", fill: "forwards" },
    );

    panel?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 420,
      delay: 180,
      easing: "ease-out",
      fill: "forwards",
    });
    window.setTimeout(() => setShowLibrary(false), 620);

    void flight.finished.then(() => {
      for (const animation of hidden) animation?.cancel();

      // Le disque n'entre en scène qu'une fois la pochette posée : il glisse de
      // derrière la pochette, comme on sort un vinyle de son sillon.
      document.querySelector<HTMLElement>(".disc")?.animate(
        [
          { opacity: 0, transform: "translateY(-50%) translateX(-14%) scale(0.94)" },
          { opacity: 1, transform: "translateY(-50%) translateX(0) scale(1)" },
        ],
        { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      );
      for (const selector of [".tonearm", ".tonearm-base"]) {
        document
          .querySelector<HTMLElement>(selector)
          ?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 520, delay: 180, easing: "ease-out" });
      }

      flyer.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, delay: 120, fill: "forwards" })
        .finished.then(
          () => flyer.remove(),
          () => flyer.remove(),
        );
    });
  }, []);

  // ?demo=1&lib=1 pour ouvrir directement le bac à disques.
  useEffect(() => {
    if (DEMO && new URLSearchParams(window.location.search).has("lib")) openLibrary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ------------------------------------------------------------- commandes

  const call = useCallback(
    (service: string, data: Record<string, unknown> = {}) => {
      clientRef.current?.callService("media_player", service, data, settings.entityId)?.catch(() => {
        /* la commande a été refusée : l'état renvoyé par HA fera foi */
      });
    },
    [settings.entityId],
  );

  // ------------------------------------------------------------- la maison suit

  /*
   * Quand la musique démarre, la maison peut réagir : baisser les lumières,
   * lancer une scène, allumer l'ampli. Et l'inverse à l'arrêt.
   *
   * Deux précautions, sans lesquelles c'est inutilisable :
   *
   *  1. On ne déclenche RIEN au premier état reçu. Ouvrir la page pendant que la
   *     musique tourne déjà n'est pas un démarrage — sinon rafraîchir l'onglet
   *     rejouerait la scène à chaque fois.
   *
   *  2. Seuls les CHANGEMENTS comptent. Home Assistant réémet l'entité à chaque
   *     avancée de position ; sans mémoire de l'état précédent, la scène partirait
   *     plusieurs fois par seconde.
   */
  const etatPrecedent = useRef<boolean | null>(null);

  useEffect(() => {
    /*
     * Tant qu'aucune entité n'est arrivée, `playing` vaut faux par défaut — ce
     * n'est pas un état, c'est une absence d'information. Sans ce garde-fou, la
     * première mise à jour ressemblait à un passage arrêt → lecture et rejouait
     * la scène à chaque ouverture de la page.
     */
    if (!entity) return;

    const avant = etatPrecedent.current;
    etatPrecedent.current = playing;
    if (avant === null || avant === playing) return;

    const declencheur = playing ? settings.onPlay : settings.onStop;
    if (!isArmed(declencheur)) return;

    const [domaine, service] = declencheur.service.trim().split(".");
    if (!domaine || !service) return;

    clientRef.current
      ?.callService(domaine, service, {}, declencheur.entityId.trim() || undefined)
      ?.catch(() => {
        /* la maison n'a pas suivi : ce n'est pas une raison pour couper la musique */
      });
  }, [entity, playing, settings.onPlay, settings.onStop]);

  // Signal envoyé à la scène pour qu'elle joue le changement de disque.
  const [swap, setSwap] = useState({ nonce: 0, dir: 1 });
  const announceSwap = useCallback(
    (dir: number) => setSwap((s) => ({ nonce: s.nonce + 1, dir })),
    [],
  );

  const togglePlay = useCallback(() => call("media_play_pause"), [call]);
  // Ordres explicites, et non une bascule : poser le bras doit lancer la
  // lecture, le retirer doit l'arrêter, quel que soit l'état d'avant.
  const play = useCallback(() => call("media_play"), [call]);
  const pause = useCallback(() => call("media_pause"), [call]);
  const next = useCallback(() => {
    announceSwap(1);
    call("media_next_track");
  }, [announceSwap, call]);
  const previous = useCallback(() => {
    announceSwap(-1);
    call("media_previous_track");
  }, [announceSwap, call]);
  const seek = useCallback(
    (seconds: number) => call("media_seek", { seek_position: Math.max(0, Math.round(seconds)) }),
    [call],
  );
  const seekProgress = useCallback(
    (progress: number) => {
      if (duration > 0) seek(progress * duration);
    },
    [duration, seek],
  );

  const cycleRepeat = useCallback(() => {
    const order = { off: "all", all: "one", one: "off" } as const;
    call("repeat_set", { repeat: order[attrs?.repeat ?? "off"] });
  }, [attrs?.repeat, call]);

  // Raccourcis clavier, pour l'usage au bureau.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT" || showSetup) return;
      const volume = attrs?.volume_level ?? 0;
      switch (e.key) {
        case " ":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowRight":
          next();
          break;
        case "ArrowLeft":
          previous();
          break;
        case "ArrowUp":
          call("volume_set", { volume_level: Math.min(1, volume + 0.05) });
          break;
        case "ArrowDown":
          call("volume_set", { volume_level: Math.max(0, volume - 0.05) });
          break;
        case "l":
          setShowQueue(false);
          setShowSpeakers(false);
          setShowLyrics((v) => !v);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [attrs?.volume_level, call, next, previous, showSetup, togglePlay]);

  // ------------------------------------------------------------- rendu

  const saveAndClose = (next: Settings) => {
    saveSettings(next);
    setSettings(next);
    setShowSetup(false);
  };

  const rpmLabel = settings.rpm >= 45 ? "45 RPM" : "33⅓ RPM";
  const footer = `${rpmLabel} · STEREO`;
  const mark = [roomName.toUpperCase(), duration > 0 ? formatTime(duration) : ""]
    .filter(Boolean)
    .join(" · ");

  const lyricsAvailable = settings.lyrics && (lyrics.lines.length > 0 || Boolean(lyrics.plain));
  const statusLabel: Partial<Record<ConnectionStatus, string>> = {
    connecting: "Connexion à Home Assistant…",
    reconnecting: "Reconnexion…",
    unauthorized: "Jeton refusé — ouvre les réglages",
    error: "Erreur de connexion",
  };

  const look = { vinyl: settings.vinyl, background: settings.background, ...(DEMO ? demoOverrides() : {}) };

  /*
   * La scène ne se décale que pour les volets latéraux. Les paroles sont
   * revenues à un voile posé sur toute la page : rien à décaler pour elles.
   */
  const panelOuvert = showQueue || showSpeakers;
  const ouvrirVolet = (nom: "queue" | "speakers" | "lyrics" | null) => {
    setShowQueue(nom === "queue");
    setShowSpeakers(nom === "speakers");
    setShowLyrics(nom === "lyrics");
  };

  return (
    <div
      className="app"
      ref={rootRef}
      data-vinyl={look.vinyl}
      data-bg={look.background}
      data-panel={panelOuvert}
    >
      <div className="backdrop" />

      <div className="stage">
        <Turntable
          title={settings.labelText || title}
          artist={artist}
          album={album}
          footer={footer}
          mark={mark}
          coverUrl={coverUrl}
          settings={settings}
          sleeveFront={sleeveFront}
          onToggleSleeve={() => setSleeveFront((v) => !v)}
          onTogglePlay={togglePlay}
          armOverride={armOverride}
          onSeekProgress={seekProgress}
          onPlay={play}
          onPause={pause}
          onNext={next}
          onPrevious={previous}
          seekable={duration > 0}
          spinRef={spinRef}
          armRef={armRef}
          swap={swap}
        />
      </div>

      <div className="hud" data-quiet={quiet && !showSetup}>
        <TopBar
          entity={entity}
          name={roomName}
          onLibrary={openLibrary}
          onQueue={() => ouvrirVolet(showQueue ? null : "queue")}
          onSpeakers={() => {
            ouvrirVolet("speakers");
            void openSpeakers();
          }}
          queueOn={showQueue}
          onSettings={() => setShowSetup(true)}
          onLyrics={() => ouvrirVolet(showLyrics ? null : "lyrics")}
          onShuffle={(value) => call("shuffle_set", { shuffle: value })}
          onRepeat={cycleRepeat}
          lyricsOn={showLyrics}
          lyricsAvailable={lyricsAvailable}
        />

        <div className="hud__bottom">
          <div className="track">
            <span className="track__title">{title || "Rien en lecture"}</span>
            <span className="track__artist">{[artist, album].filter(Boolean).join(" — ")}</span>
          </div>

          <Controls
            entity={entity}
            playing={playing}
            showPlayButton={settings.playControl === "button"}
            onPlayPause={togglePlay}
            onPrevious={previous}
            onNext={next}
            onVolume={(value) => call("volume_set", { volume_level: value })}
          />

          <div className="times">
            <span ref={timeRef}>0:00</span>
            <span className="times__bar">
              <span className="times__fill" ref={fillRef} />
            </span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {statusLabel[status] && (
        <div className="status">
          <span className="status__dot" />
          {statusLabel[status]}
        </div>
      )}

      {showLyrics && (
        <LyricsPane
          lyrics={lyrics}
          activeIndex={lyricIndex}
          loading={lyricsLoading}
          onClose={() => setShowLyrics(false)}
          onSeek={seek}
        />
      )}

      {showQueue && (
        <Queue
          items={queueItems}
          loading={queueLoading}
          error={queueError}
          current={queueCurrent}
          pending={queuePending}
          onPick={(item) => void jumpTo(item)}
          onClose={() => setShowQueue(false)}
        />
      )}

      {showSpeakers && (
        <Speakers
          players={players}
          current={entityId}
          loading={playersLoading}
          error={playersError}
          onListen={listenOn}
          onTransfer={(cible) => void moveTo(cible)}
          onClose={() => setShowSpeakers(false)}
        />
      )}

      {showLibrary && (
        <Library
          /* Un résultat de recherche remplace le bac ; sans recherche, la
             bibliothèque entière. */
          albums={results ?? albums}
          loading={libraryLoading}
          error={libraryError}
          onPlay={playAlbum}
          onClose={() => setShowLibrary(false)}
          resumeIndex={lastBrowsed.current}
          onFocusChange={(index) => (lastBrowsed.current = index)}
          query={query}
          onQuery={setQuery}
          searching={searching}
          zoom={settings.libraryZoom}
        />
      )}

      {resting && <Rest onWake={() => setResting(false)} />}

      {showSetup && (
        <Setup
          settings={settings}
          onSave={saveAndClose}
          onCancel={
            DEMO || (embedded ? Boolean(settings.entityId) : isConfigured(settings))
              ? () => setShowSetup(false)
              : null
          }
          requireConnection={!DEMO && !embedded}
          embedded={Boolean(embedded)}
          knownPlayers={embedded ? embedded.players() : null}
        />
      )}
    </div>
  );
}
