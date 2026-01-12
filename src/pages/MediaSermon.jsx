import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const MediaSermon = () => {
  const sermons = [
    {
      title: "Sermon 1",
      date: "2023-01-01",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Sermon 2",
      date: "2023-01-08",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Sermon 3",
      date: "2023-01-15",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <Container className="my-5">
      <h1>Sermons</h1>
      <Row>
        {sermons.map((sermon, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{sermon.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {sermon.date}
                </Card.Subtitle>
                <Card.Text>{sermon.description}</Card.Text>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ScrollToTop />
    </Container>
  );
};

export default MediaSermon;
