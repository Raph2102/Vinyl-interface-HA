/**
 * Bibliothèque, en bac à disques.
 *
 * Trois principes, tous relevés sur la photo de référence :
 *
 *  1. Les pochettes ne partagent pas le même angle. Elles décrivent un ARC :
 *     largement ouvertes à gauche, elles se referment progressivement vers la
 *     droite. Un angle unique donne une rangée qui se lit comme un code-barres.
 *
 *  2. Le défilement est CONTINU. On ne saute pas d'un album au suivant : le bac
 *     suit le doigt au centième d'album près, garde son élan au relâcher, puis
 *     s'accroche doucement. Tout le mouvement est calculé en CSS à partir d'une
 *     seule variable, `--offset`, écrite image par image — React ne redessine
 *     rien pendant le geste.
 *
 *  3. Les pochettes ne se traversent pas. C'est pour ça que le conteneur ne
 *     déclare PAS `transform-style: preserve-3d` : avec lui, le navigateur trie
 *     les plans dans l'espace et les fait s'interpénétrer. Sans lui, ils se
 *     peignent dans l'ordre du document, et z-index reprend la main.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Album } from "../lib/library";
import { NEUTRAL, extractPalette, type Palette } from "../lib/palette";

interface LibraryProps {
  albums: Album[];
  loading: boolean;
  error: string | null;
  /** Reçoit aussi l'élément touché : c'est le point de départ du vol vers la platine. */
  onPlay: (album: Album, from: HTMLElement) => void;
  onClose: () => void;
/** Position retenue de la visite précédente, ou null si c'est la première. */
  resumeIndex: number | null;
  /** Remonté à chaque cran franchi, pour retrouver sa place au retour. */
  onFocusChange: (index: number) => void;
  /** Texte cherché, remonté au parent qui interroge le fournisseur. */
  query: string;
  onQuery: (value: string) => void;
  /** Vrai pendant que la recherche est en vol. */
  searching: boolean;
  /** Grossissement voulu, autour de la taille calculée. 1 = automatique. */
  zoom: number;
}

/** Albums dessinés de part et d'autre de celui qu'on regarde. */
const SPAN = 7;
/**
 * Marge gardée montée au-delà de ce qui se voit, et distance au bout de
 * laquelle la fenêtre se redéplace. Tant qu'on reste dedans, aucun montage ni
 * démontage de pochette : le geste ne provoque plus de décodage d'image.
 */
const SHIFT = 5;

/**
 * Géométrie de la roue.
 *
 * Les albums sont posés sur un cercle, comme des disques dans un présentoir
 * tournant. Celui qui est face à nous ne montre QUE sa tranche ; plus on s'en
 * écarte, plus la pochette s'ouvre. C'est cette variation d'angle qui manquait :
 * une inclinaison unique pour tous donne une rangée morte.
 *
 * Ces valeurs vivent ici et sont poussées dans le CSS, pour que le pas de
 * défilement et le placement viennent du même endroit.
 */
const ARC = 8;
const RADIUS = 1.6;

/** Frottement du lancer, en secondes de demi-vie. */
const GLIDE = 0.5;
/** En deçà de cette vitesse (albums/seconde), on considère le lancer terminé. */
const STILL = 0.25;
/**
 * Combien de pochettes on parcourt pour un déplacement du doigt égal au pas.
 * En dessous de 1, le bac résiste : c'est ce qui rend le défilement doux et
 * permet de s'arrêter pochette par pochette au lieu d'en survoler cinq.
 */
const DRAG_RATIO = 0.5;
/** Élan maximal, en pochettes par seconde. Un lancer ne doit pas traverser le bac. */
const MAX_FLING = 2;

export function Library({
  albums,
  loading,
  error,
  onPlay,
  onClose,
  resumeIndex,
  onFocusChange,
  query,
  onQuery,
  searching,
  zoom,
}: LibraryProps) {
  /**
   * Centre de la fenêtre rendue. C'est le SEUL état qui redessine le bac, et il
   * ne bouge que par paliers : le défilement lui-même n'entraîne aucun rendu.
   */
  const [anchor, setAnchor] = useState(resumeIndex ?? 0);
  const [, setSelected] = useState<number | null>(null);
  /** Un album est en train de rejoindre la platine : on n'en accepte pas un second. */
  const [busy, setBusy] = useState(false);
  /*
   * On garde la palette entière, plus seulement « claire ou sombre ».
   *
   * La tranche portait l'illustration étirée par une variable CSS que la
   * réécriture du placement a emportée : elle est donc restée d'un blanc mort.
   * Une pochette étirée sur trois centimètres ne montrait de toute façon qu'une
   * bouillie. Les couleurs dominantes du disque, elles, se lisent d'un coup
   * d'œil — c'est ainsi qu'on retrouve un album dans un vrai bac.
   */
  const [palettes, setPalettes] = useState<Record<string, Palette>>({});

  const crateRef = useRef<HTMLDivElement>(null);
  const offset = useRef(resumeIndex ?? 0);
  /** La position d'ouverture n'est posée qu'une fois. */
  const placed = useRef(false);
  const velocity = useRef(0);
  const dragging = useRef(false);
  /** Le geste en cours a bougé : le clic qui suit ne doit pas choisir d'album. */
  const scrolled = useRef(false);

  const count = albums.length;
  const last = Math.max(0, count - 1);

  const visible = useMemo(() => {
    const from = Math.max(0, anchor - SPAN - SHIFT);
    const to = Math.min(last, anchor + SPAN + SHIFT);
    return albums.slice(from, to + 1).map((album, k) => ({ album, index: from + k }));
  }, [albums, anchor, last]);

  /*
   * Couleur du texte : on ne peut pas se contenter du blanc. La référence pose
   * du noir sur les pochettes claires, et un titre blanc sur fond blanc serait
   * illisible. On n'analyse que les pochettes réellement affichées.
   */
  useEffect(() => {
    let alive = true;
    for (const { album } of visible) {
      if (!album.image || album.uri in palettes) continue;
      void extractPalette(album.image).then((palette) => {
        if (alive) {
          setPalettes((p) => (album.uri in p ? p : { ...p, [album.uri]: palette }));
        }
      });
    }
    return () => {
      alive = false;
    };
  }, [visible, palettes]);

  // ------------------------------------------------------------ mouvement

  /** Taille d'une pochette et rayon de la roue, en pixels. Mesurés, pas devinés. */
  const geo = useRef({ cover: 0, radius: 0 });

  /*
   * La taille des pochettes se calcule sur LA PLACE RÉELLEMENT DISPONIBLE.
   *
   * Elle venait d'unités de fenêtre — 84vh, 46vw — ce qui suppose que l'app
   * occupe tout l'écran. Dans le panneau de Home Assistant, c'est faux : il
   * reste la barre latérale et l'en-tête. Les pochettes dépassaient donc du
   * cadre et paraissaient beaucoup trop grosses, surtout sur une tablette.
   *
   * On mesure la boîte du bac lui-même et on s'y ajuste. Deux contraintes : la
   * pochette doit tenir en hauteur en laissant respirer, et rester assez étroite
   * pour qu'on voie ses voisines de part et d'autre — sans quoi on ne sait plus
   * qu'on est dans un bac.
   */
  const measure = useCallback(() => {
    const crate = crateRef.current;
    if (!crate) return;

    const boite = crate.getBoundingClientRect();
    if (boite.width === 0 || boite.height === 0) return;

    /*
     * La mesure automatique reste la base ; le réglage ne fait que la pondérer.
     * Une tablette tenue à bout de bras demande des pochettes plus grosses qu'un
     * écran de bureau à cinquante centimètres, et aucune formule ne devine cette
     * distance-là. Les bornes évitent qu'un réglage extrême rende le bac
     * inutilisable : jamais plus haut que la boîte, jamais plus petit qu'une
     * vignette.
     */
    const base = Math.min(boite.height * 0.72, boite.width * 0.42);
    const cover = Math.round(
      Math.max(90, Math.min(boite.height * 0.94, boite.width * 0.6, base * zoom)),
    );
    crate.style.setProperty("--cover", cover + "px");
    geo.current = { cover, radius: cover * RADIUS };
  }, []);

  const write = useCallback((value: number) => {
    offset.current = value;
    const crate = crateRef.current;
    if (!crate) return;

    // Le vol de la pochette vers la platine a besoin de cette position ; un
    // attribut de données la transmet sans déclencher d'héritage de style.
    crate.dataset.offset = value.toFixed(4);

    const { radius } = geo.current;
    if (!radius) return;

    for (const el of crate.children) {
      const item = el as HTMLElement;
      const index = Number(item.dataset.i);
      if (!Number.isFinite(index)) continue;

      const d = index - value;
      const phi = d * ARC;
      const rad = (phi * Math.PI) / 180;

      item.style.transform =
        `translateX(${(Math.sin(rad) * radius).toFixed(2)}px) ` +
        `translateZ(${((Math.cos(rad) - 1) * radius).toFixed(2)}px) ` +
        `rotateY(${(90 + phi).toFixed(3)}deg)`;
      // Sur une roue, le plus proche passe devant.
      item.style.zIndex = String(100 - Math.round(Math.abs(d)));

      /*
       * L'assombrissement selon la profondeur était un fond recalculé à chaque
       * image. C'est devenu un calque noir dont on ne touche que l'opacité —
       * le compositeur s'en charge sans redessiner quoi que ce soit.
       */
      const sombre = Math.min(0.22, Math.abs(d) * 0.013).toFixed(3);
      const calques = item.getElementsByClassName("crate__depth");
      for (const calque of calques) (calque as HTMLElement).style.opacity = sombre;
    }
  }, []);

  // La roue se mesure à l'ouverture et à chaque changement de taille de fenêtre.
  useEffect(() => {
    measure();
    write(offset.current);
    const onResize = () => {
      measure();
      write(offset.current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure, write, count]);

  /*
   * On n'ouvre pas sur le premier album : le bac s'ouvre là où on l'avait
   * laissé, et à défaut en plein milieu de la collection.
   *
   * L'attente du chargement est essentielle : au montage la liste est encore
   * vide, et « le milieu de zéro album » vaut zéro. C'est ce qui faisait ouvrir
   * sur la première pochette au lieu de la quatorzième.
   */
  useEffect(() => {
    if (placed.current || count === 0) return;
    placed.current = true;
    const target = resumeIndex ?? Math.floor(count / 2);
    write(target);
    setAnchor(target);
  }, [count, resumeIndex, write]);

  /*
   * Une recherche remplace le contenu du bac : rester au quatorzième cran d'une
   * liste qui n'a plus que trois albums laisserait l'écran vide. On revient donc
   * au premier résultat — c'est aussi le plus pertinent.
   */
  const chercheAvant = useRef(false);
  useEffect(() => {
    const cherche = query.trim().length > 0;
    if (!cherche && !chercheAvant.current) return;
    chercheAvant.current = cherche;
    velocity.current = 0;
    write(0);
    setAnchor(0);
  }, [query, count, write]);

  /**
   * Boucle d'inertie et d'accrochage. Elle tourne en continu tant que la vue est
   * ouverte : c'est elle qui donne au bac son moelleux, et le retour haptique à
   * chaque album franchi.
   */
  useEffect(() => {
    let raf = 0;
    let previous = performance.now();
    let shown = -1;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - previous) / 1000);
      previous = now;

      let position = offset.current;
      if (!dragging.current) {
        if (Math.abs(velocity.current) > STILL) {
          position = offset.current + velocity.current * dt;
          velocity.current *= Math.exp(-dt / GLIDE);
          // Les bords absorbent l'élan au lieu de le renvoyer.
          if (position < 0 || position > last) {
            position = Math.max(0, Math.min(last, position));
            velocity.current = 0;
          }
        } else if (count > 0) {
          velocity.current = 0;
          const goal = Math.max(0, Math.min(last, Math.round(offset.current)));
          const delta = goal - offset.current;
          position =
            Math.abs(delta) > 0.0008 ? offset.current + delta * (1 - Math.exp(-dt / 0.16)) : goal;
        }
      }
      write(position);

      const rounded = Math.round(offset.current);
      if (rounded !== shown) {
        // Un cran franchi : petite secousse, comme le disque qui bute sur le
        // suivant. Android répond ; iOS n'expose aucune API de vibration au web.
        if (shown !== -1) navigator.vibrate?.(8);
        shown = rounded;
            onFocusChange(rounded);
        setAnchor((a) => (Math.abs(rounded - a) >= SHIFT ? rounded : a));
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [count, last, write, onFocusChange]);

  /**
   * Distance à l'écran entre deux albums, en pixels.
   *
   * On la MESURE sur un élément réel. La lire dans une variable CSS ne marche
   * pas : getComputedStyle rend le texte de la formule pour une propriété
   * personnalisée non déclarée, parseFloat y répond NaN, et le repli valait 1 —
   * soit un album par pixel de doigt. C'était l'origine du défilement fou.
   */
  const step = () => {
    const { cover } = geo.current;
    if (!cover) return 1;
    return cover * RADIUS * ((ARC * Math.PI) / 180);
  };

  const beginDrag = (event: React.PointerEvent) => {
    const startX = event.clientX;
    const startOffset = offset.current;
    const unit = step();
    let lastX = startX;
    let lastT = performance.now();
    let moved = false;

    dragging.current = true;
    scrolled.current = false;
    velocity.current = 0;

    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) < 4) return;
      moved = true;
      scrolled.current = true;

      // Au-delà des bords, le bac résiste au lieu de se laisser tirer.
      let next = startOffset - (dx / unit) * DRAG_RATIO;
      if (next < 0) next = next * 0.35;
      else if (next > last) next = last + (next - last) * 0.35;
      write(next);

      const now = performance.now();
      const span = (now - lastT) / 1000;
      if (span > 0.008) {
        const raw = -(((e.clientX - lastX) / unit) * DRAG_RATIO) / span;
        velocity.current = Math.max(-MAX_FLING, Math.min(MAX_FLING, raw));
        lastX = e.clientX;
        lastT = now;
      }
    };

    const onUp = () => {
      dragging.current = false;
      if (!moved) velocity.current = 0;
      // Le clic arrive juste après le relâchement : on lève le drapeau ensuite.
      else window.setTimeout(() => (scrolled.current = false), 0);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  const glideTo = useCallback(
    (index: number) => {
      velocity.current = 0;
      const goal = Math.max(0, Math.min(last, index));
      const from = offset.current;
      const start = performance.now();
      const run = (now: number) => {
        const t = Math.min(1, (now - start) / 420);
        const eased = 1 - Math.pow(1 - t, 3);
        write(from + (goal - from) * eased);
        if (t < 1) requestAnimationFrame(run);
      };
      requestAnimationFrame(run);
    },
    [last, write],
  );

  const onWheel = (event: React.WheelEvent) => {
    const amount = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    velocity.current = Math.max(-MAX_FLING, Math.min(MAX_FLING, velocity.current + amount * 0.005));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") glideTo(Math.round(offset.current) + 1);
      else if (e.key === "ArrowLeft") glideTo(Math.round(offset.current) - 1);
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [glideTo, onClose]);

  // ------------------------------------------------------------ sélection

  /**
   * Une seule touche suffit désormais : l'album sort du bac et s'en va se poser
   * sur la platine d'un seul geste. Demander une deuxième confirmation cassait
   * l'élan — on choisit un disque, on ne le valide pas.
   */
  const touch = (index: number, element: HTMLElement) => {
    // On vient de faire défiler le bac : ce n'est pas un choix d'album.
    // Sans ce garde-fou, chaque tentative de défilement lançait un disque.
    if (scrolled.current) return;
    const album = albums[index];
    if (!album || busy) return;
    setBusy(true);
    setSelected(index);
    onPlay(album, element);
  };

  return (
    <div className="library">
      <header className="library__head">
        <button className="iconbtn iconbtn--small" onClick={onClose} aria-label="Retour à la platine">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.6 5.4 8 12l6.6 6.6 1.6-1.6-5-5 5-5z" fill="currentColor" />
          </svg>
        </button>
        {/*
          * La recherche porte sur tout le fournisseur, pas sur la liste déjà
          * chargée : taper « Miles » va chercher chez Deezer, y compris ce qui
          * n'a jamais été ajouté à la bibliothèque.
          */}
        <label className="library__search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M10.5 3a7.5 7.5 0 1 1-4.6 13.4l-3.2 3.2-1.4-1.4 3.2-3.2A7.5 7.5 0 0 1 10.5 3zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"
              fill="currentColor"
            />
          </svg>
          <input
            type="search"
            value={query}
            placeholder="Chercher un album, un artiste…"
            aria-label="Chercher dans Deezer"
            onChange={(e) => onQuery(e.target.value)}
          />
          {query && (
            <button type="button" onClick={() => onQuery("")} aria-label="Effacer la recherche">
              ×
            </button>
          )}
        </label>
        <span className="library__count">
          {loading || searching
            ? "recherche…"
            : `${count} album${count > 1 ? "s" : ""}`}
        </span>
      </header>

      {error && <p className="library__error">{error}</p>}

      <div
        className="crate"
        ref={crateRef}
        onPointerDown={beginDrag}
        onWheel={onWheel}
        style={{ "--arc": `${ARC}deg`, "--radius-k": RADIUS } as React.CSSProperties}
      >
        {visible.map(({ album, index }) => (
          <div
            key={album.uri}
            className="crate__item"
            data-i={index}
            onClick={(e) => touch(index, e.currentTarget)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && touch(index, e.currentTarget)}
          >
            {/*
             * Une pochette est une BOÎTE, pas un plan : dessus, dos, tranche et
             * ouverture. C'est ce qui permet à la roue de fonctionner — les
             * albums à droite du centre tournent dans un sens, ceux de gauche
             * dans l'autre, et le navigateur montre de lui-même la face qui
             * regarde l'œil. Plus de charnière à déplacer, plus d'illustration
             * en miroir : backface-visibility masque les faces détournées.
             *
             * L'illustration est portée par le dessus ET par le dos, si bien
             * qu'on voit la pochette des deux côtés de la roue.
             */}
            {(["front", "back"] as const).map((side) => (
              <div key={side} className={`crate__face crate__face--${side}`}>
                {album.image ? (
                  <img className="crate__art" src={album.image} alt="" draggable={false} />
                ) : (
                  <div className="crate__art crate__art--empty" />
                )}
                <div className="crate__shade" />
                <div className="crate__depth" />
              </div>
            ))}

            {/* Tranche : le côté fermé, celui qui porte le titre. */}
            <div className="crate__spine">
              <div
                className="crate__spineFace"
                style={
                  {
                    "--spine-a": (palettes[album.uri] ?? NEUTRAL).b,
                    "--spine-b": (palettes[album.uri] ?? NEUTRAL).deep,
                  } as React.CSSProperties
                }
              >
                <div
                  className="crate__label"
                  data-ink={palettes[album.uri]?.isDark === false ? "dark" : "light"}
                >
                  <b>{album.name}</b>
                  <span>{album.artist}</span>
                </div>
              </div>
            </div>

            {/* Ouverture : le côté par lequel on sort le disque, sans texte. */}
            <div className="crate__opening" />
          </div>
        ))}
      </div>

    </div>
  );
}
