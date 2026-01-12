import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const AboutStory = () => {
  return (
    <div className="about-story-page">
      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section
        className="hero-section text-center text-white py-5"
        style={{
          background:
            "linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #c2185b 100%)",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <div className="py-5">
            <h1
              className="display-2 fw-bold mb-4"
              style={{ letterSpacing: "1px" }}
            >
              Our Story
            </h1>
            <p
              className="lead fs-3 fw-light"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              A journey of fire, faith, and divine purpose
            </p>
            <div
              className="mt-4"
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #ffd700, #ffb300)",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            ></div>
          </div>
        </Container>
      </section>

      {/* ========================================
          FOUNDATIONAL STORY SECTION
      ======================================== */}
      <section className="foundational-story py-5 bg-light">
        <Container className="py-5">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#6a1b9a" }}
              >
                Born from Divine Mandate
              </h2>
              <p className="fs-5 lh-lg mb-4">
                Our church was not established by human ambition, but by divine
                calling. In obedience to the voice of the Holy Spirit, our
                founders stepped out in faith, believing that God had a purpose
                and a people waiting to be gathered.
              </p>
              <p className="fs-5 lh-lg mb-4">
                What began as a small gathering of believers hungry for
                authentic worship and the manifest presence of God has grown
                into a vibrant community of faith. We are a people marked by
                fire, driven by passion for souls, and committed to seeing the
                Kingdom of God advance in our generation.
              </p>
            </Col>
            <Col lg={6}>
              <div
                className="rounded shadow-lg"
                style={{
                  height: "400px",
                  background:
                    "linear-gradient(135deg, rgba(106,27,154,0.1) 0%, rgba(194,24,91,0.1) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid #6a1b9a",
                }}
              >
                <p className="text-muted fs-4 fw-light text-center px-4">
                  "Where faith meets fire"
                  <br />
                  <span className="fs-6">[Foundational Image Placeholder]</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          TIMELINE / GROWTH JOURNEY SECTION
      ======================================== */}
      <section className="growth-journey py-5">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#6a1b9a" }}>
              Our Journey of Growth
            </h2>
            <p className="lead text-muted fs-5">
              From humble beginnings to a movement of transformation
            </p>
          </div>

          <Row className="g-4">
            {/* Phase 1 */}
            <Col md={6} lg={4}>
              <Card
                className="h-100 border-0 shadow-sm"
                style={{ borderTop: "4px solid #6a1b9a" }}
              >
                <Card.Body className="p-4">
                  <div
                    className="mb-3 text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "linear-gradient(135deg, #6a1b9a, #c2185b)",
                    }}
                  >
                    1
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                    The Seed Season
                  </h4>
                  <p className="lh-lg text-muted">
                    Beginning with fervent prayer and a handful of believers, we
                    gathered in faith, seeking God's presence above all else.
                    The foundation was laid with worship, intercession, and a
                    commitment to the Word.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Phase 2 */}
            <Col md={6} lg={4}>
              <Card
                className="h-100 border-0 shadow-sm"
                style={{ borderTop: "4px solid #8e24aa" }}
              >
                <Card.Body className="p-4">
                  <div
                    className="mb-3 text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "linear-gradient(135deg, #8e24aa, #c2185b)",
                    }}
                  >
                    2
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#8e24aa" }}>
                    Revival & Expansion
                  </h4>
                  <p className="lh-lg text-muted">
                    As we continued in unity and faith, God poured out His
                    Spirit in remarkable ways. Souls were saved, lives were
                    transformed, and the church began to grow exponentially.
                    Signs and wonders followed the preaching of the Gospel.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Phase 3 */}
            <Col md={6} lg={4}>
              <Card
                className="h-100 border-0 shadow-sm"
                style={{ borderTop: "4px solid #c2185b" }}
              >
                <Card.Body className="p-4">
                  <div
                    className="mb-3 text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                    }}
                  >
                    3
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: "#c2185b" }}>
                    Multiplication & Impact
                  </h4>
                  <p className="lh-lg text-muted">
                    Today, we stand as a testimony of God's faithfulness. We
                    continue to multiply disciples, plant churches, and extend
                    the Kingdom. Our vision remains clear: to reach nations with
                    the Gospel of Jesus Christ.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          MISSION, VISION & MANDATE SECTION
      ======================================== */}
      <section className="mission-vision py-5 bg-light">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#6a1b9a" }}>
              Our Mission & Vision
            </h2>
            <p className="lead text-muted fs-5">
              Called to advance the Kingdom with power and purpose
            </p>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="text-center p-4">
                <div
                  className="mb-3 mx-auto text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #6a1b9a, #8e24aa)",
                    fontSize: "2rem",
                  }}
                >
                  🔥
                </div>
                <h5 className="fw-bold mb-3">Evangelism</h5>
                <p className="text-muted lh-lg">
                  Proclaiming the Gospel with boldness and demonstrating the
                  power of God to save, heal, and deliver.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="text-center p-4">
                <div
                  className="mb-3 mx-auto text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #8e24aa, #c2185b)",
                    fontSize: "2rem",
                  }}
                >
                  ✨
                </div>
                <h5 className="fw-bold mb-3">Spirit-Led Worship</h5>
                <p className="text-muted lh-lg">
                  Creating an atmosphere where the Holy Spirit is welcomed and
                  the manifest presence of God is experienced.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="text-center p-4">
                <div
                  className="mb-3 mx-auto text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                    fontSize: "2rem",
                  }}
                >
                  📖
                </div>
                <h5 className="fw-bold mb-3">Discipleship</h5>
                <p className="text-muted lh-lg">
                  Equipping believers to walk in faith, maturity, and spiritual
                  authority through sound teaching.
                </p>
              </div>
            </Col>

            <Col md={6} lg={3}>
              <div className="text-center p-4">
                <div
                  className="mb-3 mx-auto text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #d32f2f, #f57c00)",
                    fontSize: "2rem",
                  }}
                >
                  🌍
                </div>
                <h5 className="fw-bold mb-3">Kingdom Impact</h5>
                <p className="text-muted lh-lg">
                  Transforming communities, impacting nations, and establishing
                  God's Kingdom on earth as it is in heaven.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          PENTECOSTAL EMPHASIS SECTION
      ======================================== */}
      <section
        className="pentecostal-emphasis py-5 text-white"
        style={{
          background:
            "linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        ></div>
        <Container className="py-5 position-relative">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">
                Marked by the Holy Spirit
              </h2>
              <p className="fs-5 lh-lg mb-4">
                We are a Pentecostal church—unapologetically passionate about
                the person and power of the Holy Spirit. We believe in the
                baptism of the Holy Spirit, in speaking in tongues, in the gifts
                of the Spirit, and in the supernatural move of God in our midst.
              </p>
              <p className="fs-5 lh-lg mb-4">
                Prayer is the foundation of everything we do. We are a house of
                prayer, where intercession, worship, and seeking God's face are
                not optional—they are essential. We have witnessed miracles,
                healings, deliverances, and breakthroughs because we believe God
                still moves in power today.
              </p>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow-lg bg-white text-dark">
                <Card.Body className="p-5">
                  <h4 className="fw-bold mb-4" style={{ color: "#6a1b9a" }}>
                    We Believe In:
                  </h4>
                  <ul className="list-unstyled fs-5 lh-lg">
                    <li className="mb-3">
                      <span className="fw-bold" style={{ color: "#c2185b" }}>
                        ✓
                      </span>{" "}
                      The baptism of the Holy Spirit with evidence of speaking
                      in tongues
                    </li>
                    <li className="mb-3">
                      <span className="fw-bold" style={{ color: "#c2185b" }}>
                        ✓
                      </span>{" "}
                      The operation of spiritual gifts in the body of Christ
                    </li>
                    <li className="mb-3">
                      <span className="fw-bold" style={{ color: "#c2185b" }}>
                        ✓
                      </span>{" "}
                      Signs, wonders, and miracles as confirmation of the Gospel
                    </li>
                    <li className="mb-3">
                      <span className="fw-bold" style={{ color: "#c2185b" }}>
                        ✓
                      </span>{" "}
                      Prayer, fasting, and worship as pathways to divine
                      encounter
                    </li>
                    <li className="mb-3">
                      <span className="fw-bold" style={{ color: "#c2185b" }}>
                        ✓
                      </span>{" "}
                      The transformation of lives through the power of the Holy
                      Spirit
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          CLOSING / CALL TO FAITH SECTION
      ======================================== */}
      <section className="closing-section py-5">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div
                className="text-center p-5 rounded shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(106,27,154,0.05) 0%, rgba(194,24,91,0.05) 100%)",
                  border: "2px solid #6a1b9a",
                }}
              >
                <h3
                  className="display-6 fw-bold mb-4"
                  style={{ color: "#6a1b9a" }}
                >
                  The Story Continues
                </h3>
                <p className="fs-5 lh-lg text-muted mb-4">
                  Our story is not finished—it is still being written. Every
                  life transformed, every soul saved, every prayer answered, and
                  every move of the Spirit adds another chapter to what God is
                  doing among us.
                </p>
                <p
                  className="fs-5 lh-lg fw-bold mb-0"
                  style={{ color: "#c2185b" }}
                >
                  We invite you to be part of this journey. Come experience the
                  fire, encounter the presence, and discover your purpose in the
                  house of God.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ScrollToTop />

      {/* Bottom spacing */}
      <div className="pb-5"></div>
    </div>
  );
};

export default AboutStory;
