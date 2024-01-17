import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/details"></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
