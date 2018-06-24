var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  title: String,
  body: String
});

var Comment = mongoose.model("Comments", CommentSchema);

module.exports = Comment;