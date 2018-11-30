const User = require('../../models/user');

var reg = function (req, res) {

    /* some form validation... */
    var errors = req.validationErrors();

if (errors) {
    res.render("register" , { errors : errors } );
}
else {
    var newUser = new User({
        username : username,
        email : email,
    });

    User.register(newUser, password, function(err, user) {
       if (errors) {
           // handle the error
       }
       passport.authenticate("local")(req, res, function() {
           // redirect user or do whatever
       });
    });
}
}
module.exports = { reg : reg }