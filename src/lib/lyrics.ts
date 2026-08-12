/**
 * Paroles synchronisées via LRCLIB (lrclib.net).
 *
 * Base communautaire, gratuite, sans compte ni clé d'API, et qui renvoie
 * « access-control-allow-origin: * » — donc appelable directement depuis le
 * navigateur, sans backend à héberger.
 *
 * On tente d'abord la correspondance exacte (titre + artiste + album + durée),
 * qui garantit le bon pressage et donc le bon calage temporel ; on retombe sur
 * une recherche approchée si elle échoue.
 */

const API = "https://lrclib.net/api";

export interface LyricLine {
  /** Secondes depuis le début du morceau. */
  time: number;
  text: string;
}

export interface Lyrics {
  lines: LyricLine[];
  /** false = paroles trouvées mais non synchronisées : on les affiche en bloc. */
  synced: boolean;
  plain: string | null;
  instrumental: boolean;
}

export const NO_LYRICS: Lyrics = { lines: [], synced: false, plain: null, instrumental: false };

interface LrclibRecord {
  syncedLyrics: string | null;
  plainLyrics: string | null;
  instrumental: boolean;
}

const cache = new Map<string, Lyrics>();

export interface TrackRef {
  title: string;
  artist: string;
  album?: string;
  duration?: number;
}

export function trackKey(t: TrackRef): string {
  return `${t.artist}::${t.title}::${Math.round(t.duration ?? 0)}`;
}

export async function fetchLyrics(track: TrackRef, signal?: AbortSignal): Promise<Lyrics> {
  if (!track.title || !track.artist) return NO_LYRICS;

  const key = trackKey(track);
  const cached = cache.get(key);
  if (cached) return cached;

  let result = NO_LYRICS;
  try {
    const exact = await getExact(track, signal);
    result = exact ?? (await searchLoose(track, signal)) ?? NO_LYRICS;
  } catch (err) {
    if ((err as Error)?.name === "AbortError") throw err;
    result = NO_LYRICS;
  }

  cache.set(key, result);
  if (cache.size > 80) cache.delete(cache.keys().next().value as string);
  return result;
}

async function getExact(track: TrackRef, signal?: AbortSignal): Promise<Lyrics | null> {
  const params = new URLSearchParams({
    artist_name: track.artist,
    track_name: track.title,
    album_name: track.album ?? "",
    duration: String(Math.round(track.duration ?? 0)),
  });
  const res = await fetch(`${API}/get?${params}`, { signal });
  if (!res.ok) return null; // 404 = ce pressage précis est inconnu
  return toLyrics((await res.json()) as LrclibRecord);
}

async function searchLoose(track: TrackRef, signal?: AbortSignal): Promise<Lyrics | null> {
  const params = new URLSearchParams({ track_name: track.title, artist_name: track.artist });
  const res = await fetch(`${API}/search?${params}`, { signal });
  if (!res.ok) return null;

  const list = (await res.json()) as (LrclibRecord & {
    duration: number;
    artistName?: string;
    trackName?: string;
  })[];
  if (!Array.isArray(list) || list.length === 0) return null;

  /*
   * Le choix de la version décide du CALAGE, pas seulement du texte.
   *
   * Une recherche large rend des dizaines d'entrées portant le même titre :
   * l'album, le remix, la version radio, un montage de soirée. Leurs paroles
   * sont les mêmes, mais leurs horodatages appartiennent à des montages
   * différents. Prendre la mauvaise, c'est afficher un texte juste au mauvais
   * moment — ce qui est pire que ne rien afficher, parce qu'on croit à un défaut
   * de l'app plutôt qu'à une erreur d'appariement.
   *
   * On note donc chaque candidat plutôt que de trier sur la seule durée : la
   * durée d'abord, mais aussi la concordance du titre et de l'artiste, qu'une
   * recherche large ne garantit pas.
   */
  const target = track.duration ?? 0;
  const normaliser = (v: string) =>
    v
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

  const titre = normaliser(track.title);
  const artiste = normaliser(track.artist);

  const note = (r: (typeof list)[number]) => {
    // L'écart de durée, en secondes, est le signal principal. Au-delà de dix
    // secondes, ce n'est plus le même montage.
    const ecart = target > 0 ? Math.abs(r.duration - target) : 0;
    let points = Math.min(ecart, 60);
    if (target > 0 && ecart > 10) points += 40;
    /*
     * Un ARTISTE différent, c'est une autre chanson qui porte le même titre :
     * la pénalité doit écraser n'importe quel avantage de durée. Un titre
     * différent est plus souvent une variante — remix, live, version radio —
     * qu'une erreur d'identité, donc on le sanctionne moins fort.
     */
    if (r.trackName && normaliser(r.trackName) !== titre) points += 25;
    if (r.artistName && normaliser(r.artistName) !== artiste) points += 60;
    return points;
  };

  const synchronises = list.filter((r) => r.syncedLyrics);
  const best =
    [...synchronises].sort((a, b) => note(a) - note(b))[0] ??
    [...list].sort((a, b) => note(a) - note(b))[0];

  if (!best) return null;

  /*
   * Aucune version dont la durée approche : les horodatages ne peuvent pas
   * coller. On garde le texte, on jette la synchronisation — mieux vaut des
   * paroles fixes et justes qu'un défilement faux.
   */
  const ecart = target > 0 ? Math.abs(best.duration - target) : 0;
  if (target > 0 && ecart > 25) {
    return {
      lines: [],
      synced: false,
      plain: best.plainLyrics ?? (best.syncedLyrics ? stripTimestamps(best.syncedLyrics) : null),
      instrumental: Boolean(best.instrumental),
    };
  }

  return toLyrics(best);
}

function toLyrics(record: LrclibRecord): Lyrics {
  if (record.instrumental) {
    return { lines: [], synced: false, plain: null, instrumental: true };
  }
  const lines = record.syncedLyrics ? parseLrc(record.syncedLyrics) : [];
  return {
    lines,
    synced: lines.length > 0,
    plain: record.plainLyrics ?? null,
    instrumental: false,
  };
}

/** Analyse le format LRC : "[mm:ss.cc] texte", éventuellement plusieurs horodatages par ligne. */
export function parseLrc(lrc: string): LyricLine[] {
  const stamp = /\[(\d{1,3}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g;
  const out: LyricLine[] = [];

  for (const raw of lrc.split(/\r?\n/)) {
    stamp.lastIndex = 0;
    const times: number[] = [];
    let match: RegExpExecArray | null;
    let end = 0;

    while ((match = stamp.exec(raw)) !== null) {
      // On s'arrête au premier morceau de texte : un "[...]" plus loin n'est plus un horodatage.
      if (match.index !== end) break;
      end = stamp.lastIndex;
      const min = Number(match[1]);
      const sec = Number(match[2]);
      const frac = match[3] ? Number(`0.${match[3]}`) : 0;
      times.push(min * 60 + sec + frac);
    }

    if (times.length === 0) continue;
    const text = raw.slice(end).trim();
    for (const time of times) out.push({ time, text });
  }

  return out.sort((a, b) => a.time - b.time);
}

/** Index de la ligne en cours, ou -1 avant la première. Recherche dichotomique. */
export function lineAt(lines: LyricLine[], position: number): number {
  let lo = 0;
  let hi = lines.length - 1;
  let found = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if ((lines[mid] as LyricLine).time <= position) {
      found = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return found;
}

/**
 * Retire les horodatages d'un texte LRC.
 *
 * Sert quand on a trouvé les bonnes paroles mais pour un autre montage : le
 * texte reste juste, seuls les temps sont faux. On les enlève plutôt que de
 * faire défiler à côté.
 */
function stripTimestamps(lrc: string): string {
  return lrc
    .split("\n")
    .map((ligne) => ligne.replace(/\[\d+:\d+(?:[.:]\d+)?\]/g, "").trim())
    .filter((ligne) => ligne.length > 0)
    .join("\n");
}
