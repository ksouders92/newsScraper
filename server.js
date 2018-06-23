// Use MongoDB & Mongoose to scrape news articles & save them while also allowing users to add comments
// dependencies 
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var request = require('request');
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");
//added for Heroku deployment
var PORT = process.env.PORT || 8080;
var app = express();
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));