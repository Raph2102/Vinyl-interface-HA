/**
 * Mode démonstration : ouvre l'app avec ?demo=1 et elle joue toute seule,
 * sans Home Assistant.
 *
 * Sert à deux choses : régler l'apparence sans dépendre d'une enceinte allumée,
 * et vérifier que l'interpolation de position se comporte bien — le faux lecteur
 * publie exactement le même contrat que Home Assistant (une position figée plus
 * son horodatage), donc rien de spécifique à la démo ne remonte dans l'app.
 */

import { generateCover } from "./covers";
import { readDemoUri } from "./library";
import type { ConnectionStatus, HaEntity, PlayerClient } from "./types";
import { Feature } from "./types";

const TRACKS = [
  { title: "Nuit américaine", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 214 },
  { title: "Le grand bleu tremble", artist: "Atelier Nord", album: "Vagues courtes", duration: 268 },
  { title: "Sillon 3", artist: "Léonie Ferrand", album: "Vagues courtes", duration: 187 },
];


/**
 * Pochettes réelles injectées pour les captures d'écran.
 *
 * Les illustrations de la démonstration sont générées : elles font l'affaire
 * pour régler l'interface, mais elles donnent des captures qui sentent le
 * gabarit. Un outil peut donc poser de vraies pochettes — celles de la
 * bibliothèque Music Assistant de la personne — avant le chargement de la page,
 * et la démonstration s'en sert à la place.
 *
 * Uniquement en mode démonstration, et uniquement lu : rien n'est envoyé nulle
 * part, et l'application livrée ne fabrique jamais cette variable.
 */
export interface DemoAlbum {
  name: string;
  artist: string;
  image: string;
}

export function injectedAlbums(): DemoAlbum[] | null {
  if (!isDemo()) return null;
  const posees = (window as unknown as { __MD_VINYL_ALBUMS__?: DemoAlbum[] })
    .__MD_VINYL_ALBUMS__;
  return Array.isArray(posees) && posees.length > 0 ? posees : null;
}

const FEATURES =
  Feature.PAUSE |
  Feature.SEEK |
  Feature.VOLUME_SET |
  Feature.PREVIOUS_TRACK |
  Feature.NEXT_TRACK |
  Feature.PLAY |
  Feature.SHUFFLE_SET |
  Feature.REPEAT_SET;

/**
 * Les enceintes de la démonstration.
 *
 * Une seule liste, partagée par le sélecteur d'enceintes et par le faux client :
 * quand chacun fabriquait la sienne, changer de pièce produisait deux entrées
 * avec le même identifiant, et la sélection devenait imprévisible.
 */
export const DEMO_SPEAKERS: { entity_id: string; name: string }[] = [
  { entity_id: "media_player.salon", name: "Salon" },
  { entity_id: "media_player.cuisine", name: "Cuisine" },
  { entity_id: "media_player.chambre", name: "Chambre" },
];

/** L'enceinte affichée au premier lancement en démonstration. */
export const DEMO_ENTITY = DEMO_SPEAKERS[0]!.entity_id;

export function demoSpeakerName(entityId: string): string {
  return DEMO_SPEAKERS.find((s) => s.entity_id === entityId)?.name ?? "Salon";
}

export class DemoClient implements PlayerClient {
  onState: (entity: HaEntity) => void = () => {};
  onStatus: (status: ConnectionStatus, detail?: string) => void = () => {};

  private index = 0;
  private position = 12;
  // ?demo=1&paused=1 pour observer le bras au repos sans avoir à cliquer.
  private playing = !new URLSearchParams(window.location.search).has("paused");
  private volume = 0.42;
  private shuffle = false;
  private repeat: "off" | "all" | "one" = "off";
  private timer: ReturnType<typeof setInterval> | null = null;
  /** Album choisi dans la bibliothèque, qui remplace la liste par défaut. */
  private album: { name: string; artist: string } | null = null;
  private cover: string | null = null;
  /**
   * L'enceinte qu'on nous a demandé de suivre. Le faux client publiait jadis
   * « Salon » en dur : changer de pièce ne changeait donc rien à l'écran, et on
   * croyait à un bug du sélecteur alors que c'était la démonstration qui mentait.
   */
  private entityId = DEMO_ENTITY;

  connect(entityIds: string[]): void {
    this.entityId = entityIds[0] || DEMO_ENTITY;
    this.onStatus("connected");
    this.publish();
    // Une seconde, comme le rythme réel des mises à jour de Home Assistant :
    // c'est bien l'interpolation qui doit produire le mouvement, pas ce minuteur.
    this.timer = setInterval(() => {
      if (this.playing) {
        this.position += 1;
        const track = TRACKS[this.index];
        if (track && this.position >= track.duration) {
          this.index = (this.index + 1) % TRACKS.length;
          this.position = 0;
        }
      }
      this.publish();
    }, 1000);
  }

  close(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }

  callService(
    _domain: string,
    service: string,
    data: Record<string, unknown> = {},
  ): Promise<unknown> {
    switch (service) {
      case "media_play_pause":
        this.playing = !this.playing;
        break;
      case "media_play":
        this.playing = true;
        break;
      case "media_pause":
        this.playing = false;
        break;
      case "media_next_track":
        this.index = (this.index + 1) % TRACKS.length;
        this.position = 0;
        break;
      case "media_previous_track":
        // Comme sur un vrai lecteur : on revient au début avant de changer de piste.
        if (this.position > 3) this.position = 0;
        else {
          this.index = (this.index - 1 + TRACKS.length) % TRACKS.length;
          this.position = 0;
        }
        break;
      case "media_seek":
        this.position = Number(data.seek_position ?? 0);
        break;
      case "volume_set":
        this.volume = Number(data.volume_level ?? this.volume);
        break;
      case "shuffle_set":
        this.shuffle = Boolean(data.shuffle);
        break;
      case "repeat_set":
        this.repeat = (data.repeat as typeof this.repeat) ?? "off";
        break;
      case "play_media": {
        // Album choisi dans le bac : on bascule dessus, pochette comprise, pour
        // que la boucle complète (bibliothèque -> platine -> fond adaptatif)
        // soit réellement parcourue en démonstration.
        const chosen = readDemoUri(String(data.media_id ?? ""));
        if (chosen) {
          this.album = chosen;
          this.cover = generateCover(`${chosen.name} ${chosen.artist}`);
          this.index = 0;
          this.position = 0;
          this.playing = true;
        }
        break;
      }
    }
    this.publish();
    return Promise.resolve(null);
  }

  private publish(): void {
    const track = TRACKS[this.index] ?? TRACKS[0]!;
    // Une vraie pochette prend le pas sur le morceau fictif, titre compris :
    // une capture où la pochette et le titre ne se répondent pas se remarque.
    const vraies = injectedAlbums();
    const vraie = vraies ? vraies[this.index % vraies.length] : null;
    this.onState({
      entity_id: this.entityId,
      state: this.playing ? "playing" : "paused",
      attributes: {
        friendly_name: demoSpeakerName(this.entityId),
        supported_features: FEATURES,
        media_title: vraie
          ? vraie.name
          : this.album
            ? `${this.album.name} · piste ${this.index + 1}`
            : track.title,
        media_artist: vraie ? vraie.artist : this.album ? this.album.artist : track.artist,
        media_album_name: vraie ? vraie.name : this.album ? this.album.name : track.album,
        media_duration: track.duration,
        media_position: this.position,
        media_position_updated_at: new Date().toISOString(),
        entity_picture: this.cover ?? vraie?.image ?? "./demo-cover.png",
        volume_level: this.volume,
        is_volume_muted: false,
        shuffle: this.shuffle,
        repeat: this.repeat,
        mass_player_type: "player",
      },
      last_updated: new Date().toISOString(),
    });
  }
}

export function isDemo(): boolean {
  return new URLSearchParams(window.location.search).has("demo");
}

/**
 * Surcharges d'apparence par l'URL, pour comparer deux rendus côte à côte sans
 * passer par les réglages : ?demo=1&vinyl=black&bg=neutral
 */
export function demoOverrides(): Partial<{ vinyl: string; background: string }> {
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  const vinyl = params.get("vinyl");
  const bg = params.get("bg");
  if (vinyl) out.vinyl = vinyl;
  if (bg) out.background = bg;
  return out;
}

/** Paroles factices, pour régler l'affichage sans dépendre de LRCLIB. */
export const DEMO_LRC = `[00:08.40] Le soir tombe sur les toits gris
[00:13.10] Et la ville allume ses fenêtres
[00:18.60] On ne sait plus très bien qui parle
[00:23.90] Ni depuis quand la nuit s'installe
[00:29.50]
[00:33.20] Tu poses l'aiguille et tout revient
[00:38.80] Le grain, le souffle, le refrain
[00:44.20] Rien ne presse, rien ne s'efface
[00:49.70] La chanson tourne et prend sa place
[00:55.30]
[01:00.10] Nuit américaine
[01:05.60] Le jour filmé dans le noir
[01:11.20] Nuit américaine
[01:16.80] On y croit quand même, ce soir`;
