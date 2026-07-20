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

## À compléter
Dans `index.html`, `equipe.html` et `script.js`, remplacer :
`const WHATSAPP_GROUP_URL = "";`
par le lien du groupe WhatsApp.

Dans `script.js`, renseigner `DATA_ENDPOINT` pour l'envoi des réponses.


Mise à jour : prénoms corrigés (Roxane, Ilona, Cassandre, Giulia, Bettina).


## Mise à jour v3
- Suppression des boutons dans le hero de l’accueil.
- Titre principal fortement réduit.
- Image responsive à droite du hero.
- Logo Campus utilisé dans le header.
- Logo Bordeaux Tourisme déplacé dans le footer sous la mention « Un projet de Bordeaux Tourisme ».


## Architecture optimisée

Les éléments communs sont maintenant centralisés dans `components.js`.

### Modifier le header ou le menu
Modifier uniquement la fonction `renderHeader()` et la constante `NAV_ITEMS`.

### Modifier le footer
Modifier uniquement la fonction `renderFooter()`.

### Ajouter le lien WhatsApp
Dans `components.js`, compléter :

```js
whatsappGroupUrl: "https://chat.whatsapp.com/..."
```

### Modifier l’adresse de contact
Dans `components.js`, changer :

```js
contactEmail: "r.zebina@bordeaux-tourisme.com"
```

Chaque page contient seulement :
- `<div data-site-header></div>`
- son contenu propre
- `<div data-site-footer></div>`
- `<script src="components.js"></script>`

La page active du menu est déterminée par l’attribut `data-page` du `<body>`.
