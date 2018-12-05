var mongoose = require("mongoose");

var Schema = mongoose.Schema

var SectionsSchema = new Schema({
    Section: {
        type: String,
        required: true
    },
    Aisles: [{
        type: Schema.Types.ObjectId,
        ref: "Aisle"
    }]
})

var Sections = mongoose.model("Sections", SectionsSchema)

module.exports = Sections