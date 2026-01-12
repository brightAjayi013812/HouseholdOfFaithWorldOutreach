import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 w-100" style={{ zIndex: 1030 }}>
      <Container fluid className="px-4">
        <Row>
          <Col md={6}>
            <h5>Household of Faith Church</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col md={6}>
            <h5>Contact Information</h5>
            <p>Address: 123 Church Street, City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@hofchurch.com</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2023 Household of Faith Church. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
