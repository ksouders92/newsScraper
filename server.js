// Use MongoDB & Mongoose to scrape news articles & save them while also allowing users to add comments
// dependencies 
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser"); 
var request = require('request');
var axios = require("axios");
var cheerio = require("cheerio");


//added .env.PORT for Heroku deployment
var PORT = process.env.PORT || 8080;

var app = express();
var router = express.Router();

require("./config/routes.js")(router);

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(router);

// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local onionArticles database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.connect(db, function (error){
  if (error){
    console.log(error);
  }
  else {
    console.log("Mongoose connection successful!");
  }
})




app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});