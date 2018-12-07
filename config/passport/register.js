const User = require('../../models/user');

var reg = function (req, res) {
console.log('hello')
    /* some form validation... */
    User.register({
        username: req.query.username,
        isAdmin: req.query.isAdmin,
    },
    req.query.password, function(err, user) {
        res.send(user)
        console.log('made it')
        console.log(user)
        console.log(err)
    })
}
module.exports = { reg : reg }