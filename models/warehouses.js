var mongoose = require("mongoose");

var Schema = mongoose.Schema

var WarehouseSchema = new Schema({
    location: {
        type: String
    },
    sections: {
        type: Schema.Types.ObjectId,
        ref: "Sections"
    }
})

var Warehouse = mongoose.model("Warehouse", WarehouseSchema)

module.exports = Warehouse