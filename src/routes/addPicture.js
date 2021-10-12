const express = require("express");
const router = express.Router();

const storageService = require("../services").storage;
const upload = storageService.upload;

router.post('/leaf', upload.single('image'), function (req, res, next) {
  storageService.processUploads("leaf", req);
  console.log(req.path)
})

router.post('/brown', upload.single('image'), function (req, res, next) {
  storageService.processUploads("brown", req);
  console.log(req.path)
})

router.get('/', function (req, res, next) {
  storageService.getCategories().then(f => {
    res.render("addPictureIndex", { category: req.params.category, files: f });
  })
})

router.get('/:category', function (req, res, next) {
  res.render("addPicture", { category: req.params.category });
})

module.exports = router;