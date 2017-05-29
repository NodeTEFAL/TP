class AuthentifierCtrl
{
	indexAction(req, res)
	{
		res.render('./authentifier/index.pug');
    }

    loginAction(req,res)
    {
    	res.render('./generer/index.pug');
    }
}

module.exports = AuthentifierCtrl;