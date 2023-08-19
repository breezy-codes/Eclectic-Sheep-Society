import React from 'react';
import faqData from './faqData.json'; // Assuming your JSON file is named faqData.json

import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
      </div>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item expanded">
          <h2 className="faq-question">{item.question}</h2>
          <p className="answer">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
