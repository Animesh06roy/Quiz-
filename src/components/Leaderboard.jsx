import React, { useState, useMemo } from 'react';

export default function Leaderboard({ scores }) {
  const [sortBy, setSortBy] = useState('score');
  const sortedScores = useMemo(() => {
    return [...scores].sort((a, b) =>
      sortBy === 'score' ? b.score - a.score : a.time - b.time
    );
  }, [scores, sortBy]);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div>
        <button onClick={() => setSortBy('score')}>Sort by Score</button>
        <button onClick={() => setSortBy('time')}>Sort by Time</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
            <th>Time (s)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.score}</td>
              <td>{s.time}</td>
              <td>{s.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}