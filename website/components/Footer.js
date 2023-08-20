// Footer.js
"use client";
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <p className="paragraph">
          Untold Story, created as part of the 2023 GovHack competition by the
          Eclectic Sheep Society.
        </p>
        <p className="paragraph">
          Project Team - Andrew Paull, Brad Splicin, Brianna Laird, Anastasiya
          Guenov and Rishant Sharma
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
