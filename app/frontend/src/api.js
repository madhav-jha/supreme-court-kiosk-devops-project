export async function getAnnouncements() {
  const res = await fetch('/api/announcements');
  if (!res.ok) throw new Error('Failed to load announcements');
  return res.json();
}

export async function lookupCase(caseNumber) {
  const res = await fetch(`/api/cases/${encodeURIComponent(caseNumber)}`);
  if (!res.ok) throw new Error('Case not found');
  return res.json();
}

export async function uploadCertifiedCopy(file) {
  const fd = new FormData();
  fd.append('document', file);
  const res = await fetch('/api/uploads/certified-copy', { method: 'POST', body: fd });
  return res.json();
}

export async function getCounselList() {
  const res = await fetch('/api/counsel/list');
  return res.json();
}
