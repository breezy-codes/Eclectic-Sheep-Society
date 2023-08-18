import React, { useState } from 'react';
import './FAQ.css';

// Create a FAQ component
const FAQ = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  // Questions and answers to be stored here
  const faqData = [
    {
      question: 'What is TalkTipsy?',
      answer: 'TalkTipsy is a platform designed to...'
    },
    {
      question: 'Why did we do this?',
      answer: 'To point out problems with alcohol consumption in Australia.'
    },
    // Add more question/answer pairs
  ];

  // This returns the questions and answers
  // If a question is clicked, it will show the answer
  // They remain open until the user closes them
  return (
    <div className="content">
      <h1>Our Frequently Asked Questions</h1>
      <div className="FAQ-section">
        {faqData.map((faq, index) => (
          <div key={index}>
            <div
              className={`question-wrapper ${activeIndexes.includes(index) ? 'open' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              <div className="question">{faq.question}</div>
              <div className={`arrow ${activeIndexes.includes(index) ? 'open' : ''}`}>▼</div>
            </div>
            <div className={`answer ${activeIndexes.includes(index) ? 'active' : ''}`}>
              <div className={`answer-content ${activeIndexes.includes(index) ? 'active' : ''}`}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
