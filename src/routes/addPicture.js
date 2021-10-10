const express = require("express");
const router = express.Router();

const storageService = require("../services").storage;
const upload = storageService.upload;

router.post('/profile', upload.single('avatar'), function (req, res, next) {
  processUploads("profile", req);
  
  console.log("File uploaded")
})

router.get('/:category', function(req, res, next) {
  res.render("addPicture", { category: req.params.category });
})

module.exports = router;