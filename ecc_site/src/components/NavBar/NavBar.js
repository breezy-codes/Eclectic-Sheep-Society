import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'; // Make sure to import your custom CSS file

const NavBar = () => {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">TalkTipsy</Navbar.Brand>
          <Nav className="navbar-nav">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Chat">Chat</Nav.Link>
            <Nav.Link href="/Quiz">Quiz</Nav.Link>
            <Nav.Link href="/Risks">Risks</Nav.Link>
            <Nav.Link href="/Stats">Stats</Nav.Link>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
