// THIS WILL ALL BE FOR ADMINS
var mongoose = require("mongoose")
var express = require("express")
var db = require("../models");

var app = express();


mongoose.connect("mongodb://localhost/warehouse-app", { useNewUrlParser: true });



module.exports = function(app) {
    
    // db.Sections.create({ Section: "C"})
    //     .then(function(dbSection){
    //         console.log(dbSection)
    //         return db.Warehouses.findOneAndUpdate({_id: "5c056ced7937e41d3c2bae3c"}, {$push: {Sections: dbSection._id}}, {new: true})
    //     })
    // db.Aisles.create({ Aisle: "1"})
    //     .then(function(dbAisles){
    //         console.log(dbAisles)
    //         return db.Sections.findOneAndUpdate({_id: "5c056ef09fc3eb218ccc7941"}, {$push: {Aisles: dbAisles._id}}, {new: true})
    //     })
    // db.Items.create({ Item: "T2530"})
    //     .then(function(dbItems){
    //         console.log(dbItems)
    //         return db.Aisles.findOneAndUpdate({ _id: "5c057a4b12226a0980121c5f"}, {$push: {Items: dbItems._id}}, {new: true})
    //     })
    //Create an POST request for when the admin wants to create a new warehouse
    app.post("/warehouses/create", function(req, res) {
        db.Warehouses.create({ Location: req.body})
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
        db.Sections.create({ Section: req.body})
        .then(function(dbSections){
            console.log(dbSections)
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
    app.post("/sections/:sectionId", function(req, res) {
        db.Aisles.create({ Aisle: req.body})
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
    app.post("/aisles/:aisleId", function(req, res) {
        db.Items.create({ Item: req.body})
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

