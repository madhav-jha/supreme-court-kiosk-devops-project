const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const uploadDir = path.join(__dirname, '..', 'uploads');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const fn = `${Date.now()}-${file.originalname.replace(/\s+/g,'_')}`;
    cb(null, fn);
  }
});
const upload = multer({ storage });

router.post('/certified-copy', upload.single('document'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'file required' });
  // In real app: add DB entry; here we just return filename & url
  const url = `/uploads/${req.file.filename}`;
  res.json({ message: 'Uploaded', filename: req.file.filename, url });
});

module.exports = router;
