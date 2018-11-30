// THIS WILL ALL BE FOR ADMINS
var mongoose = require("mongoose")
var express = require("express")
var db = require("../models");

var app = express();


mongoose.connect("mongodb://localhost/warehouse-app", { useNewUrlParser: true });

module.exports = function(app) {
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
    app.post("/warehouses/:id", function(req, res) {
        db.Sections.create({ Section: req.body})
        .then(function(dbSections){
            console.log(dbSections)
            return db.Warehouses.findOneAndUpdate({_id: req.params.id}, {$push: {Sections: dbSections._id}}, {new: true})
        })
        .then(function(dbWarehouse){
            res.json(dbWarehouse)
        })
        .catch(function(err) {
            console.log(err.message)
        })
    })


    //Create a POST request for when the admin wants to create a new aisle
    app.post("/warehouses/:warehouseId/sections/:id", function(req, res) {
        db.Aisles.create({ Aisle: req.body})
        .then(function(dbAisle){
            console.log(dbAisle)
            return db.Sections.findOneAndUpdate({_id: req.params.id}, {$push: {Aisles: dbAisle._id}}, {new: true})
        })
        .then(function(dbSections){
            res.json(dbSections)
        })
        .catch(function(err) {
            console.log(err.message)
        })
    })


    //Create a POST request for when the admin wants to create a new item
    app.post("/warehouses/:warehouseId/sections/:sectionId/aisles/:id", function(req, res) {
        db.Items.create({ Item: req.body})
        .then(function(dbItem){
            console.log(dbItem)
            return db.Aisles.findOneAndUpdate({_id: req.params.id}, {$push: {Items: dbItem._id}}, {new: true})
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
        console.log("it worked")
        db.Warehouses.find({})
        .then(function(dbWarehouse) {
            res.json(dbWarehouse)
        })
        .catch(function(err) {
            res.json(err)
        })
    })


    //Show all the sections within a specific warehouse.  
    app.get("/warehouses/:warehouseId/sections", function(req, res) {
        db.Warehouses.find({_id: req.params.id})
        .populate("sections")
        .then(function(dbSections) {
            res.json(dbSections)
        })
        .catch(function(err) {
            res.json(err)
        })
    })


    //Show all the aisles within a sections within a warehouse
    app.get("/warehouses/:warehouseId/sections/:sectionId/aisles", function(req, res) {
        db.Aisles.find({_id: req.params.id})
        .then(function(dbSections) {
            res.json(dbSections)
        })
        .catch(function(err) {
            res.json(err)
        })
    })

    app.get("/warehouses/:warehouseId/sections/:sectionId/aisles/:aisleId/items", function(req,res){
        db.Items.find({_id: req.params.id})
        .then(function(dbAisles){
            res.json(dbAisles)
        })
        .catch(function(err){
            res.json(err)
        })
    })
}

