import React, { useState } from 'react';
import { questions } from '../data/questions';

export default function AddPlayerForm({ onStart }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const categories = [...new Set(questions.map(q => q.category))];
  const difficulties = [...new Set(questions.map(q => q.difficulty))];

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ name, category, difficulty });
  };

  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <h2>Enter Player Details</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
        <option value="">Select Difficulty</option>
        {difficulties.map(diff => (
          <option key={diff} value={diff}>{diff}</option>
        ))}
      </select>
      <button type="submit" disabled={!name || !category || !difficulty}>
        Start
      </button>
    </form>
  );
}