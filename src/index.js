const express = require("express");
const multer  = require('multer');
const fs = require('fs-extra');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/temp')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + ".jpg")
  }
})

const upload = multer({ storage: storage })

const app = express()
const port = 3000;

function processUploads(dirName, req) {
    const dir = dirName;
    const filename = req.file.filename;
    fs.move(`uploads/temp/${filename}`,`uploads/images/${dir}/${filename}`);
}

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  processUploads("profile", req);
  
  console.log("File uploaded")
})


app.get('/', function (req, res) {
    res.send('GET');
});

app.post('/', function (req, res) {
    res.send('post');
});

const server = app.listen(port, function () {
    console.log("Listening on http://localhost:" + 3000);
});