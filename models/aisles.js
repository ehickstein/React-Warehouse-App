var mongoose = require("mongoose");

var Schema = mongoose.Schema

var AisleSchema = new Schema({
    Aisle: {
        type: Number,
        required: true
    },
    Items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Items"
        }
    ]
})

var Aisle = mongoose.model("Aisle", AisleSchema)

module.exports = Aisle