import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuizStart from './pages/QuizStart';
import QuizEngine from './components/QuizEngine';
import Scores from './pages/Scores';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizStart />} />
          <Route path="/quiz/start" element={<QuizEngine />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;