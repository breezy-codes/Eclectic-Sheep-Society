import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/quiz/Quiz';
import Stats from './components/stats/Stats';
import Risks from './components/risks/Risks';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Risks" element={<Risks />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
