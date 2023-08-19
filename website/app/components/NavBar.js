"use client";
import React from 'react';
import OurLogo from '../../public/OurLogo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import '../../styles/NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/home" className="navbar-brand">
          <img src={OurLogo} alt="Our Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/home" activeClassName="active">Home</Link>
            <Link href="/DataCollection" activeClassName="active">Help Us</Link>
            <Link href="/UserStories" activeClassName="active">User Stories</Link>
            <Link href="/Chat" activeClassName="active">Chatbot</Link>
            <Link href="/Quiz" activeClassName="active">Do you Know Aussies?</Link>
            <Link href="/Stats" activeClassName="active">Stats</Link>
            <Link href="/FAQ" activeClassName="active">FAQ</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
