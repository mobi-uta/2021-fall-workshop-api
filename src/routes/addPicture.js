const express = require("express");
const router = express.Router();

const storageService = require("../services").storage;
const upload = storageService.upload;

router.post('/leaf', upload.single('image'), function (req, res, next) {
  storageService.processUploads("leaf", req);
  
  console.log("File uploaded")
})

router.get('/:category', function(req, res, next) {
  res.render("addPicture", { category: req.params.category });
})

module.exports = router;