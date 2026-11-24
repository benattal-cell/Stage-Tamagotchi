# FormiLife — Fiche projet

Cette fiche est le **cahier des charges** du projet : elle dit ce que l'appli doit faire, pour qui, et dans quel ordre on la construit. Elle a été écrite à partir des décisions prises pendant l'atelier de cadrage. Quand on hésite pendant la construction, on revient la lire.

## 1. L'idée

**FormiLife est une appli web où on s'occupe d'une créature virtuelle qui dépend de notre vraie vie.**
Bien dormir, bouger et limiter les écrans la fait grandir en bien. Prendre soin de soi, c'est prendre soin d'elle.

- **But** : s'amuser, et prendre de bonnes habitudes sans s'en rendre compte.
- **Inspiration** : les animaux virtuels de poche et les peluches « moches mais rigolotes ». On s'inspire de l'esprit, on ne copie aucun personnage ni aucune marque.

## 2. Les utilisateurs

| Question | Décision |
|---|---|
| Pour qui ? | D'abord le chef de projet et ses copains (les **bêta-testeurs**) |
| Sur quel appareil ? | **Sur téléphone**, tenu à la verticale (décision changée en cours de projet : au départ c'était l'ordinateur) |
| Quand ? | Quand on veut, plusieurs fois par jour |
| Seul ou à plusieurs ? | Seul au début, puis entre copains avec un classement |

## 3. L'histoire

Au premier lancement, la créature sort d'un **carton abandonné au milieu des poubelles**. Elle part de tout en bas. Grâce aux efforts du joueur, elle grandit, gagne des pièces et déménage dans des décors de plus en plus chics, jusqu'au palace.

## 4. Les règles de gestion

Ce sont les lois que l'appli doit suivre.

### Les trois mesures

Le joueur donne trois infos par jour : son sommeil, ses pas et son temps d'écran.

| | Idéal — 300 points | Correct — 100 points | Pas bien — 0 point | Réaction de la créature |
|---|---|---|---|---|
| **Sommeil** | 8 à 10 h | 7 à 8 h, ou plus de 10 h | Moins de 7 h | Animation de fatigue |
| **Pas** | 15 000 et plus | 10 000 à 15 000 | Moins de 10 000 | Pas contente |
| **Écran** | 3 h ou moins | 3 à 5 h | Plus de 5 h | Mal de tête : petit entre 3 et 5 h, gros au-delà |

- Maximum : **900 points par jour**, **6 300 par semaine**.

### Comment les infos arrivent dans l'appli

- **À la main** : le joueur tape ses chiffres.
- **Par un export de l'appli Santé** : le joueur envoie le fichier, l'appli y lit les pas et le sommeil.
- Le **temps d'écran** n'est pas dans l'export Santé : il se tape toujours à la main.

### L'évolution

- La créature change de forme **tous les 3 jours environ** : œuf (carton) → bébé → ado → adulte.
- L'évolution a **deux branches** : une belle version si on s'occupe bien d'elle, une version en mauvais état sinon.
- **On peut la rattraper** : en reprenant de bonnes habitudes, une créature qui a mal évolué redevient petit à petit une belle version.

```
                      ┌─→ ado en forme ─→ adulte en pleine forme
  carton ─→ bébé ─────┤        ↑ on peut remonter
                      └─→ ado fatigué  ─→ adulte en mauvais état
```

### La day streak

- C'est le compteur des jours réussis d'affilée.
- Une journée est **réussie** si les trois mesures sont au moins dans la colonne « Correct ».
- Un jour raté ou oublié remet la série à zéro.

### Les pièces

- **100 points = 10 pièces.** Une journée parfaite rapporte 90 pièces, une semaine parfaite 630.
- On en gagne aussi avec les **cadeaux hebdomadaires** et les **quêtes bonus** (des petits défis).
- Exemples de quêtes : faire 20 000 pas dans la journée, rester à 1 h d'écran seulement.
- Les pièces servent à acheter des décors.

### La boutique de décors

| N° | Décor | Prix |
|---|---|---|
| 1 | Les poubelles, avec son carton | Gratuit |
| 2 | Une ruelle avec un abri en carton aménagé | 150 pièces |
| 3 | Une cabane dans un arbre | 400 pièces |
| 4 | Une caravane | 800 pièces |
| 5 | Une chambre cosy | 1 500 pièces |
| 6 | Une villa avec piscine | 2 500 pièces |
| 7 | Un palace doré | 4 000 pièces |

### Le classement entre copains

- Il se fait sur le **score de la semaine** et repart à zéro chaque lundi.
- **Règle de vie privée** : on montre la créature et le score des copains, jamais leurs vraies heures de sommeil ou d'écran.

## 5. Le look

| Élément | Décision |
|---|---|
| Style | **Peluche bricolée en 3D** : tissu granuleux, coutures et rapiéçages visibles |
| La créature | Inventée, moche mais attachante, avec de gros yeux et de grandes dents |
| Sa couleur | **Le joueur choisit** parmi plusieurs couleurs |
| Son nom | **Le joueur le choisit** au début |
| La 3D | **La créature et les décors sont en vraie 3D** : on peut tourner autour de la créature, la toucher, et elle réagit. Elle est construite en code à partir de formes simples (boules, cônes, cubes) |
| Les écrans | **Pensés pour le téléphone** : les infos en haut, les boutons en bas sous le pouce, des fenêtres qui montent du bas de l'écran, de gros boutons − et + plutôt que du texte à taper. Sur ordinateur, l'appli garde la largeur d'un téléphone |
| Le démarrage | Un écran de chargement, puis le joueur ouvre le carton, la créature en sort, et il choisit son nom et sa couleur |
| La musique | Une petite musique de fond, réglable dans les paramètres : on peut la couper, changer le volume et choisir parmi trois mélodies |
| Les bruitages | Des petits sons quand la créature sort du carton, saute, atterrit, tourne, se tortille, bâille ou fait coucou. On peut les couper et régler leur volume à part |

## 6. Les fonctionnalités, triées

| Paquet | Fonctionnalités |
|---|---|
| **Indispensable** | Voir sa créature et son humeur · entrer ses infos à la main · la créature réagit · elle grandit et change de forme |
| **Important** | Rattraper une mauvaise évolution · day streak · points et pièces · boutique de décors · quêtes bonus et cadeaux hebdomadaires · export Santé |
| **Plus tard** | Comptes et pseudos · voir les créatures des copains · classement de la semaine · d'autres créatures au choix |

## 7. Le plan de construction

On construit une petite version qui marche, on la teste, puis on ajoute. Chaque version est une appli complète.

| Version | Ce qu'elle contient | Ce qu'on peut faire à la fin |
|---|---|---|
| **V1 — La créature vit** | Sortie du carton · saisie du sommeil, des pas et de l'écran · réactions · évolution tous les 3 jours | Jouer seul, pour de vrai |
| **V2 — On a envie de revenir** | Points et pièces · boutique des 7 décors · day streak · quêtes et cadeaux · rattrapage · export Santé | Jouer longtemps sans s'ennuyer |
| **V3 — On joue entre copains** | Comptes et pseudos · créatures des copains · classement de la semaine · autres créatures | Se défier |

## Où en est la construction

| Fonctionnalité | État |
|---|---|
| Chargement, ouverture du carton, choix du nom et de la couleur | Fait |
| La créature en 3D, ses animations, la musique et les bruitages | Fait |
| Entrer sa journée à la main (sommeil, pas, écran) | Fait |
| Points, pièces et day streak | Fait |
| La créature réagit : en forme, fatiguée, mal de tête, pas contente | Fait |
| Elle grandit tous les 3 jours joués (bébé, ado, adulte), en bien ou en mal, et on peut la rattraper | Fait |
| Panneau administrateur pour tester | Fait |
| Interface pour téléphone, installable sur l'écran d'accueil | Fait |
| Boutique : les 7 décors et 9 accessoires à acheter avec ses pièces | Fait |
| Atelier : couleur, oreilles, yeux, dents, chapeau, lunettes, tour de cou | Fait |
| La créature parle (bulles), aime les caresses (cœurs), fête les bonnes journées (confettis) | Fait |
| Quêtes bonus et cadeaux hebdomadaires | À faire |
| Export de l'appli Santé | À faire |
| Comptes, créatures des copains, classement | À faire |

### Comment l'appli applique les règles

- **Grandir** : la créature change d'âge toutes les 3 journées remplies. Une journée oubliée ne la fait pas grandir.
- **Bonne ou mauvaise forme** : on regarde la moyenne des 3 dernières journées. En dessous de 300 points, elle passe en mauvais état ; dès que la moyenne remonte, elle redevient belle. Le bébé est toujours en forme.
- **Son état du jour**, dans cet ordre : plus de 5 h d'écran → gros mal de tête ; moins de 7 h de sommeil → fatiguée ; entre 3 et 5 h d'écran → petit mal de tête ; moins de 10 000 pas → pas contente ; sinon en forme.
- **Les données restent dans le navigateur** du joueur : rien n'est envoyé au serveur pour l'instant.

### L'atelier et la boutique

- **L'atelier est gratuit** : 10 couleurs, 5 formes d'oreilles, 5 formes d'yeux, 5 dentitions. On peut changer quand on veut.
- **La boutique est payante**, avec les pièces gagnées : les 7 décors (aux prix décidés pendant l'atelier) et 9 accessoires.

| Accessoire | Prix |
|---|---|
| Bonnet à pompon | 80 pièces |
| Nœud papillon | 90 pièces |
| Lunettes rondes | 100 pièces |
| Casquette | 120 pièces |
| Écharpe | 140 pièces |
| Lunettes de soleil | 180 pièces |
| Chapeau haut-de-forme | 250 pièces |
| Collier doré | 300 pièces |
| Couronne | 600 pièces |

Ces prix sont une proposition : une journée parfaite rapporte 90 pièces, donc le bonnet se gagne en un jour et la couronne en une semaine. Le chef de projet peut les changer.

### Le panneau administrateur

Il s'ouvre depuis les paramètres, avec le code `1234`. Il sert à tester sans attendre des jours : forcer l'état, l'âge ou la forme de la créature, faire passer une bonne ou une mauvaise journée, tout effacer.

Le code est écrit dans la page, donc n'importe qui peut le lire : il évite les clics par erreur, ce n'est pas une vraie sécurité. Une vraie protection demandera un compte administrateur vérifié par le serveur, en même temps que les comptes des joueurs.

## 8. Les contraintes techniques

Une contrainte, c'est une règle imposée que le projet doit respecter, qu'on le veuille ou non.

| Contrainte | Ce que ça veut dire |
|---|---|
| **L'appli doit être hébergée sur Railway** (obligatoire) | Railway est un service qui fait tourner l'appli sur Internet, à une adresse que tout le monde peut ouvrir. L'appli doit donc avoir un **serveur** qui démarre avec `npm start` et qui écoute sur le port que Railway lui donne |
| **Une appli web ne lit pas toute seule les données du téléphone** | Le joueur tape ses infos ou envoie son export Santé |
| **Les données de santé sont sensibles** | On ne montre jamais les vrais chiffres d'un joueur aux autres |

Le dépôt est déjà prêt pour Railway : `server.js` (le serveur), `package.json` (la recette de démarrage) et `public/` (ce que voit le joueur).

## 9. Ce qu'il reste à décider

- La **liste des couleurs** proposées au joueur.
- **Combien de pièces** rapporte chaque quête bonus.
- Ce que contiennent les **cadeaux hebdomadaires**.

## Petit lexique

| Mot | Ce que ça veut dire |
|---|---|
| **Cahier des charges** | Le document qui décrit ce que l'appli doit faire |
| **Fonctionnalité** | Une chose que l'appli sait faire |
| **Règle de gestion** | Une loi que l'appli doit suivre |
| **MVP / V1** | La plus petite version de l'appli qui marche déjà |
| **Maquette** | Le dessin d'un écran avant de le coder |
| **Prototype** | Un essai rapide qui marche à moitié, pour vérifier qu'une idée est faisable |
| **Charte graphique** | Les règles de couleurs et de style de toute l'appli |
| **Bêta-testeur** | Quelqu'un qui essaie l'appli en premier pour dire ce qui ne va pas |
| **Serveur** | L'ordinateur central qui envoie l'appli aux joueurs et garde leurs infos |
| **Hébergement** | Louer un serveur allumé en permanence pour que l'appli soit accessible sur Internet |
| **Contrainte** | Une règle imposée que le projet doit respecter |
| **Donnée personnelle** | Une info sur une vraie personne, qu'il faut protéger |
