import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

export default function QuizEngine() {
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);
  const [times, setTimes] = useState([]);

  // Load player data from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('player'));
    if (!stored) {
      navigate('/quiz');
    } else {
      setPlayer(stored);
    }
  }, [navigate]);

  // Filter questions by category and difficulty
  const quizQuestions = player
    ? questions.filter(q => q.category === player.category && q.difficulty === player.difficulty)
    : [];

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Auto-move when timer hits 0
  useEffect(() => {
    if (timer === 0) {
      handleNext();
    }
  }, [timer]);

  const handleOption = (idx) => {
    if (selected[current] !== undefined) return; // already answered
    const isCorrect = idx === quizQuestions[current].answer;
    if (isCorrect) {
      setScore(s => s + 1);
    }
    setSelected(sel => {
      const newSel = [...sel];
      newSel[current] = idx;
      return newSel;
    });
    setTimes(ts => [...ts, 15 - timer]);
  };

  const handleNext = () => {
    if (current < quizQuestions.length - 1) {
      setCurrent(c => c + 1);
      setTimer(15);
    } else {
      // Quiz finished, record score and navigate to scores page
      const totalTime = times.reduce((a, b) => a + b, 0);
      const attempt = {
        name: player.name,
        score: score,
        correct: score,
        total: quizQuestions.length,
        time: totalTime,
        date: new Date().toLocaleString()
      };
      const storedScores = JSON.parse(localStorage.getItem('scores')) || [];
      localStorage.setItem('scores', JSON.stringify([...storedScores, attempt]));
      localStorage.removeItem('player');
      navigate('/scores');
    }
  };

  if (!player) return null;
  if (quizQuestions.length === 0) {
    return <div>No questions found for this category/difficulty.</div>;
  }

  const q = quizQuestions[current];
  return (
    <div className="quiz-engine">
      <div className="quiz-header">
        <div>Question {current + 1} / {quizQuestions.length}</div>
        <div className={`timer ${timer < 5 ? 'danger' : ''}`}>{timer}s</div>
      </div>
      <h3>{q.question}</h3>
      <div className="options">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            className={`option-btn ${
              selected[current] === idx
                ? (idx === q.answer ? 'correct' : 'incorrect')
                : ''
            }`}
            disabled={selected[current] !== undefined || timer === 0}
            onClick={() => handleOption(idx)}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="progress-bar">
        <div style={{ width: `${((current + 1) / quizQuestions.length) * 100}%` }} />
      </div>
      <button onClick={handleNext} disabled={selected[current] === undefined && timer > 0}>
        {current === quizQuestions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}