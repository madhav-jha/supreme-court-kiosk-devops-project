import React, { useState } from 'react';
import { lookupCase } from '../api';

export default function CaseStatus() {
  const [caseNumber, setCaseNumber] = useState('');
  const [result, setResult] = useState(null);
  const [err, setErr] = useState('');

  async function onSearch(e) {
    e.preventDefault();
    setErr('');
    setResult(null);
    if (!caseNumber) return setErr('Enter case number');
    try {
      const r = await lookupCase(caseNumber);
      setResult(r);
    } catch (e) {
      setErr('Case not found');
    }
  }

  return (
    <div className="card">
      <h3>Case Status</h3>
      <form onSubmit={onSearch}>
        <input value={caseNumber} onChange={e => setCaseNumber(e.target.value)} placeholder="Enter case number" />
        <button type="submit">Lookup</button>
      </form>
      {err && <div className="error">{err}</div>}
      {result && (
        <div className="case-result">
          <h4>{result.caseNumber} — {result.status}</h4>
          <p>{result.partyA} vs {result.partyB}</p>
          <p>Next Hearing: {result.nextHearing ? new Date(result.nextHearing).toLocaleString() : 'N/A'}</p>
          <p>Bench: {result.bench}</p>
        </div>
      )}
    </div>
  );
}
