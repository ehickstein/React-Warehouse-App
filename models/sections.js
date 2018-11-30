var mongoose = require("mongoose");

var Schema = mongoose.Schema

var SectionsSchema = new Schema({
    Section: {
        type: Number,
        required: true
    },
    Aisles: [{
        type: Schema.Types.ObjectId,
        ref: "Aisles"
    }]
})

var Sections = mongoose.model("Sections", SectionsSchema)

module.exports = Sections