/**
 * Panneau Home Assistant.
 *
 * Point d'entrée de la version installable : Home Assistant instancie l'élément
 * `<md-vinyl-panel>` déclaré dans configuration.yaml, et lui pousse quatre
 * propriétés — `hass`, `narrow`, `route`, `panel`. Nous n'utilisons que la
 * première.
 *
 * Ce que ce fichier change par rapport à index.html :
 *
 *  - **aucun jeton.** `hass` porte la session de l'utilisateur connecté. C'est
 *    ce qui rend l'app distribuable : n'importe qui l'installe et elle marche,
 *    sans rien coller nulle part.
 *  - **la CSS est embarquée dans l'élément.** Le frontend de Home Assistant a
 *    ses propres styles ; on ne peut pas déverser les nôtres dans le document.
 *    Un shadow DOM les isole dans les deux sens.
 *
 * `hass` est remplacé à CHAQUE changement d'état de la maison, y compris ceux
 * qui ne nous concernent pas. On ne redessine donc pas sur réception : le
 * client compare et ne réveille l'interface que si notre enceinte a bougé.
 */

import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";

import { App } from "./App";
import { HassClient, defaultPlayer, type HassLike } from "./lib/hass";
import { loadSettings, saveSettings } from "./lib/settings";

// Vite remplace cet import par le texte de la feuille de style.
import styles from "./styles.css?inline";

/**
 * Ce que le panneau emprunte au reste de Home Assistant, et qu'il rend en
 * partant.
 *
 * PREMIÈRE VERSION, ET SON DÉFAUT — je passais par l'événement
 * `hass-dock-sidebar`. Il fait bien disparaître la barre, mais il ENREGISTRE la
 * préférence de l'utilisateur, pour toute son interface et durablement. Modifier
 * un réglage global pour obtenir un effet passager était une mauvaise idée
 * indépendamment du bogue : le jour où la restauration ne s'est pas faite, la
 * barre est restée cachée partout, sur tous les tableaux de bord.
 *
 * Ce qui suit ne touche à aucun réglage. On écrit des styles en ligne sur le
 * document, on note leur valeur d'avant, et on les remet exactement comme ils
 * étaient. Rien n'est persisté : au pire, un rechargement de page efface tout.
 */
class Emprise {
  private rendus: (() => void)[] = [];

  /** Pose une propriété CSS sur un élément et retient de quoi la défaire. */
  poser(cible: HTMLElement, propriete: string, valeur: string): void {
    const avant = cible.style.getPropertyValue(propriete);
    const prioriteAvant = cible.style.getPropertyPriority(propriete);
    cible.style.setProperty(propriete, valeur, "important");
    this.rendus.push(() => {
      if (avant) cible.style.setProperty(propriete, avant, prioriteAvant);
      else cible.style.removeProperty(propriete);
    });
  }

  /** Enregistre une restitution qui n'est pas un style : un écouteur, par exemple. */
  aussi(defaire: () => void): void {
    this.rendus.push(defaire);
  }

  rendre(): void {
    for (const defaire of this.rendus.splice(0).reverse()) {
      try {
        defaire();
      } catch {
        /* l'élément a pu disparaître entre-temps : rien de vital */
      }
    }
  }
}

class MdVinylPanel extends HTMLElement {
  private root: Root | null = null;
  private client: HassClient | null = null;
  private mounted = false;
  /** Tout ce qu on a modifié hors de notre arbre, et de quoi le défaire. */
  private emprise = new Emprise();

  /** Home Assistant écrit ici, souvent. */
  set hass(hass: HassLike) {
    if (!hass) return;

    if (!this.client) {
      this.client = new HassClient(hass);
      this.premierChoixDEnceinte(hass);
      this.prendreLaPlace();
      this.monter();
    } else {
      this.client.update(hass);
    }
  }

  /**
   * À la toute première ouverture, on choisit une enceinte plausible plutôt que
   * d'accueillir l'utilisateur par un formulaire vide. Il pourra en changer
   * d'un geste depuis le nom de la pièce.
   */
  private premierChoixDEnceinte(hass: HassLike): void {
    const reglages = loadSettings();
    if (reglages.entityId) return;
    const choix = defaultPlayer(hass);
    if (choix) saveSettings({ ...reglages, entityId: choix });
  }

  /**
   * Bloque le rebond du document, le temps de la visite.
   *
   * C'est lui qui déclenche le tirage-pour-rafraîchir. Le blocage posé dans
   * notre arbre ne suffisait pas : le geste commence chez nous, mais la chaîne
   * de défilement remonte jusqu'au document de Home Assistant, et c'est tout en
   * haut que le navigateur décide de rafraîchir. Il faut donc le dire là aussi.
   *
   * CE QU'ON NE FAIT PLUS : masquer la barre latérale. J'ai essayé deux voies —
   * l'événement `hass-dock-sidebar`, qui enregistre une préférence globale et
   * l'a laissée cachée partout, puis la largeur du tiroir par variable CSS, sans
   * effet visible. Une barre qu'on masque doit pouvoir se rouvrir d'un geste, et
   * rien dans le frontend ne le garantit depuis un panneau. On préfère donc
   * décaler notre propre contenu : voir --ha-rail dans la feuille de style.
   */
  private prendreLaPlace(): void {
    for (const cible of [document.documentElement, document.body]) {
      this.emprise.poser(cible, "overscroll-behavior", "none");
      this.emprise.poser(cible, "overscroll-behavior-y", "none");
    }
  }

  private monter(): void {
    if (this.mounted || !this.client) return;
    this.mounted = true;

    /*
     * Shadow DOM ouvert : nos styles ne fuient pas vers le frontend de Home
     * Assistant, et les siens ne viennent pas déformer la platine. « Ouvert »
     * et non « fermé » pour que les outils de développement restent utilisables.
     */
    const shadow = this.attachShadow({ mode: "open" });

    /*
     * Les @font-face doivent être déclarées DANS LE DOCUMENT, pas ici.
     *
     * Un shadow DOM isole les sélecteurs, mais les polices sont une ressource
     * du document : une règle @font-face posée dans un arbre d'ombre est
     * purement et simplement ignorée par le navigateur. Sans ce partage, tout
     * le panneau retombait sur la police à empattements du système.
     *
     * On n'exporte que ces règles-là — le reste de la feuille reste enfermé, et
     * ne peut donc pas déteindre sur le frontend de Home Assistant.
     */
    const polices = styles.match(/@font-face\s*\{[^}]*\}/g) ?? [];
    if (polices.length > 0 && !document.getElementById("md-vinyl-fonts")) {
      const dansLeDocument = document.createElement("style");
      dansLeDocument.id = "md-vinyl-fonts";
      dansLeDocument.textContent = polices.join("\n");
      document.head.appendChild(dansLeDocument);
    }

    const feuille = document.createElement("style");
    feuille.textContent = styles;
    shadow.appendChild(feuille);

    const hote = document.createElement("div");
    /*
     * Le panneau occupe toute la zone que Home Assistant lui laisse. Sans cette
     * hauteur explicite, l'app se replie sur le contenu et la platine se
     * retrouve écrasée en haut de l'écran.
     */
    hote.style.cssText =
      "position:absolute; inset:0; overflow:hidden; overscroll-behavior:none; touch-action:none;";
    shadow.appendChild(hote);
    this.style.cssText =
      "display:block; position:relative; width:100%; height:100%; overscroll-behavior:none;";

    this.root = createRoot(hote);
    this.root.render(
      <StrictMode>
        <App embedded={this.client} />
      </StrictMode>,
    );
  }

  disconnectedCallback(): void {
    /*
     * On rend tout ce qu'on avait emprunté au document.
     *
     * Personne ne doit retrouver son interface changée pour être passé écouter
     * un disque. Et comme rien n'a été enregistré, même un échec ici se répare
     * d'un simple rechargement de page.
     */
    this.emprise.rendre();

    // Home Assistant détache le panneau quand on change d'onglet. On rend la
    // main proprement plutôt que de laisser une boucle d'animation tourner.
    this.root?.unmount();
    this.root = null;
    this.mounted = false;
    this.client?.close();
    this.client = null;
  }
}

if (!customElements.get("md-vinyl-panel")) {
  customElements.define("md-vinyl-panel", MdVinylPanel);
}

console.info("%c MD Vinyl %c panneau chargé ", "background:#c8542e;color:#fff", "");
