const express     = require("express");
const router      = express.Router();
const app         = require("../app");

router.get("/api/vendors/purchases", function(req,res){
  res.json({vendorsPurchases: "vendorpurchases"});
});

router.get("/api/vendors/money", function(req,res){
  res.json({vendorsMoney: "vendormoney"});
});

router.post("/api/vendors/items", function(req,res){
  res.json({vendorItems: "vendoritems"});
});

router.put("/api/vendors/items/:itemId"), function(req,res){
  res.json({vendorItemId: "itemId"});
});

module.exports = router;
