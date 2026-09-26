<p align="center">
  <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/icone.png" width="120" alt="MD Vinyl" />
</p>

<h1 align="center">MD Vinyl</h1>

<p align="center">
  <b>Une platine vinyle dans la barre latérale de Home Assistant.</b><br />
  Le disque tourne, le bras avance dans le sillon, la pochette est là.<br />
  On pose l'aiguille pour lancer la musique, on la retire pour l'arrêter.
</p>

<p align="center">
  <a href="https://github.com/Raph2102/Vinyl-interface-HA/releases/latest"><img src="https://img.shields.io/github/v/release/Raph2102/Vinyl-interface-HA?style=flat-square&color=c8542e&label=version" alt="version" /></a>
  <img src="https://img.shields.io/badge/HACS-d%C3%A9p%C3%B4t%20personnalis%C3%A9-41BDF5?style=flat-square" alt="HACS" />
  <img src="https://img.shields.io/badge/configuration-aucune-2ea043?style=flat-square" alt="aucune configuration" />
  <a href="LICENSE"><img src="https://img.shields.io/github/license/Raph2102/Vinyl-interface-HA?style=flat-square&color=666" alt="licence" /></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/platine.jpg" alt="La platine en lecture" />
</p>

---

## Installation en trois clics

**Pas d'adresse à saisir, pas de jeton à créer, pas une ligne de YAML.**
Le panneau reçoit de Home Assistant une session déjà authentifiée — c'est ce qui
rend cette platine installable par n'importe qui, et pas seulement par son
auteur.

1. **HACS → menu ⋮ → Dépôts personnalisés**
   URL `https://github.com/Raph2102/Vinyl-interface-HA`, catégorie **Integration**
2. Cherche **MD Vinyl** dans HACS, installe, **redémarre**
3. **Paramètres → Appareils et services → Ajouter une intégration → MD Vinyl**

**Vinyl** apparaît dans la barre latérale. C'est tout.

> Sans HACS : copie `custom_components/md_vinyl/` dans ton dossier
> `custom_components/`, redémarre, puis ajoute l'intégration.

---

## La bibliothèque, en bac à disques

Les pochettes rangées sur une roue, qu'on fait défiler au doigt. On en touche
une, elle sort du bac et va se poser sur la platine.

<p align="center">
  <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/bibliotheque.jpg" alt="La bibliothèque en bac à disques" />
</p>

Le fond reprend la pochette qu'on regarde, et le nom de l'album de face
s'écrit en clair sous le bac. La recherche porte sur **tout le catalogue du
fournisseur** — pas seulement sur ce qui a été ajouté à la bibliothèque. Taper
« Miles » va chercher chez Deezer.

### Les playlists, et vos coups de cœur

Un second bac, pour les playlists : celles du fournisseur comme celles que
Music Assistant fabrique. On en pose une, et **toute la playlist** part dans la
file. Les coups de cœur ont leur raccourci dans l'en-tête — une touche, et la
musique démarre.

<p align="center">
  <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/playlists.jpg" alt="Le bac des playlists, avec le raccourci Coups de cœur" />
</p>

### Ce qui s'affiche, et dans quel sens

Le petit réglage à côté des onglets ouvre la liste du bac. On y **retire** les
albums et playlists qui n'ont rien à y faire — rien n'est supprimé, ils
disparaissent seulement du bac — et on marque ceux qu'on veut **lire à
l'envers**, du dernier morceau au premier : une playlist qu'on remplit par la
fin démarre alors sur ses nouveautés. Un filtre permet d'agir en masse.

Ces choix suivent la personne : ils sont gardés par Home Assistant, et se
retrouvent sur la tablette comme sur l'ordinateur.

<p align="center">
  <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/gerer.jpg" alt="Choisir les playlists affichées et celles lues à l'envers" />
</p>

---

## La file d'attente, qu'on range au doigt

Toute la file, pas seulement le morceau suivant. On touche un morceau pour y
aller ; on le **prend par sa poignée** (les trois barres, à droite) ou par un
**appui long**, et on le pose où l'on veut. Les autres s'écartent pour lui faire
place, et la liste se met à jour toute seule quand la file change ailleurs.

Pour écouter un morceau **juste après** celui en cours sans le traîner jusque-là,
on **glisse sa ligne vers la gauche** — ou on touche ses trois petits points :
**Ensuite** le place là, **Retirer** l'enlève de la file. Un morceau déjà joué
se réécoute ensuite de la même façon.

<table>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/file-deplacer.jpg" alt="Un morceau déplacé dans la file" /><p align="center">Déplacer un morceau</p></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/file-actions.jpg" alt="Les actions d'un morceau : ensuite, retirer" /><p align="center">L'écouter ensuite, ou le retirer</p></td>
  </tr>
</table>

---

## Ce qu'on peut faire

<table>
  <tr>
    <td width="50%" valign="top">
      <b>La file d'attente</b><br />
      Ce qui va suivre, avec sa durée totale ; on saute sur un morceau en le
      touchant.
      <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/file.jpg" alt="La file d'attente" />
    </td>
    <td width="50%" valign="top">
      <b>Les enceintes</b><br />
      Changer de pièce, ou y <i>emmener</i> la musique en cours sans la couper.
      <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/enceintes.jpg" alt="Le choix des enceintes" />
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <b>Les paroles</b><br />
      Synchronisées : celles que Music Assistant tient du fournisseur quand il
      les a, sinon <a href="https://lrclib.net">LRCLIB</a>. On touche une ligne
      pour y revenir.
      <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/paroles.jpg" alt="Les paroles synchronisées" />
    </td>
    <td width="50%" valign="top">
      <b>L'écran de repos</b><br />
      Une horloge, après quelques minutes sans musique ni geste.
      <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/repos.jpg" alt="L'écran de repos" />
    </td>
  </tr>
</table>

### Les gestes

| Geste | Effet |
| --- | --- |
| **Poser le bras** sur le disque | Lance la lecture, à l'endroit où on l'a posé |
| **Tirer le bras** hors du disque | Arrête la lecture |
| **Glisser le bras** le long du sillon | Se déplacer dans le morceau |
| **Balayer** horizontalement | Morceau précédent / suivant |
| **Toucher la pochette** | La faire passer devant le disque |
| **Tenir la poignée ≡** d'un morceau, ou **appuyer longuement** dessus | Le déplacer dans la file |
| **Glisser** un morceau de la file **vers la gauche**, ou toucher **⋯** | L'écouter ensuite, ou le retirer |
| Flèches ↑ ↓ sur une poignée | Déplacer le morceau d'un rang, au clavier |
| Ne rien faire quatre secondes | Les commandes s'effacent |

Un réglage remplace l'aiguille par un bouton classique, si on préfère.

---

## Six matières de disque

Au choix, ou reprenant la couleur de la pochette en cours — le disque change
alors de teinte avec l'album. C'est la couleur la plus **vive** de la pochette
qui est retenue, pas la plus étendue : la dominante d'une photo tombe souvent
dans le brun gris, un pigment de vinyle jamais.

<table>
  <tr>
    <td width="25%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/matiere-marbre.jpg" alt="Marbré" /><p align="center"><b>Marbré</b></p></td>
    <td width="25%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/matiere-eclaboussure.jpg" alt="Éclaboussé" /><p align="center"><b>Éclaboussé</b></p></td>
    <td width="25%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/matiere-transparent.jpg" alt="Transparent" /><p align="center"><b>Transparent</b></p></td>
    <td width="25%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/matiere-noir.jpg" alt="Noir" /><p align="center"><b>Noir</b></p></td>
  </tr>
</table>

Le marbré se décline en **cinq motifs** : la coulée d'origine, et la
**nébuleuse** avec ses variantes — des volutes calculées comme la matière se
forme sous la presse, une galette de pâtes mêlées écrasée en tournant.

<table>
  <tr>
    <td width="25%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/motif-nebuleuse.jpg" alt="Nébuleuse" /><p align="center"><b>Nébuleuse</b></p></td>
    <td width="25%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/motif-nuit.jpg" alt="Nuit" /><p align="center"><b>Nuit</b></p></td>
    <td width="25%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/motif-brume.jpg" alt="Brume" /><p align="center"><b>Brume</b></p></td>
    <td width="25%"><img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/motif-aurore.jpg" alt="Aurore" /><p align="center"><b>Aurore</b></p></td>
  </tr>
</table>

S'ajoutent le blanc et le teinté. Avec, dans les réglages, la taille des
pochettes, le texte de l'étiquette, le fond adaptatif et la vitesse de rotation.

<p align="center">
  <img src="https://raw.githubusercontent.com/Raph2102/Vinyl-interface-HA/main/docs/images/reglages.jpg" width="70%" alt="Les réglages" />
</p>

---

## Comment c'est fait

**Le panneau reçoit `hass`, et rien d'autre.** Home Assistant remet à chaque
panneau de son frontend un objet déjà authentifié avec la session de
l'utilisateur connecté. La platine s'y greffe : elle lit les états, appelle les
services et interroge Music Assistant avec les droits de cette personne. D'où
l'absence totale de configuration.

**L'intégration sert elle-même son module**, à une adresse qu'elle contrôle,
avec le numéro de version dedans. Une mise à jour est donc visible tout de
suite, là où un fichier déposé dans `config/www/` reste caché par le cache du
navigateur pendant des jours.

**Le panneau vit dans un shadow DOM.** Nos styles ne débordent pas sur le
frontend de Home Assistant, et les siens ne viennent pas déformer la platine.
Seules les règles `@font-face` sont partagées avec le document — le navigateur
les ignore purement et simplement à l'intérieur d'un arbre d'ombre.

**La géométrie est relevée, pas dessinée à l'œil.** Le bras suit la vraie
relation entre son angle et le rayon atteint — théorème d'Al-Kashi sur le
triangle pivot-centre-pointe, résolu dans les deux sens. La pointe tombe donc
toujours dans le bon sillon, quelle que soit la taille à l'écran, et le
glisser-pour-se-déplacer est exact. Les bornes de la course viennent d'un
balayage de luminance sur le rendu : l'étiquette finit à 0,466 rayon, les
sillons commencent à 0,615.

Un détail qui a coûté cher : la pointe **n'est pas au bout du bras**. Le
porte-cellule est incliné de 30°, et une fois tourné, la pointe se retrouve à
0,957 de la longueur du bras, décalée de 5,5° par rapport à son axe. Tant qu'on
plaçait le bout du bras, on plaçait un point qui n'existe pas.

**La file ne passe pas par Home Assistant.** Son action `get_queue` ne rend
qu'un résumé — le morceau en cours, le suivant, et le *nombre* de morceaux — et
aucune action ne permet d'en déplacer un. Music Assistant, lui, sait tout faire,
mais son API exige une authentification… sauf quand on l'atteint par l'ingress
de Home Assistant, comme le fait son propre panneau dans la barre latérale. La
platine emprunte le même chemin : le superviseur délivre une session d'ingress,
et le WebSocket de Music Assistant s'ouvre au nom de la personne connectée. Rien
à configurer, et les changements arrivent en direct.

**La position de lecture est interpolée.** Home Assistant n'envoie pas un flux
continu : il envoie une position figée accompagnée de `media_position_updated_at`.
Le mouvement du bras et le compteur sont calculés localement à partir de ces
deux valeurs, à soixante images par seconde.

**Le bac à disques est en CSS 3D.** Chaque pochette est une boîte à quatre faces
posée sur un cercle. Le défilement est continu et écrit image par image, sans
passer par React : la fenêtre des pochettes montées ne bouge que par paliers,
donc un geste ne provoque jamais de décodage d'image.

---

## À savoir

**La bibliothèque demande des droits d'administrateur.** Elle passe par
`config_entries/get`, réservé aux comptes administrateurs. Un utilisateur
ordinaire verra la platine et pourra commander la lecture, mais pas parcourir la
bibliothèque ni faire de recherche.

**Music Assistant est optionnel mais recommandé.** Sans lui, la platine affiche
et commande n'importe quel `media_player`. Avec lui s'ajoutent la bibliothèque,
les playlists, la recherche, la file d'attente et le transfert entre pièces.

**La file complète et son rangement demandent Music Assistant en module
complémentaire** (Home Assistant OS ou supervisé) et un compte administrateur :
c'est par le superviseur que passe la liaison. Ailleurs — Music Assistant en
Docker, par exemple — la file montre le morceau en cours et le suivant, et le
dit. La lecture à l'envers passe par la même liaison ; sans elle, on lit dans
l'ordre.

**Les pochettes viennent du fournisseur, à la taille de l'écran.** Music
Assistant ne garde souvent qu'une vignette (264 pixels pour le morceau en
cours) ; la platine redemande l'image au fournisseur à la taille où elle
s'affiche, jusqu'à 1 400 pixels chez Deezer, et des vignettes plus petites là où
elles le sont.

**Les pochettes viennent du fournisseur.** Elles sont chargées depuis son CDN et
lues dans un canvas pour en extraire les couleurs du fond adaptatif — ce qui
suppose qu'il autorise la lecture entre origines. Celui de Deezer le fait.

---

## Développement

```bash
npm install
npm run dev            # page autonome, avec proxy vers Home Assistant
npm run build:panel    # construit le module dans custom_components/md_vinyl/frontend/
npm run banc:panel     # banc d'essai du panneau, sans Home Assistant
```

Le dépôt contient de quoi vérifier sans instance sous la main :

| Commande | Ce qu'elle vérifie |
| --- | --- |
| `npm run fake-ha` | Un faux Home Assistant qui parle le vrai protocole — poignée de main du WebSocket, format compressé des états, actions avec réponse — et, derrière un faux ingress, un faux Music Assistant : session, cookie, file, déplacements avec les mêmes refus que le vrai, événements. Les formes des réponses sont relevées sur une vraie installation. |
| `npm run check:ha` | Près d'une centaine de contrôles de bout en bout contre ce faux serveur, dans un vrai navigateur : ce que l'app **affiche**, et ce qu'elle **envoie**. Avant le moindre clic, il prouve qu'il parle bien au faux serveur, et s'arrête sinon. |
| `npm run check:gestures` | Les gestes, pilotés par le protocole DevTools : poser l'aiguille, la retirer, balayer. |
| `npm run diagnose` | Diagnostic complet d'une vraie installation, étape par étape. |
| `npm run check:real` | L'app entière contre une vraie instance, en lecture seule. |

Le banc du panneau sert trois pages : `/` sans cadre, `/cadre` avec un rail et
une barre du haut comme dans Home Assistant, et `/souple` sans hauteur définie.
Les deux dernières existent parce qu'un défaut de positionnement est invisible
quand le panneau reçoit tout l'écran.

Les captures de ce fichier sont produites par `node tools/captures.mjs` : elles
se refont à l'identique après un changement d'interface, et elles montrent le
mode démonstration — donc jamais la bibliothèque de qui que ce soit.

Il existe aussi une **page autonome** (`npm run build` → `dist/index.html`), à
déposer dans `config/www/`. Elle demande un jeton d'accès longue durée, lisible
par qui peut atteindre l'adresse : Home Assistant sert `config/www/` sans
authentification. Utilisable chez soi, pas distribuable — c'est précisément ce
que le panneau corrige.

---

## Remerciements

Les pochettes visibles sur les captures viennent d'une bibliothèque Deezer
personnelle ; elles appartiennent à leurs ayants droit et ne servent ici qu'à
montrer l'interface.

L'application [MD Vinyl](https://play.google.com/store/apps/details?id=tech.miidii.mdvinyl_android)
a servi de référence visuelle. Aucun de ses fichiers n'est redistribué ici : ses
images ont servi de mètre-ruban pour relever des proportions, rien de plus.
