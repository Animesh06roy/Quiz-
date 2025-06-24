import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">QuizApp</div>
      <div className={`navbar-links ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/quiz" onClick={() => setOpen(false)}>Start Quiz</Link>
        <Link to="/scores" onClick={() => setOpen(false)}>Scores</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
      </div>
      <div className="navbar-hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}