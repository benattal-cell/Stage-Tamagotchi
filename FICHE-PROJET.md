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
| Sur quel appareil ? | Surtout sur ordinateur |
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
| Style | **Peluche bricolée** : tissu cousu, rapiéçages, coutures apparentes |
| La créature | Inventée, moche mais attachante, avec de gros yeux et de grandes dents |
| Sa couleur | **Le joueur choisit** parmi plusieurs couleurs |
| Son nom | **Le joueur le choisit** au début |
| La profondeur | Un rendu entre la 2D et la 3D : des dessins plats posés sur plusieurs plans (fond, milieu, devant), avec des ombres, pour donner du relief |
| Les écrans | Larges, pensés pour l'ordinateur |

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

## 8. Ce qu'il reste à décider

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
| **Charte graphique** | Les règles de couleurs et de style de toute l'appli |
| **Bêta-testeur** | Quelqu'un qui essaie l'appli en premier pour dire ce qui ne va pas |
| **Serveur** | L'ordinateur central qui garde les infos de tous les joueurs |
| **Donnée personnelle** | Une info sur une vraie personne, qu'il faut protéger |
