import React from 'react';

export default function RightMenu({ onSelect }) {
  return (
    <aside className="right-menu">
      <button onClick={() => onSelect('counsel')}>Scan For Counsellist</button>
      <button onClick={() => onSelect('upload')}>Certified Copy</button>
      <button onClick={() => alert('Swagatham — Welcome!')}>Swagatam</button>
    </aside>
  );
}
