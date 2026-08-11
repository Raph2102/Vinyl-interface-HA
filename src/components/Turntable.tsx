/**
 * La scène : pochette, disque, bras.
 *
 * Ce composant ne se redessine qu'au changement de morceau. Le mouvement
 * (rotation du disque, balayage du bras) est écrit directement dans des
 * variables CSS par la boucle d'animation de App : faire passer 60 images par
 * seconde par le rendu React ferait tourner le ventilateur pour rien.
 */

import { useEffect, useRef, type RefObject } from "react";
import { Label } from "./Label";
import { Tonearm } from "./Tonearm";
import {
  ARM_REST_ANGLE,
  armAngleForPointer,
  armAngleForProgress,
  progressForArmAngle,
} from "../lib/geometry";
import type { Settings } from "../lib/settings";

interface TurntableProps {
  title: string;
  artist: string;
  album: string;
  footer: string;
  mark: string;
  coverUrl: string | null;
  settings: Settings;
  sleeveFront: boolean;
  onToggleSleeve: () => void;
  onTogglePlay: () => void;
  /** Renseigné pendant le glisser du bras ; la boucle d'animation le prend alors comme angle. */
  armOverride: RefObject<number | null>;
  onSeekProgress: (progress: number) => void;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  seekable: boolean;
  /**
   * Éléments que la boucle d'animation pilote directement.
   * Écrire --spin et --arm sur ces deux nœuds plutôt que sur la racine évite de
   * relancer un calcul de style sur tout le document à chaque image.
   */
  spinRef: RefObject<HTMLDivElement | null>;
  armRef: RefObject<HTMLDivElement | null>;
  /**
   * Signal de changement de morceau. `nonce` s'incrémente à chaque commande,
   * `dir` vaut +1 pour le suivant et −1 pour le précédent.
   */
  swap: { nonce: number; dir: number };
}

const ANGLE_START = armAngleForProgress(0);
const ANGLE_END = armAngleForProgress(1);

export function Turntable({
  title,
  artist,
  album,
  footer,
  mark,
  coverUrl,
  settings,
  sleeveFront,
  onToggleSleeve,
  onTogglePlay,
  armOverride,
  onSeekProgress,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  seekable,
  spinRef,
  armRef,
  swap,
}: TurntableProps) {
  const discRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  /** Un balayage vient de changer de piste : le clic qui suit ne doit rien faire. */
  const swiped = useRef(false);
  const armDrives = settings.playControl === "arm";

  /**
   * Le bras EST la commande de lecture, comme sur une vraie platine :
   *  - on le pose sur le disque -> ça joue, à l'endroit où on l'a posé ;
   *  - on le tire hors du disque -> ça s'arrête ;
   *  - une simple tape dessus bascule lecture/pause.
   *
   * On convertit la position du doigt en angle autour du PIVOT, pas autour du
   * centre du disque : c'est ainsi que bouge un vrai bras, et l'inverse
   * géométrique de geometry.ts redonne exactement le rayon, donc l'avancement.
   */
  const beginDrag = (event: React.PointerEvent) => {
    const disc = discRef.current;
    if (!disc) return;

    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).setPointerCapture(event.pointerId);

    const rect = disc.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = rect.width / 2;

    const startX = event.clientX;
    const startY = event.clientY;
    let moved = false;

    const update = (clientX: number, clientY: number) => {
      const raw = armAngleForPointer((clientX - cx) / radius, (clientY - cy) / radius);
      // En mode aiguille on autorise à dépasser le premier sillon vers le
      // repose-bras : c'est ce débattement qui permet d'arrêter la lecture.
      // En mode bouton le bras ne sert qu'à se déplacer dans le morceau, il
      // reste donc borné au disque.
      const floor = armDrives ? ARM_REST_ANGLE - 2 : ANGLE_START;
      const angle = Math.min(ANGLE_END, Math.max(floor, raw));
      armOverride.current = angle;
      return angle;
    };

    const onMove = (e: PointerEvent) => {
      if (!moved && Math.hypot(e.clientX - startX, e.clientY - startY) > 6) {
        moved = true;
        dragging.current = true;
        wrapRef.current?.setAttribute("data-dragging", "true");
      }
      if (moved) update(e.clientX, e.clientY);
    };

    const onUp = (e: PointerEvent) => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      wrapRef.current?.removeAttribute("data-dragging");
      dragging.current = false;

      if (!moved) {
        armOverride.current = null;
        // Le bras ne commande la lecture que lorsqu'il est LE moyen de la
        // commander. Sinon on aurait deux organes pour la même chose, dont un
        // invisible — c'est ce qui rendait le mode bouton déroutant.
        if (armDrives) onTogglePlay();
        return;
      }

      const angle = update(e.clientX, e.clientY);
      if (armDrives && angle < ANGLE_START - 0.6) {
        // Bras sorti du disque : la lecture s'arrête et il rejoint son repose-bras.
        armOverride.current = null;
        onPause();
        return;
      }

      if (seekable) onSeekProgress(progressForArmAngle(angle));
      if (armDrives) onPlay();
      // On garde l'angle imposé un court instant : Home Assistant met ~300 ms à
      // renvoyer la nouvelle position, et sans ça le bras reviendrait en arrière
      // avant de resauter en avant.
      setTimeout(() => {
        if (!dragging.current) armOverride.current = null;
      }, 900);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  /**
   * Changement de disque.
   *
   * Le balayage marchait, mais sans rien à voir : on ne savait pas si le geste
   * avait été pris. Le disque sort maintenant dans le sens du doigt, s'efface,
   * et le suivant revient de l'autre bord. Le remplacement des données a lieu
   * pendant la fraction où il est invisible, ce qui masque au passage le délai
   * de réponse de Home Assistant.
   *
   * Piloté par l'API d'animations plutôt que par une classe CSS : une même
   * animation doit pouvoir être relancée d'un morceau à l'autre, ce qu'une
   * classe ne permet pas sans bricolage.
   */
  useEffect(() => {
    const disc = discRef.current;
    if (!disc || swap.nonce === 0) return;

    const travel = disc.offsetWidth * 0.34 * (swap.dir >= 0 ? -1 : 1);
    const out = `translateY(-50%) translateX(${travel}px) scale(0.93)`;
    const back = `translateY(-50%) translateX(${-travel}px) scale(0.93)`;
    const home = "translateY(-50%) translateX(0) scale(1)";

    const animation = disc.animate(
      [
        { transform: home, opacity: 1, offset: 0 },
        { transform: out, opacity: 0, offset: 0.42 },
        { transform: back, opacity: 0, offset: 0.46 },
        { transform: home, opacity: 1, offset: 1 },
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" },
    );

    // La pochette accompagne d'un rien : sans ce léger décalage, le disque a
    // l'air de bouger seul devant un décor figé.
    const sleeve = disc.parentElement?.querySelector<HTMLElement>(".sleeve");
    const sleeveAnimation = sleeve?.animate(
      [
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" },
        { transform: `translateY(-50%) rotate(-3deg) translateX(${travel * 0.12}px)` },
        { transform: "translateY(-50%) rotate(-3deg) translateX(0)" },
      ],
      { duration: 560, easing: "cubic-bezier(0.32, 0, 0.24, 1)" },
    );

    return () => {
      animation.cancel();
      sleeveAnimation?.cancel();
    };
  }, [swap.nonce, swap.dir]);

  const label = (
    <div className="label">
      <Label title={title} artist={artist} album={album} footer={footer} mark={mark} />
    </div>
  );

  /**
   * Balayage horizontal sur la scène pour changer de morceau, comme on
   * feuillette une pile de disques. Le geste est ignoré s'il part du bras :
   * celui-ci arrête la propagation pour garder son propre glisser.
   */
  const beginSwipe = (event: React.PointerEvent) => {
    const startX = event.clientX;
    const startY = event.clientY;
    let fired = false;

    const onMove = (e: PointerEvent) => {
      if (fired) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) < 64 || Math.abs(dx) < Math.abs(dy) * 1.8) return;
      fired = true;
      swiped.current = true;
      if (dx < 0) onNext();
      else onPrevious();
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      // Le clic arrive juste après le relâchement : on le laisse passer, puis
      // on lève le drapeau.
      if (fired) setTimeout(() => (swiped.current = false), 0);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  return (
    <div
      className="deck"
      data-sleeve={sleeveFront ? "front" : "back"}
      onPointerDown={beginSwipe}
    >
      {/* Socle du bras : rendu AVANT le disque, donc dessous. Sur la référence
          il disparaît derrière le vinyle au lieu de le voiler. */}
      <div className="tonearm-base" />

      <div
        className="sleeve"
        onClick={() => !swiped.current && onToggleSleeve()}
        role="button"
        tabIndex={0}
        aria-label="Afficher la pochette"
        onKeyDown={(e) => e.key === "Enter" && onToggleSleeve()}
      >
        {coverUrl ? (
          <img className="sleeve__art" src={coverUrl} alt="" draggable={false} />
        ) : (
          <div className="sleeve__placeholder">Aucune pochette</div>
        )}
        <div className="sleeve__edge" />
      </div>

      {/* En mode « bras », le disque n'est plus un bouton : c'est l'aiguille
          qu'on pose ou qu'on retire, comme sur une platine. */}
      <div
        className="disc"
        ref={discRef}
        onClick={() => !armDrives && !swiped.current && onTogglePlay()}
        role={armDrives ? undefined : "button"}
        tabIndex={armDrives ? -1 : 0}
        aria-label={armDrives ? undefined : "Lecture ou pause"}
        onKeyDown={(e) => !armDrives && e.key === "Enter" && onTogglePlay()}
      >
        <div className="disc__layer disc__material" />

        <div className="disc__spin" ref={spinRef}>
          {/*
           * Le motif de la matière (marbrure, éclaboussures) est DANS la couche
           * qui tourne, alors que la couleur de fond reste dehors.
           *
           * Un dégradé radial est symétrique : le faire tourner ne changerait
           * rien, et le sortir de la rotation évite de le re-rastériser à chaque
           * image. Une tache, elle, est solidaire de la matière — elle passe
           * sous l'aiguille avec le disque. Laissée dehors, elle donnait un
           * disque qui tourne sous un motif immobile, ce qui trahit tout de
           * suite le trucage.
           */}
          <div className="disc__layer disc__pattern" />
          <div className="disc__layer disc__grooves" />
          <div className="disc__layer disc__aniso" />
          {/* Micro-marques de pressage : ce sont elles qui, en passant sous la
              brillance fixe, rendent la rotation visible même quand l'étiquette
              ne tourne pas. */}
          <div className="disc__layer disc__flecks" />
          {!settings.counterRotateLabel && label}
        </div>

        {/*
         * Étiquette fixe : elle est SORTIE de la couche tournante, au lieu d'y
         * rester en tournant à l'envers. Une contre-rotation laisse l'enfant se
         * faire re-rastériser à chaque image dans une couche composite, ce qui
         * produit un tremblement très rapide — le bug constaté.
         */}
        {settings.counterRotateLabel && label}

        {/* Brillance spéculaire, sur le vinyle SEULEMENT : le plastique est
            brillant, le papier de l'étiquette est mat. C'est ce contraste de
            matières qui manquait au disque. */}
        <div className="disc__layer disc__gloss" />

        {/* Éclairage global, posé PAR-DESSUS l'étiquette. Sur la référence, le
            disque et son étiquette reçoivent la même lumière venue du haut à
            droite — sans ce voile commun, l'étiquette a l'air collée dessus. */}
        <div className="disc__layer disc__light" />
        <div className="disc__layer disc__edge" />
      </div>

      <Tonearm wrapRef={wrapRef} armRef={armRef} onGrab={beginDrag} />
    </div>
  );
}
