/**
 * La file d'attente : ce qui va suivre sur l'enceinte, de quoi y sauter, et de
 * quoi la réordonner.
 *
 * Music Assistant tient une file par lecteur : changer d'enceinte change donc
 * de file, ce qui est exactement le comportement attendu.
 *
 * Chaque ligne est une commande, pas une étiquette : on touche la piste 3 pour
 * y aller. Et chaque morceau à venir se déplace — par sa poignée à trois
 * barres, ou par un appui long n'importe où sur la ligne, comme dans les
 * listes d'iOS et d'Android.
 */

import { useEffect, useLayoutEffect, useRef } from "react";
import { flushSync } from "react-dom";
import type { QueueItem } from "../lib/library";
import { formatTime } from "../lib/position";

interface QueueProps {
  items: QueueItem[];
  loading: boolean;
  error: string | null;
  /** Rang du morceau en cours, tel que Music Assistant le donne. -1 s'il est inconnu. */
  current: number;
  /** Dernier rang déjà chargé par le lecteur : rien ne se déplace jusque-là. */
  locked: number;
  /** La file est complète et se réordonne ; sinon ce n'est qu'un aperçu. */
  full: boolean;
  total: number;
  /** Explication quand on ne montre qu'un aperçu. */
  note: string | null;
  /** Morceau sur lequel on vient de sauter, tant que la file n'a pas suivi. */
  pending: string | null;
  onPick: (item: QueueItem) => void;
  onMove: (from: number, to: number) => void;
  /** Prévient quand une ligne est prise, puis lâchée. */
  onSorting?: (active: boolean) => void;
  onClose: () => void;
}

/** Durée d'appui qui transforme un toucher en prise. */
const LONG_PRESS = 380;
/** Au-delà de ce déplacement avant la prise, c'est qu'on fait défiler. */
const SLOP = 8;
/** Bande, en haut et en bas de la liste, où la liste défile d'elle-même. */
const EDGE = 56;

interface Drag {
  from: number;
  to: number;
  /** Distance entre deux lignes, mesurée. */
  pitch: number;
  startY: number;
  lastY: number;
  startScroll: number;
  rows: HTMLElement[];
  min: number;
  raf: number;
}

export function Queue({
  items,
  loading,
  error,
  current,
  locked,
  full,
  total,
  note,
  pending,
  onPick,
  onMove,
  onSorting,
  onClose,
}: QueueProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const drag = useRef<Drag | null>(null);
  /** La prise vient d'un appui long : le clic qui suit ne doit pas sauter. */
  const swallowClick = useRef(false);
  const placed = useRef(false);

  const movable = (index: number) => full && index > locked && index < items.length;

  // Les mesures et les mouvements sont écrits à la main : pendant le geste, React
  // ne redessine rien, et la liste reste fluide même longue.
  const place = (d: Drag) => {
    const list = listRef.current;
    if (!list) return;
    const dy = d.lastY - d.startY + (list.scrollTop - d.startScroll);
    const to = Math.max(d.min, Math.min(d.rows.length - 1, d.from + Math.round(dy / d.pitch)));

    d.rows[d.from]!.style.transform = `translateY(${dy}px) scale(1.02)`;

    if (to !== d.to) {
      d.to = to;
      d.rows.forEach((row, k) => {
        if (k === d.from) return;
        const shift =
          d.from < k && k <= to ? -d.pitch : to <= k && k < d.from ? d.pitch : 0;
        row.style.transform = shift ? `translateY(${shift}px)` : "";
      });
      navigator.vibrate?.(6);
    }
  };

  const start = (index: number, clientY: number) => {
    const list = listRef.current;
    if (!list || drag.current || !movable(index)) return;

    const rows = [...list.querySelectorAll<HTMLElement>(":scope > .queue__item")];
    const row = rows[index];
    if (!row) return;
    const pitch =
      rows.length > 1 ? rows[1]!.offsetTop - rows[0]!.offsetTop : row.offsetHeight || 64;

    const d: Drag = {
      from: index,
      to: index,
      pitch,
      startY: clientY,
      lastY: clientY,
      startScroll: list.scrollTop,
      rows,
      min: Math.max(0, locked + 1),
      raf: 0,
    };
    drag.current = d;
    onSorting?.(true);
    list.dataset.sorting = "true";
    row.dataset.lifted = "true";
    navigator.vibrate?.(12);

    // Près des bords, la liste défile toute seule : on peut emmener un morceau
    // de la fin de la file jusqu'au prochain à jouer d'un seul geste.
    const scroll = () => {
      const box = list.getBoundingClientRect();
      let v = 0;
      if (d.lastY < box.top + EDGE) v = -((box.top + EDGE - d.lastY) / EDGE) * 14;
      else if (d.lastY > box.bottom - EDGE) v = ((d.lastY - (box.bottom - EDGE)) / EDGE) * 14;
      if (v) {
        list.scrollTop += v;
        place(d);
      }
      d.raf = requestAnimationFrame(scroll);
    };
    d.raf = requestAnimationFrame(scroll);

    const move = (e: PointerEvent) => {
      d.lastY = e.clientY;
      place(d);
    };
    const end = (e: PointerEvent) => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      finish(e.type === "pointerup");
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
  };

  const finish = (commit: boolean) => {
    const d = drag.current;
    const list = listRef.current;
    if (!d || !list) return;
    cancelAnimationFrame(d.raf);
    drag.current = null;

    const row = d.rows[d.from]!;
    const moved = commit && d.to !== d.from;
    // La ligne va se poser exactement dans sa case, puis on range pour de bon.
    row.style.transition = "transform 150ms cubic-bezier(0.22, 1, 0.36, 1)";
    row.style.transform = moved ? `translateY(${(d.to - d.from) * d.pitch}px)` : "";
    if (!moved) for (const r of d.rows) if (r !== row) r.style.transform = "";

    window.setTimeout(() => {
      /*
       * Le nouvel ordre et l'effacement des décalages doivent tomber dans la
       * MÊME image : sinon on verrait, le temps d'une image, les lignes à la
       * fois déplacées par le DOM et encore décalées par leur transformation.
       * flushSync force React à ranger la liste tout de suite.
       */
      list.dataset.settling = "true";
      if (moved) flushSync(() => onMove(d.from, d.to));
      for (const r of d.rows) {
        r.style.transform = "";
        r.style.transition = "";
      }
      delete row.dataset.lifted;
      delete list.dataset.sorting;
      onSorting?.(false);
      requestAnimationFrame(() => requestAnimationFrame(() => delete list.dataset.settling));
    }, 150);
  };

  /** Appui long sur la ligne : une prise, pas un saut ni un défilement. */
  const press = (index: number, e: React.PointerEvent) => {
    if (!movable(index) || (e.pointerType === "mouse" && e.button !== 0)) return;
    const x0 = e.clientX;
    const y0 = e.clientY;
    let y = y0;
    const timer = window.setTimeout(() => {
      cleanup();
      swallowClick.current = true;
      start(index, y);
    }, LONG_PRESS);
    const move = (ev: PointerEvent) => {
      y = ev.clientY;
      if (Math.hypot(ev.clientX - x0, ev.clientY - y0) > SLOP) cleanup();
    };
    const cleanup = () => {
      clearTimeout(timer);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", cleanup);
      window.removeEventListener("pointercancel", cleanup);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", cleanup);
    window.addEventListener("pointercancel", cleanup);
  };

  /*
   * Une fois la ligne prise, le doigt ne doit plus faire défiler la liste. Seul
   * un écouteur NON passif peut l'interdire, et React n'en pose que des
   * passifs : on le pose nous-mêmes.
   */
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const bloquer = (e: Event) => {
      if (drag.current) e.preventDefault();
    };
    // Sur Android, un appui long ouvre le menu contextuel : pas ici.
    const menu = (e: Event) => e.preventDefault();
    list.addEventListener("touchmove", bloquer, { passive: false });
    list.addEventListener("contextmenu", menu);
    return () => {
      list.removeEventListener("touchmove", bloquer);
      list.removeEventListener("contextmenu", menu);
    };
  }, []);

  /*
   * À l'ouverture, la liste se place sur le morceau en cours, avec le précédent
   * juste au-dessus : c'est la suite qu'on vient voir, pas l'historique.
   */
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || placed.current || items.length === 0 || current < 0) return;
    placed.current = true;
    const precedent = list.children[current - 1] as HTMLElement | undefined;
    list.scrollTop = precedent ? Math.max(0, precedent.offsetTop - 8) : 0;
  }, [items.length, current]);

  const duree = items.slice(Math.max(0, current)).reduce((s, i) => s + i.duration, 0);

  return (
    <aside className="queue sidepanel" role="dialog" aria-label="File d'attente">
      <header className="sidepanel__head">
        <h2>
          À suivre
          {total > 0 && (
            <small>
              {total} titre{total > 1 ? "s" : ""}
              {full && duree > 0 ? ` · ${formatLong(duree)}` : ""}
            </small>
          )}
        </h2>
        <button className="iconbtn iconbtn--small" onClick={onClose} aria-label="Fermer la file">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z"
              fill="currentColor"
            />
          </svg>
        </button>
      </header>

      {error && <p className="sidepanel__error">{error}</p>}
      {loading && items.length === 0 && <p className="sidepanel__empty">Lecture de la file…</p>}
      {!loading && !error && items.length === 0 && <p className="sidepanel__empty">La file est vide.</p>}

      <ol className="sidepanel__list queue__list" ref={listRef}>
        {items.map((item, index) => {
          /*
           * Le morceau en cours sert de repère : au-dessus c'est passé, en
           * dessous c'est à venir. Sans lui, une file est une liste sans présent.
           *
           * Quand on vient de sauter, on marque la ligne visée tout de suite,
           * sans attendre que Home Assistant confirme : le retour doit être
           * immédiat, la vérité arrive une seconde plus tard.
           */
          const vise = pending !== null && item.id === pending;
          const etat = vise
            ? "now"
            : pending !== null
              ? "next"
              : index === current
                ? "now"
                : current >= 0 && index < current
                  ? "past"
                  : "next";
          const mobile = movable(index);

          return (
            <li key={item.id} className="queue__item" data-state={etat} data-movable={mobile}>
              <button
                className="queue__pick"
                onPointerDown={(e) => press(index, e)}
                onClick={() => {
                  if (swallowClick.current) {
                    swallowClick.current = false;
                    return;
                  }
                  onPick(item);
                }}
                disabled={!item.uri && !full}
                title={`Aller à « ${item.name} »`}
              >
                <span
                  className="queue__art"
                  style={{ backgroundImage: item.image ? `url("${item.image}")` : undefined }}
                >
                  {/* Le triangle n'apparaît qu'au survol : la pochette reste
                      lisible, mais on voit que la ligne est une commande. */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5.2v13.6L19 12z" fill="currentColor" />
                  </svg>
                </span>
                <span className="sidepanel__text">
                  <b>{item.name}</b>
                  <span>{item.artist}</span>
                </span>
                <span className="queue__time">
                  {item.duration > 0 ? formatTime(item.duration) : ""}
                </span>
              </button>

              {mobile && (
                <button
                  className="queue__grip"
                  aria-label={`Déplacer « ${item.name} »`}
                  title="Glisser pour déplacer"
                  onPointerDown={(e) => {
                    if (e.pointerType === "mouse" && e.button !== 0) return;
                    e.preventDefault();
                    start(index, e.clientY);
                  }}
                  onKeyDown={(e) => {
                    // Au clavier : les flèches déplacent d'un rang.
                    if (e.key === "ArrowUp" && movable(index - 1)) {
                      e.preventDefault();
                      onMove(index, index - 1);
                    } else if (e.key === "ArrowDown" && index + 1 < items.length) {
                      e.preventDefault();
                      onMove(index, index + 1);
                    }
                  }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 7h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" fill="currentColor" />
                  </svg>
                </button>
              )}
            </li>
          );
        })}
      </ol>

      {note && <p className="sidepanel__note">{note}</p>}
    </aside>
  );
}

/** « 1 h 12 », « 47 min » : la durée qui reste, lisible d'un coup d'œil. */
function formatLong(seconds: number): string {
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} h ${String(m).padStart(2, "0")}` : `${h} h`;
}
