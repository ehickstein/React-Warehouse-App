var mongoose = require("mongoose");

var Schema = mongoose.Schema

var ItemSchema = new Schema({
    Item: {
        type: String,
        required: true
    },
})

var Item = mongoose.model("Aisle", ItemSchema)

module.exports = Item