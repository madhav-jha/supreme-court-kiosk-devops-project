const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(db.getAnnouncements());
});

router.post('/', (req, res) => {
  const { title, body, visible } = req.body;
  if (!title || !body) return res.status(400).json({ error: "title & body required" });
  const a = db.addAnnouncement(title, body, visible !== false);
  res.status(201).json(a);
});

module.exports = router;
