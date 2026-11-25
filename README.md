# FormiLife

Un monstre virtuel en 3D qui dépend de ta vraie vie : bien dormir, bouger et limiter les écrans le font grandir.

Le projet est décrit dans [FICHE-PROJET.md](FICHE-PROJET.md).

## Lancer le jeu sur son ordinateur

Il faut [Node.js](https://nodejs.org) version 18 ou plus.

```bash
npm install
```

```bash
npm start
```

Le jeu est alors à l'adresse http://localhost:3000.

## Ce qu'il y a dans le dépôt

| Fichier ou dossier | Son rôle |
|---|---|
| `server.js` | Le serveur : il envoie le jeu au navigateur et gère les comptes, les amis et les classements |
| `public/index.html` | Le jeu lui-même |
| `public/models/` | Les 17 monstres téléchargés (pack Ultimate Monsters de Quaternius, licence CC0) |
| `data/` | La base de données des comptes, créée au premier lancement. Elle n'est jamais envoyée sur GitHub |
| `FICHE-PROJET.md` | Le cahier des charges et toutes les règles du jeu |

## Mettre le jeu en ligne sur Railway

1. Sur Railway, créer un projet avec **Deploy from GitHub repo** et choisir ce dépôt.
2. Dans **Settings**, choisir la branche à déployer.
3. Dans **Networking**, cliquer sur **Generate Domain** pour obtenir l'adresse publique.

Railway détecte Node.js tout seul et lance `npm start`.

### Garder les comptes : ajouter un volume

**Sans cette étape, tous les comptes sont effacés à chaque mise à jour du jeu.** Railway remet le disque à neuf à chaque déploiement.

1. Dans le service, ouvrir le menu et choisir **Attach Volume** (ou clic droit sur le service, **Volume**).
2. Donner comme chemin de montage : `/data`
3. Dans **Variables**, ajouter : `DATA_DIR` = `/data`
4. Redéployer.

Le fichier des comptes est alors rangé sur le volume, qui survit aux mises à jour.

## Les comptes et la vie privée

- Un compte, c'est un **pseudo et un mot de passe**. Aucune adresse e-mail n'est demandée.
- Les mots de passe ne sont jamais enregistrés tels quels : le serveur garde une empreinte calculée avec `scrypt`.
- Le serveur reçoit le pseudo, l'apparence du monstre, le total de points de la semaine et le record de course. **Il ne reçoit jamais les heures de sommeil, le nombre de pas ni le temps d'écran**, qui restent sur l'appareil du joueur.
- Chaque joueur peut supprimer son compte depuis le jeu.

À savoir avant d'ouvrir le jeu à d'autres personnes :

- **Les scores sont déclarés par le jeu lui-même.** Un joueur qui s'y connaît peut envoyer un faux score. Le serveur refuse seulement les valeurs impossibles.
- **Les pseudos et les noms de monstres ne sont pas modérés.** Rien n'empêche un mot grossier.
- En France, un service en ligne qui enregistre des données de mineurs de moins de 15 ans doit avoir l'accord des parents. Pour un test entre copains de classe, prévenir les familles est une bonne pratique.

## Le panneau administrateur

Dans le jeu : Paramètres, puis Administrateur, code `1234`. Il sert à tester sans attendre des jours. Ce code est écrit dans la page et ne protège rien : il évite seulement les clics par erreur.
