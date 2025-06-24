import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Welcome to the Ultimate Quiz!</h1>
        <p>Test your knowledge, challenge friends, and climb the leaderboard.</p>
        <button className="cta" onClick={() => navigate('/quiz')}>Start Quiz</button>
      </div>
      <div className="hero-right">
        <svg className="floating-svg" width="180" height="180">
          <circle cx="90" cy="90" r="80" fill="#007bff" opacity="0.2" />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="32" fill="#007bff">?</text>
        </svg>
      </div>
    </section>
  );
}