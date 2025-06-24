import React from 'react';

export default function ScoreSummary({ latest, onPlayAgain }) {
  const getMessage = (score, total) => {
    const pct = (score / total) * 100;
    if (pct === 100) return "Quiz Champion!";
    if (pct >= 70) return "Great job!";
    if (pct >= 40) return "Keep practicing!";
    return "More caffeine, maybe?";
  };

  return (
    <div className="score-summary">
      <h2>Results for {latest.name}</h2>
      <p>Score: {latest.score} / {latest.total}</p>
      <p>Correct Answers: {latest.correct}</p>
      <p>Total Time: {latest.time}s</p>
      <h3>{getMessage(latest.score, latest.total)}</h3>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
}