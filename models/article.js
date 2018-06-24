var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({

  title: {
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

  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comments"
  }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;