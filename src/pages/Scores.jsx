import React from 'react';
import ScoreSummary from '../Components/ScoreSummary';
import Leaderboard from '../Components/Leaderboard';
import { useNavigate } from 'react-router-dom';

export default function Scores() {
  const navigate = useNavigate();
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  const latest = scores[scores.length - 1];

  const playAgain = () => {
    navigate('/quiz');
  };

  return (
    <div>
      {scores.length > 0 ? (
        <ScoreSummary latest={latest} onPlayAgain={playAgain} />
      ) : (
        <div>No attempts yet.</div>
      )}
      <Leaderboard scores={scores} />
    </div>
  );
}