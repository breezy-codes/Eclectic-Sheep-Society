"use client";
import React, { useState } from 'react';
import '../../styles/DataCollection.css';
import questionsData from './data.json';

const DataCollection = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(questionsData.length).fill(null));

  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  return (
    <div className="content">
      <h1>Help us Shape the Future</h1>
      <div className="Data-Collection">
        {questionsData.map((questionObj, questionIndex) => (
          <div key={questionIndex} className="question">
            <p>{questionObj.question}</p>
            <ul className="options">
              {questionObj.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={selectedOptions[questionIndex] === optionIndex ? 'selected' : ''}
                  onClick={() => handleOptionClick(questionIndex, optionIndex)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCollection;
