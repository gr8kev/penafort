import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image"; // Import Image from react-bootstrap

export const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top py-1 ">
        {" "}
        {/* Reduced padding */}
        <Container>
          {/* Logo Image */}
          <Navbar.Brand href="#home">
            <Image src="/images/logo2.png" alt="Logo" width="100" height="30" />{" "}
            {/* Adjusted width and height */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Align navigation items to the right */}
            <Nav className="ms-auto links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/brands">Brands</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/action">Action</NavDropdown.Item>
                <NavDropdown.Item href="/another">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="/something">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/separated">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="login" className="btn">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
