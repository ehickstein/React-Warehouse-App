const router = require('express').Router()
const User = require('../../models/user');
const adminAction = require('../../views/react-warehouse-app/src/redux/actions');
const userAction = require('../../views/react-warehouse-app/src/redux/actions');
const store = require('../../views/react-warehouse-app/src/redux/store');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const checkLogin = (req,res,next)=>{
	if (req.user) next();
	else {
		//res.sendStatus(403);
		res.send(403, "Please Log in");
	}
}

const requiresAdmin = function() {
	return [
	  ensureLoggedIn('/login'),
	  function(req, res, next) {
      if (req.user && req.user.isAdmin === true){
        next();
        store.dispatch(adminAction())
      }
      else{
        res.send(401, 'Unauthorized');
        store.dispatch(userAction())
      }
    }
  ]
}
  
module.exports = function(passport) {
	router.get('/login',	  	function(req, res) {
		res.send(`
			Use Postman to login

			`);
	});

	//use this route to test the user
	
	router.post('/login', passport.authenticate('local'), function(req, res) {
		    res.redirect('/');
	});

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

};