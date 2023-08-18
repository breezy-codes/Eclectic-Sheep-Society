import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'rgba(60, 166, 146, 0.462)',
    color: 'white',
    textAlign: 'center',
    padding: '2rem 0',
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const paragraphStyle = {
    marginBottom: '1rem',
  };

  const copyrightStyle = {
    fontSize: '0.9rem',
    opacity: 0.7,
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p style={paragraphStyle}>
          Our project created for Govhack 2023.
        </p>
        <p style={paragraphStyle}>
          Project Team - Andrew Paull, Brad Splicin, Brianna Laird, Anastasiya Guenov and Rishant Sharma
        </p>
        <p style={copyrightStyle}>
          &copy; 2023 Eclectic Sheep Society
        </p>
      </div>
    </footer>
  );
}

export default Footer;
