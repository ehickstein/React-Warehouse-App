var mongoose = require("mongoose");

var Schema = mongoose.Schema

var UserSchema = new Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

var User = mongoose.model("User", UserSchema)

module.exports = User