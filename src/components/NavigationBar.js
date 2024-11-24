// src/Navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For React Router navigation

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        {/* Brand with logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-white">
          VoiceTranscribe
        </Navbar.Brand>

        {/* Toggling button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Home Link */}
            <Nav.Link as={Link} to="/" className="text-white hover-underline-animation">Home</Nav.Link>
            
            {/* Community Link */}
            <Nav.Link 
              href="https://community.deepgram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover-underline-animation">
              Community
            </Nav.Link>
            
            {/* Contact Link */}
            <Nav.Link 
              href="https://deepgram.com/contact-us" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover-underline-animation">
              Contact
            </Nav.Link>

            {/* Deepgram Sign Up Link */}
            <Nav.Link 
              href="https://console.deepgram.com/signup?_gl=1*1vp2657*_gcl_au*MTUzMDI4NzkwNy4xNzMyMjA1MDIx*_ga*OTg3MzQwMjUuMTczMjIwNTAyMg..*_ga_TYPC1TBCKT*MTczMjM4MjgyMC45LjAuMTczMjM4MjgyMC42MC4wLjA." 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover-underline-animation">
              Sign Up for Deepgram
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
