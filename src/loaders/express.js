const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const routes = require("../routes");

module.exports = function (app) {
  app.use("/", express.static("src/public"));

  app.use(bodyParser.json());

  app.use("/add", routes.addPictures);
  app.use("/", routes.api);
}