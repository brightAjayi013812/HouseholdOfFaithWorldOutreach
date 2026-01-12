import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const MediaGallery = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "https://via.placeholder.com/300x200?text=Image+6",
  ];

  return (
    <Container className="my-5">
      <h1>Gallery</h1>
      <Row>
        {images.map((src, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={src} />
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ScrollToTop />
    </Container>
  );
};

export default MediaGallery;
