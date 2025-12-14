const express = require('express');
const db = require('../models/db');
const router = express.Router();

// list
router.get('/', (req,res) => {
  res.json(db.listCases());
});

// create (admin/demo)
router.post('/', (req,res) => {
  const { caseNumber, partyA, partyB, status, nextHearing, bench } = req.body;
  if (!caseNumber) return res.status(400).json({ error: "caseNumber required" });
  const existing = db.getCaseByNumber(caseNumber);
  if (existing) return res.status(400).json({ error: "caseNumber exists" });
  const c = db.addCase({ caseNumber, partyA, partyB, status: status || "Pending", nextHearing, bench });
  res.status(201).json(c);
});

// lookup
router.get('/:caseNumber', (req,res) => {
  const c = db.getCaseByNumber(req.params.caseNumber);
  if (!c) return res.status(404).json({ error: "Case not found" });
  res.json(c);
});

module.exports = router;
