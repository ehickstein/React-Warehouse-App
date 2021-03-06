const express = require("express")
const passport = require('passport')
const bodyParser = require('body-parser');
const validator = require('express-validator');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const path = require('path');

const expressSession = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const registration = require('./config/passport/register');
const User = require('./models/user');
const port = process.env.PORT || 3001;

let app = express()
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.use(validator())
.set('view engine','ejs')
.use(express.static("views"))
.use(cookieParser())
// .use(expressSession({
//     secret : 'soooosecret',
//     resave : true,
//     saveUninitialized : false
// }))
.use(session({keys: ['secretkey1', 'secretkey2', '...']}))

.use(passport.initialize())
.use(passport.session());
console.log(User.authenticate)
passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(function(user, done) {
//     console.log('serializing')

//     done(null, user)
//     User.serializeUser()
// });
// passport.deserializeUser(function(user, done) {
//     console.log('deserializing')

//     done(null, user)
//     User.deserializeUser()
// });
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

    app.post('/register', registration.reg );
    require("./models")
    require("./routes/api-routes.js")(app)
    app.use(require('./config/passport/auth')(passport))

app.use(express.static(path.join(__dirname, 'react-warehouse-app', 'build')));

 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'react-warehouse-app', 'build', 'index.html'))
 });

app.listen(port);
console.log('Server running at 3001');
