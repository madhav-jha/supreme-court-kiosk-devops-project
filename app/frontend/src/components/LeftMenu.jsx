import React from 'react';

export default function LeftMenu({ onSelect }) {
  return (
    <nav className="left-menu">
      <button onClick={() => onSelect('display')}>Display Board</button>
      <button onClick={() => onSelect('case')}>Case Status</button>
      <button onClick={() => alert('SCR clicked (mock)')}>SCR</button>
      <button onClick={() => window.open('https://rti.gov.in', '_blank')}>Online RTI Portal</button>
    </nav>
  );
}
