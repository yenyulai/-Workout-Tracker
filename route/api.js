var express = require('express');
var app = express();
var path = require('path');

const Workout = require("../models");
const model = require('../models/model');

module.exports = function(app) {
  
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  




};










