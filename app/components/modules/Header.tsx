// components/Header.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded); // Toggle between true and false
  };

  const closeMenu = () => {
    setExpanded(false); // Set to false when closing the menu
  };

  return (
    <div>
      {/* Add padding to the header */}
      <Navbar
        expanded={expanded}
        expand="lg"
        bg="light"
        variant="light"
        className="Nav shadow p-3"
      >
        <Link href="/" className="navbar-brand">
          My Website
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link href="#features" className="nav-link" onClick={closeMenu}>
              Features
            </Link>
            <Link href="#pricing" className="nav-link" onClick={closeMenu}>
              Pricing
            </Link>
            <Link href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
