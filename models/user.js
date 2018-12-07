const mongoose = require("mongoose");
    mongoose.connect('mongodb://localhost/warehouse-app')
const passportLocalMongoose = require('passport-local-mongoose');
let db = mongoose.connection;
let Schema = mongoose.Schema

let UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
})
UserSchema.plugin(passportLocalMongoose);
let User = mongoose.model("User", UserSchema)

module.exports = User