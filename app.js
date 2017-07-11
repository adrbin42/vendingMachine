const express         = require("express");
const bodyParser      = require("body-parser");
const mocha           = require("mocha");
const routes          = require("./routes/customers.js");
const app             = express();

app.use(routes);

if(require.main === module){
  app.listen(3000, function(){
    console.log("You are listening to port 3000 main");
  });
}

module.exports = app;
