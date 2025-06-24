import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      <h2>About This App</h2>
      <p>
        This quiz app was built with React, CSS, and localStorage. It features a
        timer, score tracking, and a persistent leaderboard.
      </p>
      <p>
        <strong>What I learned:</strong> State management, routing, localStorage,
        responsive design, and CSS animations!
      </p>
      <img
        src="https://i.imgflip.com/30b1gx.jpg"
        alt="Coding Meme"
        style={{ maxWidth: "300px" }}
      />
      <p>Happy quizzing!</p>
    </div>
  );
}