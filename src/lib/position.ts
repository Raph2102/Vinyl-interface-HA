/**
 * Position de lecture.
 *
 * Home Assistant n'envoie pas de flux continu : il envoie une position figée
 * (media_position) et l'instant où elle a été relevée (media_position_updated_at).
 * Entre deux messages, on ajoute soi-même le temps écoulé. C'est ce qui permet
 * au disque et au bras de bouger à 60 images/seconde alors qu'on ne reçoit
 * qu'une poignée de messages par morceau.
 *
 * Piège classique : media_position_updated_at est une heure SERVEUR. Si l'horloge
 * de la tablette dérive de quelques secondes, la position est fausse d'autant.
 * On mesure donc l'écart entre les deux horloges via l'en-tête HTTP Date.
 */

import type { HaEntity } from "./types";
import { baseUrl, type Connection } from "./settings";

/** Écart mesuré : heure locale − heure serveur, en millisecondes. */
let clockOffsetMs = 0;

/**
 * Mesure l'écart d'horloge avec Home Assistant.
 * L'en-tête Date est à la seconde près, et on retranche la moitié de l'aller-retour
 * réseau pour ne pas compter le trajet dans l'écart. Précision obtenue : ~0,5 s,
 * largement suffisant pour que le bras de lecture tombe au bon endroit.
 */
export async function syncClock(settings: Connection): Promise<number> {
  try {
    const t0 = Date.now();
    const res = await fetch(`${baseUrl(settings)}/api/`, {
      headers: { Authorization: `Bearer ${settings.token}` },
      cache: "no-store",
    });
    const t1 = Date.now();
    const header = res.headers.get("date");
    if (!header) return clockOffsetMs;

    const serverMs = Date.parse(header);
    if (Number.isNaN(serverMs)) return clockOffsetMs;

    clockOffsetMs = (t0 + t1) / 2 - (serverMs + 500); // +500 : milieu de la seconde annoncée
    return clockOffsetMs;
  } catch {
    return clockOffsetMs;
  }
}

export function getClockOffset(): number {
  return clockOffsetMs;
}

export interface Playback {
  /** Secondes écoulées dans le morceau. */
  position: number;
  /** Durée totale en secondes, 0 si inconnue. */
  duration: number;
  /** Avancement 0 → 1. */
  progress: number;
  playing: boolean;
}

const EMPTY: Playback = { position: 0, duration: 0, progress: 0, playing: false };

export function readPlayback(entity: HaEntity | null, nowMs = Date.now()): Playback {
  if (!entity) return EMPTY;

  const attrs = entity.attributes;
  const duration = Number(attrs.media_duration ?? 0) || 0;
  const base = Number(attrs.media_position ?? 0) || 0;
  const playing = entity.state === "playing";

  let position = base;

  // On n'extrapole que pendant la lecture : en pause, la position figée EST la vérité.
  if (playing && attrs.media_position_updated_at) {
    const updatedAt = Date.parse(attrs.media_position_updated_at);
    if (!Number.isNaN(updatedAt)) {
      const elapsedMs = nowMs - clockOffsetMs - updatedAt;
      // Un écart négatif (horloge mal synchronisée) ne doit jamais faire reculer la lecture.
      if (elapsedMs > 0) position = base + elapsedMs / 1000;
    }
  }

  if (duration > 0) position = Math.min(position, duration);
  position = Math.max(0, position);

  return {
    position,
    duration,
    progress: duration > 0 ? position / duration : 0,
    playing,
  };
}

/** 214 → "3:34" ; 3725 → "1:02:05" */
export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
  const total = Math.floor(seconds);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
    : `${m}:${String(s).padStart(2, "0")}`;
}
