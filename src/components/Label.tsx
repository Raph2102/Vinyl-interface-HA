/**
 * Étiquette centrale du disque.
 *
 * Construite d'après un zoom sur la référence. Ce qui compte, dans l'ordre :
 *  - un ANNEAU CONTINU de micro-texte tout autour, en serif — c'est ce qui fait
 *    « crédits de pressage » plutôt que « légende sous une image » ;
 *  - un titre nettement plus lourd et plus gros que l'artiste (rapport ~1,6) ;
 *  - un code-barres posé près du bord, orienté selon le rayon ;
 *  - un fin cerne sombre au bord, et un halo discret autour du trou.
 *
 * Repère : viewBox 200×200, centre (100,100), rayon 100.
 */

import { useEffect, useState } from "react";

interface LabelProps {
  title: string;
  artist: string;
  album: string;
  /** Bas de l'anneau : vitesse et gravure. */
  footer: string;
  /** Côté droit de l'anneau : pièce et durée. */
  mark: string;
}

const C = 100;
/** Rayon de l'anneau de micro-texte, en fraction du rayon d'étiquette. */
const RING = 86;

/**
 * Quatre arcs répartis autour du cercle. Un arc parcouru de gauche à droite
 * donne du texte lisible par le haut (sweep 1) comme par le bas (sweep 0) ;
 * pour les côtés on incline le même tracé.
 */
function arc(radius: number, rotation: number, sweep: 0 | 1): string {
  const rad = (rotation * Math.PI) / 180;
  const dx = radius * Math.cos(rad);
  const dy = radius * Math.sin(rad);
  return `M ${C - dx},${C - dy} A ${radius},${radius} 0 0,${sweep} ${C + dx},${C + dy}`;
}

/**
 * Corps de texte qui remplit exactement la largeur donnée.
 *
 * On MESURE le texte avec la police réelle plutôt que d'estimer une largeur
 * moyenne par caractère : « Nuit américaine » et « IIIIIIIIIIIIIII » ont le même
 * nombre de lettres et pas du tout la même largeur, et une estimation prudente
 * finit toujours par sous-dimensionner le titre — c'est ce qui le rendait petit
 * et timide au milieu de l'étiquette.
 */
const gauge = typeof document !== "undefined" ? document.createElement("canvas").getContext("2d") : null;
const widths = new Map<string, number>();

function emWidth(text: string, weight: number): number {
  const key = `${weight}|${text}`;
  const cached = widths.get(key);
  if (cached !== undefined) return cached;
  if (!gauge) return 0.55 * text.length;

  gauge.font = `${weight} 100px Inter, sans-serif`;
  const width = gauge.measureText(text).width / 100;
  widths.set(key, width);
  return width;
}

function fitSize(text: string, maxWidth: number, max: number, min: number, weight: number): number {
  if (!text) return max;
  const em = emWidth(text, weight);
  if (em <= 0) return max;
  return Math.max(min, Math.min(max, maxWidth / em));
}

function truncate(text: string, limit: number): string {
  return text.length > limit ? `${text.slice(0, limit - 1).trimEnd()}…` : text;
}

/** Code-barres décoratif, mais stable : le même morceau donne toujours le même. */
function barcode(seed: string): number[] {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const bars: number[] = [];
  for (let i = 0; i < 20; i++) {
    hash = Math.imul(hash ^ (hash >>> 15), 2246822507);
    bars.push(((hash >>> 8) & 3) === 0 ? 1.3 : 0.6);
  }
  return bars;
}

export function Label({ title, artist, album, footer, mark }: LabelProps) {
  // La toute première mesure peut tomber avant qu'Inter ne soit prête, et donner
  // les largeurs de la police de secours. On redessine une fois qu'elle l'est.
  const [, setFontsReady] = useState(false);
  useEffect(() => {
    let alive = true;
    void document.fonts?.ready.then(() => {
      if (alive) {
        widths.clear();
        setFontsReady(true);
      }
    });
    return () => {
      alive = false;
    };
  }, []);

  const safeTitle = truncate(title || "—", 30);
  const safeArtist = truncate(artist || "", 30);

  const titleSize = fitSize(safeTitle, 126, 30, 9, 800);
  const artistSize = fitSize(safeArtist, 112, 18, 7.5, 650);

  const bars = barcode(`${title}${artist}`);
  let bx = 0;

  return (
    <svg className="label__svg" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="ring-top" d={arc(RING, 0, 1)} fill="none" />
        <path id="ring-bottom" d={arc(RING, 0, 0)} fill="none" />
        <path id="ring-left" d={arc(RING, 90, 0)} fill="none" />
        <path id="ring-right" d={arc(RING, 90, 1)} fill="none" />
      </defs>

      {/* Filet imprimé, à l'intérieur du bord */}
      <circle cx={C} cy={C} r="94" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.7" />

      <g className="label__micro" fill="rgba(20,18,16,0.62)" fontSize="7" textAnchor="middle">
        <text>
          <textPath href="#ring-top" startOffset="50%">
            {truncate(album || "", 42)}
          </textPath>
        </text>
        <text>
          <textPath href="#ring-bottom" startOffset="50%">
            {truncate(footer, 46)}
          </textPath>
        </text>
        <text fill="rgba(20,18,16,0.45)">
          <textPath href="#ring-left" startOffset="50%">
            {truncate(artist || "", 34)}
          </textPath>
        </text>
        <text fill="rgba(20,18,16,0.45)">
          <textPath href="#ring-right" startOffset="50%">
            {truncate(mark, 34)}
          </textPath>
        </text>
      </g>

      <text
        className="label__title"
        x={C}
        y={C - 26}
        fontSize={titleSize}
        textAnchor="middle"
        fill="#131211"
      >
        {safeTitle}
      </text>

      {/* Halo d'usure autour de l'axe, très discret */}
      <circle cx={C} cy={C} r="15" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.2" />
      <circle cx={C} cy={C} r="4.6" fill="#4a4b4e" />
      <circle cx={C} cy={C} r="4.6" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="0.9" />

      <text
        className="label__artist"
        x={C}
        y={C + 34}
        fontSize={artistSize}
        textAnchor="middle"
        fill="rgba(19,18,17,0.82)"
      >
        {safeArtist}
      </text>

      {/* Code-barres près du bord, aligné sur le rayon comme sur un vrai pressage */}
      <g transform="rotate(38 100 100) translate(93 22)" opacity="0.6">
        {bars.map((width, i) => {
          const x = bx;
          bx += width + 0.55;
          return <rect key={i} x={x} y="0" width={width} height="7.5" fill="#131211" />;
        })}
      </g>
    </svg>
  );
}
