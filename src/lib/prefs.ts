/**
 * Préférences de bibliothèque : ce qu'on masque du bac, ce qu'on lit à l'envers.
 *
 * Contrairement aux réglages d'apparence, propres à chaque appareil, ces
 * choix-là suivent la PERSONNE : masquer trente playlists sur le PC pour les
 * retrouver toutes sur l'iPad serait absurde. Ils sont donc rangés dans les
 * données utilisateur de Home Assistant (`frontend/set_user_data`), là où son
 * propre frontend garde la langue ou le thème — synchronisées d'un appareil à
 * l'autre, sans rien à configurer.
 *
 * Une copie locale sert de cache : le bac s'affiche filtré dès l'ouverture,
 * sans attendre l'aller-retour.
 */

import type { WsCaller } from "./mass";

export interface LibraryPrefs {
  /** URI des albums et playlists masqués du bac. */
  hidden: string[];
  /** URI de ceux qu'on lit du dernier morceau au premier. */
  reversed: string[];
}

export const EMPTY_PREFS: LibraryPrefs = { hidden: [], reversed: [] };

/** Clé dans les données utilisateur de Home Assistant. */
const CLE_HA = "md_vinyl_library";
const CLE_LOCALE = "mdvinyl.library.v1";

export interface PrefsStore {
  /** Ce qu'on sait tout de suite, sans réseau. */
  cached(): LibraryPrefs;
  load(): Promise<LibraryPrefs>;
  save(prefs: LibraryPrefs): Promise<void>;
}

function propre(valeur: unknown): LibraryPrefs {
  const v = (valeur ?? {}) as Partial<LibraryPrefs>;
  const liste = (x: unknown) =>
    Array.isArray(x) ? [...new Set(x.filter((s): s is string => typeof s === "string"))] : [];
  return { hidden: liste(v.hidden), reversed: liste(v.reversed) };
}

function lireLocal(): LibraryPrefs {
  try {
    return propre(JSON.parse(localStorage.getItem(CLE_LOCALE) ?? "null"));
  } catch {
    return { ...EMPTY_PREFS };
  }
}

function ecrireLocal(prefs: LibraryPrefs): void {
  try {
    localStorage.setItem(CLE_LOCALE, JSON.stringify(prefs));
  } catch {
    /* navigation privée : on garde en mémoire, c'est tout */
  }
}

/** Préférences gardées par Home Assistant, pour la personne connectée. */
export function haPrefs(ha: WsCaller): PrefsStore {
  return {
    cached: lireLocal,
    async load() {
      try {
        const reponse = await ha.callWS<{ value?: unknown }>({
          type: "frontend/get_user_data",
          key: CLE_HA,
        });
        // Rien encore côté Home Assistant : la copie locale fait foi.
        if (reponse?.value === null || reponse?.value === undefined) return lireLocal();
        const prefs = propre(reponse.value);
        ecrireLocal(prefs);
        return prefs;
      } catch {
        return lireLocal();
      }
    },
    async save(prefs) {
      ecrireLocal(prefs);
      await ha.callWS({ type: "frontend/set_user_data", key: CLE_HA, value: prefs });
    },
  };
}

/** Préférences propres au navigateur : démonstration, ou Home Assistant muet. */
export function localPrefs(): PrefsStore {
  return {
    cached: lireLocal,
    async load() {
      return lireLocal();
    },
    async save(prefs) {
      ecrireLocal(prefs);
    },
  };
}
