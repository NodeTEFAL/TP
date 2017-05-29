class AuthentifierCtrl
{
	indexAction(req, res)
	{
		res.render('./authentifier/index.pug');
    }

    loginAction(req,res)
    {
    	// récup des données
    	let us_login = req.body.us_login;
    	let us_password = req.body.us_password;

    	// code de la vérification que l'user existe (dans le csv)

    	// redirect
		res.render('./generer/index.pug');
    }
}

module.exports = AuthentifierCtrl;