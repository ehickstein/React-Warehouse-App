var mongoose = require("mongoose");

var Schema = mongoose.Schema

var ItemSchema = new Schema({
    Item: {
        type: String,
        required: true
    },
})

var Item = mongoose.model("Item", ItemSchema)

module.exports = Item