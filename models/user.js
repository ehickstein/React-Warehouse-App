const mongoose = require("mongoose");
    mongoose.connect('mongodb://localhost/warehouse-test')
const passportLocalMongoose = require('passport-local-mongoose');

let db = mongoose.connection;
let Schema = mongoose.Schema

let UserSchema = new Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})
UserSchema.plugin(passportLocalMongoose);
let User = mongoose.model("User", UserSchema)

module.exports.createUser = function(newUser) {
    newUser.save(); 
}

module.exports = User