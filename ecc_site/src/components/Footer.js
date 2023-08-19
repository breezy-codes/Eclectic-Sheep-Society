import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgba(14, 165, 197)',
    color: 'white',
    textAlign: 'center',
    padding: '2rem 0',
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const paragraphStyle = {
    marginBottom: '1.5rem', // Update the margin for line spacing
  };

  const copyrightStyle = {
    fontSize: '0.9rem',
    opacity: 0.7,
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p style={paragraphStyle}>
          Untold Story, created as part of the 2023 GovHack competition by the Eclectic Sheep Society.
        </p>
        <p style={paragraphStyle}>
          Project Team - Andrew Paull, Brad Splicin, Brianna Laird, Anastasiya Guenov and Rishant Sharma
        </p>
        <p style={paragraphStyle}>
          <b>Team Leader</b> - Anastasiya Guenov<br></br>
          <b>Website Developer</b> - Brianna Laird<br></br>
          <b>Data Analyst/AI Model</b> - Rishant Sharma<br></br>
          <b>Backend Developer</b> - Brad Splicin<br></br>
          <b>Presentation</b> - Andrew Paull<br></br>
        </p>
        <p style={copyrightStyle}>
          &copy; 2023 Eclectic Sheep Society
        </p>
      </div>
    </footer>
  );
};

export default Footer;
