import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [pollAnswer, setPollAnswer] = useState(null);
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);

  const handlePollAnswer = (answer) => {
    setPollAnswer(answer);
    if (answer === 'Yes') {
      setYesVotes(yesVotes + 1);
    } else if (answer === 'No') {
      setNoVotes(noVotes + 1);
    }
  };

  const totalVotes = yesVotes + noVotes;
  const yesPercentage = (yesVotes / totalVotes) * 100;
  const noPercentage = (noVotes / totalVotes) * 100;

  // For the alcohol quiz on the page
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const handleQuizAnswer = (selectedAnswer) => {
    setQuizAnswer(selectedAnswer);
    setShowQuizResult(true);
  };

  const correctAnswer = '9 to 10';

  return (
    <div className="home-content">
      <div className="question-box">
        <h2>Do you think Australia has a drinking problem?</h2>
        {!pollAnswer && (
          <div className="answer-buttons">
            <button className="answer-button" onClick={() => handlePollAnswer('Yes')}>Yes</button>
            <button className="answer-button" onClick={() => handlePollAnswer('No')}>No</button>
          </div>
        )}
        {pollAnswer && (
          <div className="poll-result">
            <p>Your Answer: {pollAnswer}</p>
            <div className="poll-slider">
              <div className="slider-fill" style={{ width: `${yesPercentage}%` }} />
            </div>
            <div className="poll-results">
              <div className="poll-result-box">
                <p>Yes: {yesPercentage.toFixed(2)}%</p>
              </div>
              <div className="poll-result-box">
                <p>No: {noPercentage.toFixed(2)}%</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="solution-box">
        <h2>So, what's the solution?</h2>
        <p>
          Our proposed interactive platform will serve as an intervention tool, aimed at
          individuals who may be unaware of their need for assistance. By visualising government
          data regarding alcohol consumption when prompted by the user, the platform will track the
          user's drinking habits. This could function as a catalyst for the user to seek professional
          help if needed.
        </p>
      </div>

      <div className="info-section">
        <div className="datasets">
          <h2>DataSets</h2>
          <p>Using data from Data.gov.au, we will draw from datasets that link alcohol and drug
            use to various triggers, as well as statistics related to hospital admissions due to
            alcohol overuse, and deaths attributable to alcoholism. Additional information will be
            sourced from the ABS, including data on Driving Under the Influence convictions, automotive
            fatalities related to drunk driving, and incidents of public disorder or violence associated
            with alcohol consumption</p>
        </div>
        <div className="messages-section">
          <div className="message" style={{ animationDelay: '0.5s' }}>
            <div className="message-box">
              <p>ABS.gov data set</p>
            </div>
          </div>
          <div className="message" style={{ animationDelay: '1s' }}>
            <div className="message-box">
              <p>Data.gov data set</p>
            </div>
          </div>
          <div className="message" style={{ animationDelay: '1.5s' }}>
            <div className="message-box">
              <p>AHW.gov data set</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Responsible-Alcohol-Consumption">
        <div className="Alcohol-Quiz">
          <h1>How much alcohol consumption is safe?</h1>
          <div className="quiz-options">
            <div className={`quiz-option ${quizAnswer === 'none' ? 'selected' : ''}`} onClick={() => handleQuizAnswer('none')}>
              None
            </div>
            <div className={`quiz-option ${quizAnswer === '1to3' ? 'selected' : ''}`} onClick={() => handleQuizAnswer('1to3')}>
              1 to 3
            </div>
            <div className={`quiz-option ${quizAnswer === '4to5' ? 'selected' : ''}`} onClick={() => handleQuizAnswer('4to5')}>
              4 to 5
            </div>
            <div className={`quiz-option ${quizAnswer === '6to8' ? 'selected' : ''}`} onClick={() => handleQuizAnswer('6to8')}>
              6 to 8
            </div>
            <div className={`quiz-option ${quizAnswer === '9to10' ? 'selected' : ''}`} onClick={() => handleQuizAnswer('9to10')}>
              9 to 10
            </div>
            <div className={`quiz-option ${quizAnswer === '11to15' ? 'selected' : ''}`} onClick={() => handleQuizAnswer('11to15')}>
              11 to 15
            </div>
            <div className={`quiz-option ${quizAnswer === '16ormore' ? 'selected' : ''}`} onClick={() => handleQuizAnswer('16ormore')}>
              16 or more
            </div>
          </div>
          {showQuizResult && (
            <div className="quiz-result">
              Your answer: {quizAnswer}
              <div>
                {quizAnswer === correctAnswer ? (
                  <p>Correct answer: {correctAnswer}</p>
                ) : (
                  <p>The correct answer was: {correctAnswer}</p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="Correct-Consumption">
          <h1>Correct Alcohol Consumption</h1>
          <p>Placeholder text for correct alcohol consumption.</p>
        </div>
      </div>

      <div className="info-div">
        <h1>Information Section 2</h1>
        <p>Placeholder text for information section 2.</p>
      </div>
    </div>
  );
};

export default Home;
