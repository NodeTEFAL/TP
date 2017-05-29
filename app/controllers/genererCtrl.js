class GenererCtrl
{
	indexAction(req, res)
	{
		res.render('./generer/index.pug');
    }

    generateAction(req, res)
	{
		// récupération des données enoyées
		let gen_firstname = req.body.gen_firstname;
		let gen_lastname = req.body.gen_lastname;
		let gen_domain = req.body.gen_domain;

		// remplir un tableau avec toutes les combinaisons
		const separators = [".","-","_"];

		// remplir le tableau pour chaque variante nom / prenom / initiales
		// symbols.map(symbol => `${gen_firstname}${symbol}${gen_lastname}@${gen_domain}`);

		const nomPrenom = separators.map(separator => `${gen_lastname}${separator}${gen_firstname}@${gen_domain}`);
		const prenomNom = separators.map(separator =>  `${gen_firstname}${separator}${gen_lastname}@${gen_domain}`);
		const nPrenom = separators.map(separator => `${gen_lastname.substring(0, 1)}${separator}${gen_firstname}@${gen_domain}`);
		const pNom = separators.map(separator => `${gen_firstname.substring(0, 1)}${separator}${gen_lastname}@${gen_domain}`);
		const nomP = separators.map(separator => `${gen_lastname}${separator}${gen_firstname.substring(0, 1)}@${gen_domain}`);
		const prenomN = separators.map(separator => `${gen_firstname}${separator}${gen_lastname.substring(0, 1)}@${gen_domain}`);
		const nP = separators.map(separator =>`${gen_lastname.substring(0, 1)}${separator}${gen_firstname.substring(0, 1)}@${gen_domain}`);
		const pN = separators.map(separator =>`${gen_firstname.substring(0, 1)}${separator}${gen_lastname.substring(0, 1)}@${gen_domain}`);

		// fusionner les tableaux
		const listMails = [
			...nomPrenom,
			...prenomNom,
			...nPrenom,
			...pNom,
			...prenomN,
			...nomP,
			...nP,
			...pN
			];

		// générer le contenu d'un fichier csv
		let string = '';

		// transformer les lignes du tableau en ligne du csv
		listMails.forEach(mail => {
		    string += `${gen_firstname},${gen_lastname},${gen_domain},${mail}\n`;
		});

		// afficher le contenu qui sera sauvegardé (mode debug)
		console.log(string);

		// import de fs
		const fs = require('fs');		

		// créer et enregistrer le csv
		fs.writeFile(`${gen_firstname}-${gen_lastname}.csv`,
			string,
			function(err) {
		    if(err) return console.log(err);
		    console.log(`File saved successfully with ${listMails.length} emails : ${gen_firstname}-${gen_lastname}.csv`);
		});

		// redirect
		res.render('./generer/index.pug');
    }
}

module.exports = GenererCtrl;