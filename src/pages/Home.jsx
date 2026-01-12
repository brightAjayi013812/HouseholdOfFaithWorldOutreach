import React from "react";
import { motion } from "framer-motion";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <Carousel
        style={{
          marginTop: "70px",
          height: "92vh",
        }}
        className="w-100"
        indicators
        controls
      >
        <Carousel.Item
          style={{
            height: "92vh",
            backgroundImage: "url(https://picsum.photos/1920/1080?random=10)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Carousel.Caption>
            <h3>Household of Faith</h3>
            <p>We Walk by Faith and not b sight</p>
            <a
              href="https://wondercity.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              Know more.
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "92vh",
            backgroundImage: "url(https://picsum.photos/1920/1080?random=11)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Carousel.Caption>
            <h3>Household of Faith, The home of Vision Seekers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a
              href="https://wondercity.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              Know more.
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "92vh",
            backgroundImage: "url(https://picsum.photos/1920/1080?random=12)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Carousel.Caption>
            <h3>Welcome to Household of faith World outreach.</h3>
            <p>
              Are you looking for a church to worship? {">"}we invite you to
              attend our services and experience God Like never before.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "92vh",
            backgroundImage: "url(https://picsum.photos/1920/1080?random=13)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Carousel.Caption>
            <h3>We Are Passionate About You .</h3>
            <p>
              Our hearts and doors are open for you to come and be uplifted by
              experiencing a warm, loving environment ..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            height: "92vh",
            backgroundImage: "url(https://picsum.photos/1920/1080?random=14)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Carousel.Caption>
            <h3>Join us Online!</h3>
            <p>
              Watch Our Services online with people from all around the Globe.
            </p>
            <p>LIVE STREAMING</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="text-center my-5">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Household of Faith Church
        </motion.h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Container>

      <Container className="my-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?random=3"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Church Event 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Church+Event+2"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Church Event 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?random=5"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Church Event 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="my-5">
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
              Live Streaming - Lorem ipsum dolor sit amet.
            </p>
          </Col>
        </Row>
      </Container>

      <ScrollToTop />
    </div>
  );
};

export default Home;
