var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var headlineSchema = new Schema({

  headline: {
    type: String,
    unique : true, 
    required : true, 
    dropDups: true 
  },

  link: {
    type: String,
    unique : true, 
    required : true, 
    dropDups: true 
  },

  summary: {
    type: String,
    required: false, 
  },

  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;