import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
const logo = "https://picsum.photos/40/40?random=1";

const NavigationBar = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      fixed="top"
      className="w-100"
      style={{
        zIndex: 1030,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Container fluid className="px-4">
        <div className="d-flex align-items-center">
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Navbar.Brand
              as={Link}
              to="/"
              className="d-flex align-items-center text-white fw-bold"
            >
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top rounded-circle me-2"
                alt="HOF Logo"
                style={{ border: "2px solid white" }}
              />
              <span style={{ fontSize: "1.2rem", letterSpacing: "1px" }}>
                HOUSEHOLD OF FAITH
              </span>
            </Navbar.Brand>
          </motion.div>
        </div>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto d-lg-none"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="text-white fw-semibold mx-2">
              Home
            </Nav.Link>
            <NavDropdown title="About" id="about-dropdown" className="mx-2">
              <NavDropdown.Item as={Link} to="/about/story">
                Our Story
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/history">
                Our History
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Media" id="media-dropdown" className="mx-2">
              <NavDropdown.Item as={Link} to="/media/gallery">
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/media/sermon">
                Sermons
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/donations"
              className="text-white fw-semibold mx-2"
            >
              Donations
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="text-white fw-semibold mx-2"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center ms-auto">
          <Button
            as={Link}
            to="/live"
            variant="danger"
            className="rounded-pill px-4 py-2 fw-bold d-flex align-items-center"
            style={{
              background: "linear-gradient(45deg, #ff6b6b, #ee5a24)",
              border: "none",
              boxShadow: "0 4px 15px rgba(255, 107, 107, 0.3)",
              animation: "pulse 2s infinite",
            }}
          >
            <FaPlay className="me-2" />
            LIVE
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
