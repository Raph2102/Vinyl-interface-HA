import type { HaEntity } from "../lib/types";
import { Feature, supports } from "../lib/types";

interface ControlsProps {
  entity: HaEntity | null;
  playing: boolean;
  /** Faux quand c'est le bras qui commande : plus aucun bouton lecture. */
  showPlayButton: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onVolume: (value: number) => void;
}

const Icon = {
  prev: "M7 6h2.5v12H7zm2.9 6 8.6 6V6z",
  next: "M14.5 6H17v12h-2.5zm-.4 6L5.5 18V6z",
  play: "M8 5.2v13.6L19 12z",
  pause: "M7 5h3.4v14H7zm6.6 0H17v14h-3.4z",
  shuffle:
    "M17 3.5 21.5 8 17 12.5V9.5h-2.2c-.9 0-1.5.4-2.1 1.2l-1 1.3-1.3-1.7.8-1.1c1-1.3 2.2-2 3.6-2H17zM2.5 8h3.4c1.4 0 2.6.7 3.6 2l4.2 5.6c.6.8 1.2 1.2 2.1 1.2H17v-3l4.5 4.5L17 22.8v-3h-1.8c-1.4 0-2.6-.7-3.6-2L7.4 12.2c-.6-.8-1.2-1.2-2.1-1.2H2.5zm0 8h3.4c.5 0 .9-.1 1.3-.4l1.3 1.7c-.8.5-1.7.7-2.6.7H2.5z",
  repeat:
    "M7.5 4h9A4.5 4.5 0 0 1 21 8.5v2h-2.2v-2A2.3 2.3 0 0 0 16.5 6.2h-9V9L3 5.6 7.5 2.2zm9 18h-9A4.5 4.5 0 0 1 3 17.5v-2h2.2v2c0 1.3 1 2.3 2.3 2.3h9V17l4.5 3.4-4.5 3.4z",
  volume: "M4 9.5h3.2L12 5.2v13.6L7.2 14.5H4zm11.6-1.3a5 5 0 0 1 0 7.6l-1.4-1.6a3 3 0 0 0 0-4.4z",
  muted: "M4 9.5h3.2L12 5.2v13.6L7.2 14.5H4zm11 1.1 1.5-1.5 1.9 1.9 1.9-1.9 1.5 1.5-1.9 1.9 1.9 1.9-1.5 1.5-1.9-1.9-1.9 1.9-1.5-1.5 1.9-1.9z",
  lyrics: "M4 5h11v2H4zm0 4h16v2H4zm0 4h11v2H4zm0 4h16v2H4z",
  // Trois pochettes penchées dans un bac : l'image de la bibliothèque.
  crate: "M4 4h2.6v16H4zm4 0h2.6l1.4 16H9.4zm4.9 0h2.6l2.4 16h-2.6zm5.6 0H21v16h-2.5z",
  // Une liste dont les dernières lignes portent une note : ce qui va suivre.
  queue: "M3 5h12v2H3zm0 4h12v2H3zm0 4h8v2H3zm0 4h8v2H3zm14.5-12L21 4.4v9.9a2.8 2.8 0 1 1-2-2.7V6.6l-1.5.4z",
  // Un haut-parleur : le choix de la pièce.
  speaker:
    "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm5 2.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm0 4.4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
  // Roue crantée : le second sous-tracé creuse le moyeu grâce à evenodd.
  gear:
    "M10.8 2.6a1 1 0 0 0-1 .9l-.2 1.9c-.6.2-1.1.5-1.6.9l-1.8-.8a1 1 0 0 0-1.3.3L3.4 8.4a1 1 0 0 0 .3 1.3l1.5 1.1a7.4 7.4 0 0 0 0 2.4l-1.5 1.1a1 1 0 0 0-.3 1.3l1.5 2.6a1 1 0 0 0 1.3.3l1.8-.8c.5.4 1 .7 1.6.9l.2 1.9a1 1 0 0 0 1 .9h2.4a1 1 0 0 0 1-.9l.2-1.9c.6-.2 1.1-.5 1.6-.9l1.8.8a1 1 0 0 0 1.3-.3l1.5-2.6a1 1 0 0 0-.3-1.3l-1.5-1.1a7.4 7.4 0 0 0 0-2.4l1.5-1.1a1 1 0 0 0 .3-1.3l-1.5-2.6a1 1 0 0 0-1.3-.3l-1.8.8a7.4 7.4 0 0 0-1.6-.9l-.2-1.9a1 1 0 0 0-1-.9zM12 8.6a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8z",
};

function Glyph({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} fillRule="evenodd" />
    </svg>
  );
}

export function Controls({
  entity,
  playing,
  showPlayButton,
  onPlayPause,
  onPrevious,
  onNext,
  onVolume,
}: ControlsProps) {
  const attrs = entity?.attributes;
  const volume = attrs?.volume_level ?? 0;
  const muted = attrs?.is_volume_muted === true;

  const canVolume = supports(entity, Feature.VOLUME_SET);
  const canPrev = supports(entity, Feature.PREVIOUS_TRACK);
  const canNext = supports(entity, Feature.NEXT_TRACK);

  return (
    <div className="controls">
      <button
        className="iconbtn"
        aria-label="Morceau précédent"
        title="Précédent"
        disabled={!canPrev}
        onClick={onPrevious}
      >
        <Glyph d={Icon.prev} />
      </button>

      {showPlayButton && (
        <button
          className="iconbtn iconbtn--play"
          aria-label={playing ? "Pause" : "Lecture"}
          title={playing ? "Pause" : "Lecture"}
          onClick={onPlayPause}
        >
          <Glyph d={playing ? Icon.pause : Icon.play} />
        </button>
      )}

      <button
        className="iconbtn"
        aria-label="Morceau suivant"
        title="Suivant"
        disabled={!canNext}
        onClick={onNext}
      >
        <Glyph d={Icon.next} />
      </button>

      {canVolume && (
        <div className="volume">
          <Glyph d={muted || volume === 0 ? Icon.muted : Icon.volume} />
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(volume * 100)}
            aria-label="Volume"
            onChange={(e) => onVolume(Number(e.target.value) / 100)}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Barre du haut : le nom de la pièce, puis les réglages d'écoute.
 *
 * Aléatoire et répétition ont quitté la barre du bas. Ce ne sont pas des gestes
 * de transport mais des modes, qu'on règle une fois et qu'on oublie : ils ont
 * leur place ici, discrets, plutôt qu'au milieu des boutons qu'on touche à
 * chaque morceau.
 */
export function TopBar({
  entity,
  onLibrary,
  onQueue,
  onSpeakers,
  queueOn,
  onSettings,
  onLyrics,
  onShuffle,
  onRepeat,
  lyricsOn,
  lyricsAvailable,
  name,
}: {
  entity: HaEntity | null;
  onLibrary: () => void;
  onQueue: () => void;
  onSpeakers: () => void;
  queueOn: boolean;
  onSettings: () => void;
  onLyrics: () => void;
  onShuffle: (value: boolean) => void;
  onRepeat: () => void;
  lyricsOn: boolean;
  lyricsAvailable: boolean;
  name: string;
}) {
  const attrs = entity?.attributes;
  const shuffleOn = attrs?.shuffle === true;
  const repeat = attrs?.repeat ?? "off";
  const canShuffle = supports(entity, Feature.SHUFFLE_SET);
  const canRepeat = supports(entity, Feature.REPEAT_SET);

  return (
    <div className="hud__top">
      <span className="hud__left">
        {/* Le passage à la bibliothèque est à gauche, à l'opposé des réglages
            d'écoute : c'est un changement de lieu, pas un réglage. */}
        <button
          className="iconbtn iconbtn--small"
          aria-label="Bibliothèque"
          title="Bibliothèque"
          onClick={onLibrary}
        >
          <Glyph d={Icon.crate} />
        </button>
        <button className="hud__room" onClick={onSpeakers} title="Changer d'enceinte">
          <span className="hud__name">{name}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="hud__chev">
            <path d="M7 10l5 5 5-5z" fill="currentColor" />
          </svg>
        </button>
      </span>
      <span className="hud__tools">
        <button
          className="iconbtn iconbtn--small"
          aria-pressed={queueOn}
          aria-label="File d'attente"
          title="À suivre"
          onClick={onQueue}
        >
          <Glyph d={Icon.queue} />
        </button>

        {canShuffle && (
          <button
            className="iconbtn iconbtn--small"
            aria-pressed={shuffleOn}
            aria-label="Lecture aléatoire"
            title="Lecture aléatoire"
            onClick={() => onShuffle(!shuffleOn)}
          >
            <Glyph d={Icon.shuffle} />
          </button>
        )}

        {canRepeat && (
          <button
            className="iconbtn iconbtn--small"
            aria-pressed={repeat !== "off"}
            aria-label="Répétition"
            title={
              repeat === "one"
                ? "Répéter ce morceau"
                : repeat === "all"
                  ? "Répéter tout"
                  : "Répétition"
            }
            onClick={onRepeat}
          >
            <Glyph d={Icon.repeat} />
            {repeat === "one" && <span className="badge-one">1</span>}
          </button>
        )}

        {lyricsAvailable && (
          <button
            className="iconbtn iconbtn--small"
            aria-pressed={lyricsOn}
            aria-label="Paroles"
            title="Paroles"
            onClick={onLyrics}
          >
            <Glyph d={Icon.lyrics} />
          </button>
        )}

        <button
          className="iconbtn iconbtn--small"
          aria-label="Réglages"
          title="Réglages"
          onClick={onSettings}
        >
          <Glyph d={Icon.gear} />
        </button>
      </span>
    </div>
  );
}
