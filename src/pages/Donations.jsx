import React from "react";
import { Container, Button } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const Donations = () => {
  return (
    <Container className="my-5 text-center">
      <h1>Donations</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Button variant="primary" size="lg">
        Donate Now
      </Button>
      <ScrollToTop />
    </Container>
  );
};

export default Donations;
