import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddPlayerForm from '../Components/AddPlayerForm';

export default function QuizStart() {
  const navigate = useNavigate();

  const handleStart = (player) => {
    // Save player details and go to quiz
    localStorage.setItem('player', JSON.stringify(player));
    navigate('/quiz/start');
  };

  return (
    <div>
      <AddPlayerForm onStart={handleStart} />
    </div>
  );
}