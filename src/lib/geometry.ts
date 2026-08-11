/**
 * Géométrie du bras de lecture.
 *
 * Un vrai bras pivote autour d'un axe placé À CÔTÉ du plateau : la pointe décrit
 * donc un arc, pas une ligne droite. Si on se contente d'interpoler bêtement un
 * angle entre deux valeurs choisies à l'œil, la pointe quitte le sillon dès qu'on
 * change la taille du disque — et le glisser-pour-se-déplacer devient faux.
 *
 * On résout donc la vraie relation angle ↔ rayon, dans les deux sens, par le
 * théorème d'Al-Kashi sur le triangle pivot–centre–pointe :
 *
 *     r² = D² + L² − 2·D·L·cos θ
 *
 * où D = distance pivot→centre, L = longueur du bras, r = rayon où pose la pointe
 * et θ = angle au pivot entre la direction du centre et celle du bras.
 *
 * Toutes les longueurs sont exprimées en rayons de disque (le disque a un rayon
 * de 1), donc la géométrie est juste quelle que soit la taille à l'écran.
 */

/*
 * Ces valeurs ne sont plus estimées : elles sont MESURÉES sur les ressources de
 * l'application d'origine, extraites de son paquet Android.
 *
 * Le rendu officiel `preview_vinyl_xl.png` (1884 × 900) donne, en pixels :
 *   disque    centre (1372, 375), rayon 317
 *   étiquette rayon 147           -> 0,464 rayon de disque
 *   pivot     (1668, 140)         -> 1,19 rayon, relèvement 141,6°
 *   pointe    (1570, 570)         -> 1,39 rayon depuis le pivot
 *
 * Les relevés faits auparavant sur une photo d'écran en donnaient 1,20 / 1,45 /
 * 147° : la photo était bonne, mais ces trois degrés et ces six centièmes se
 * voyaient. Ne pas « arrondir » ces nombres à vue.
 */

/** Distance du pivot au centre du disque. */
export const PIVOT_DISTANCE = 1.19;
/** Longueur utile du bras, du pivot à la pointe de lecture. */
export const ARM_LENGTH = 1.39;
/** Direction pivot→centre, en degrés écran (y vers le bas). Pivot en haut à droite. */
export const PIVOT_BEARING = 141.6;

/** Rayon où commence le premier sillon (juste à l'intérieur du bord lisse). */
/*
 * Course de la pointe, en fractions du rayon du disque.
 *
 * Ces deux valeurs étaient fausses, et depuis le début : la pointe descendait
 * jusqu'à 0,49 R alors que l'étiquette commence à 0,464 R — elle finissait donc
 * sa course SUR la pastille blanche, ce qu'aucune platine ne fait.
 *
 * Les bornes sont relevées du rendu réel, au pixel, plutôt que devinées : un
 * balayage de la luminance le long d'un rayon donne l'étiquette blanche jusqu'à
 * 0,466 R, puis une zone lisse sans aucune rainure, et le début des sillons à
 * 0,615 R seulement.
 *
 * La pointe s'arrête volontairement bien avant cette limite intérieure, dans la
 * partie où les sillons sont francs : sur un disque de quelques centimètres à
 * l'écran, une course qui va jusqu'au dernier sillon paraît descendre beaucoup
 * trop bas, même quand elle est géométriquement juste.
 */
export const RADIUS_OUTER = 1.0;
/** Rayon où finit le dernier sillon (juste à l'extérieur de l'étiquette). */
export const RADIUS_INNER = 0.78;
/** Rayon de l'étiquette centrale. */
export const LABEL_RADIUS = 0.464;

const DEG = 180 / Math.PI;

/*
 * La pointe DESSINÉE n'est pas au bout du bras — et c'est ce qui faussait tout.
 *
 * Le porte-cellule est incliné de 30°, et la pointe est dessinée dedans. Une
 * fois le porte-cellule tourné, la pointe n'est donc plus ni à ARM_LENGTH du
 * pivot, ni dans l'axe du tube. En raisonnant sur le bout du bras, on plaçait
 * un point qui n'existe pas : mesuré à l'écran, l'aiguille se posait à 0,832
 * rayon là où le calcul la croyait à 0,976. D'où une course qui n'atteignait
 * jamais le bord, quoi qu'on règle.
 *
 * Les deux corrections ci-dessous viennent des cotes du SVG :
 *   pointe avant rotation   (1352 ; 42,5) px, pivot du porte-cellule à 1172 px
 *   après rotation de 30°   (1306,6 ; 126,8) px
 *   d'où une longueur utile de 1312,7 px au lieu de 1372, et un décalage
 *   angulaire de 5,545° entre l'axe du bras et la direction de la pointe.
 *
 * Vérifié : avec ces valeurs, le calcul redonne exactement les 0,832 mesurés.
 */
const TIP_LENGTH = ARM_LENGTH * (1312.74 / 1372);
const TIP_OFFSET = 5.545;

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

/** Angle au pivot correspondant à une pointe posée au rayon r. */
function pivotAngleForRadius(r: number): number {
  const cos =
    (PIVOT_DISTANCE * PIVOT_DISTANCE + TIP_LENGTH * TIP_LENGTH - r * r) /
    (2 * PIVOT_DISTANCE * TIP_LENGTH);
  return Math.acos(Math.min(1, Math.max(-1, cos))) * DEG + TIP_OFFSET;
}

/** Rayon atteint par la pointe pour un angle au pivot donné. */
function radiusForPivotAngle(theta: number): number {
  const t = (theta - TIP_OFFSET) / DEG;
  const r2 =
    PIVOT_DISTANCE * PIVOT_DISTANCE +
    TIP_LENGTH * TIP_LENGTH -
    2 * PIVOT_DISTANCE * TIP_LENGTH * Math.cos(t);
  return Math.sqrt(Math.max(0, r2));
}

/**
 * Rotation CSS à appliquer au bras (degrés) pour un avancement 0→1.
 * Le bras part du bord du disque et progresse vers le centre, comme un vrai.
 */
export function armAngleForProgress(progress: number): number {
  const r = RADIUS_OUTER + (RADIUS_INNER - RADIUS_OUTER) * clamp01(progress);
  return PIVOT_BEARING - pivotAngleForRadius(r);
}

/**
 * Angle du bras au repos, sur son support, franchement à l'écart du disque.
 *
 * Le rayon 1,36 n'est pas décoratif : c'est lui qui donne au geste ses ~19° de
 * débattement. À 1,08 le bras ne bougeait que de six degrés en s'arrêtant, et
 * on ne voyait tout simplement pas que la lecture s'était interrompue.
 */
export const ARM_REST_ANGLE = PIVOT_BEARING - pivotAngleForRadius(1.36);

/** Inverse de armAngleForProgress : sert au glisser-pour-se-déplacer. */
export function progressForArmAngle(angleDeg: number): number {
  const theta = PIVOT_BEARING - angleDeg;
  const r = radiusForPivotAngle(Math.max(0, theta));
  return clamp01((r - RADIUS_OUTER) / (RADIUS_INNER - RADIUS_OUTER));
}

/**
 * Position du pivot, en rayons de disque depuis le centre (y vers le bas).
 * La direction centre→pivot est l'opposée de pivot→centre.
 */
const CENTER_TO_PIVOT = (PIVOT_BEARING - 180) / DEG;
export const PIVOT = {
  x: PIVOT_DISTANCE * Math.cos(CENTER_TO_PIVOT),
  y: PIVOT_DISTANCE * Math.sin(CENTER_TO_PIVOT),
};

/**
 * Angle du bras pointant vers un point de l'écran, pour le glisser.
 * `dx`/`dy` : position du doigt relative au CENTRE du disque, en rayons de disque.
 */
export function armAngleForPointer(dx: number, dy: number): number {
  return Math.atan2(dy - PIVOT.y, dx - PIVOT.x) * DEG;
}
