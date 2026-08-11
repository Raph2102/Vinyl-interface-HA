/**
 * La file d'attente : ce qui va suivre sur l'enceinte, et de quoi y sauter.
 *
 * Music Assistant tient une file par lecteur, et `get_queue` se cible par
 * ENTITÉ — contrairement à la recherche et à la bibliothèque, qui interrogent
 * le fournisseur par `config_entry_id`. Changer d'enceinte change donc de file,
 * ce qui est exactement le comportement attendu.
 *
 * Chaque ligne est une commande, pas une étiquette : on touche la piste 3 pour
 * y aller. Une liste qui montre la suite sans permettre de s'y rendre demande à
 * l'utilisateur d'appuyer n fois sur « suivant » pour faire ce qu'il voit.
 */

import type { QueueItem } from "../lib/library";
import { formatTime } from "../lib/position";

interface QueueProps {
  items: QueueItem[];
  loading: boolean;
  error: string | null;
  /** Rang du morceau en cours, tel que Music Assistant le donne. -1 s'il est inconnu. */
  current: number;
  /** Morceau sur lequel on vient de sauter, tant que la file n'a pas suivi. */
  pending: string | null;
  onPick: (item: QueueItem) => void;
  onClose: () => void;
}

export function Queue({ items, loading, error, current, pending, onPick, onClose }: QueueProps) {
  return (
    <aside className="queue sidepanel" role="dialog" aria-label="File d'attente">
      <header className="sidepanel__head">
        <h2>À suivre</h2>
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

      <ol className="sidepanel__list">
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

          return (
            <li key={item.id} className="queue__item" data-state={etat}>
              <button
                className="queue__pick"
                onClick={() => onPick(item)}
                disabled={!item.uri}
                title={item.uri ? `Aller à « ${item.name} »` : "Ce morceau n'est pas adressable"}
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
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
