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

// réponse à l'url "/" = route par défaut
app.get('/', function (req, res) {
	res.send('Ce serait peut être bien de linker un controleur, non ?');
});

// lancement du serveur
app.listen(port, () => console.log(`TEST Server running at http://127.0.0.1:${port}`));
