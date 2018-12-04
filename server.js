const express = require("express")
const passport = require('passport')
const bodyParser = require('body-parser');
const validator = require('express-validator');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const auth = require('./config/passport/auth');
const registration = require('./config/passport/register');
const User = require('./models/user');

let app = express()
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.use(validator())
.set('view engine','ejs')
.use(express.static("views"))
.use(cookieParser())
.use(expressSession({
    secret : 'soooosecret',
    resave : true,
    saveUninitialized : false
}))

.use(passport.initialize())
.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

    app.post('/register', registration.reg );
    require("./models")

app.listen(3000);
console.log('Server running at 3000');
