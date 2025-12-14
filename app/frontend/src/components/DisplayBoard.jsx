import React, { useEffect, useState } from 'react';
import { getAnnouncements } from '../api';

export default function DisplayBoard() {
  const [anns, setAnns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnnouncements().then(data => {
      setAnns(data);
    }).catch(() => {
      setAnns([]);
    }).finally(() => setLoading(false));
  }, []);

  return (
    <div className="display-board">
      <h2>Display Board</h2>
      {loading && <p>Loading...</p>}
      <ul>
        {anns.map(a => (
          <li key={a.id}>
            <strong>{a.title}</strong>
            <div className="ann-meta">{new Date(a.createdAt).toLocaleString()}</div>
            <p>{a.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
