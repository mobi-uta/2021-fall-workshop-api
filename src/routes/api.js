const express = require("express");
const router = express.Router();

const storageService = require("../services/storage");
const imageProcessingService = require("../services/image");
const upload = storageService.upload;

// ==================================================  
//   GET Requests go here
// ==================================================  
router.get("/api/leaf", function (req, res, next) {
    res.status(200).json({ leaf: "leaves are awesome" })
});

// ==================================================  
//   POST Requests go here
// ==================================================  
router.post('/api/leaf', upload.single('image'), function (req, res, next) {
    storageService.processUploads("leaf", req);

    res.redirect("/success");
})

router.post('/api/brown', upload.single('image'), function (req, res, next) {
    storageService.processUploads("brown", req);

    imageProcessingService.read(req.file.path).then(pic => {
        pic.color([
            { apply: 'hue', params: [-90] }
        ])
            .write(req.file.path);
    });

    res.redirect("/success");
})

module.exports = router;