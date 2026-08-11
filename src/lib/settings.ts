/**
 * Réglages persistés dans le localStorage du navigateur.
 *
 * Le jeton d'accès vit ICI et nulle part ailleurs : les fichiers déposés dans
 * config/www/ sont servis par Home Assistant SANS authentification, donc
 * n'importe qui sur le réseau peut les télécharger. Un token écrit en dur dans
 * un fichier du bundle serait un token offert. Dans le localStorage, il reste
 * sur l'appareil et se saisit une fois par appareil.
 */

export type VinylStyle = "clear" | "glass" | "black" | "tinted" | "marble" | "splatter";
export type BackgroundStyle = "adaptive" | "subtle" | "neutral" | "dark";
/** Comment on lance et arrête la lecture. */
export type PlayControl = "arm" | "button";

/**
 * Un geste envoyé à la maison quand la musique démarre ou s'arrête.
 *
 * Volontairement générique : « domaine.service » plus une cible. On ne code
 * donc rien en dur sur les lumières — la même case marche pour une scène, un
 * script, un interrupteur ou un thermostat. Vide = on ne déclenche rien.
 */
export interface Trigger {
  /** Sous la forme « scene.turn_on », « script.turn_on », « light.turn_on »… */
  service: string;
  /** L'entité visée. Vide = le service est appelé sans cible. */
  entityId: string;
}

export const NO_TRIGGER: Trigger = { service: "", entityId: "" };

/** Un déclencheur n'est armé que si on lui a donné un service. */
export function isArmed(t: Trigger): boolean {
  return t.service.trim().includes(".");
}

export interface Settings {
  /** Racine de Home Assistant. Vide = même origine que la page (le cas normal). */
  haUrl: string;
  token: string;
  entityId: string;

  vinyl: VinylStyle;
  background: BackgroundStyle;
  /**
   * "arm"    : on pose l'aiguille sur le disque pour lancer, on la retire pour
   *            arrêter. Aucun bouton lecture à l'écran.
   * "button" : le bouton classique dans la barre de commandes.
   */
  playControl: PlayControl;
  /** Garder le titre lisible en le contre-tournant, au lieu de le laisser tourner avec le disque. */
  counterRotateLabel: boolean;
  /** Tours par minute : 33⅓ pour un album, 45 pour un single. */
  rpm: number;

  /**
   * Couleur du disque pour les matières colorées (marbré, éclaboussé).
   * Vide = on reprend la dominante de la pochette, comme le fond adaptatif.
   */
  vinylTint: string;
  /**
   * Ce qui est gravé sur l'étiquette centrale, à la place du titre.
   * Vide = le morceau en cours, comme aujourd'hui.
   */
  labelText: string;

  lyrics: boolean;
  /** Minutes d'inactivité avant l'écran de repos. 0 = jamais. */
  idleMinutes: number;

  /** Ce que fait la maison quand la musique démarre. */
  onPlay: Trigger;
  /** Ce qu'elle fait quand la musique s'arrête. */
  onStop: Trigger;
}

declare const __DEV_TOKEN__: string;
declare const __DEV_ENTITY__: string;
declare const __DEV_URL__: string;

const KEY = "mdvinyl.settings.v1";

export const DEFAULTS: Settings = {
  haUrl: typeof __DEV_URL__ === "string" ? __DEV_URL__ : "",
  token: typeof __DEV_TOKEN__ === "string" ? __DEV_TOKEN__ : "",
  entityId: typeof __DEV_ENTITY__ === "string" ? __DEV_ENTITY__ : "",
  vinyl: "tinted",
  background: "adaptive",
  playControl: "arm",
  counterRotateLabel: false,
  rpm: 33.3333,
  vinylTint: "",
  labelText: "",
  lyrics: true,
  idleMinutes: 5,
  onPlay: { ...NO_TRIGGER },
  onStop: { ...NO_TRIGGER },
};

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULTS };
    return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    return { ...DEFAULTS };
  }
}

export function saveSettings(s: Settings): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* mode navigation privée : on tourne quand même, juste sans persistance */
  }
}

/** L'app est utilisable dès qu'on sait à qui parler et de quelle enceinte il s'agit. */
export function isConfigured(s: Settings): boolean {
  return s.token.trim().length > 0 && s.entityId.trim().length > 0;
}

/**
 * Ce qu'il faut, et rien de plus, pour parler à Home Assistant.
 * Le client ne dépend ainsi pas de l'apparence : changer la couleur du vinyle
 * ne doit pas rouvrir la connexion.
 */
export type Connection = Pick<Settings, "haUrl" | "token">;

/** Racine effective de HA : réglage explicite, sinon l'origine de la page. */
export function baseUrl(s: Connection): string {
  return (s.haUrl || window.location.origin).replace(/\/+$/, "");
}
