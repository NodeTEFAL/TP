// choix du serveur
const port = process.argv[2] || 3000;

// import d'express
const express = require('express');

// instanciation de l'objet express
const app = express();

// import de fs
const fs = require('fs');

// import de path
const path = require('path');

// import de body-parser
const bodyParser = require('body-parser');

// view engine avec pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));

// inclure les controleurs 
const EnregistrerCtrl = require('./controllers/EnregistrerCtrl');
const enregistrerCtrl = new EnregistrerCtrl();

const AuthentifierCtrl = require('./controllers/AuthentifierCtrl');
const authentifierCtrl = new AuthentifierCtrl();

const GenererCtrl = require('./controllers/GenererCtrl');
const genererCtrl = new GenererCtrl();

// réponse à l'url "/enregistrer"
app.get('/enregistrer', enregistrerCtrl.indexAction.bind(enregistrerCtrl));
}

// réponse à l'url "/generer"
app.get('/generer', genererCtrl.indexAction.bind(genererCtrl));

// réponse à l'url "/" = route par défaut
app.get('/', authentifierCtrl.indexAction.bind(authentifierCtrl));

// lancement du serveur
app.listen(port, () => console.log(`TEST Server running at http://127.0.0.1:${port}`));
