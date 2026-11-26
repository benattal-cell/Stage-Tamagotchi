# Traductions

Le jeu est écrit en français. Chaque fichier de ce dossier est un dictionnaire « texte français → traduction » :

| Fichier | Langue |
|---|---|
| `en.json` | Anglais |
| `es.json` | Espagnol |
| `zh.json` | Chinois simplifié |
| `hi.json` | Hindi |

Ces dictionnaires sont déjà copiés dans `public/index.html`. Le joueur choisit sa langue dans les paramètres ; à la première ouverture, le jeu prend la langue du téléphone si elle fait partie des cinq.

Les traductions ont été faites par une IA et n'ont pas été relues par des personnes dont c'est la langue maternelle. Pour corriger un texte, il suffit de changer la partie droite de la ligne (la traduction), jamais la partie gauche (le texte français, qui sert de clé).
