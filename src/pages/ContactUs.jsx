import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const ContactUs = () => {
  return (
    <Container className="my-5">
      <h1>Contact Us</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Address</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@hofchurch.com</p>
        </Col>
      </Row>
      <ScrollToTop />
    </Container>
  );
};

export default ContactUs;
