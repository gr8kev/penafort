// components/Header.js
"use client";

import Image from "next/image";
import Logo from "./../../../public/images/logo2.png";
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
        className="Nav shadow px-3 py-0"
      >
        <Link href="/" className="navbar-brand">
          <Image src={Logo} alt="logo" width={70} height={20} />
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto links">
            <Link href="/" className="nav-link " onClick={closeMenu}>
              Home
            </Link>
            <Link href="/brands" className="nav-link" onClick={closeMenu}>
              Brands
            </Link>
            <Link href="/prices" className="nav-link" onClick={closeMenu}>
              Pricing
            </Link>
            <Link href="/Contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
            <Link href="/Login" className="nav-link btn" onClick={closeMenu}>
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
