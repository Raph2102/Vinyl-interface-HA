import { useEffect, useLayoutEffect, useRef } from "react";
import type { Lyrics } from "../lib/lyrics";

interface LyricsPaneProps {
  lyrics: Lyrics;
  activeIndex: number;
  loading: boolean;
  onClose: () => void;
  onSeek: (seconds: number) => void;
}

export function LyricsPane({ lyrics, activeIndex, loading, onClose, onSeek }: LyricsPaneProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // Recentrage sur la ligne en cours. On déplace le bloc plutôt que d'utiliser
  // scrollTop : la transition CSS donne un glissement continu, là où un défilement
  // programmé saccade dès que deux lignes s'enchaînent vite.
  useLayoutEffect(() => {
    const scroll = scrollRef.current;
    const inner = innerRef.current;
    if (!scroll || !inner) return;

    // Avant la première ligne (activeIndex = −1), on cale sur la ligne 1 plutôt
    // que sur le milieu du bloc : sinon le texte démarre n'importe où.
    const line = lineRefs.current[activeIndex] ?? lineRefs.current[0];
    if (!line) return;

    const offset = scroll.clientHeight / 2 - (line.offsetTop + line.offsetHeight / 2);
    inner.style.transform = `translateY(${offset}px)`;
  }, [activeIndex, lyrics]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const hasSynced = lyrics.synced && lyrics.lines.length > 0;

  return (
    <div className="lyrics" onClick={onClose}>
      {loading && <p className="lyrics__empty">Recherche des paroles…</p>}

      {!loading && lyrics.instrumental && <p className="lyrics__empty">Morceau instrumental</p>}

      {!loading && !lyrics.instrumental && !hasSynced && !lyrics.plain && (
        <p className="lyrics__empty">Pas de paroles trouvées pour ce morceau</p>
      )}

      {!loading && !hasSynced && lyrics.plain && (
        <div className="lyrics__scroll" ref={scrollRef}>
          <div className="lyrics__inner" ref={innerRef}>
            {lyrics.plain.split("\n").map((text, i) => (
              <p className="lyrics__line" key={i} data-active="true">
                {text || " "}
              </p>
            ))}
          </div>
        </div>
      )}

      {!loading && hasSynced && (
        <div className="lyrics__scroll" ref={scrollRef}>
          <div className="lyrics__inner" ref={innerRef}>
            {lyrics.lines.map((line, i) => (
              <p
                key={i}
                className="lyrics__line"
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                data-active={i === activeIndex}
                data-past={i < activeIndex}
                // Une ligne de paroles est le repère le plus naturel pour
                // revenir en arrière : on la rend cliquable.
                onClick={(e) => {
                  e.stopPropagation();
                  onSeek(line.time);
                }}
              >
                {line.text || " "}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
