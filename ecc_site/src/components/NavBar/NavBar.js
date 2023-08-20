import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import OurLogo from './OurLogo.png'; // Import your logo image
import './NavBar.css'; // Import your custom CSS file

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="/home">
        <img src={OurLogo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
          <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
          <Nav.Link href="/DataCollection" className="nav-link">Help Us</Nav.Link>
          <Nav.Link href="/UserStories" className="nav-link">User Stories</Nav.Link>
          <Nav.Link href="/Chat" className="nav-link">Chatbot</Nav.Link>
          <Nav.Link href="/Quiz" className="nav-link">Do you Know Aussies?</Nav.Link>
          <Nav.Link href="/Stats" className="nav-link">Stats</Nav.Link>
          <Nav.Link href="/FAQ" className="nav-link">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
