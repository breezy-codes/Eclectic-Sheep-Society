

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/UserStories" element={<UserStories />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/DataCollection" element={<DataCollection />} />
        <Route path="/Risks" element={<Risks />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/FAQQ" element={<FAQ />} />
      </Routes>
      <CrisisBox />
      <Footer />
    </Router>
  );
};

export default App;
