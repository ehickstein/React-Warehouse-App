var mongoose = require("mongoose");

var Schema = mongoose.Schema

var UserSchema = new Schema({
    Username: {
        type: Text,
        required: true
    },
    Password: {
        type: Text,
        required: true
    }
})

var User = mongoose.model("User", UserSchema)

module.exports = User