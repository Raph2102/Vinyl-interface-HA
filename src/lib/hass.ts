/**
 * Client adossé à l'objet `hass` de Home Assistant.
 *
 * C'est la version qui s'exécute DANS Home Assistant, en tant que panneau de la
 * barre latérale, et elle change tout par rapport au client WebSocket :
 *
 *  - **plus aucun jeton.** Le panneau reçoit `hass` du frontend, déjà
 *    authentifié avec la session de l'utilisateur connecté. Rien à saisir, rien
 *    à embarquer dans le fichier livré, et chacun voit ce que ses droits lui
 *    permettent de voir. C'était le dernier obstacle à une distribution à
 *    d'autres personnes que soi.
 *  - **plus aucun problème d'origine.** La page est servie par Home Assistant :
 *    les images, les appels et le WebSocket sont sur la même origine, donc ni
 *    CORS ni contenu mixte.
 *  - **une seule connexion pour toute l'interface.** Home Assistant maintient
 *    déjà sa liaison ; on s'y greffe au lieu d'en ouvrir une seconde.
 *
 * Le contrat reste celui de PlayerClient, si bien que l'interface ne sait pas
 * lequel des trois clients — Home Assistant, panneau, démonstration — l'anime.
 */

import type { ConnectionStatus, HaEntity, PlayerClient } from "./types";

/**
 * Le peu qu'on utilise de `hass`. On ne dépend pas des types du frontend de
 * Home Assistant : ils ne sont pas publiés en paquet, et la surface qu'on
 * emploie est minuscule.
 */
export interface HassLike {
  states: Record<string, HaEntity | undefined>;
  callService(
    domain: string,
    service: string,
    data?: Record<string, unknown>,
    target?: { entity_id?: string },
  ): Promise<unknown>;
  callWS<T = unknown>(message: Record<string, unknown>): Promise<T>;
  language?: string;
  user?: { is_admin?: boolean; name?: string };
}

export class HassClient implements PlayerClient {
  onState: (entity: HaEntity) => void = () => {};
  onStatus: (status: ConnectionStatus, detail?: string) => void = () => {};

  private hass: HassLike;
  private watched: string[] = [];
  /** Dernier état publié, pour ne pas réémettre à chaque battement du frontend. */
  private last: HaEntity | null = null;

  constructor(hass: HassLike) {
    this.hass = hass;
  }

  connect(entityIds: string[]): void {
    this.watched = entityIds;
    this.onStatus("connected");
    this.publish();
  }

  close(): void {
    this.watched = [];
    this.last = null;
  }

  /**
   * Home Assistant redonne un `hass` neuf à chaque changement, quel qu'il soit —
   * une lampe allumée à l'autre bout de la maison en produit un. On ne prévient
   * l'interface que si NOTRE entité a réellement bougé, sinon l'app se
   * redessinerait plusieurs fois par seconde pour rien.
   */
  update(hass: HassLike): void {
    this.hass = hass;
    this.publish();
  }

  private publish(): void {
    const id = this.watched[0];
    if (!id) return;

    const entity = this.hass.states[id];
    if (!entity) {
      // L'entité peut disparaître le temps d'un redémarrage d'intégration.
      this.onStatus("reconnecting", `Entité ${id} introuvable`);
      return;
    }

    const empreinte = this.last;
    const identique =
      empreinte !== null &&
      empreinte.state === entity.state &&
      empreinte.attributes.media_title === entity.attributes.media_title &&
      empreinte.attributes.media_position === entity.attributes.media_position &&
      empreinte.attributes.media_position_updated_at ===
        entity.attributes.media_position_updated_at &&
      empreinte.attributes.volume_level === entity.attributes.volume_level &&
      empreinte.attributes.shuffle === entity.attributes.shuffle &&
      empreinte.attributes.repeat === entity.attributes.repeat &&
      empreinte.attributes.entity_picture === entity.attributes.entity_picture;

    if (identique) return;

    this.last = entity;
    this.onStatus("connected");
    this.onState(entity);
  }

  callService(
    domain: string,
    service: string,
    data: Record<string, unknown> = {},
    entityId?: string,
  ): Promise<unknown> {
    return this.hass.callService(
      domain,
      service,
      data,
      entityId ? { entity_id: entityId } : undefined,
    );
  }

  /**
   * Les actions qui RENVOIENT des données passent par le WebSocket brut :
   * `hass.callService` ne remonte pas la réponse, et c'est elle qui porte la
   * bibliothèque, la recherche et la file.
   */
  async callServiceWithResponse(
    domain: string,
    service: string,
    data: Record<string, unknown> = {},
    entityId?: string,
  ): Promise<unknown> {
    const result = await this.hass.callWS<{ response?: unknown }>({
      type: "call_service",
      domain,
      service,
      service_data: data,
      ...(entityId ? { target: { entity_id: entityId } } : {}),
      return_response: true,
    });
    return result?.response ?? result;
  }

  /** L'entrée de configuration de Music Assistant, que ciblent get_library et search. */
  async configEntry(domain: string): Promise<string | null> {
    const entries = await this.hass.callWS<{ domain: string; entry_id: string }[]>({
      type: "config_entries/get",
    });
    return entries.find((e) => e.domain === domain)?.entry_id ?? null;
  }

  /** Toutes les enceintes visibles, sans passer par le REST. */
  players(): HaEntity[] {
    return Object.values(this.hass.states)
      .filter((e): e is HaEntity => Boolean(e?.entity_id.startsWith("media_player.")))
      .sort((a, b) => {
        const am = a.attributes.mass_player_type ? 0 : 1;
        const bm = b.attributes.mass_player_type ? 0 : 1;
        if (am !== bm) return am - bm;
        return (a.attributes.friendly_name ?? a.entity_id).localeCompare(
          b.attributes.friendly_name ?? b.entity_id,
        );
      });
  }
}

/**
 * Première enceinte à proposer quand l'utilisateur n'a rien choisi.
 *
 * On privilégie celles que Music Assistant pilote, et parmi elles celle qui
 * joue déjà : c'est presque toujours celle qu'on vient regarder.
 */
export function defaultPlayer(hass: HassLike): string {
  const lecteurs = Object.values(hass.states).filter((e): e is HaEntity =>
    Boolean(e?.entity_id.startsWith("media_player.")),
  );
  const massives = lecteurs.filter((e) => e.attributes.mass_player_type !== undefined);
  const candidats = massives.length > 0 ? massives : lecteurs;
  return (
    candidats.find((e) => e.state === "playing")?.entity_id ??
    candidats.find((e) => e.state === "paused")?.entity_id ??
    candidats[0]?.entity_id ??
    ""
  );
}
