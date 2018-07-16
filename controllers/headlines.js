// bring in scripts
var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

// bring in models
var Headline = require("../models/Headlines");

module.exports = {
    // grab all articles and insert them intp the scrape collection
    fetch: function (cb) {
        scrape (function(data){
            var articles = data;
            for (var i=0; i<articles.length; i++) {
                articles[i].date = makeDate();
                articles[i].saved = false;
            }
            // use mongo to insert into collection
            Headline.collection.insertMany(articles, {ordered:false}, 
            function(err, docs){
                cb(err, docs);
            })
        })
    },
    // removes articles
    delete: function(query, cb) {
        Headline.remove(query, cb);
        },
        // sorts the articles from most recent to least recent
    get: function (query, cb) {
        Headline.find(query).sort({
            _id: -1
        })
        .exec(function(err, doc) {
            cb(doc);
        });
    },
    // updates any new articles scraped with the relevant ID
    update: function (query, cb){
        Headline.update({_id: query._id},{
            $set: query
        }, {}, cb);
    }    
    }
