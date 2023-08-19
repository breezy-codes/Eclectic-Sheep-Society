import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import Home from "./components/HomePage/Home";
import Quiz from "./components/quiz/Quiz";
import Stats from "./components/stats/Stats";
import Risks from "./components/risks/Risks";
import FAQ from "./components/faq/FAQ";
import UserStories from "./components/UserStories/UserStories";
import DataCollection from "./components/DataCollection/DataCollection";
import CrisisBox from "./components/CrisisBox/CrisisBox";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/userStories" element={<UserStories />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/DataCollection" element={<DataCollection />} />
        <Route path="/Risks" element={<Risks />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <CrisisBox />
      <Footer />
    </Router>
  );
};

export default App;
