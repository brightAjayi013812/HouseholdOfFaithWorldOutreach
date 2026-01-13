import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
const logo = "https://picsum.photos/40/40?random=1";

const NavigationBar = () => {
  return (
    <Navbar
      bg="white"
      variant="light"
      expand="lg"
      fixed="top"
      className="w-100 shadow-sm"
      style={{
        zIndex: 1030,
        borderBottom: "3px solid #6a1b9a",
      }}
    >
      <Container fluid className="px-4">
        {/* Logo & Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          style={{ color: "#6a1b9a" }}
        >
          <img
            src={logo}
            width="45"
            height="45"
            className="d-inline-block align-top rounded-circle me-2"
            alt="HOF Logo"
            style={{
              border: "2px solid #6a1b9a",
              objectFit: "cover",
            }}
          />
          <span
            className="fw-bold d-none d-lg-inline"
            style={{
              fontSize: "1.1rem",
              letterSpacing: "0.5px",
              color: "#6a1b9a",
            }}
          >
            HOUSEHOLD OF FAITH
          </span>
          <span
            className="fw-bold d-lg-none"
            style={{
              fontSize: "1rem",
              letterSpacing: "0.5px",
              color: "#6a1b9a",
            }}
          >
            HOF
          </span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0"
          style={{ color: "#6a1b9a" }}
        />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="fw-semibold mx-2 px-3"
              style={{
                color: "#333",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6a1b9a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              Home
            </Nav.Link>

            <NavDropdown
              title="About"
              id="about-dropdown"
              className="mx-2 fw-semibold"
              style={{ color: "#333" }}
            >
              <NavDropdown.Item
                as={Link}
                to="/about/story"
                className="py-2"
                style={{
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(106,27,154,0.1)";
                  e.currentTarget.style.color = "#6a1b9a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#333";
                }}
              >
                Our Story
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/about/history"
                className="py-2"
                style={{
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(106,27,154,0.1)";
                  e.currentTarget.style.color = "#6a1b9a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#333";
                }}
              >
                Our History
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Media"
              id="media-dropdown"
              className="mx-2 fw-semibold"
            >
              <NavDropdown.Item
                as={Link}
                to="/media/gallery"
                className="py-2"
                style={{
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(106,27,154,0.1)";
                  e.currentTarget.style.color = "#6a1b9a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#333";
                }}
              >
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/media/sermon"
                className="py-2"
                style={{
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(106,27,154,0.1)";
                  e.currentTarget.style.color = "#6a1b9a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#333";
                }}
              >
                Sermons
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/donations"
              className="fw-semibold mx-2 px-3"
              style={{
                color: "#333",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6a1b9a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              Give
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              className="fw-semibold mx-2 px-3"
              style={{
                color: "#333",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6a1b9a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              Contact
            </Nav.Link>
          </Nav>

          {/* LIVE Button */}
          <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
            <Button
              as={Link}
              to="/live"
              className="rounded-pill px-4 py-2 fw-bold d-flex align-items-center border-0"
              style={{
                background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                color: "#fff",
                boxShadow: "0 4px 15px rgba(194,24,91,0.3)",
                transition: "all 0.3s ease",
                fontSize: "0.9rem",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(194,24,91,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(194,24,91,0.3)";
              }}
            >
              <span
                className="me-2"
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  background: "#fff",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                }}
              ></span>
              WATCH LIVE
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>

      {/* CSS Animation for Pulse Effect */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
      `}</style>
    </Navbar>
  );
};

export default NavigationBar;
