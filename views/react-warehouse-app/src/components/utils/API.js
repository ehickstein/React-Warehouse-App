import axios from "axios";

export default {
  // Gets all Warehouses
  getWarehouses: function() {
    return axios.get("/api/warehouses/");
  },
  // // Gets the Warhouse with the given id
  // getWarehouse: function(id) {
  //   return axios.get("/api/warehouse/" + id );
  // },
  // Deletes the Warehouse with the given id
  deleteWarehouse: function(id) {
    return axios.delete("/api/deleteWarehouse/" + id);
  },
  // Saves a Warehouse to the database
  saveWarehouse: function(WarehouseData) {
    console.log(WarehouseData, ' this is the warehouse data, inside saveWarehouse API method')
    return axios.post("/api/warehouses/create", WarehouseData);
  },
  getSections: function(){
    console.log("Search for all sections in this Warehouse")
    return axios.get("/api/warehouses/" + id + "/sections")
    
  },
  // saveSections: function(){
  //   console.log("adding Section")
  //   return axios.post("/api/warehouses/" + id )
  // },
  deleteSection: function(id) {
    console.log("deleting section")
    return axios.delete("/api/deleteSection" +id)
  },
  getAisles: function(id){
    console.log("Getting Aisles")
    return axios.get("/api/sections/" + id + "/aisles")
  },
  saveAisles: function(id){
    console.log("Saving aisle")
    return axios.post("/api/sections/" +id)
  },
  deleteAisles: function(id){
    console.log("deleting Aisle")
    return axios.delete("/api/deleteAisle/" + id)
  },
  getItems: function(id){
    console.log("Theses are items")
    return axios.get("/api/aisles/" +id+ "/items")
  },
  saveItems: function(id){
    console.log("Save Items")
    return axios.post("/api/aisles/" +id)
  }

};
