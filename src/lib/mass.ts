/**
 * Music Assistant en direct, par l'ingress de Home Assistant.
 *
 * POURQUOI CE DÉTOUR — c'était la cause de la file vide.
 *
 * L'action `music_assistant.get_queue` de Home Assistant ne rend PAS la file :
 * elle rend un résumé. Relevé sur une vraie installation (HA 2026.9, MA 2.10) :
 *
 *   { "media_player.salon": { queue_id, items: 22, current_index: 2,
 *                             current_item: {…}, next_item: {…} } }
 *
 * `items` y est un NOMBRE, pas une liste, et le tout est rangé sous l'entité.
 * On ne peut donc y lire que le morceau en cours et le suivant. Quant à
 * déplacer un morceau, Home Assistant n'expose aucune action pour ça.
 *
 * Music Assistant, lui, a tout — `player_queues/items`, `move_item`,
 * `play_index` — sur sa propre API. Elle exige une authentification, SAUF
 * quand on l'atteint par l'ingress de Home Assistant : c'est ainsi que le
 * panneau Music Assistant de la barre latérale s'affiche sans rien demander.
 * On emprunte exactement le même chemin :
 *
 *   1. le superviseur donne l'adresse d'ingress du module Music Assistant ;
 *   2. il délivre une session d'ingress, posée en cookie ;
 *   3. le WebSocket de Music Assistant s'ouvre à travers cette adresse, déjà
 *      authentifié au nom de la personne connectée à Home Assistant.
 *
 * Rien à configurer. La contrepartie : il faut que Music Assistant tourne en
 * module complémentaire (Home Assistant OS ou supervisé) et un compte
 * administrateur — le superviseur n'ouvre son API qu'à eux. Ailleurs, la
 * liaison se déclare indisponible et l'app se replie sur ce que Home
 * Assistant sait dire.
 */

/** Ce qu'il faut de Home Assistant : sa commande WebSocket, rien d'autre. */
export interface WsCaller {
  callWS<T = unknown>(message: Record<string, unknown>): Promise<T>;
}

export interface MassEvent {
  event: string;
  object_id?: string;
  data?: unknown;
}

type Waiting = {
  resolve: (value: unknown) => void;
  reject: (reason: Error) => void;
  timer: ReturnType<typeof setTimeout>;
  /** Morceaux déjà reçus d'une réponse livrée en plusieurs fois. */
  parts: unknown[];
};

const COMMAND_TIMEOUT = 15_000;
const OPEN_TIMEOUT = 8_000;
/** Le superviseur périme une session d'ingress laissée sans nouvelles. */
const SESSION_REFRESH = 60_000;
/** Après un échec passager, on ne réessaie pas à chaque clic. */
const RETRY_AFTER = 10_000;

export class MassLink {
  private ws: WebSocket | null = null;
  private opening: Promise<boolean> | null = null;
  private waiting = new Map<string, Waiting>();
  private listeners = new Set<(event: MassEvent) => void>();
  private nextId = 1;
  private ingress: string | null = null;
  private session: string | null = null;
  private keepAlive: ReturnType<typeof setInterval> | null = null;
  private reconnect: ReturnType<typeof setTimeout> | null = null;
  private failedAt = 0;
  private closed = false;
  /** Adresse que Music Assistant donne à ses propres images (son base_url). */
  private serverBase: string | null = null;

  /**
   * Raison pour laquelle la liaison est impossible sur cette installation, et
   * le restera : pas de superviseur, pas de module, compte non administrateur.
   * null tant qu'on n'en sait rien, ou si la liaison marche.
   */
  unavailable: string | null = null;

  constructor(
    private readonly ha: WsCaller,
    /** Origine de Home Assistant, celle qui sert l'ingress. */
    private readonly origin: string = window.location.origin,
  ) {}

  get connected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  /** Établit la liaison si besoin. Vrai si elle est utilisable. */
  ready(): Promise<boolean> {
    if (this.closed || this.unavailable) return Promise.resolve(false);
    if (this.connected) return Promise.resolve(true);
    if (Date.now() - this.failedAt < RETRY_AFTER) return Promise.resolve(false);
    this.opening ??= this.open().finally(() => {
      this.opening = null;
    });
    return this.opening;
  }

  /** Envoie une commande à Music Assistant et attend sa réponse. */
  async command<T = unknown>(command: string, args: Record<string, unknown> = {}): Promise<T> {
    if (!(await this.ready()) || !this.ws) {
      throw new Error(this.unavailable ?? "Music Assistant injoignable");
    }
    const ws = this.ws;
    const id = String(this.nextId++);
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.waiting.delete(id);
        reject(new Error(`Music Assistant ne répond pas (${command})`));
      }, COMMAND_TIMEOUT);
      this.waiting.set(id, { resolve: resolve as (v: unknown) => void, reject, timer, parts: [] });
      ws.send(JSON.stringify({ message_id: id, command, args }));
    });
  }

  /**
   * Écoute les événements de Music Assistant. Il les envoie d'office à tout
   * client connecté : c'est ce qui permet à la file de se remplir sous nos yeux
   * quand on lance un album, sans relire en boucle.
   */
  onEvent(listener: (event: MassEvent) => void): () => void {
    this.listeners.add(listener);
    void this.ready();
    return () => this.listeners.delete(listener);
  }

  /**
   * Les images des playlists générées par Music Assistant pointent vers son
   * propre serveur (http://192.168.x.x:8095/imageproxy/…). Depuis une page en
   * https, le navigateur les bloque ; depuis l'extérieur, l'adresse n'existe
   * pas. L'ingress sert les mêmes chemins, sur notre origine : on y réécrit.
   */
  imageUrl(url: string | null): string | null {
    if (!url || !this.ingress || !this.serverBase) return url;
    if (!url.startsWith(this.serverBase)) return url;
    const rest = url.slice(this.serverBase.length).replace(/^\/+/, "");
    return this.origin + this.ingress + rest;
  }

  close(): void {
    this.closed = true;
    if (this.keepAlive) clearInterval(this.keepAlive);
    if (this.reconnect) clearTimeout(this.reconnect);
    this.keepAlive = null;
    this.reconnect = null;
    this.listeners.clear();
    this.ws?.close();
    this.ws = null;
  }

  // ------------------------------------------------------------ établissement

  private async open(): Promise<boolean> {
    try {
      if (!this.ingress) this.ingress = await this.findIngress();
      if (!this.ingress) return false;
      await this.ensureSession();
      return await this.openSocket();
    } catch (err) {
      this.failedAt = Date.now();
      // Refus du superviseur : c'est une question de droits, pas de réseau.
      const texte = err instanceof Error ? err.message : String(err);
      if (/unauthori|admin|forbidden|401/i.test(texte)) {
        this.unavailable = "La file complète demande un compte administrateur de Home Assistant.";
      }
      return false;
    }
  }

  /** Adresse d'ingress du module Music Assistant, ou null s'il n'y en a pas. */
  private async findIngress(): Promise<string | null> {
    let liste: { slug: string; name?: string; state?: string }[];
    try {
      const reponse = await this.ha.callWS<{ addons?: typeof liste }>({
        type: "supervisor/api",
        endpoint: "/addons",
        method: "get",
      });
      liste = reponse?.addons ?? [];
    } catch (err) {
      const texte = err instanceof Error ? err.message : String(err);
      this.unavailable = /unauthori|admin/i.test(texte)
        ? "La file complète demande un compte administrateur de Home Assistant."
        : "La file complète passe par le module Music Assistant de Home Assistant, absent de cette installation.";
      return null;
    }

    // Le module officiel s'appelle « …_music_assistant », sa version bêta
    // « …_music_assistant_beta ». On préfère celui qui tourne.
    const candidats = liste.filter((a) => /music_assistant/i.test(a.slug));
    const module = candidats.find((a) => a.state === "started") ?? candidats[0];
    if (!module) {
      this.unavailable =
        "La file complète passe par le module Music Assistant de Home Assistant, absent de cette installation.";
      return null;
    }

    const info = await this.ha.callWS<{ ingress?: boolean; ingress_url?: string | null }>({
      type: "supervisor/api",
      endpoint: `/addons/${module.slug}/info`,
      method: "get",
    });
    if (!info?.ingress || !info.ingress_url) {
      this.unavailable = "Le module Music Assistant n'expose pas d'ingress.";
      return null;
    }
    return info.ingress_url.endsWith("/") ? info.ingress_url : info.ingress_url + "/";
  }

  /**
   * Une session d'ingress valide, posée en cookie.
   *
   * Le cookie est PARTAGÉ avec le frontend : le panneau Music Assistant de la
   * barre latérale pose le sien au même endroit, et on ne peut pas le lire
   * pour le réutiliser — un cookie restreint à /api/hassio_ingress/ est
   * invisible depuis la page. On fait donc comme le frontend : chacun tient sa
   * propre session en vie et réaffirme son cookie à chaque validation. Les deux
   * sessions restent valides tant que leurs onglets vivent, et le cookie
   * présent, quel qu'il soit, ouvre la porte à tout le monde.
   */
  private async ensureSession(): Promise<void> {
    if (!this.session || !(await this.validate(this.session))) {
      const neuve = await this.ha.callWS<{ session: string }>({
        type: "supervisor/api",
        endpoint: "/ingress/session",
        method: "post",
      });
      this.session = neuve.session;
    }
    writeSessionCookie(this.session);

    // Sans nouvelles, le superviseur périme la session au bout de quelques
    // minutes : on la tient en vie tant que la liaison nous sert.
    if (!this.keepAlive) {
      this.keepAlive = setInterval(() => {
        if (!this.session || this.closed) return;
        const session = this.session;
        void this.validate(session).then((ok) => {
          if (ok) {
            writeSessionCookie(session);
          } else {
            this.session = null;
            void this.ensureSession().catch(() => {});
          }
        });
      }, SESSION_REFRESH);
    }
  }

  private async validate(session: string): Promise<boolean> {
    try {
      await this.ha.callWS({
        type: "supervisor/api",
        endpoint: "/ingress/validate_session",
        method: "post",
        data: { session },
      });
      return true;
    } catch {
      return false;
    }
  }

  private openSocket(): Promise<boolean> {
    return new Promise((resolve) => {
      const url = this.origin.replace(/^http/, "ws") + this.ingress + "ws";
      let ws: WebSocket;
      try {
        ws = new WebSocket(url);
      } catch {
        this.failedAt = Date.now();
        resolve(false);
        return;
      }

      let settled = false;
      const settle = (ok: boolean) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        if (!ok) {
          this.failedAt = Date.now();
          ws.close();
        }
        resolve(ok);
      };
      const timer = setTimeout(() => settle(false), OPEN_TIMEOUT);

      ws.onmessage = (ev) => {
        let msg: Record<string, any>;
        try {
          msg = JSON.parse(String(ev.data));
        } catch {
          return;
        }
        // Premier message : la carte d'identité du serveur. La liaison est prête.
        if (!settled && msg.server_version) {
          this.serverBase = typeof msg.base_url === "string" ? msg.base_url.replace(/\/+$/, "") : null;
          this.ws = ws;
          settle(true);
          return;
        }
        this.handle(msg);
      };
      ws.onerror = () => settle(false);
      ws.onclose = () => {
        settle(false);
        if (this.ws !== ws) return;
        this.ws = null;
        for (const w of this.waiting.values()) {
          clearTimeout(w.timer);
          w.reject(new Error("liaison Music Assistant fermée"));
        }
        this.waiting.clear();
        // Quelqu'un écoute encore (la file est ouverte) : on se relève seul.
        if (!this.closed && this.listeners.size > 0) {
          this.reconnect = setTimeout(() => {
            this.reconnect = null;
            this.failedAt = 0;
            void this.ready();
          }, 3000);
        }
      };
    });
  }

  private handle(msg: Record<string, any>): void {
    if (msg.message_id !== undefined) {
      const id = String(msg.message_id);
      const w = this.waiting.get(id);
      if (!w) return;

      if (msg.error_code !== undefined) {
        clearTimeout(w.timer);
        this.waiting.delete(id);
        w.reject(new Error(String(msg.details ?? msg.error_code)));
        return;
      }
      // Une longue liste arrive en plusieurs messages : on les recolle.
      if (msg.partial) {
        if (Array.isArray(msg.result)) w.parts.push(...msg.result);
        return;
      }
      clearTimeout(w.timer);
      this.waiting.delete(id);
      w.resolve(
        w.parts.length > 0 && Array.isArray(msg.result) ? [...w.parts, ...msg.result] : msg.result,
      );
      return;
    }

    if (typeof msg.event === "string") {
      for (const listener of this.listeners) listener(msg as MassEvent);
    }
  }
}

/** Exactement le cookie que pose le frontend de Home Assistant. */
function writeSessionCookie(session: string): void {
  const secure = window.location.protocol === "https:" ? ";Secure" : "";
  document.cookie = `ingress_session=${session};path=/api/hassio_ingress/;SameSite=Strict${secure}`;
}
