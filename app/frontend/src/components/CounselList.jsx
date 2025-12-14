import React, { useEffect, useState } from 'react';
import { getCounselList } from '../api';

export default function CounselList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getCounselList().then(setList).catch(()=>setList([]));
  }, []);

  return (
    <div className="card">
      <h3>Counsel List</h3>
      <ul>
        {list.map((c, idx) => (
          <li key={idx}><strong>{c.name}</strong> — {c.regNo} — {c.chamber}</li>
        ))}
      </ul>
    </div>
  );
}
