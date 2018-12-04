var mongoose = require("mongoose");

var Schema = mongoose.Schema

var AdminSchema = new Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

var Admin = mongoose.model("Admin", AdminSchema)

module.exports = Admin