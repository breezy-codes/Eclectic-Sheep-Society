import React from 'react';
import './DataPrivacy.css';

// Create a Risks component
const DataPrivacy = () => {
  return (
    <div className="content">
      <div className="data-privacy-title">
      <h1>Anonymity, Privacy, and Security</h1>
      </div>
      <div className="data-privacy-section">
        <p>The user will be authenticated through Firebase using only an email and password,
          with email verification completed via a link sent to the user's address. This measure is implemented to 
          ensure data integrity. A data usage statement and user consent is implemented in a separate page, 
          advising users that the data will not identify them in any way and will only be used for the purposes of 
          research. It will be provided in a summarised format to policymakers and health practitioners. The filter 
          for the user story and the chatbot hasn't been put in place yet but will be a part of Gen2. The user 
          story submission will go live once the cyber security measures are implemented to sanitise user input against 
          malicious injections. These steps not only maintain a secure and trustworthy platform but also ensure 
          transparency with users regarding how their information is used, respecting privacy and fostering trust.</p>
      </div>
    </div>
  );
};

export default DataPrivacy;
