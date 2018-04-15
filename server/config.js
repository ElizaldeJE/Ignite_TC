const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + "/../client/dist"));

module.exports = app;
