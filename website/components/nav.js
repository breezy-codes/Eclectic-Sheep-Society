"use client";
import React from "react";
import OurLogo from "../public/OurLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import "../styles/NavBar.css";

export default Page = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/home" className="navbar-brand">
          <img src={OurLogo} alt="Our Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/homepage">Home</Link>
            <Link href="/DataCollection">Help Us</Link>
            <Link href="/UserStories">User Stories</Link>
            <Link href="/Chat">Chatbot</Link>
            <Link href="/Quiz">Do you Know Aussies?</Link>
            <Link href="/Stats">Stats</Link>
            <Link href="/FAQ">FAQ</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
