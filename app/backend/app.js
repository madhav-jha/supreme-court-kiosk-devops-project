// backend/app.js
const express = require('express');
const cors = require('cors');
const path = require('path'); // only declare once

const announcements = require('./routes/announcements');
const cases = require('./routes/cases');
const uploads = require('./routes/uploads');
const counsel = require('./routes/counsel');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/announcements', announcements);
app.use('/api/cases', cases);
app.use('/api/uploads', uploads);
app.use('/api/counsel', counsel);

// health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// friendly root message so browser doesn't show "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Court Kiosk Backend is running. Use /api/health or the frontend at port 3000.');
});

// OPTIONAL: serve frontend build if you want single-server setup.
// Uncomment these lines **only** if you have built the frontend into ../frontend/build
/*
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});
*/

module.exports = app;
