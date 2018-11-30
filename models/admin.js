var mongoose = require("mongoose");

var Schema = mongoose.Schema

var AdminSchema = new Schema({
    Username: {
        type: Text,
        required: true
    },
    Password: {
        type: Text,
        required: true
    }
})

var Admin = mongoose.model("Admin", AdminSchema)

module.exports = Admin