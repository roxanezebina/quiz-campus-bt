# Campus Bordeaux Tourisme — version multipage

## Arborescence
- `index.html` : accueil synthétique
- `quiz.html` : formulaire et quiz
- `bons-plans.html` : ressources recommandées
- `equipe.html` : présentation de l'équipe
- `donnees.html` : utilisation et conservation des données
- `style.css` : styles partagés
- `script.js` : fonctionnement du quiz
- `assets/bordeaux-tourisme-logo.png` : logo fourni

Le menu suit désormais une seule logique : chaque entrée ouvre une page distincte.

## Architecture optimisée
Les éléments communs sont maintenant centralisés dans `components.js`.

### Modifier le header ou le menu
Modifier uniquement la fonction `renderHeader()` et la constante `NAV_ITEMS`.

### Modifier le footer
Modifier uniquement la fonction `renderFooter()`.


Chaque page contient seulement :
- `<div data-site-header></div>`
- son contenu propre
- `<div data-site-footer></div>`
- `<script src="components.js"></script>`

La page active du menu est déterminée par l’attribut `data-page` du `<body>`.
