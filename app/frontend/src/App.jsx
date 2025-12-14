import React, { useState } from 'react';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';
import DisplayBoard from './components/DisplayBoard';
import CaseStatus from './components/CaseStatus';
import CertifiedCopy from './components/CertifiedCopy';
import CounselList from './components/CounselList';

export default function App() {
  const [view, setView] = useState('display'); // display, case, upload, counsel

  return (
    <div className="app">
      <header className="topbar">
        <div className="top-left">
          <div className="logo-circle">⚖️</div>
          <div>
            <h1>SUPREME COURT OF INDIA</h1>
            <p>भारत का सर्वोच्च न्यायालय</p>
          </div>
        </div>
      </header>

      <div className="main-area">
        <LeftMenu onSelect={setView} />
        
        <section className="center-area">
          <div className="hero">
            {/* background image + overlay */}
            <div className="hero-image" />
            <div className="hero-overlay">
              <DisplayBoard />
            </div>
          </div>

          <div className="bottom-cards">
            {view === 'display' && <DisplayBoard />}
            {view === 'case' && <CaseStatus />}
            {view === 'upload' && <CertifiedCopy />}
            {view === 'counsel' && <CounselList />}
          </div>
        </section>

        <RightMenu onSelect={setView} />
      </div>
    </div>
  );
}
