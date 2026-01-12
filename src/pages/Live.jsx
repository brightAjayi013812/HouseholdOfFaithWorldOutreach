import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const Live = () => {
  return (
    <Container className="my-5">
      <h1>Live Streaming</h1>
      <Row>
        <Col md={8} className="mx-auto">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allowFullScreen
              title="Live Stream"
              style={{ width: "100%", height: "400px" }}
            ></iframe>
          </div>
          <p className="text-center mt-3">
            Live Streaming - Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </Col>
      </Row>
      <ScrollToTop />
    </Container>
  );
};

export default Live;
