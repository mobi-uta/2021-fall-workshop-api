const express = require("express");
const router = express.Router();

const storageService = require("../services").storage;
const upload = storageService.upload;

const imageProcessingService = require("../services").image;

router.post('/leaf', upload.single('image'), function (req, res, next) {
  storageService.processUploads("leaf", req);
  console.log(req.path)

  res.redirect("/success");
})

router.post('/brown', upload.single('image'), function (req, res, next) {
  storageService.processUploads("brown", req);

  imageProcessingService.read(req.file.path).then(pic => {
    pic.color([
      { apply: 'hue', params: [-90] }
    ])
      .write(req.file.path);
  });

  res.redirect("/success");
})

router.get('/', function (req, res, next) {
  let stack = router.stack.filter(r => r.route && !r.route.path.includes(":") && r.route.path.length > 1).map(r => r.route.path.substr(1))

  res.render("addPictureIndex", { category: req.params.category, files: stack });
})

router.get('/:category', function (req, res, next) {
  res.render("addPicture", { category: req.params.category });
})

module.exports = router;