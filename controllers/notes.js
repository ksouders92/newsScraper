var Note = require("../models/Notes");
var makeDate = require("../scripts/date")

module.exports = {
    // grab all of the notes associated with the articles headline ID
    // **NO FETCH** 
 get: function (data, cb) {
     Note.find({
         _headlineId: date._id
     }, cb);
 },
 // creates newNote & runs function to callback doc
 save: function (data, cb) {
     var newNote = {
         _headlineId: data._id,
         date: makeDate(),
         noteText: data.noteText
     };
     Note.create(newNote, function (err, doc) {
         if (err){
             console.log(err);
         }
         else {
             console.log(doc);
             cb(doc);
         }
     });
 },
 // removes note associated with article
 delete: function(data, cd){
     Note.remove({
         _id: data._id
     }, cb);
 }
}