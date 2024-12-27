import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    // Ensure the navbar stays white until the page transitions
    setExpanded(false);
    setScrolled(true);
  };

  return (
    <div>
      <Navbar
        expanded={expanded}
        expand="lg"
        className={`fixed-top py-2 ${
          scrolled || expanded ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Container>
          {/* Logo Image */}
          <Navbar.Brand href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="logo"
              fluid
              width={120}
              height={99}
            />
          </Navbar.Brand>

          {/* Navbar Toggle */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="toggle-right"
            onClick={() => setExpanded(expanded ? false : true)}
          />

          {/* Navbar Collapse */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`justify-content-end ${expanded ? "bg-white" : ""}`}
          >
            <Nav className="ms-auto links">
              <Nav.Link href="/" onClick={handleNavClick}>
                Home
              </Nav.Link>
              <Nav.Link href="/about" onClick={handleNavClick}>
                About
              </Nav.Link>
              <Nav.Link href="/brands" onClick={handleNavClick}>
                Brands
              </Nav.Link>
              <Nav.Link href="/contact" onClick={handleNavClick}>
                Contact
              </Nav.Link>
              <Nav.Link
                href="/login"
                className="btn-custom btn-primary"
                onClick={handleNavClick}
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
