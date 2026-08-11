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

  const list = (await res.json()) as (LrclibRecord & { duration: number })[];
  if (!Array.isArray(list) || list.length === 0) return null;

  // On préfère un résultat synchronisé, et parmi eux celui dont la durée colle
  // le mieux : c'est le meilleur indice qu'il s'agit du même enregistrement.
  const target = track.duration ?? 0;
  const best =
    [...list]
      .filter((r) => r.syncedLyrics)
      .sort((a, b) => Math.abs(a.duration - target) - Math.abs(b.duration - target))[0] ?? list[0];

  return best ? toLyrics(best) : null;
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
