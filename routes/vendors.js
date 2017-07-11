const express     = require("express");
const router      = express.Router();
const app         = require("../app");

router.get("/api/vendors/purchases", function(req,res){
  res.json({hello: "world"});
});

router.get("/api/vendors/money", function(req,res){
  res.json({hello: "world"});
});

router.post("/api/vendors/items", function(req,res){
  res.json({hello: "world"});
});

router.put("/api/vendors/items/:itemId"), function(req,res){
  res.json({hello: "world"});
});

module.exports = router;
