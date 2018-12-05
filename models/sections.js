var mongoose = require("mongoose");

var Schema = mongoose.Schema

var SectionsSchema = new Schema({
    Section: {
        type: VarChar,
        required: true
    },
    aisles: {
        type: Schema.Types.ObjectId,
        ref: "Aisles"
    }
})

var Sections = mongoose.model("Sections", SectionsSchema)

module.exports = Sections