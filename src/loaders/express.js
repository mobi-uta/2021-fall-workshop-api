const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const exec = require("child_process").exec;

module.exports = async function (app) {
  app.use("/", express.static(path.resolve("src/public")));

  await exec("npx tailwindcss -i ../styles/styles.css -o ../public/styles/styles.css");

  app.use(bodyParser.json());
}