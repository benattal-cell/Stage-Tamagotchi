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
| **Sommeil** | Dans la fourchette de son âge | Un peu en dessous, ou au-dessus | Trop peu | Animation de fatigue |
| **Pas** | L'objectif de son âge | Au moins les trois quarts de l'objectif | Moins | Pas contente |
| **Écran de loisir** | Sous la limite de son âge | Jusqu'à 2 h de plus | Au-delà | Mal de tête : petit ou gros |

**Les objectifs dépendent de l'âge du joueur.** À la première ouverture, il doit écrire son âge (entre 6 et 99 ans) pour adopter son monstre : c'est obligatoire. L'appli ne garde que la tranche d'âge, pas l'âge exact, et elle reste sur l'appareil. On peut changer de tranche dans les paramètres. Un joueur qui avait déjà un monstre se voit poser la question une seule fois.

| Tranche d'âge | Sommeil idéal | Sommeil correct à partir de | Pas : idéal / correct | Écran : idéal / correct jusqu'à |
|---|---|---|---|---|
| 6 à 12 ans | 9 à 12 h | 8 h | 12 000 / 9 000 | 2 h / 4 h |
| 13 à 17 ans | 8 à 10 h | 7 h | 10 000 / 7 500 | 2 h / 4 h |
| 18 à 64 ans | 7 à 9 h | 6 h | 8 000 / 6 000 | 3 h / 5 h |
| 65 ans et plus | 7 à 8 h | 6 h | 7 000 / 5 000 | 3 h / 5 h |

**D'où viennent ces chiffres**

- Sommeil : National Sleep Foundation, recommandations de 2015.
- Pas des jeunes : Tudor-Locke et collègues, 2011 (nombre de pas qui correspond à 60 minutes d'activité par jour).
- Pas des adultes : Paluch et collègues, 2022, étude sur 15 groupes de personnes suivies dans le temps.
- Écran de loisir : directives canadiennes en matière de mouvement sur 24 heures (2 h au plus pour les 5-17 ans, 3 h pour les adultes).

**Ce qui est solide et ce qui l'est moins.** La colonne « idéal » vient de ces recommandations. La colonne « correct » est un choix de l'équipe, pour récompenser les efforts. Pour le sommeil, les preuves sont solides. Pour les pas, ce sont des repères tirés d'études, pas une règle officielle. Pour l'écran, ce sont des avis d'experts : la science ne donne pas de limite exacte. Au début du projet, les règles étaient celles choisies par le chef de projet (15 000 pas, 3 h d'écran) ; elles ont été remplacées par celles-ci.


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

- **100 points = 20 pièces.** Une journée parfaite rapporte 180 pièces, une semaine parfaite 1 260. (Au début c'était 10 pièces : on a doublé pour que la vraie vie rapporte plus que les jeux.)
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
| 18 monstres au choix : la peluche d'origine et 17 monstres animés d'un pack gratuit | Fait |
| Niveaux et expérience, avec récompenses et auras | Fait |
| Barre de vie, et mort du monstre s'il est vraiment négligé | Fait |
| 47 cosmétiques dans 5 catégories, avec raretés, niveaux requis et essayage | Fait |
| Neuf mini-jeux, dont cinq jeux de cerveau : calcul, suite à retenir, couleurs pièges, mot mélangé, chasse aux nombres | Fait |
| Ma semaine : les sept derniers jours et un conseil | Fait |
| Mode nuit : de 22 h à 6 h le monstre dort, les jeux sont fermés | Fait |
| Tutoriel en cinq écrans à la première ouverture | Fait |
| Graphismes : ciel en dégradé, halo de lune, étoiles filantes, lumière au sol, interface en verre dépoli | Fait |
| Bannière de montée de niveau, pièces qui volent vers le compteur, fondus entre les écrans | Fait |
| Décors vivants : papillons le jour, poussières dorées à l'intérieur | Fait |
| Course : bouclier et aimant à ramasser | Fait |
| Récompenses de série : 3, 7, 14 et 30 jours réussis d'affilée | Fait |
| Carnet du monstre avec sa photo (on touche la plaque du nom) | Fait |
| Cinq langues : français, anglais, espagnol, chinois, hindi | Fait, à faire relire |
| Installation comme une appli et jeu sans connexion | Fait |
| Sauvegarde du monstre par un code à copier | Fait |
| Mode « graphismes légers », activé tout seul sur les téléphones lents | Fait |
| Tête du monstre dans le classement, nouveau logo | Fait |
| Cinématique quand le monstre se transforme ou gagne une aura | Fait |
| Cinq créatures « objet + animal » à acheter dans la boutique | Fait |
| Jokers de série, gagnés en jouant | Fait |
| Packs payants | Essayés puis retirés : le jeu n'a rien de payant |
| Défis du jour, étoiles, cadeau, question du jour et 20 trophées | Fait |
| Pause écran : un rappel toutes les 20 minutes | Fait |
| Espace bien-être : respirations, méditations, étirements, sons, carnet, humeur, eau | Fait |
| Comptes (pseudo et mot de passe), amis, classement mondial et classement entre amis | Fait |
| La créature parle (bulles), aime les caresses (cœurs), fête les bonnes journées (confettis) | Fait |
| Quêtes bonus et cadeaux hebdomadaires | À faire |
| Export de l'appli Santé | À faire |

### Comment l'appli applique les règles

- **Grandir** : la créature change d'âge toutes les 3 journées remplies. Une journée oubliée ne la fait pas grandir.
- **Bonne ou mauvaise forme** : on regarde la moyenne des 3 dernières journées. En dessous de 300 points, elle passe en mauvais état ; dès que la moyenne remonte, elle redevient belle. Le bébé est toujours en forme.
- **Son état du jour**, dans cet ordre : plus de 5 h d'écran → gros mal de tête ; moins de 7 h de sommeil → fatiguée ; entre 3 et 5 h d'écran → petit mal de tête ; moins de 10 000 pas → pas contente ; sinon en forme.
- **Les données restent dans le navigateur** du joueur : rien n'est envoyé au serveur pour l'instant.

### Les niveaux : améliorer son monstre petit à petit

Cette règle remplace « il grandit tous les 3 jours ».

- **Chaque journée remplie donne de l'expérience (XP)** : 10 XP pour l'avoir remplie, plus 10 XP par tranche de 100 points. Une journée parfaite donne 100 XP.
- **Il faut un peu plus d'XP à chaque niveau** : 50 pour le niveau 2, 70 pour le niveau 3, puis 20 de plus à chaque fois.
- **Chaque niveau rapporte des pièces** (20 × le niveau) et fait grossir le monstre un tout petit peu, jusqu'au niveau 20.
- **Les étapes** : bébé jusqu'au niveau 4, ado du niveau 5 au 11, adulte à partir du niveau 12.
- **Les auras** : un anneau lumineux au niveau 5 (vert), 10 (bleu, avec des éclats qui tournent), 15 (violet) et 20 (doré).
- **Certains cosmétiques demandent un niveau**, même si on a les pièces.

### Ce qu'on voit sur le monstre

**Son âge.** Bébé, tous les monstres ont une grosse tétine et un biberon à côté d'eux, et un corps plus rond. Ensuite, **chaque espèce a sa propre évolution** : une à l'adolescence (niveau 5), une plus spectaculaire à l'âge adulte (niveau 12).

| Espèce | Ado | Adulte |
|---|---|---|
| Peluche | Un gros bouton doré | Une collerette de feutrine, des boutons qui tournent autour d'elle |
| Blob rose | Un nœud | Une couronne de gelée, des mini-blobs qui tournent |
| Blob vert | Une pousse sur la tête | Il change de corps et devient piquant, dans un tourbillon de feuilles |
| Blob piquant | Des cristaux dans le dos | Encore plus de cristaux, des éclats lumineux |
| Alien | Des antennes qui s'allument | Un anneau comme Saturne, une petite soucoupe en orbite |
| Champi | Des spores | Il change de corps, des petits champignons poussent autour de lui |
| Grand champi | Des spores orange | Un halo autour du chapeau |
| Cactus | Une fleur | Trois fleurs, des maracas, un soleil derrière lui |
| Yéti | Des petites cornes de glace | De grandes cornes, de la glace sur les épaules, des flocons |
| Piaf | Une crête de flammes | Une queue de phénix, des braises |
| Pigeon | Des lunettes d'aviateur | Des ailes dorées, une sacoche de facteur, une lettre qui vole |
| Poulet | Une grande crête | Une queue en éventail, un œuf d'or |
| Chat | Un collier à grelot | Trois queues, une pelote |
| Chien | Un os | Un collier à pointes, un gros os, une balle |
| Poisson | Des bulles | Un aileron de requin, un trident |
| Orc | Une massue | Un casque à cornes, des épaulières |
| Ninja | Un bandeau | Deux sabres dans le dos, des étoiles de ninja |
| Sorcier | Une baguette | Un grimoire qui flotte, des orbes magiques |

Ce qui se pose tout en haut de la tête est caché quand le monstre porte un chapeau, et ce qui est dans le dos quand il porte un objet dans le dos.

**Le rendu.** Tous les monstres ont un contour sombre, un liseré de lumière sur les bords et une ombre douce au sol, comme dans un dessin animé. La peluche a en plus des sourcils qui bougent selon son humeur, un reflet dans les yeux et une petite queue.

**Son visage est vivant**, sur les 18 monstres :

| Partie | Ce qu'elle fait |
|---|---|
| Les yeux | Ils clignent, suivent le doigt, et regardent ailleurs tout seuls quand rien ne bouge. Ils s'écarquillent de surprise, se ferment à moitié de fatigue. Les pupilles grossissent quand il est content et rétrécissent quand il a mal à la tête |
| Les sourcils | Ils tombent quand il est triste, se froncent quand il a mal |
| La bouche | Elle s'ouvre et se ferme quand il parle. Sur la peluche, les coins montent pour sourire et descendent pour faire la moue |
| Les oreilles | Chacune frétille à son rythme. Elles se dressent quand on le touche, remuent quand il parle, tombent quand il est triste |

Les monstres du pack n'avaient pas d'yeux animables : ils étaient fondus dans le corps. L'appli les retrouve à leur couleur, les efface, et pose à la place les mêmes yeux animés que ceux de la peluche. Leur bouche, elle, est peinte : quand ils parlent, c'est leur tête qui hoche.

**Son état**, pour qu'on le remarque tout de suite :

| État | Ce qu'on voit |
|---|---|
| Fatigué | Il devient bleuté, une bulle gonfle à son nez, des « z » montent |
| Mal de tête | Il rougit, des éclairs clignotent autour de sa tête. S'il est fort : une poche de glace et de la sueur |
| Pas assez bougé | Un nuage de pluie au-dessus de lui |
| Malade (vie à 40 ou moins) | Il verdit, un thermomètre dans la bouche, des gouttes de sueur |

**Il explique pourquoi**, avec les vrais chiffres. Une pastille sous son nom résume la raison (« Fatigué · 5 h 30 de sommeil »), et sa bulle la dit en entier (« Je n'ai dormi que 5 h 30 aujourd'hui. Il m'en faut au moins 7 pour être en forme. »). Toucher la pastille lui fait répéter. S'il y a plusieurs raisons, il les donne l'une après l'autre.

Le carton d'origine n'apparaît que dans le premier décor, la ruelle aux poubelles.

### La vie du monstre

| Ce qui se passe | Effet sur la vie |
|---|---|
| Journée à 600 points ou plus | + 15 |
| Journée entre 300 et 599 points | + 5 |
| Journée entre 100 et 299 points | − 10 |
| Journée à moins de 100 points | − 20 |
| Jour passé sans rien remplir | − 10 |

- La vie commence à 100 et ne dépasse jamais 100.
- **À 40 ou moins**, le monstre passe en mauvais état. **À 30 ou moins**, sa barre clignote et il dit qu'il ne va pas bien.
- **À zéro, il meurt.** Il faut donc 5 journées catastrophiques d'affilée, ou 10 jours sans ouvrir l'appli.
- Le joueur adopte alors un nouveau monstre, qui repart au niveau 1. **Il garde ses pièces, ses décors et ses cosmétiques.**

### Les mini-jeux

Le premier mini-jeu est **« La course des poubelles »** : le monstre court tout droit sur trois voies et ramasse des pièces.

| Obstacle | Ce qu'il faut faire | Il arrive à partir de |
|---|---|---|
| Poubelle | Changer de voie | Le début |
| Carton | Changer de voie ou sauter | Le début |
| Barrière sur une voie | Changer de voie ou glisser dessous | 150 m |
| Trois cartons de front | Sauter | 150 m |
| Barrière sur toute la largeur | Glisser dessous | 150 m |
| Tonneau qui roule, plus rapide que le reste | Changer de voie ou sauter | 400 m |
| Pneu qui traverse la route | Sauter au bon moment | 400 m |
| Chariot qui va et vient entre deux voies | Prendre la troisième voie | 150 m |
| Camion-poubelle qui fonce vers soi, annoncé par un klaxon et une bande rouge au sol | Quitter sa voie | 150 m |

- **Le parcours n'est jamais régulier** : l'écart entre deux rangées change tout le temps, avec parfois une pause et parfois deux rangées collées.
- **Il existe toujours un chemin.** Le programme garde une « voie sûre » qui ne se déplace que d'une voie à la fois ; c'est ce qui rend le jeu dur mais jamais injuste.
- **La difficulté monte par paliers** (150 m, 400 m, 800 m) : les rangées se rapprochent, se remplissent, et la vitesse passe de 9 à 34.
- **Cinq zones** de 320 m chacune changent les couleurs : la ruelle, le quartier néon, l'aube, la zone toxique, minuit rouge.
- **Commandes** : glisser à gauche ou à droite pour changer de voie, vers le haut pour sauter, vers le bas pour glisser. Un simple toucher marche aussi, ainsi que les flèches du clavier.
**Les trois autres jeux**

| Jeu | Le principe | Ce qu'il rapporte |
|---|---|---|
| Attrape-fruits | Des choses tombent du ciel, le monstre suit le doigt. Il faut attraper les fruits et l'eau, éviter les bonbons, le soda et les écrans. Trois vies, et ça accélère | 1 pièce pour 2 aliments attrapés |
| Mémoire | Seize cartes, huit paires de cosmétiques portés par son propre monstre | De 3 à 14 pièces : moins on retourne de cartes, plus on gagne |
| Tri des déchets | 45 secondes pour ranger chaque déchet dans la bonne poubelle (jaune, verre, compost, ordures). Une erreur coûte 3 secondes et le jeu donne la bonne réponse | 1 pièce pour 2 déchets bien triés |

**La limite par jour** : 8 parties et 50 pièces au maximum, tous jeux confondus.

Cette limite est voulue : FormiLife sert à passer moins de temps sur les écrans. Des mini-jeux sans limite pousseraient à faire l'inverse, et rapporteraient plus que de bien dormir. Les jeux restent donc un bonus, et les vraies récompenses viennent du sommeil, des pas et du temps d'écran.

### Les comptes, les amis et les classements

- **Un compte = un pseudo et un mot de passe.** Pas d'adresse e-mail.
- **Ajouter un ami** : on tape son pseudo, il reçoit une demande et l'accepte. Si deux joueurs se demandent en même temps, ils deviennent amis tout de suite.
- **Deux classements**, chacun en version Monde et en version Amis :
  - les **points de la semaine** (le total des journées, il repart à zéro chaque lundi) ;
  - le **record de course** du mini-jeu.
- **Règle de vie privée** : le serveur ne reçoit que le pseudo, l'apparence du monstre et les scores. Le sommeil, les pas et le temps d'écran ne quittent jamais l'appareil.
- Le monstre lui-même reste enregistré sur l'appareil. Le compte ne sert qu'aux amis et aux classements.

Ces fonctions ont besoin du serveur : elles marchent sur la version en ligne (Railway), pas sur la page de démonstration.

### Les jeux de cerveau

Cinq jeux de plus dans la liste des mini-jeux. Une partie quittée avant la fin ne compte pas. Ils comptent dans les 8 parties et les 50 pièces par jour.

| Jeu | Ce qu'on fait | Ce que ça entraîne |
|---|---|---|
| Calcul éclair | 45 secondes de calcul mental. Tous les 4 bons résultats, un nouveau type de calcul arrive | Le calcul et la rapidité |
| La suite lumineuse | Quatre touches s'allument dans un ordre. On refait la suite, qui s'allonge à chaque tour | La mémoire à court terme |
| Couleurs pièges | Le mot « ROUGE » est écrit en bleu : il faut appuyer sur la couleur de l'encre | L'attention |
| Le mot mélangé | Les lettres d'un mot sont dans le désordre : on les touche dans le bon ordre | Le vocabulaire |
| Chasse aux nombres | Une grille de 16 nombres mélangés à toucher dans l'ordre | La recherche visuelle |

### Les défis, les étoiles et les trophées

Un bouton rond en haut à droite (la cible) ouvre l'écran des défis.

- **Trois défis par jour**, choisis d'après la date : un pour prendre soin de soi, un pour jouer, un pour apprendre. Chacun rapporte 10 pièces.
- **Une étoile** et 15 pièces quand les trois défis du jour sont réussis. **À 5 étoiles, un cadeau de 100 pièces.**
- **La question du jour** : une question sur le cerveau, le sommeil, le sport ou les écrans, avec l'explication. 5 pièces si la réponse est bonne. Il y a 20 questions.
- **20 trophées** à collectionner (séries de jours, niveaux, records, bien-être...). Chacun rapporte 20 pièces.

### Ce que l'appli mesure toute seule

Une appli web n'a pas le droit de lire le podomètre ni le temps d'écran du téléphone. Elle fait ce qu'elle peut :

| Mesure | Ce que fait l'appli | Ce que le joueur fait encore |
|---|---|---|
| Sommeil | Le joueur appuie sur « Je vais dormir » en se couchant. Quand il rouvre l'appli le matin, la nuit est comptée et le formulaire est pré-rempli | Corriger si besoin, puis valider |
| Temps d'écran | L'appli compte le temps passé dans FormiLife | Lire le total dans les réglages du téléphone et le recopier |
| Pas | Rien : impossible depuis une page web | Lire le nombre dans l'appli Santé du téléphone et le recopier |

Une nuit de moins de 3 heures n'est pas comptée automatiquement (c'est peut-être un oubli), et une « nuit » de plus de 16 heures est ignorée. Pour tout mesurer automatiquement, il faudrait une vraie appli Android installée : c'est noté pour une version 2.

### Installer l'appli et jouer sans connexion

Sur le vrai site (Railway), FormiLife peut s'installer sur l'écran d'accueil du téléphone, comme une appli : un bouton « Installer l'appli » apparaît dans les paramètres quand le téléphone le permet (Android avec Chrome). Sur iPhone, on passe par le menu Partager, puis « Sur l'écran d'accueil ».

Après une première visite, le jeu s'ouvre aussi sans connexion : le navigateur garde une copie de la page et des modèles 3D (fichier `public/sw.js`). Les comptes, les amis et les classements ont toujours besoin d'Internet.

### La sauvegarde du monstre

Le monstre est enregistré sur l'appareil. Pour changer de téléphone sans le perdre, les paramètres proposent « Sauvegarde » : un long code à copier. Collé sur un autre téléphone, puis « Restaurer ce code » (deux appuis, pour éviter les erreurs), il ramène le monstre, ses journées et ses achats. Ce code contient les journées du joueur : il ne faut pas le partager.

### Les graphismes légers

Pendant les premières secondes de jeu, l'appli mesure sa vitesse. Sous 24 images par seconde, elle passe toute seule en « graphismes légers » : moins de pixels, pas d'ombres, pas de flou ni de papillons. Le joueur peut changer ce réglage dans les paramètres.

### Les langues

Le jeu existe en cinq langues, les plus parlées dans le monde : anglais, chinois (mandarin), hindi, espagnol et français. Le joueur choisit dans les paramètres. À la première ouverture, le jeu prend la langue du téléphone.

- Environ 840 textes sont traduits dans chaque langue. Les dictionnaires sont dans le dossier `traductions`.
- **Les traductions ont été faites par une IA et pas encore relues** par des personnes dont c'est la langue maternelle. C'est à faire avant une vraie sortie.
- Le jeu « Le mot mélangé » a sa propre liste de mots en anglais et en espagnol. Il est retiré en chinois et en hindi, où mélanger des lettres n'a pas de sens.
- Restent en français : les messages d'erreur du serveur (comptes et amis) et le tri des déchets, qui suit les poubelles françaises.
- L'arabe, sixième langue la plus parlée, s'écrit de droite à gauche : il demanderait de retourner toute l'interface.

### La cinématique de transformation

Quand le monstre change de forme (niveaux 5 et 12) ou gagne une aura (niveaux 5, 10, 15 et 20), une petite scène de sept secondes se joue :

1. Deux bandes noires arrivent, les menus disparaissent, la caméra s'approche et tourne autour du monstre.
2. Le monstre s'élève, tourne de plus en plus vite et tremble dans une lueur qui grossit, avec un son qui monte.
3. Un éclair blanc remplit l'écran : c'est à ce moment que sa forme change.
4. La lueur retombe, les confettis partent, la fanfare joue et la bannière du niveau s'affiche.

Toucher l'écran fait passer à l'étape suivante. Avec le réglage « réduire les animations » du téléphone, la cinématique ne se joue pas.

### Les créatures de la boutique

Un rayon « Monstres » vend cinq créatures spéciales, dans l'esprit des « brainrots » d'Internet : un objet mélangé à un animal, avec un nom rigolo qui sonne italien. Elles sont inventées pour FormiLife et construites avec des formes simples (boîtes, boules, cônes).

| Créature | Le mélange | Ce qui bouge | Prix | Niveau demandé |
|---|---|---|---|---|
| Tostino Gattino | Un grille-pain et un chat | Les tartines sautent | 1 500 | 4 |
| Pinguino Pizzarino | Une pizza et un manchot | | 2 000 | 6 |
| Brocolino Leonino | Un brocoli et un lion | La crinière de brocoli respire | 2 500 | 8 |
| Polpetto Razzetto | Une fusée et une pieuvre | Les tentacules ondulent | 3 500 | 11 |
| Granchio Lampadino | Une ampoule et un crabe | L'ampoule pulse | 5 000 | 15 |

Elles gardent les yeux, la bouche, les bras et les pieds de la peluche, donc toutes ses animations. À l'adolescence deux étoiles tournent autour d'elles, quatre à l'âge adulte. Une fois achetée, une créature reste au joueur et se retrouve dans l'atelier.

**Pourquoi pas les vrais brainrots connus ?** On peut s'inspirer d'un genre (le mélange absurde, le nom qui rime), mais pas recopier un personnage précis : son nom et son apparence appartiennent à ceux qui l'ont créé. Une première version vendait six monstres « à effets » (or, galaxie, lave...) ; le chef de projet ne les a pas aimés, ils ont été retirés.

### Pas d'achats avec du vrai argent

**Décision du chef de projet : FormiLife n'a rien de payant.** Une vitrine de packs payants a été essayée (pièces, jokers, créatures, décors, offre sans pub, réductions de lancement), puis entièrement retirée. Il n'y a ni prix, ni offre, ni publicité dans le jeu. Tout se gagne en jouant et en prenant soin de soi.

Si un jour l'équipe veut gagner de l'argent, les pistes notées par la MOA restent valables : ne vendre que de l'apparence, passer par le magasin d'applis avec l'accord d'un parent, n'afficher que des réductions vraies, et faire porter le compte par un adulte.

### Les jokers de série

Une série, ce sont des jours d'affilée où les trois mesures sont au moins « correct ». Quand un jour raté casse la série, un joker le répare et la série repart. On touche la flamme (en haut à droite) pour voir sa série et ses jokers.

- Un joker ne répare qu'un jour récent (trois jours au plus), et seulement s'il y avait une série juste avant.
- Les jokers se gagnent en jouant : un avec chaque cadeau des 5 étoiles, et un à chaque palier de série de 7, 14 et 30 jours.
- Un joker répare la série, pas la santé du monstre : un jour raté lui fait quand même perdre de la vie.

### La barre d'onglets

En bas de l'écran, une barre de cinq onglets reste toujours visible, comme dans beaucoup de jeux sur téléphone. Chaque catégorie a sa page, qui couvre tout l'écran au-dessus de la barre.

| Onglet | Ce qu'il ouvre |
|---|---|
| Boutique | Les décors, les accessoires et les créatures, avec une photo du monstre en haut de la page pour voir l'article essayé |
| Atelier | L'apparence du monstre, avec sa photo en haut de la page |
| **Accueil** (au milieu) | Le monstre dans son décor, avec le bouton « Ma journée » |
| Jeux | La liste des mini-jeux |
| Bien-être | Les dix activités |

- **Les pages glissent de côté.** Une page arrive du côté où se trouve son onglet (la Boutique vient de la gauche, les Jeux de la droite) et repart par le même côté.
- L'onglet de la page ouverte est doré et surélevé.
- Toucher « Accueil » ou retoucher l'onglet ouvert ramène au monstre.
- Sur une page, glisser le doigt vers la gauche ou la droite passe à l'onglet voisin.
- Les défis (la cible) et le carnet (la plaque du nom) s'ouvrent toujours depuis l'accueil.

### Le carnet du monstre

En touchant la plaque du nom, on ouvre le carnet : une photo du monstre dans son décor (qu'on peut enregistrer), son niveau, le niveau de sa prochaine transformation, et six chiffres (âge, journées remplies, série, record de course, trophées, pauses bien-être).

### Les récompenses de série

Une série, ce sont des jours d'affilée où les trois mesures sont au moins « correct ». Elle rapporte une prime une seule fois par palier : 50 pièces à 3 jours, 150 à 7 jours, 300 à 14 jours, 800 à 30 jours.

### Les bonus de la course

Deux objets apparaissent de temps en temps sur la piste, à la place d'une pièce. Le **bouclier** (boule bleue) annule le prochain choc. L'**aimant** (arc rouge) attire les pièces proches pendant 7 secondes.

### Ma semaine

Dans l'écran des défis, l'onglet « Ma semaine » montre les sept derniers jours pour le sommeil, les pas et l'écran (★ idéal, ✓ correct, ! à améliorer), la moyenne de chacun, et un conseil sur le point le plus faible.

### La nuit

De 22 h à 6 h, le monstre dort : l'écran s'assombrit et les mini-jeux sont fermés. Le bien-être reste ouvert (respirer aide à s'endormir). L'administrateur peut forcer ou désactiver la nuit pour tester.

### L'équilibre des pièces

**Règle : la vraie vie doit toujours rapporter plus que le temps passé dans l'appli.** Une journée parfaite rapporte 180 pièces (100 points = 20 pièces). Les jeux, le bien-être et les défis réunis en rapportent au plus 150 environ.

### La pause écran

Toutes les 20 minutes passées dans l'appli, le monstre demande au joueur de regarder au loin pendant 20 secondes. Une appli qui parle du temps d'écran doit montrer l'exemple.

### L'espace bien-être

Un bouton du menu ouvre dix activités pour s'occuper de soi. Elles ne comptent pas dans les parties de jeu. **La première fois de la journée, chacune rapporte 5 pièces**, soit 50 pièces au plus.

| Activité | Ce qu'on fait |
|---|---|
| Respiration calme | Inspirer 4 secondes, souffler 6, pendant une minute |
| Respiration carrée | Inspirer, retenir, souffler, retenir : 4 secondes chacun |
| Cohérence cardiaque | Inspirer 5 secondes, souffler 5, pendant trois minutes |
| Méditation : le tour du corps | Deux minutes de phrases guidées pour relâcher le corps des pieds à la tête |
| Méditation : les nuages | Deux minutes pour regarder passer ses pensées |
| Étirements | Cinq mouvements doux de 20 secondes |
| Sons apaisants | La pluie, les vagues ou le vent, pendant trois minutes |
| Trois bonnes choses | Écrire ce qui a fait du bien dans la journée |
| Comment tu te sens ? | Noter son humeur parmi cinq, et revoir ses sept derniers jours |
| Verres d'eau | Un compteur : six verres dans la journée |

**Vie privée** : les notes et l'humeur restent sur l'appareil. Elles ne sont jamais envoyées au serveur, et on n'en garde que quatorze jours.

**Un jeu ne remplace pas une personne.** Quand le joueur note qu'il va mal, l'appli lui rappelle qu'en parler à quelqu'un de confiance aide. Si c'est le cas trois jours de suite, elle lui conseille clairement d'en parler à un adulte : un parent, un professeur, l'infirmière du collège.

### Les monstres

- Le joueur choisit son espèce à l'adoption, et peut en changer dans l'atelier.
- **La peluche** est fabriquée en code : on peut changer sa couleur, ses oreilles, ses yeux et ses dents.
- **Les 17 autres** viennent du pack « Ultimate Monsters » de Quaternius, sous licence CC0 (libre de tout droit). Ils ont leurs propres animations. On peut changer leur teinte (8 choix), mais pas leurs oreilles ni leurs yeux.
- **Les accessoires de la boutique vont sur tous les monstres.** L'appli mesure chaque monstre pour trouver où poser le chapeau, les lunettes et le tour de cou, puis les accroche à son squelette pour qu'ils suivent ses mouvements.

### L'atelier et la boutique

- **L'atelier est gratuit** : 10 couleurs, 5 formes d'oreilles, 5 formes d'yeux, 5 dentitions. On peut changer quand on veut.
- **Chaque article a son image** : l'appli prend une photo en 3D de la créature du joueur avec l'objet, et une photo de chaque décor. Aucun fichier image à dessiner.
- **La boutique est payante**, avec les pièces gagnées : les 7 décors (aux prix décidés pendant l'atelier) et 9 accessoires.

Les cosmétiques sont rangés en 5 catégories : 17 chapeaux, 8 lunettes, 9 tours de cou, 7 objets dans le dos et 6 effets (des bulles, des flammes ou des cœurs qui flottent autour du monstre).

Chacun a une **rareté** qui fixe à peu près son prix et son niveau :

| Rareté | Prix | Niveau demandé | Exemples |
|---|---|---|---|
| Commun | 80 à 200 pièces | 1 ou 2 | Bonnet, foulard, sac à dos |
| Rare | 200 à 350 pièces | 3 à 6 | Chapeau de cow-boy, monocle, bulles |
| Épique | 340 à 600 pièces | 7 à 12 | Casque viking, cape de héros, étincelles |
| Légendaire | 650 à 1 200 pièces | 13 à 20 | Auréole, ailes d'ange, flammes |

Dans la boutique, on touche un article pour **l'essayer sur son monstre** avant de l'acheter.

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
