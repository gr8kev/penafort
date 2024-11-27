import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export const Header = () => {
  return (
    <div className="mb-10">
      <Navbar expand="lg" className="fixed-top py-2 bg-white shadow-sm ">
        <Container>
          {/* Logo Image */}
          <Navbar.Brand href="#home" className="itk">
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="logo"
              fluid
              width={120}
              height={99}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/brands">Brands</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link className="btn " href="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
