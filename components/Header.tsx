"use client";

import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { AuthContext } from "@/components/authContext";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const logout = authContext?.logout;
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
    setScrolled(true);
  };

  const handleLogout = () => {
    if (logout) {
      logout(); // Clear user session
    }
    router.push("/login"); // Redirect to login page
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

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="toggle-right"
            onClick={() => setExpanded(expanded ? false : true)}
          />

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
              {user ? ( // Check if the user is logged in
                <Nav.Link
                  onClick={handleLogout}
                  className="btn-custom btn-primary"
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  href="/login"
                  className="btn-custom btn-primary"
                  onClick={handleNavClick}
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
