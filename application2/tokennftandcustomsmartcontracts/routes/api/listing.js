var path = require('path');
var request = require("request");
var express = require("express");
var app = express.Router();

//Database Models 
var Listing = require("../../db/models/listing.js");

//listing Routes BEGIN ---------------------------------------------------------------

//Getting comments from the Database!
app.get("/getAllComments", function (req, res) {

    print("IM IN GET ALL COMMENTS")
    var resultObj = {
        rsgsreg: "hfeoweajwa"
    }
    res.json(resultObj)
    // //Use the org id param to find the organization and its associated comments
    // Listing.findOne({ "_id": req.params.cryptoProjectID })
    //     // ..and populate all of the comments associated with it
    //     .populate("comments")
    //     // now, execute our query
    //     .exec(function (error, doc) {
    //         // Log any errors
    //         if (error) {
    //             //Error 
    //             console.log(error);
    //             resultObj.error = true;
    //             resultObj.errorObj = error;
    //             res.json(resultObj);
    //         }
    //         // Otherwise, send the doc to the browser as a json object
    //         else {
    //             resultObj.doc = doc;
    //             res.json(resultObj);
    //         }
    //     });

})

module.exports = app;