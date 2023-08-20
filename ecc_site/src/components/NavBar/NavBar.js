import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import OurLogo from './OurLogo.png'; // Import your logo image
import './NavBar.css'; // Import your custom CSS file

const NavBar = () => {
  const baseUrl = process.env.Eclectic.Sheep.Society;

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to={`${baseUrl}/Home`}>
        <img src={OurLogo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to={`${baseUrl}/Home`} className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to={`${baseUrl}/DataCollection`} className="nav-link">Help Us</Nav.Link>
          <Nav.Link as={Link} to={`${baseUrl}/userStories`} className="nav-link">User Stories</Nav.Link>
          <Nav.Link as={Link} to={`${baseUrl}/Quiz`} className="nav-link">Do you Know Aussies?</Nav.Link>
          <Nav.Link as={Link} to={`${baseUrl}/Stats`} className="nav-link">Stats</Nav.Link>
          <Nav.Link as={Link} to={`${baseUrl}/faq`} className="nav-link">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
