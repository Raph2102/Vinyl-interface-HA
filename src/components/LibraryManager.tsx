/**
 * Ce que montre le bac, et dans quel sens on lit.
 *
 * Une bibliothèque Music Assistant accumule vite des dizaines de playlists :
 * celles du fournisseur, celles qu'il génère, celles qu'on a oubliées. Ce
 * volet permet d'en retirer du bac sans rien supprimer nulle part, et de
 * marquer celles qu'on veut lire du dernier morceau au premier — une playlist
 * qu'on remplit par la fin garde ses nouveautés au bout.
 *
 * Les choix suivent la personne d'un appareil à l'autre (voir prefs.ts).
 */

import { useMemo, useState } from "react";
import type { Media } from "../lib/library";
import type { LibraryTab } from "./Library";

interface LibraryManagerProps {
  tab: LibraryTab;
  /** Tout le contenu du bac, masqués compris. */
  items: Media[];
  hidden: Set<string>;
  reversed: Set<string>;
  /** Sans liaison Music Assistant, on ne sait pas lire à l'envers. */
  canReverse: boolean;
  onToggleHidden: (uri: string) => void;
  onToggleReversed: (uri: string) => void;
  /** Affiche ou masque d'un coup tout ce que le filtre laisse voir. */
  onSetVisible: (uris: string[], visible: boolean) => void;
  onClose: () => void;
}

export function LibraryManager({
  tab,
  items,
  hidden,
  reversed,
  canReverse,
  onToggleHidden,
  onToggleReversed,
  onSetVisible,
  onClose,
}: LibraryManagerProps) {
  const [filtre, setFiltre] = useState("");

  const liste = useMemo(() => {
    const q = filtre.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) => i.name.toLowerCase().includes(q) || i.artist.toLowerCase().includes(q),
    );
  }, [filtre, items]);

  const affichees = items.filter((i) => !hidden.has(i.uri)).length;
  const aLEnvers = items.filter((i) => reversed.has(i.uri)).length;
  const nom = tab === "playlists" ? "playlist" : "album";
  const pluriel = (n: number, mot: string) => `${n} ${mot}${n > 1 ? "s" : ""}`;

  return (
    <aside className="manage sidepanel" role="dialog" aria-label="Choisir ce qui s'affiche">
      <header className="sidepanel__head">
        <h2>
          {tab === "playlists" ? "Playlists du bac" : "Albums du bac"}
          <small>
            {affichees} sur {pluriel(items.length, nom)} affiché{tab === "playlists" ? "e" : ""}
            {affichees > 1 ? "s" : ""}
            {aLEnvers > 0 ? ` · ${aLEnvers} à l'envers` : ""}
          </small>
        </h2>
        <button className="iconbtn iconbtn--small" onClick={onClose} aria-label="Fermer le choix">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z"
              fill="currentColor"
            />
          </svg>
        </button>
      </header>

      <div className="manage__tools">
        <input
          type="search"
          value={filtre}
          placeholder={tab === "playlists" ? "Filtrer les playlists…" : "Filtrer les albums…"}
          aria-label="Filtrer la liste"
          onChange={(e) => setFiltre(e.target.value)}
        />
        {/* Le filtre sert aussi à agir en masse : « 100 % » puis « Masquer ». */}
        <div className="manage__bulk">
          <button onClick={() => onSetVisible(liste.map((i) => i.uri), true)}>
            {filtre.trim() ? "Afficher ceux-ci" : "Tout afficher"}
          </button>
          <button onClick={() => onSetVisible(liste.map((i) => i.uri), false)}>
            {filtre.trim() ? "Masquer ceux-ci" : "Tout masquer"}
          </button>
        </div>
      </div>

      <div className="manage__legend" aria-hidden="true">
        <span>Visible</span>
        <span>À l'envers</span>
      </div>

      <ul className="sidepanel__list manage__list">
        {liste.map((item) => {
          const visible = !hidden.has(item.uri);
          const inverse = reversed.has(item.uri);
          return (
            <li key={item.uri} className="manage__item" data-hidden={!visible}>
              <span
                className="queue__art"
                style={{ backgroundImage: item.image ? `url("${item.image}")` : undefined }}
              />
              <span className="sidepanel__text">
                <b>{item.name}</b>
                <span>{item.pinned ? "♥ Favoris" : item.artist || "Playlist"}</span>
              </span>
              <button
                className="manage__switch"
                role="switch"
                aria-checked={visible}
                aria-label={`Afficher « ${item.name} » dans le bac`}
                onClick={() => onToggleHidden(item.uri)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {visible ? (
                    <path
                      d="M12 5c5 0 8.6 3.6 10 7-1.4 3.4-5 7-10 7S3.4 15.4 2 12c1.4-3.4 5-7 10-7zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                      fill="currentColor"
                    />
                  ) : (
                    <path
                      d="m3.3 2 18.7 18.7-1.3 1.3-3.5-3.5A10.8 10.8 0 0 1 12 19c-5 0-8.6-3.6-10-7a12 12 0 0 1 3.7-4.8L2 3.3 3.3 2zm4 6.6a6 6 0 0 0-3.1 3.4C5.4 14.7 8.4 17 12 17c1.1 0 2.2-.2 3.2-.6l-1.6-1.6a4 4 0 0 1-5.4-5.4L7.3 8.6zM12 5c5 0 8.6 3.6 10 7a11.6 11.6 0 0 1-2.9 4.2l-1.4-1.4c.8-.8 1.5-1.8 1.9-2.8C18.6 9.3 15.6 7 12 7c-.7 0-1.4.1-2 .2L8.4 5.6C9.5 5.2 10.7 5 12 5z"
                      fill="currentColor"
                    />
                  )}
                </svg>
              </button>
              <button
                className="manage__switch"
                role="switch"
                aria-checked={inverse}
                aria-label={`Lire « ${item.name} » à l'envers`}
                title={canReverse ? "Du dernier morceau au premier" : "Demande la liaison Music Assistant"}
                disabled={!canReverse}
                onClick={() => onToggleReversed(item.uri)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3 3 7h3v10h2V7h3L7 3zm10 18 4-4h-3V7h-2v10h-3l4 4z" fill="currentColor" />
                </svg>
              </button>
            </li>
          );
        })}
        {liste.length === 0 && <li className="sidepanel__empty">Rien ne correspond.</li>}
      </ul>

      {!canReverse && (
        <p className="sidepanel__note">
          La lecture à l'envers passe par le module Music Assistant de Home Assistant ; sans lui,
          on lit dans l'ordre.
        </p>
      )}
    </aside>
  );
}
