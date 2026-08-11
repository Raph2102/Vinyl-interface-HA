# MD Vinyl pour Home Assistant

Une platine vinyle dans la barre latérale de Home Assistant. Le disque tourne,
le bras avance dans le sillon au fil du morceau, la pochette est là — et c'est
une vraie télécommande : on pose l'aiguille pour lancer la lecture, on la retire
pour l'arrêter.

Elle pilote n'importe quelle enceinte de Home Assistant, et tire le meilleur de
[Music Assistant](https://music-assistant.io) quand il est présent : bibliothèque
en bac à disques, recherche dans le catalogue du fournisseur, file d'attente,
transfert de la musique d'une pièce à l'autre.

> **Installation en trois clics, sans rien configurer.** Pas d'adresse à saisir,
> pas de jeton à créer, pas une ligne de YAML. Le panneau reçoit de Home
> Assistant une session déjà authentifiée.

---

## Installation

### Par HACS

1. **HACS → menu ⋮ → Dépôts personnalisés**
   URL : `https://github.com/Raph2102/Vinyl-interface-HA` — catégorie : **Integration**
2. Cherche **MD Vinyl** dans HACS et installe-le.
3. **Redémarre Home Assistant** (HACS te le proposera).
4. **Paramètres → Appareils et services → Ajouter une intégration → MD Vinyl**, puis valide.

**Vinyl** apparaît dans la barre latérale. Il n'y a rien d'autre à faire.

### Sans HACS

Copie le dossier `custom_components/md_vinyl/` dans le `custom_components/` de ta
configuration, redémarre, puis ajoute l'intégration comme ci-dessus.

---

## Ce que ça sait faire

| | |
| --- | --- |
| **Poser l'aiguille** | On attrape le bras et on le pose sur le disque : la lecture démarre à l'endroit où on l'a posé. On le retire, elle s'arrête. Un réglage permet de revenir à un bouton classique. |
| **Se déplacer dans le morceau** | En glissant l'aiguille le long du sillon. La course suit la vraie relation angle-rayon d'un bras de platine. |
| **Changer de morceau** | D'un balayage horizontal, avec l'animation du disque qu'on remplace. |
| **Bibliothèque en bac à disques** | Les pochettes rangées sur une roue, qu'on fait défiler au doigt. On en touche une, elle sort du bac et va se poser sur la platine. |
| **Recherche** | Dans tout le catalogue du fournisseur — pas seulement dans ce qui a été ajouté à la bibliothèque. |
| **File d'attente** | Ce qui va suivre, et on saute directement sur un morceau en le touchant. |
| **Enceintes** | Changer de pièce, ou y **emmener la musique** en cours sans la couper. |
| **Paroles synchronisées** | Via [LRCLIB](https://lrclib.net), gratuit et sans compte. |
| **Écran de repos** | Une horloge, après quelques minutes sans musique ni geste. |
| **Apparence** | Six matières de disque — blanc, transparent, noir, teinté, marbré, éclaboussé —, couleur au choix ou reprise de la pochette, texte d'étiquette, fond adaptatif, 33 ou 45 tours. |

---

## Comment c'est fait

**Le panneau reçoit `hass`, et rien d'autre.** Home Assistant remet à chaque
panneau du frontend un objet déjà authentifié avec la session de l'utilisateur
connecté. La platine s'y greffe : elle lit les états, appelle les services et
interroge Music Assistant avec les droits de cette personne. D'où l'absence
totale de configuration — et le fait que l'app soit installable par quelqu'un
d'autre que son auteur.

**L'intégration sert elle-même son module.** Le fichier JavaScript est exposé par
le composant Python à une adresse qu'il contrôle, avec le numéro de version dans
l'URL. Une mise à jour est donc visible immédiatement, là où un fichier déposé
dans `config/www/` reste caché par le cache du navigateur pendant des jours.

**Le panneau vit dans un shadow DOM.** Nos styles ne débordent pas sur le
frontend de Home Assistant, et les siens ne viennent pas déformer la platine.
Seules les règles `@font-face` sont partagées avec le document — le navigateur
les ignore purement et simplement à l'intérieur d'un arbre d'ombre.

**La géométrie est relevée, pas dessinée à l'œil.** Le bras suit la vraie
relation entre son angle et le rayon atteint (théorème d'Al-Kashi sur le triangle
pivot–centre–pointe), dans les deux sens : la pointe tombe donc toujours dans le
bon sillon, quelle que soit la taille à l'écran, et le glisser-pour-se-déplacer
est exact. Les bornes de la course viennent d'un balayage de luminance sur le
rendu : l'étiquette finit à 0,466 rayon, les sillons commencent à 0,615.

Un détail qui a coûté cher : la pointe **n'est pas au bout du bras**. Le
porte-cellule est incliné de 30°, et une fois tourné, la pointe se retrouve à
0,957 de la longueur du bras, décalée de 5,5° par rapport à son axe. Tant qu'on
plaçait le bout du bras, on plaçait un point qui n'existe pas.

**La position de lecture est interpolée.** Home Assistant n'envoie pas un flux
continu : il envoie une position figée accompagnée de `media_position_updated_at`.
Le mouvement du bras et le compteur sont calculés localement à partir de ces deux
valeurs, à soixante images par seconde.

**Le bac à disques est en CSS 3D.** Chaque pochette est une boîte à quatre faces
posée sur un cercle. Le défilement est continu et écrit image par image, sans
passer par React : la fenêtre des pochettes montées ne bouge que par paliers,
donc un geste ne provoque jamais de décodage d'image.

---

## Ce qu'il faut savoir

**La bibliothèque demande des droits d'administrateur.** Elle passe par
`config_entries/get`, réservé aux comptes administrateurs de Home Assistant. Un
utilisateur ordinaire verra la platine et pourra commander la lecture, mais pas
parcourir la bibliothèque ni faire de recherche.

**Music Assistant est optionnel mais recommandé.** Sans lui, la platine affiche
et commande n'importe quel `media_player`. Avec lui s'ajoutent la bibliothèque,
la recherche, la file d'attente et le transfert entre pièces.

**Les pochettes proviennent du fournisseur.** Elles sont chargées directement
depuis son CDN, et lues dans un canvas pour en extraire les couleurs du fond
adaptatif — ce qui suppose que le CDN autorise la lecture entre origines. Celui
de Deezer le fait.

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
| `npm run fake-ha` | Un faux Home Assistant qui parle le vrai protocole — poignée de main du WebSocket, format compressé des états, actions avec réponse — et renvoie des charges utiles Music Assistant de forme réaliste. |
| `npm run check:ha` | 48 contrôles de bout en bout contre ce faux serveur, dans un vrai navigateur : ce que l'app **affiche**, et ce qu'elle **envoie**. |
| `npm run check:gestures` | Les gestes, pilotés par le protocole DevTools : poser l'aiguille, la retirer, balayer. |
| `npm run diagnose` | Diagnostic complet d'une vraie installation, étape par étape. |
| `npm run check:real` | L'app entière contre une vraie instance, en lecture seule. |

Il existe aussi une **page autonome** (`npm run build` → `dist/index.html`), à
déposer dans `config/www/`. Elle demande un jeton d'accès longue durée, et ce
jeton est lisible par qui peut atteindre l'adresse : Home Assistant sert
`config/www/` sans authentification. Utilisable chez soi, pas distribuable —
c'est précisément ce que le panneau corrige.

---

## Remerciements

L'application [MD Vinyl](https://play.google.com/store/apps/details?id=tech.miidii.mdvinyl_android)
a servi de référence visuelle. Aucun de ses fichiers n'est redistribué ici : ses
images ont servi de mètre-ruban pour relever des proportions, rien de plus.
