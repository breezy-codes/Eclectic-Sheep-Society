import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import OurLogo from './OurLogo.png'; // Import your logo image
import './NavBar.css'; // Import your custom CSS file

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/home"> {/* Use Link instead of href */}
        <img src={OurLogo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link> {/* Use Link instead of href */}
          <Nav.Link as={Link} to="/DataCollection" className="nav-link">Help Us</Nav.Link>
          <Nav.Link as={Link} to="/UserStories" className="nav-link">User Stories</Nav.Link>
          <Nav.Link as={Link} to="/Chat" className="nav-link">Chatbot</Nav.Link>
          <Nav.Link as={Link} to="/Quiz" className="nav-link">Do you Know Aussies?</Nav.Link>
          <Nav.Link as={Link} to="/Stats" className="nav-link">Stats</Nav.Link>
          <Nav.Link as={Link} to="/FAQ" className="nav-link">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
