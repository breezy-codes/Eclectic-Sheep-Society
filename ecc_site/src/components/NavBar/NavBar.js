import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'; // Make sure to import your custom CSS file
import OurLogo from './OurLogo.png'; // Check the case sensitivity of the file name

const NavBar = () => {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/home" className="navbar-brand">
            <img src={OurLogo} alt="Our Logo" className="logo" />
          </Navbar.Brand>
          <Nav className="navbar-nav">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/DataCollection">Help Us</Nav.Link>
            <Nav.Link href="/UserStories">User Stories</Nav.Link>
            <Nav.Link href="/Chat">Chatbot</Nav.Link>
            <Nav.Link href="/Quiz">Do you Know Aussies?</Nav.Link>
            <Nav.Link href="/Stats">Stats</Nav.Link>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
