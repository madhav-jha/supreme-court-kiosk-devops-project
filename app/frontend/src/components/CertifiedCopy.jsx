import React, { useState } from 'react';
import { uploadCertifiedCopy } from '../api';

export default function CertifiedCopy() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setMessage('');
    if (!file) return setMessage('Select a file');
    try {
      const res = await uploadCertifiedCopy(file);
      setMessage(`Uploaded: ${res.filename} (URL: ${res.url})`);
    } catch (e) {
      setMessage('Upload failed');
    }
  }

  return (
    <div className="card">
      <h3>Certified Copy Request</h3>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
      {message && <div className="info">{message}</div>}
    </div>
  );
}
