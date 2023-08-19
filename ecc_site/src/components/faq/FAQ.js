import React, { useState } from 'react';
import './FAQ.css';
import faqData from './faqData.json'; // Import the JSON data

const FAQ = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

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
