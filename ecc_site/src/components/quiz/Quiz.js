import React, { useState } from 'react';
import quizData from './quizData.json'; // Import quiz data
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './quiz.css';

const colors = ['#d05151', '#faac32', '#f7e31d', '#48cd6c', '#4478d5'];

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
                  <PieChart width={300} height={300}>
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
          <p>This is the information collected by Doctors/Hospitals
            It isn't always the correct information as people feel the shame of telling the
            truth when put on the spot. This is why we need real stories, real information of 
            what is currently happening in Australia.
          </p>
          <p> If you have a story to tell, please share it with us. This information is collected
            anonymously and will be used to help others. As well as show the real truth about the
            problem with alcohol in Australia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
