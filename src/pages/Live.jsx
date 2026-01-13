import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const Live = () => {
  // ========================================
  // STATE MANAGEMENT
  // ========================================
  const [isMaximized, setIsMaximized] = useState(false);

  // ========================================
  // LIVE SERVICE DATA
  // ========================================
  const liveService = {
    isLive: true, // Set to false when stream is offline
    title: "Sunday Morning Worship Service",
    speaker: "Pastor Lawrence Ajayi",
    date: "January 14, 2025",
    time: "8:00 AM - 10:30 AM",
    description:
      "Join us for a powerful time of worship, prayer, and the Word as we encounter the presence of God together.",
    // Facebook Live embed URL - Replace with actual Facebook Live video URL
    streamUrl:
      "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=0&width=560",
    nextServiceTime: "Next Service: Wednesday, January 17 at 6:00 PM",
  };

  // ========================================
  // MAXIMIZE / MINIMIZE HANDLERS
  // ========================================
  const handleMaximize = () => {
    setIsMaximized(true);
    // Smooth scroll to top when maximizing
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMinimize = () => {
    setIsMaximized(false);
  };

  return (
    <div className="live-screen-page">
      {/* ========================================
          HERO / LIVE STATUS SECTION
      ======================================== */}
      {!isMaximized && (
        <section
          className="live-hero text-center text-white py-5"
          style={{
            background:
              "linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #c2185b 100%)",
            minHeight: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <div className="py-4">
              <h1
                className="display-2 fw-bold mb-4"
                style={{ letterSpacing: "1px" }}
              >
                {liveService.isLive ? "Watch Live" : "Live Service"}
              </h1>
              <p
                className="lead fs-3 fw-light"
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                {liveService.isLive
                  ? "Join us live as we worship together"
                  : "We'll be back soon for our next service"}
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
      )}

      {/* ========================================
          LIVE VIDEO PLAYER SECTION (CORE)
      ======================================== */}
      <section
        className={`live-player-section ${isMaximized ? "maximized" : ""}`}
        style={{
          background: isMaximized ? "#000" : "#f8f4ef",
          minHeight: isMaximized ? "100vh" : "auto",
          display: isMaximized ? "flex" : "block",
          alignItems: isMaximized ? "center" : "normal",
          justifyContent: isMaximized ? "center" : "normal",
          position: isMaximized ? "fixed" : "relative",
          top: isMaximized ? 0 : "auto",
          left: isMaximized ? 0 : "auto",
          right: isMaximized ? 0 : "auto",
          bottom: isMaximized ? 0 : "auto",
          zIndex: isMaximized ? 9999 : "auto",
          padding: isMaximized ? "2rem" : "0",
        }}
      >
        <Container
          fluid={isMaximized}
          className={isMaximized ? "h-100" : "py-5"}
        >
          <Row
            className={`${isMaximized ? "h-100 align-items-center" : ""} g-4`}
          >
            <Col lg={isMaximized ? 12 : 8} className="mx-auto">
              {/* Video Player Card */}
              <Card
                className="border-0 shadow-lg overflow-hidden"
                style={{
                  background: isMaximized ? "#000" : "#fff",
                }}
              >
                {liveService.isLive ? (
                  <>
                    {/* Facebook Live Video Player */}
                    <div
                      className="ratio"
                      style={{
                        paddingTop: isMaximized ? "56.25%" : "56.25%", // 16:9 aspect ratio
                        background: "#000",
                      }}
                    >
                      <iframe
                        src={liveService.streamUrl}
                        title="Live Service Stream"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                          border: "none",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>

                    {/* Player Controls */}
                    <div
                      className="p-3"
                      style={{
                        background: isMaximized ? "rgba(0,0,0,0.8)" : "#fff",
                        color: isMaximized ? "#fff" : "#333",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <Badge
                            bg="danger"
                            className="me-2 px-2 py-1"
                            style={{ fontSize: "0.75rem" }}
                          >
                            🔴 LIVE
                          </Badge>
                          {!isMaximized && (
                            <span className="fw-bold">{liveService.title}</span>
                          )}
                        </div>

                        {/* Maximize / Minimize Button */}
                        {!isMaximized ? (
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={handleMaximize}
                            style={{
                              borderColor: "#6a1b9a",
                              color: "#6a1b9a",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#6a1b9a";
                              e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "#6a1b9a";
                            }}
                          >
                            🔍 Expand View
                          </Button>
                        ) : (
                          <Button
                            variant="outline-light"
                            size="sm"
                            onClick={handleMinimize}
                          >
                            ✕ Exit Full View
                          </Button>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Offline / Not Live State */
                  <div
                    className="text-center p-5"
                    style={{
                      minHeight: "400px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, rgba(106,27,154,0.05), rgba(194,24,91,0.05))",
                    }}
                  >
                    <div
                      className="mb-4 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "100px",
                        height: "100px",
                        background: "linear-gradient(135deg, #6a1b9a, #c2185b)",
                        fontSize: "3rem",
                      }}
                    >
                      ⛪
                    </div>
                    <h3 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                      We're Not Live Right Now
                    </h3>
                    <p className="text-muted fs-5 mb-4">
                      Our live stream will begin at the scheduled service time.
                    </p>
                    <p className="fw-bold" style={{ color: "#c2185b" }}>
                      {liveService.nextServiceTime}
                    </p>
                  </div>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          SERVICE INFORMATION SECTION
          (Hidden when maximized)
      ======================================== */}
      {!isMaximized && liveService.isLive && (
        <section className="service-info py-5 bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-5">
                    <h3 className="fw-bold mb-4" style={{ color: "#6a1b9a" }}>
                      {liveService.title}
                    </h3>

                    <Row className="g-4 mb-4">
                      <Col md={6}>
                        <div>
                          <p className="text-muted small mb-1">
                            <strong>Speaker:</strong>
                          </p>
                          <p className="fs-5 mb-0">{liveService.speaker}</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <p className="text-muted small mb-1">
                            <strong>Date:</strong>
                          </p>
                          <p className="fs-5 mb-0">{liveService.date}</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <p className="text-muted small mb-1">
                            <strong>Time:</strong>
                          </p>
                          <p className="fs-5 mb-0">{liveService.time}</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <p className="text-muted small mb-1">
                            <strong>Status:</strong>
                          </p>
                          <Badge bg="danger" className="px-3 py-2 fs-6">
                            🔴 LIVE NOW
                          </Badge>
                        </div>
                      </Col>
                    </Row>

                    <div>
                      <p className="text-muted small mb-1">
                        <strong>About This Service:</strong>
                      </p>
                      <p className="text-muted lh-lg mb-0">
                        {liveService.description}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* ========================================
          LIVE PARTICIPATION GUIDANCE
          (Hidden when maximized)
      ======================================== */}
      {!isMaximized && liveService.isLive && (
        <section
          className="participation-guidance py-5"
          style={{ background: "#faf8f5" }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <h3 className="fw-bold mb-4" style={{ color: "#c2185b" }}>
                    Join Us in Worship
                  </h3>

                  <Row className="g-4">
                    <Col md={4}>
                      <div className="p-4">
                        <div
                          className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "70px",
                            height: "70px",
                            background:
                              "linear-gradient(135deg, #6a1b9a, #8e24aa)",
                            fontSize: "2rem",
                          }}
                        >
                          🙏
                        </div>
                        <h6
                          className="fw-bold mb-2"
                          style={{ color: "#6a1b9a" }}
                        >
                          Worship Along
                        </h6>
                        <p className="text-muted small mb-0">
                          Lift your hands, open your heart, and worship with us
                          from wherever you are
                        </p>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className="p-4">
                        <div
                          className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "70px",
                            height: "70px",
                            background:
                              "linear-gradient(135deg, #8e24aa, #c2185b)",
                            fontSize: "2rem",
                          }}
                        >
                          📖
                        </div>
                        <h6
                          className="fw-bold mb-2"
                          style={{ color: "#8e24aa" }}
                        >
                          Stay Focused
                        </h6>
                        <p className="text-muted small mb-0">
                          Eliminate distractions and create a sacred space for
                          encountering God
                        </p>
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className="p-4">
                        <div
                          className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "70px",
                            height: "70px",
                            background:
                              "linear-gradient(135deg, #c2185b, #d32f2f)",
                            fontSize: "2rem",
                          }}
                        >
                          📤
                        </div>
                        <h6
                          className="fw-bold mb-2"
                          style={{ color: "#c2185b" }}
                        >
                          Share the Stream
                        </h6>
                        <p className="text-muted small mb-0">
                          Invite family and friends to join this powerful time
                          of worship
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* ========================================
          UPCOMING SERVICES (Optional)
          (Hidden when maximized)
      ======================================== */}
      {!isMaximized && (
        <section className="upcoming-services py-5 bg-white">
          <Container>
            <div className="text-center mb-5">
              <h3 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                Upcoming Services
              </h3>
              <p className="text-muted">Mark your calendar and join us live</p>
            </div>

            <Row className="g-4 justify-content-center">
              <Col md={6} lg={4}>
                <Card className="border-0 shadow-sm text-center p-4">
                  <div
                    className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #6a1b9a, #8e24aa)",
                      fontSize: "1.5rem",
                    }}
                  >
                    ☀️
                  </div>
                  <h6 className="fw-bold mb-2">Sunday Service</h6>
                  <p className="text-muted small mb-1">8:00 AM & 10:30 AM</p>
                  <p className="text-muted small mb-0">Every Sunday</p>
                </Card>
              </Col>

              <Col md={6} lg={4}>
                <Card className="border-0 shadow-sm text-center p-4">
                  <div
                    className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #8e24aa, #c2185b)",
                      fontSize: "1.5rem",
                    }}
                  >
                    🌙
                  </div>
                  <h6 className="fw-bold mb-2">Mid-Week Service</h6>
                  <p className="text-muted small mb-1">6:00 PM</p>
                  <p className="text-muted small mb-0">Every Wednesday</p>
                </Card>
              </Col>

              <Col md={6} lg={4}>
                <Card className="border-0 shadow-sm text-center p-4">
                  <div
                    className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                      fontSize: "1.5rem",
                    }}
                  >
                    🔥
                  </div>
                  <h6 className="fw-bold mb-2">Friday Night Fire</h6>
                  <p className="text-muted small mb-1">7:00 PM</p>
                  <p className="text-muted small mb-0">
                    First Friday of the Month
                  </p>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      
      {!isMaximized && <ScrollToTop />}

      {/* Bottom Spacing (Hidden when maximized) */}
      {!isMaximized && <div className="pb-5"></div>}
    </div>
  );
};

export default Live;
