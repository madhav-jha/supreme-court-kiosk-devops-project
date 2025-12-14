const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  // mocked counsel list
  const list = [
    { name: "A. Advani", regNo: "SC-001", chamber: "Chamber 12" },
    { name: "B. Bhat", regNo: "SC-002", chamber: "Chamber 7" },
    { name: "C. Chatterjee", regNo: "SC-003", chamber: "Chamber 3" }
  ];
  res.json(list);
});

module.exports = router;
