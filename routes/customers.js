const express     = require("express");
const router      = express.Router();
const app         = require("../app");

router.get("/api/customers/items", function(req,res){
  res.json({hello: "world"});
});

router.post("/api/customers/items/:itemId/purchases", function(req,res){
  res.json({purchases: "itemspurchased"});
});



module.exports = router;
