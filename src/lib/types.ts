/** Un état d'entité Home Assistant, tel que renvoyé par /api/states. */
export interface HaEntity {
  entity_id: string;
  state: string;
  attributes: HaMediaAttributes;
  last_changed?: string;
  last_updated?: string;
}

/**
 * Attributs d'un media_player. Tout est optionnel : Home Assistant ne publie
 * un attribut que lorsqu'il a une valeur, donc l'app doit survivre à leur absence.
 */
export interface HaMediaAttributes {
  friendly_name?: string;
  supported_features?: number;

  media_title?: string;
  media_artist?: string;
  media_album_name?: string;
  media_album_artist?: string;
  media_content_id?: string;
  media_content_type?: string;
  media_duration?: number;
  /** Position figée au moment du dernier rafraîchissement, en secondes. */
  media_position?: number;
  /** Horodatage ISO de ce gel. C'est lui qui permet d'interpoler en continu. */
  media_position_updated_at?: string;

  /** Chemin relatif servi par le proxy HA (jamais l'URL du CDN du fournisseur). */
  entity_picture?: string;

  volume_level?: number;
  is_volume_muted?: boolean;
  shuffle?: boolean;
  repeat?: "off" | "all" | "one";

  /** Spécifique à Music Assistant. */
  mass_player_type?: string;
  active_queue?: string;

  [key: string]: unknown;
}

export type PlayerState =
  | "playing"
  | "paused"
  | "idle"
  | "buffering"
  | "off"
  | "standby"
  | "on"
  | "unavailable"
  | "unknown";

/** Bitmask MediaPlayerEntityFeature de Home Assistant. */
export const Feature = {
  PAUSE: 1,
  SEEK: 2,
  VOLUME_SET: 4,
  VOLUME_MUTE: 8,
  PREVIOUS_TRACK: 16,
  NEXT_TRACK: 32,
  TURN_ON: 128,
  TURN_OFF: 256,
  PLAY_MEDIA: 512,
  VOLUME_STEP: 1024,
  SELECT_SOURCE: 2048,
  STOP: 4096,
  CLEAR_PLAYLIST: 8192,
  PLAY: 16384,
  SHUFFLE_SET: 32768,
  SELECT_SOUND_MODE: 65536,
  BROWSE_MEDIA: 131072,
  REPEAT_SET: 262144,
  GROUPING: 524288,
  MEDIA_ANNOUNCE: 1048576,
  MEDIA_ENQUEUE: 2097152,
  SEARCH_MEDIA: 4194304,
} as const;

export function supports(entity: HaEntity | null, feature: number): boolean {
  return ((entity?.attributes.supported_features ?? 0) & feature) !== 0;
}

/** État de la connexion temps réel, affiché discrètement dans l'UI. */
export type ConnectionStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "reconnecting"
  | "unauthorized"
  | "error";

/**
 * Ce que l'interface attend d'une source de lecture.
 * Le client Home Assistant et le faux lecteur du mode démo respectent ce même
 * contrat, ce qui évite d'avoir des branches « si démo » disséminées dans l'UI.
 */
export interface PlayerClient {
  onState: (entity: HaEntity) => void;
  onStatus: (status: ConnectionStatus, detail?: string) => void;
  connect(entityIds: string[]): void;
  close(): void;
  callService(
    domain: string,
    service: string,
    data?: Record<string, unknown>,
    entityId?: string,
  ): Promise<unknown>;
}
