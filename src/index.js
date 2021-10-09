const express = require("express");

const app = express()
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello');
});

const server = app.listen(port, function () {
    console.log("Listening on http://localhost:" + 3000);
});