import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="row-menu">
          <ul>
            <li><a href="/DataPrivacy">Data Privacy</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/Stats">Stats</a></li>
          </ul>
        </div>
        <p className="paragraph">
          Untold Story, created as part of the 2023 GovHack competition by the Eclectic Sheep Society.
        </p>
        <p className="paragraph">
          Project Team - Andrew Paull, Brad Splicin, Brianna Laird, Anastasiya Guenov and Rishant Sharma
        </p>
        <p className="paragraph">
          <b>Team Leader</b> - Anastasiya Guenov<br></br>
          <b>Website & Frontend Developer</b> - Brianna Laird<br></br>
          <b>Data Analyst & AI Model</b> - Rishant Sharma<br></br>
          <b>Backend Developer</b> - Brad Splicin<br></br>
          <b>Presentation</b> - Andrew Paull<br></br>
        </p>
        <p className="copyright">
          &copy; 2023 Eclectic Sheep Society Be herd. Be eclectic.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
