const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');

const DB_FILE = path.join(__dirname, '..', 'data', 'db.json');
if (!fs.existsSync(path.dirname(DB_FILE))) fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });

let db = { announcements: [], cases: [] };

function load() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf8');
      db = JSON.parse(raw);
    } else {
      // seed sample data
      db = {
        announcements: [
          { id: nanoid(), title: "Welcome to Supreme Court Kiosk", body: "This is a demo announcement.", createdAt: new Date().toISOString(), visible: true }
        ],
        cases: [
          { id: nanoid(), caseNumber: "SC-2025-0001", partyA: "State", partyB: "John Doe", status: "Pending", nextHearing: "2025-12-20T10:00:00Z", bench: "Bench A" }
        ]
      };
      save();
    }
  } catch (e) {
    console.error("Failed to load DB:", e);
  }
}
function save() {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');
}

load();

module.exports = {
  getAnnouncements: () => db.announcements.filter(a => a.visible).sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt)),
  addAnnouncement: (title, body, visible=true) => {
    const a = { id: nanoid(), title, body, visible, createdAt: new Date().toISOString() };
    db.announcements.unshift(a);
    save();
    return a;
  },
  listCases: () => db.cases,
  getCaseByNumber: (caseNumber) => db.cases.find(c => c.caseNumber === caseNumber),
  addCase: (c) => { c.id = nanoid(); db.cases.push(c); save(); return c; }
};
