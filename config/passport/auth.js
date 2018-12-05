const router = require('express').Router()
const User = require('../../models/user');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const checkLogin = (req,res,next)=>{
	if (req.user) next();
	else {
		//res.sendStatus(403);
		res.send(403, "Please Log in");
	}
}
module.exports = function(passport) {
	router.get('/login',	  	function(req, res) {
		res.send(`
			Use Postman to login

			`);
	});
	// router.post('/login', function(req,res) {
	//  User.authenticate()(req.query.username, req.query.password, function(err, result) {
	// 	  if (err) { 
	// 		  console.log(err)
	// 	   }
	//   res.json(result)
	// 	})
	// })
	router.post('/login', passport.authenticate('local'), function(req, res) {
		res.redirect('/');
	  });

	//use this route to test the user

	router.get('/testuser',
		// passport.authenticate('local'),
		ensureLoggedIn(),
		(req, res, next) => { console.log(":Logginguser:",req.user); next() },
		  function(req, res, err) {
		  		console.log("getting test user");

			    res.json(req.user);
				console.log("Done getting test user");

		  }
	);
	router.get("/testmiddleware", checkLogin,
		(req,res)=>res.send("You are logged in with user " + req.user.username)
	);
	router.get('/logout',
		

	  	function(req, res) { 
		  	const old_user=req.user;
		  	req.logout();

			res.json({success:(req.user? "No":"Yes"), user:req.user, "old_user":old_user});
	});

	return router;

}