var mongoose = require("mongoose");

var Schema = mongoose.Schema

var AisleSchema = new Schema({
    Aisle: {
        type: String,
        required: true
    },
    Items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Item"
        }
    ]
})

var Aisle = mongoose.model("Aisle", AisleSchema)

module.exports = Aisle