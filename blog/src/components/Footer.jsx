import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="mt-5">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about-me">About Me</Nav.Link>
          <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
          <Nav.Link href="/cookies-policy" disabled>Cookies Policy</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
    