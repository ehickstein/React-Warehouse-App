// THIS WILL ALL BE FOR ADMINS
var mongoose = require("mongoose")
var express = require("express")
var db = require("../models");

var app = express();


mongoose.connect("mongodb://localhost/warehouse-app", { useNewUrlParser: true });



module.exports = function(app) {
    

    //Create an POST request for when the admin wants to create a new warehouse
    app.post("/warehouses/create", function(req, res) {
        // This creates the waarehousee in the database.
        db.Warehouses.create({ Location: req.body.Location})
        .then(function(dbWarehouse){
            console.log(dbWarehouse)
        })
        .catch(function(err) {
            // If an error occurs, print it to the console
            console.log(err.message);
        });
    })

    

    //Create a POST request for when the admin wants to create a new section
    app.post("/warehouses/:warehouseId", function(req, res) {
        // This creates the Section within the database.  Upon creation, it is not linked with the Warehouse it is in,
        // However, the following function is what links it.
        db.Sections.create({ Section: req.body.Section})
        .then(function(dbSections){
            console.log(dbSections)
            // This return statement links the section we just created with the correlating warehouse.  It finds the 
            // Warehousee with the id of req.params.warehouseId (The id of the warehousee we're in.) and then 
            // Pushes into the section array, the _id of the section we just created
            return db.Warehouses.findOneAndUpdate({_id: req.params.warehouseId}, {$push: {Sections: dbSections._id}}, {new: true})
        })
        .then(function(dbWarehouse){
            res.json(dbWarehouse)
        })
        .catch(function(err) {
            console.log(err.message)
        })
    })


    //Create a POST request for when the admin wants to create a new aisle
    // For an explanation on how this post request works, see the previous post request, the functionality is the same.
    app.post("/sections/:sectionId", function(req, res) {
        db.Aisles.create({ Aisle: req.body.Aisle})
        .then(function(dbAisle){
            console.log(dbAisle)
            return db.Sections.findOneAndUpdate({_id: req.params.sectionId}, {$push: {Aisles: dbAisle._id}}, {new: true})
        })
        .then(function(dbSections){
            res.json(dbSections)
        })
        .catch(function(err) {
            console.log(err.message)
        })
    })


    //Create a POST request for when the admin wants to create a new item
    // For an explanation on how this post request works, see the previous post request, the functionality is the same.
    app.post("/aisles/:aisleId", function(req, res) {
        db.Items.create({ Item: req.body.Item})
        .then(function(dbItem){
            console.log(dbItem)
            return db.Aisles.findOneAndUpdate({_id: req.params.aisleId}, {$push: {Items: dbItem._id}}, {new: true})
        })
        .then(function(dbAisle){
            res.json(dbAisle)
        })
        .catch(function(err) {
            console.log(err.message)
        })
    })



    //Create all GET requests for displaying the warehouses---items


    //Show all the warehouses availble.  This is the main page for you to branch off into the other subections such as 
    //Sections, aisles and items.
    app.get("/warehouses", function(req, res) {
        db.Warehouses.find({})
        .then(function(dbWarehouse) {
            res.json(dbWarehouse)
            console.log(dbWarehouse)
        })
        .catch(function(err) {
            res.json(err)
        })
    })


    //Show all the sections within a specific warehouse.  
    app.get("/warehouses/:warehouseId/sections", function(req, res) {
        db.Warehouses.findOne({_id: req.params.warehouseId})
        .populate("Sections")
        .then(function(dbSections) {
            res.json(dbSections.Sections)
            console.log(dbSections.Sections)
        })
        .catch(function(err) {
            res.json(err)
        })
    })


    //Show all the aisles within a sections within a warehouse
    app.get("/sections/:sectionId/aisles", function(req, res) {
        db.Sections.findOne({_id: req.params.sectionId})
        .populate("Aisles")
        .then(function(dbAisles) {
            res.json(dbAisles.Aisles)
            console.log("Data for nerds"+dbAisles)
        })
        .catch(function(err) {
            res.json(err)
        })
    })

    //Show all the items with a aisle
    app.get("/aisles/:aisleId/items", function(req,res){
        db.Aisles.findOne({_id: req.params.aisleId})
        .populate("Items")
        .then(function(dbItems){
            res.json(dbItems.Items)
            console.log("Data for nerds"+dbItems)
        })
        .catch(function(err){
            res.json(err)
        })
    })
}

