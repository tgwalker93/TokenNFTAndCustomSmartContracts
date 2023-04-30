const router = require("express").Router();
const commentRoutes = require("./comment");
const listingRoutes = require("./listing");

var express = require("express");
var app = express.Router();

app.use("/comment", commentRoutes);

module.exports = app;