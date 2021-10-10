const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("picturesIndex");
})

router.get("/:category", function (req, res, next) {
  res.render("pictures", { category: req.params.category})
});

module.exports = router;