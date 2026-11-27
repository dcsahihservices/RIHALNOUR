# RIHAL NOUR – رحال نور · Site vitrine statique

HTML5 + CSS3 + JavaScript pur (sans framework, sans backend, sans base de données).
Langues : français, anglais, arabe (RTL automatique).

## Lancer le site en local
- **Le plus simple** : double-cliquez sur `index.html`.
- **Avec un mini-serveur** (recommandé) : dans ce dossier, lancez `python3 -m http.server 8000`
  puis ouvrez http://localhost:8000
- Une connexion Internet est utile pour charger les polices Google Fonts (le site reste lisible sans).

## Structure
```
index.html  services.html  omra.html  destinations.html  contact.html
css/style.css          design complet (couleurs en haut du fichier)
js/config.js           ← COORDONNÉES : WhatsApp, téléphone, e-mail, réseaux, Google Maps
js/i18n.js             tous les textes FR / EN / AR
js/main.js             menu, langue, boutons WhatsApp, formulaire, galerie
images/                photos et logo (voir images/README.txt)
```

## À personnaliser avant publication
1. **js/config.js** : numéro WhatsApp (format `212XXXXXXXXX`), téléphone, e-mail, réseaux sociaux.
2. **Google Maps** : collez l'URL « Intégrer une carte » dans `mapsEmbed`.
3. **Logo** : déposez `images/logo.png` ; il remplace automatiquement l'emblème provisoire.
4. **Photos** : ajoutez les `.jpg` listés dans `images/README.txt` (fond dégradé en attendant).
5. **Textes, prix, offres, avis** : tout est fictif. Modifiez `js/i18n.js`
   (clés `of*`, `rv*`, `ct_addr`, `ct_hours`). Les prix « 0 000 MAD » se changent dans `R.offers` de `js/main.js`.

## Publier
- **Netlify** : glissez-déposez le dossier sur https://app.netlify.com/drop
- **Vercel** : `npx vercel` dans le dossier (aucun réglage de build).
- **GitHub Pages** : poussez les fichiers dans un dépôt, puis Settings → Pages → branche `main`, dossier `/`.

## Notes
- Le contenu est injecté par JavaScript (traductions) : pour un meilleur référencement Google,
  on pourra plus tard pré-écrire le français directement dans le HTML.
- Le formulaire n'envoie rien à un serveur : il ouvre WhatsApp ou l'application e-mail avec le message pré-rempli.
