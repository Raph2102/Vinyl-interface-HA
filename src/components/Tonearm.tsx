/**
 * Bras de lecture.
 *
 * Les cotes ci-dessous ne sont pas dessinées à l'œil : elles sont RELEVÉES sur
 * l'image du bras de l'application d'origine (548 × 1828 px, extraite de son
 * paquet Android), par balayage du canal alpha ligne par ligne.
 *
 * Profil mesuré, en pixels de cette image — l'axe du tube est à x = 351,5 et le
 * pivot à y = 168 :
 *
 *     y  30–100   contrepoids cylindrique   x 176–295   (large 120)
 *     y 105–232   corps du pivot            x 160–391   (large 232)
 *     y 235–295   manchon haut              x 324–379   (large  56)
 *     y 295–1270  tube                      x 328–375   (large  48)
 *     y 1275–1340 manchon bas               x 316–387   (large  72)
 *     y 1340–1540 porte-cellule incliné     large 121, penché de ~30°
 *
 * Longueur utile pivot → pointe : 1372 px, soit ARM_LENGTH (1,39 rayon de
 * disque). Toutes les valeurs du SVG sont ces mesures ramenées à cette échelle.
 *
 * Le SOCLE n'est pas ici : il passe DERRIÈRE le vinyle, jamais devant, et c'est
 * Turntable qui le rend en amont du disque (voir .tonearm-base).
 *
 * Repère local : pivot à (0,0), le bras pointe vers +x, l'unité vaut un rayon
 * de disque.
 */

import type { RefObject } from "react";
import { ARM_LENGTH } from "../lib/geometry";

/** Facteur de conversion : longueur de bras mesurée -> rayon de disque. */
const K = ARM_LENGTH / 1372;
/** Une mesure en pixels de l'image d'origine, ramenée à notre échelle. */
const m = (px: number) => px * K;

/** Coordonnée transversale : x de l'image (axe du tube à 351,5) -> y local. */
const t = (px: number) => (px - 351.5) * K;
/** Coordonnée longitudinale : y de l'image (pivot à 168) -> x local. */
const l = (px: number) => (px - 168) * K;

const HEADSHELL_ANGLE = 30;
const HEADSHELL_PIVOT = l(1340);

interface TonearmProps {
  wrapRef: RefObject<HTMLDivElement | null>;
  armRef: RefObject<HTMLDivElement | null>;
  onGrab: (event: React.PointerEvent) => void;
}

export function Tonearm({ wrapRef, armRef, onGrab }: TonearmProps) {
  return (
    <div className="tonearm" ref={wrapRef}>
      <div className="tonearm__arm" ref={armRef}>
        <svg
          className="tonearm__svg"
          viewBox="-0.42 -0.40 2.17 0.82"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Le tube de l'original est un cylindre chromé : bord sombre, raie
                spéculaire très claire un peu avant le milieu, retombée, puis
                rebond de lumière sur l'autre bord. */}
            <linearGradient id="tube" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6e737b" />
              <stop offset="14%" stopColor="#fbfcfd" />
              <stop offset="30%" stopColor="#d3d8de" />
              <stop offset="56%" stopColor="#9aa0a8" />
              <stop offset="82%" stopColor="#5f646b" />
              <stop offset="100%" stopColor="#a8adb5" />
            </linearGradient>

            {/* Une seule rampe pour TOUTES les pièces claires : sur l'original
                elles forment un même volume moulé, pas des blocs juxtaposés. */}
            {/* Variante sombre du bras : c'est celle qui se détache le mieux sur
                un fond adaptatif, et l'original la propose aussi (arm_black).
                Une seule rampe pour toutes les pièces, sinon chacune reçoit son
                propre reflet et l'ensemble se lit comme des blocs juxtaposés. */}
            <linearGradient
              id="shell"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1={t(150)}
              x2="0"
              y2={t(400)}
            >
              <stop offset="0%" stopColor="#454951" />
              <stop offset="38%" stopColor="#2e3138" />
              <stop offset="72%" stopColor="#1d1f24" />
              <stop offset="100%" stopColor="#101115" />
            </linearGradient>

            <linearGradient
              id="head"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1={t(230)}
              x2="0"
              y2={t(430)}
            >
              <stop offset="0%" stopColor="#41454e" />
              <stop offset="45%" stopColor="#26282e" />
              <stop offset="100%" stopColor="#121317" />
            </linearGradient>
          </defs>

          {/* Contrepoids cylindrique, en retrait derrière le pivot */}
          <rect
            x={l(30)}
            y={t(176)}
            width={m(70)}
            height={m(120)}
            rx={m(16)}
            fill="url(#shell)"
          />

          {/* Corps du pivot */}
          <rect
            x={l(105)}
            y={t(160)}
            width={m(127)}
            height={m(232)}
            rx={m(26)}
            fill="url(#shell)"
          />

          {/* Manchon haut */}
          <rect x={l(232)} y={t(324)} width={m(66)} height={m(56)} rx={m(14)} fill="url(#shell)" />

          {/* Tube */}
          <rect x={l(290)} y={t(328)} width={m(985)} height={m(48)} rx={m(24)} fill="url(#tube)" />

          {/* Manchon bas */}
          <rect x={l(1272)} y={t(316)} width={m(70)} height={m(72)} rx={m(18)} fill="url(#shell)" />

          {/* Porte-cellule, penché de 30° comme sur l'original — c'est cette
              inclinaison qui garde la pointe tangente au sillon. */}
          <g transform={`rotate(${HEADSHELL_ANGLE} ${HEADSHELL_PIVOT} 0)`}>
            <rect
              x={HEADSHELL_PIVOT - m(14)}
              y={t(291)}
              width={m(214)}
              height={m(121)}
              rx={m(30)}
              fill="url(#head)"
            />
            {/* Rainure du relève-doigt */}
            <rect
              x={HEADSHELL_PIVOT + m(120)}
              y={t(345)}
              width={m(10)}
              height={m(34)}
              rx={m(5)}
              fill="#6a6f78"
              opacity="0.75"
            />
            {/* Pointe de lecture */}
            <rect
              x={ARM_LENGTH - m(26)}
              y={t(368)}
              width={m(12)}
              height={m(52)}
              rx={m(6)}
              fill="#0e0f12"
            />
          </g>
        </svg>

        {/* Zone de préhension, invisible et généreuse : on attrape le bras au
            doigt, pas au pixel. */}
        <div className="tonearm__grip" onPointerDown={onGrab} />
      </div>
    </div>
  );
}
