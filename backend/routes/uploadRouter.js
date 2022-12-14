const multer = require('multer');
const express = require('express');
const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'frontend/public/uploads');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

uploadRouter.post('/', upload.single('image'), (req, res) => {
  res.send(`${req.file.path.slice(24)}`);
});
module.exports = uploadRouter;
