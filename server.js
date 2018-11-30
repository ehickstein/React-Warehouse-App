
<<<<<<< HEAD
var db = require("./models");

var app = express();

var PORT = 3000;


// mongoose.connect("mongodb://localhost/warehouse-app", { useNewUrlParser: true });

// db.Warehouses.create({ Location:"Test Warehouse"})
// .then(function(dbWarehouse){
//     console.log(dbWarehouse)
// })
// .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });


// db.Sections.create({ Section:"1234"})
// .then(function(dbSection){
//     console.log(dbSection)
// })
// .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });


//   db.Aisles.create({ Aisle:"1234"})
// .then(function(dbAisle){
//     console.log(dbAisle)
// })
// .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });

// db.Items.create({ Items:"Test Item"})
// .then(function(dbItem){
//     console.log(dbItem)
// })
// .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });


require("./routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
=======
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

    app.post('/register', passport.authenticate('local'), registration.reg );

app.listen(3000);
console.log('Server running at 3000');
>>>>>>> 56c0e9cb7609fa16309a10b09a5ca28259f3c4d2
