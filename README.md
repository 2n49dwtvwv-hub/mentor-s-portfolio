# Portfolio — bureau façon macOS

Site statique (HTML/CSS/JS, sans dépendances).

## Personnaliser
Tout le contenu est dans **`data.js`** : profil, projets, compétences, liens.
- Photo : mets-la dans `assets/` et indique le chemin dans `PROFILE.avatar`.
- CV : dépose `assets/cv.pdf`.
- Image d'un projet : `image: "assets/mon-projet.png"`.

## Animations
Les fenêtres À propos, Compétences et Contact reprennent les diapos (images dans `assets/slides/`).
Chaque élément a un attribut `data-a` qui choisit son effet d'apparition :
`up`, `blur`, `wipe` (écriture), `zoom`, `pop`, `drop`, `stamp`, `flip`, `draw`, `line`.
`style="--d:300ms"` règle le délai et `--r:-6deg` la rotation finale.
`data-words` fait apparaître un texte mot par mot, et `data-depth` donne l'effet de profondeur au survol.

## Projets
Les infos (titre, rôles, chiffres, liens) sont dans `PROJECTS` (`data.js`).
Les diapos animées sont reconstruites élément par élément dans `assets/projets/`
(`slides.js` est généré automatiquement depuis le PDF : position de chaque image et de chaque texte).
Les captures (YouTube, Instagram, site) sont cliquables et ouvrent le lien du projet ;
les stickers grossissent au survol et se trémoussent au clic.

## Lancer en local
    python3 -m http.server 8000
puis ouvre http://localhost:8000

## Mettre en ligne
GitHub Pages, Netlify ou Vercel : il suffit de publier le dossier tel quel.
