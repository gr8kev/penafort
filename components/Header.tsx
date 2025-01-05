import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { AuthContext } from "@/components/authContext"; // Import AuthContext
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useAuth() {
  const authContext = useContext(AuthContext);
  const token = authContext?.token;
  const logout = authContext?.logout;
  return { token, logout };
}

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { token, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Handle any side effects when token changes (if needed)
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    if (!token) {
      alert("You are not logged in.");
      return;
    }

    // Ensure localStorage is only accessed on the client-side
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }

    if (logout) {
      logout();
    }

    toast.success("Logout successful!");

    router.push("/login");
  };

  const handleLoginRedirect = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    event.preventDefault();
    router.push("/login");
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
              {token ? ( // Render Logout if token is present
                <Nav.Link
                  onClick={handleLogout}
                  className="btn-custom btn-primary"
                >
                  Logout
                </Nav.Link>
              ) : (
                // Render Login otherwise
                <Nav.Link
                  onClick={handleLoginRedirect}
                  className="btn-custom btn-primary"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  );
};
