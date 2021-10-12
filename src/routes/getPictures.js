const express = require("express");
const fs = require('fs');
const router = express.Router();

const storageService = require('../services/storage');

router.use("/:category", function (req, res, next) {
  storageService.getPictures(req.params.category).then(p => {
    res.render("pictures", { category: req.params.category, pics: p });
    next();
  }).catch(e => {
    res.render("pictures", { category: req.params.category });
    next();
  })
})

router.get("/", function (req, res, next) {
  storageService.getCategories().then(f => {
    res.render("picturesIndex", { files: f });
  });
})

router.get("/leaf", function (req, res, next) {
});

module.exports = router;