const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

const requiresAdmin = function() {
	return [
	  ensureLoggedIn(),
	  function(req, res, next) {
		if (req.user && req.user.isAdmin === true)
		  next();
		else
		  res.send(401, 'Unauthorized');
	  }
	]
  };

  module.exports = requiresAdmin