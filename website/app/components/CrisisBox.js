"use client";
import React from 'react';
import '../../styles/CrisisBox.css';

const CrisisBox = () => {
  return (
    <div className="crisis-box">
      <h2 className="title">Help is Available</h2>
      <p className="text">
        If you're in crisis or need support, <br></br> please contact Lifeline.
      </p>
      <p className="phone">Phone: <strong>13 11 14</strong></p>
      <div className="button-container">
        <a href="https://www.lifeline.org.au/" target="_blank" rel="noopener noreferrer" className="lifeline-link">
          <button className="visit-button">Visit Lifeline</button>
        </a>
      </div>
    </div>
  );
};

export default CrisisBox;
