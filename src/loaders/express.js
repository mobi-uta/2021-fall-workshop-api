const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");

module.exports = function (app) {
  app.use("/", express.static(path.resolve("src/public")));

  app.use(bodyParser.json());
}