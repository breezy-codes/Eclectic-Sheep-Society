import React, { useState } from 'react';
import quizData from './quizData.json'; // Import quiz data
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './quiz.css';

const colors = ['#d05151', '#faac32', '#48cd6c', '#4478d5', '#f36be9', '#9334cd'];

const Quiz = () => {
  const [selectedOptionIndexes, setSelectedOptionIndexes] = useState(
    new Array(quizData.length).fill(null)
  );

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptionIndexes = [...selectedOptionIndexes];
    newSelectedOptionIndexes[questionIndex] = optionIndex;
    setSelectedOptionIndexes(newSelectedOptionIndexes);
  };

  return (
    <div className="content">
      <h1>Test your Alcohol Knowledge in Australia</h1>
      <p>This information is based on information provided on&nbsp;
        <a href="https://www.abs.gov.au/statistics/health/health-conditions-and-risks/alcohol-consumption/2020-21#alcohol-consumption">abs.gov.au</a>
        </p>
      <div className="quiz-container">
        {quizData.map((quizItem, questionIndex) => (
          <div
            key={questionIndex}
            className={`quiz-section ${
              selectedOptionIndexes[questionIndex] !== null ? 'answered' : ''
            }`}
          >
            <div className="quiz-question">
              <h2>{quizItem.question}</h2>
              <div className="options">
                {quizItem.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    className={`option ${
                      selectedOptionIndexes[questionIndex] === optionIndex
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() =>
                      handleOptionSelect(questionIndex, optionIndex)
                    }
                  >
                    {option}
                    {selectedOptionIndexes[questionIndex] === optionIndex && (
                      <span
                        className="color-square"
                        style={{ backgroundColor: colors[optionIndex] }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            {selectedOptionIndexes[questionIndex] !== null && (
              <div className="graph-box">
                <div className="quiz-pie-chart">
                  <PieChart width={350} height={350}>
                    <Pie
                      data={quizItem.stats}
                      dataKey="percentage"
                      nameKey="label"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {quizItem.stats.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                  <div className="pie-chart-guide">
                    {quizItem.stats.map((entry, index) => (
                      <div className="pie-chart-guide-item" key={index}>
                        <div
                          className="guide-color"
                          style={{
                            backgroundColor: colors[index % colors.length],
                          }}
                        />
                        <span>{entry.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="info-box">
          <h1>Do you think this represents Australia?</h1>
          <p>The current National Drug Strategy Survey 2022 will only target 21,500 people, 
            while the population of Australia is 25,422,788 people. How can you truly understand 
            Australia by asking 0.084% of the population? This is why we have created this site and our quiz. 
            We want to show the real truth about the problem by asking the people of Australia and hopefully
            asking a lot more than 0.084% of Aussies.
          </p>
            <p>Please consider helping us by filling out the quiz below and sharing your story. 
            You can also help us by sharing this website with your friends and family. Or share it on social media.
            The more information we can collect, the more we can highlight what is REALLY happening in Australia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
