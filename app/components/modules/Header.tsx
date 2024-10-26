// components/Header.js
"use client";
// components/Header.js
// components/Header.js

import { useState } from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(expanded ? false : "expanded");
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <div className="">
      {" "}
      {/* Add padding to the header */}
      <Navbar
        expanded={expanded}
        expand="lg"
        bg="light"
        variant="light"
        className=" Nav shadow p-3"
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
