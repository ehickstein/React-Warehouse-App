var mongoose = require("mongoose")
var express = require("express")

var db = require("./models");

var app = express();

var PORT = 3000;


// mongoose.connect("mongodb://localhost/warehouse-app", { useNewUrlParser: true });

// db.Warehouses.create({ Location:"Test Warehouse"})
// .then(function(dbWarehouse){
//     console.log(dbWarehouse)
// })
// .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });


// db.Sections.create({ Section:"1234"})
// .then(function(dbSection){
//     console.log(dbSection)
// })
// .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });


//   db.Aisles.create({ Aisle:"1234"})
// .then(function(dbAisle){
//     console.log(dbAisle)
// })
// .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });

// db.Items.create({ Items:"Test Item"})
// .then(function(dbItem){
//     console.log(dbItem)
// })
// .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });


require("./routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
