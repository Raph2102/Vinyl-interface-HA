/**
 * Client Home Assistant.
 *
 * Choix : WebSocket (/api/websocket) plutôt que du polling REST.
 *  - le changement de piste arrive en push, sans le décalage d'une seconde du polling
 *  - une seule connexion sert à la fois l'écoute d'état et l'envoi des commandes
 *  - le filtrage est fait côté serveur (subscribe_entities), donc on ne reçoit
 *    que notre enceinte et pas tout le trafic de l'instance
 *
 * La position de lecture, elle, reste interpolée localement : Home Assistant
 * n'envoie pas un flux continu, il envoie une position figée accompagnée de
 * media_position_updated_at. Voir position.ts.
 */

import type { ConnectionStatus, HaEntity } from "./types";
import { baseUrl, type Connection } from "./settings";

/** État compressé envoyé par subscribe_entities. */
interface CompressedState {
  s?: string;
  a?: Record<string, unknown>;
  lc?: number;
  lu?: number;
}

interface EntityDiff {
  "+"?: CompressedState;
  "-"?: { a?: string[] };
}

interface EntitiesEvent {
  /** added : état complet */
  a?: Record<string, CompressedState>;
  /** changed : différentiel */
  c?: Record<string, EntityDiff>;
  /** removed */
  r?: string[];
}

type Pending = {
  resolve: (value: unknown) => void;
  reject: (reason: Error) => void;
};

const RECONNECT_MIN = 1000;
const RECONNECT_MAX = 15000;
const PING_INTERVAL = 25000;
const PING_TIMEOUT = 10000;

export class HaClient {
  private settings: Connection;
  private ws: WebSocket | null = null;
  private nextId = 1;
  private pending = new Map<number, Pending>();
  private entityIds: string[] = [];
  private subscriptionId: number | null = null;
  private states = new Map<string, HaEntity>();

  private closedByUs = false;
  private retryDelay = RECONNECT_MIN;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private pingTimer: ReturnType<typeof setInterval> | null = null;
  private pongTimer: ReturnType<typeof setTimeout> | null = null;

  onState: (entity: HaEntity) => void = () => {};
  onStatus: (status: ConnectionStatus, detail?: string) => void = () => {};

  constructor(settings: Connection) {
    this.settings = settings;
  }

  // ---------------------------------------------------------------- cycle de vie

  connect(entityIds: string[]): void {
    this.entityIds = entityIds;
    this.closedByUs = false;
    this.open();

    // Une tablette qui se met en veille coupe le socket sans prévenir.
    // Au réveil on relance tout de suite au lieu d'attendre le backoff.
    document.addEventListener("visibilitychange", this.handleVisibility);
    window.addEventListener("online", this.handleOnline);
  }

  close(): void {
    this.closedByUs = true;
    document.removeEventListener("visibilitychange", this.handleVisibility);
    window.removeEventListener("online", this.handleOnline);
    this.clearTimers();
    this.ws?.close();
    this.ws = null;
    this.pending.clear();
    this.subscriptionId = null;
  }

  private handleVisibility = (): void => {
    if (document.visibilityState === "visible" && this.ws?.readyState !== WebSocket.OPEN) {
      this.retryDelay = RECONNECT_MIN;
      this.open();
    }
  };

  private handleOnline = (): void => {
    this.retryDelay = RECONNECT_MIN;
    this.open();
  };

  private open(): void {
    if (this.closedByUs) return;
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      return;
    }
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    const url = baseUrl(this.settings).replace(/^http/, "ws") + "/api/websocket";
    this.onStatus(this.retryDelay === RECONNECT_MIN ? "connecting" : "reconnecting");

    let ws: WebSocket;
    try {
      ws = new WebSocket(url);
    } catch (err) {
      this.scheduleReconnect(String(err));
      return;
    }
    this.ws = ws;

    ws.onmessage = (ev) => this.handleMessage(ev);
    ws.onerror = () => {
      /* onclose suit toujours : on y fait la reconnexion */
    };
    ws.onclose = () => {
      this.clearTimers();
      this.subscriptionId = null;
      for (const p of this.pending.values()) p.reject(new Error("connexion fermée"));
      this.pending.clear();
      if (!this.closedByUs) this.scheduleReconnect();
    };
  }

  private scheduleReconnect(detail?: string): void {
    if (this.closedByUs || this.reconnectTimer) return;
    this.onStatus("reconnecting", detail);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.open();
    }, this.retryDelay);
    this.retryDelay = Math.min(this.retryDelay * 2, RECONNECT_MAX);
  }

  private clearTimers(): void {
    if (this.pingTimer) clearInterval(this.pingTimer);
    if (this.pongTimer) clearTimeout(this.pongTimer);
    this.pingTimer = null;
    this.pongTimer = null;
  }

  // ---------------------------------------------------------------- protocole

  private send(payload: Record<string, unknown>): void {
    this.ws?.send(JSON.stringify(payload));
  }

  private request<T = unknown>(payload: Record<string, unknown>): Promise<T> {
    if (this.ws?.readyState !== WebSocket.OPEN) {
      return Promise.reject(new Error("non connecté"));
    }
    const id = this.nextId++;
    return new Promise<T>((resolve, reject) => {
      this.pending.set(id, { resolve: resolve as (v: unknown) => void, reject });
      this.send({ ...payload, id });
    });
  }

  private handleMessage(ev: MessageEvent): void {
    let msg: Record<string, any>;
    try {
      msg = JSON.parse(ev.data as string);
    } catch {
      return;
    }

    switch (msg.type) {
      case "auth_required":
        this.send({ type: "auth", access_token: this.settings.token });
        return;

      case "auth_invalid":
        // Un token révoqué ne se répare pas en réessayant : on s'arrête net
        // et l'UI renvoie vers les réglages.
        this.closedByUs = true;
        this.onStatus("unauthorized", msg.message);
        this.ws?.close();
        return;

      case "auth_ok":
        this.retryDelay = RECONNECT_MIN;
        this.onStatus("connected");
        this.subscribe();
        this.startHeartbeat();
        return;

      case "pong":
        if (this.pongTimer) clearTimeout(this.pongTimer);
        this.pongTimer = null;
        return;

      case "event":
        if (msg.id === this.subscriptionId) this.applyEntitiesEvent(msg.event as EntitiesEvent);
        return;

      case "result": {
        const p = this.pending.get(msg.id);
        if (!p) return;
        this.pending.delete(msg.id);
        if (msg.success) p.resolve(msg.result);
        else p.reject(new Error(msg.error?.message ?? "erreur Home Assistant"));
        return;
      }
    }
  }

  private startHeartbeat(): void {
    this.clearTimers();
    this.pingTimer = setInterval(() => {
      if (this.ws?.readyState !== WebSocket.OPEN) return;
      this.send({ id: this.nextId++, type: "ping" });
      // Pas de pong dans les 10 s : le socket est mort côté réseau
      // (typiquement un wifi qui a changé de point d'accès). On force la relance.
      if (!this.pongTimer) {
        this.pongTimer = setTimeout(() => {
          this.pongTimer = null;
          this.ws?.close();
        }, PING_TIMEOUT);
      }
    }, PING_INTERVAL);
  }

  private async subscribe(): Promise<void> {
    if (this.entityIds.length === 0) return;
    const id = this.nextId++;
    this.subscriptionId = id;
    try {
      await new Promise<void>((resolve, reject) => {
        this.pending.set(id, { resolve: () => resolve(), reject });
        this.send({ id, type: "subscribe_entities", entity_ids: this.entityIds });
      });
    } catch (err) {
      this.subscriptionId = null;
      this.onStatus("error", String(err));
    }
  }

  /** Reconstitue les états complets à partir du format compressé de HA. */
  private applyEntitiesEvent(event: EntitiesEvent): void {
    if (event.a) {
      for (const [entityId, comp] of Object.entries(event.a)) {
        const entity: HaEntity = {
          entity_id: entityId,
          state: comp.s ?? "unknown",
          attributes: (comp.a ?? {}) as HaEntity["attributes"],
          last_changed: comp.lc ? new Date(comp.lc * 1000).toISOString() : undefined,
          last_updated: comp.lu ? new Date(comp.lu * 1000).toISOString() : undefined,
        };
        this.states.set(entityId, entity);
        this.onState(entity);
      }
    }

    if (event.c) {
      for (const [entityId, diff] of Object.entries(event.c)) {
        const prev = this.states.get(entityId);
        if (!prev) continue;
        const next: HaEntity = {
          ...prev,
          attributes: { ...prev.attributes },
        };
        const plus = diff["+"];
        if (plus) {
          if (plus.s !== undefined) next.state = plus.s;
          if (plus.lc !== undefined) next.last_changed = new Date(plus.lc * 1000).toISOString();
          if (plus.lu !== undefined) next.last_updated = new Date(plus.lu * 1000).toISOString();
          if (plus.a) Object.assign(next.attributes, plus.a);
        }
        const minus = diff["-"];
        if (minus?.a) for (const key of minus.a) delete next.attributes[key];

        this.states.set(entityId, next);
        this.onState(next);
      }
    }

    if (event.r) {
      for (const entityId of event.r) this.states.delete(entityId);
    }
  }

  // ---------------------------------------------------------------- commandes

  /**
   * Appelle un service Home Assistant. Passe par le WebSocket déjà ouvert :
   * pas de poignée de main TLS ni de latence d'établissement de connexion,
   * la commande part immédiatement.
   */
  callService(
    domain: string,
    service: string,
    data: Record<string, unknown> = {},
    entityId?: string,
  ): Promise<unknown> {
    return this.request({
      type: "call_service",
      domain,
      service,
      service_data: data,
      ...(entityId ? { target: { entity_id: entityId } } : {}),
    });
  }

  /**
   * Appelle une action qui RENVOIE des données (music_assistant.get_library,
   * .search, .get_queue). Home Assistant range le résultat sous `response`.
   */
  async callServiceWithResponse(
    domain: string,
    service: string,
    data: Record<string, unknown> = {},
    entityId?: string,
  ): Promise<unknown> {
    const result = await this.request<{ response?: unknown }>({
      type: "call_service",
      domain,
      service,
      service_data: data,
      // Certaines actions se ciblent par entité (get_queue), d'autres par entrée
      // de configuration (search, get_library) : les deux doivent être possibles.
      ...(entityId ? { target: { entity_id: entityId } } : {}),
      return_response: true,
    });
    return result?.response ?? result;
  }

  /**
   * Identifiant d'entrée de configuration d'une intégration.
   * Les actions de bibliothèque de Music Assistant se ciblent par là, et cette
   * information n'existe que sur le WebSocket — le REST ne l'expose pas.
   */
  async configEntry(domain: string): Promise<string | null> {
    const entries = await this.request<{ entry_id: string }[]>({
      type: "config_entries/get",
      domain,
    });
    return entries?.[0]?.entry_id ?? null;
  }
}

// -------------------------------------------------------------------- REST

/**
 * Le REST ne sert qu'aux opérations ponctuelles hors flux temps réel :
 * vérifier un token, lister les enceintes au moment de la configuration.
 */
/**
 * Une commande unique, sur un WebSocket ouvert pour l'occasion.
 *
 * POURQUOI PAS L'API REST — c'est le cœur du problème.
 *
 * Home Assistant n'envoie d'en-têtes CORS sur /api/ que pour les origines
 * déclarées dans sa configuration. Depuis n'importe quelle page qu'il ne sert
 * pas lui-même, le navigateur bloque donc la réponse, et l'app concluait
 * « Home Assistant injoignable à cette adresse » alors que le serveur répondait
 * parfaitement. Le WebSocket, lui, n'est pas soumis à cette politique : il
 * marche depuis n'importe où. C'est aussi le chemin qu'utilise déjà toute
 * l'app — le tester revient donc à tester ce qui compte vraiment.
 */
export function wsCommand<T>(settings: Connection, message: Record<string, unknown>): Promise<T> {
  return new Promise((resolve, reject) => {
    const url = baseUrl(settings).replace(/^http/, "ws") + "/api/websocket";
    let socket: WebSocket;
    try {
      socket = new WebSocket(url);
    } catch {
      reject(new Error("Adresse invalide."));
      return;
    }

    const abandon = setTimeout(() => {
      socket.close();
      reject(new Error("Home Assistant ne répond pas à cette adresse."));
    }, 12_000);

    let fini = false;
    const terminer = (erreur: Error | null, valeur?: T) => {
      if (fini) return;
      fini = true;
      clearTimeout(abandon);
      socket.close();
      if (erreur) reject(erreur);
      else resolve(valeur as T);
    };

    socket.onerror = () => terminer(new Error("Home Assistant injoignable à cette adresse."));
    socket.onclose = () => terminer(new Error("Connexion interrompue."));

    socket.onmessage = (event) => {
      const data = JSON.parse(String(event.data)) as Record<string, any>;

      if (data.type === "auth_required") {
        socket.send(JSON.stringify({ type: "auth", access_token: settings.token }));
        return;
      }
      if (data.type === "auth_invalid") {
        terminer(new Error("Jeton refusé par Home Assistant."));
        return;
      }
      if (data.type === "auth_ok") {
        socket.send(JSON.stringify({ ...message, id: 1 }));
        return;
      }
      if (data.type === "result") {
        if (data.success) terminer(null, data.result as T);
        else terminer(new Error(data.error?.message ?? "Commande refusée."));
      }
    };
  });
}

export async function checkConnection(
  settings: Connection,
): Promise<{ ok: boolean; message: string }> {
  try {
    const config = await wsCommand<{ location_name?: string; version?: string }>(settings, {
      type: "get_config",
    });
    const nom = config?.location_name ?? "Home Assistant";
    return { ok: true, message: `Connecté à ${nom}${config?.version ? ` (${config.version})` : ""}` };
  } catch (err) {
    return { ok: false, message: err instanceof Error ? err.message : String(err) };
  }
}

/** Trie les enceintes : celles de Music Assistant d'abord, puis par nom. */
function ordonner(all: HaEntity[]): HaEntity[] {
  return all
    .filter((e) => e.entity_id.startsWith("media_player."))
    .sort((a, b) => {
      // Les enceintes Music Assistant d'abord : ce sont celles qui nous intéressent.
      const am = a.attributes.mass_player_type ? 0 : 1;
      const bm = b.attributes.mass_player_type ? 0 : 1;
      if (am !== bm) return am - bm;
      return (a.attributes.friendly_name ?? a.entity_id).localeCompare(
        b.attributes.friendly_name ?? b.entity_id,
      );
    });
}

/**
 * Les enceintes, par le WebSocket.
 *
 * Même raison que ci-dessus : /api/states est derrière CORS, get_states ne
 * l'est pas. Le sélecteur d'enceintes restait donc vide partout sauf sur la
 * page servie par Home Assistant lui-même.
 */
export async function fetchMediaPlayers(settings: Connection): Promise<HaEntity[]> {
  const all = await wsCommand<HaEntity[]>(settings, { type: "get_states" });
  return ordonner(all);
}

/**
 * Transforme entity_picture en URL affichable.
 *
 * C'est le proxy de Home Assistant, pas le CDN de Deezer : l'URL contient déjà
 * un jeton signé, donc elle fonctionne dans un <img> sans en-tête d'autorisation,
 * elle est sur la même origine que l'app (donc exploitable dans un canvas pour
 * extraire les couleurs) et elle reste joignable même si le CDN ne l'est pas.
 */
export function resolveImage(settings: Connection, path: string | undefined): string | null {
  if (!path) return null;
  // Home Assistant renvoie toujours un chemin absolu ; tout le reste (relatif,
  // data:, URL complète) est déjà exploitable tel quel par le navigateur.
  if (path.startsWith("/")) return baseUrl(settings) + path;
  return path;
}
