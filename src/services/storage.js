const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/temp')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + ".jpg")
    }
  })

const upload = multer({ storage: storage });

function processUploads(dirName, req) {
      const dir = dirName;
      const filename = req.file.filename;
      fs.move(`uploads/temp/${filename}`,`uploads/images/${dir}/${filename}`);
}

module.exports = {
  storage: storage,
  upload: upload,
  processUploads: processUploads
}