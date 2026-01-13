import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const MediaSermon = () => {
  // ========================================
  // MEDIA DATA - Organized by Type
  // ========================================

  // Featured Sermon
  const featuredSermon = {
    title: "The Fire of God: A Life Transformed",
    speaker: "Pastor John Adeyemi",
    date: "January 12, 2025",
    series: "Revival Series",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "A powerful message on encountering the Holy Spirit and living a life marked by divine fire and purpose.",
  };

  // Video Sermons
  const videoSermons = [
    {
      title: "Walking in Divine Authority",
      speaker: "Pastor John Adeyemi",
      date: "January 5, 2025",
      series: "Power Series",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail:
        "https://via.placeholder.com/400x225?text=Walking+in+Divine+Authority",
    },
    {
      title: "The Prayer That Moves Mountains",
      speaker: "Rev. Grace Okonkwo",
      date: "December 29, 2024",
      series: "Faith Foundations",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail:
        "https://via.placeholder.com/400x225?text=Prayer+That+Moves+Mountains",
    },
    {
      title: "Spiritual Warfare: Armed and Dangerous",
      speaker: "Pastor John Adeyemi",
      date: "December 22, 2024",
      series: "Warrior Series",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://via.placeholder.com/400x225?text=Spiritual+Warfare",
    },
    {
      title: "The Anointing That Breaks Yokes",
      speaker: "Pastor Sarah Oladele",
      date: "December 15, 2024",
      series: "Power Series",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail:
        "https://via.placeholder.com/400x225?text=Anointing+Breaks+Yokes",
    },
    {
      title: "Faith in Action: Moving Beyond Words",
      speaker: "Pastor John Adeyemi",
      date: "December 8, 2024",
      series: "Faith Foundations",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://via.placeholder.com/400x225?text=Faith+in+Action",
    },
    {
      title: "Prophetic Declarations Over Your Life",
      speaker: "Prophet Daniel Okoro",
      date: "December 1, 2024",
      series: "Prophetic Now",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail:
        "https://via.placeholder.com/400x225?text=Prophetic+Declarations",
    },
  ];

  // Audio Messages
  const audioMessages = [
    {
      title: "Understanding Your Identity in Christ",
      speaker: "Pastor John Adeyemi",
      date: "January 10, 2025",
      duration: "42 min",
      audioUrl: "#",
    },
    {
      title: "The Power of Thanksgiving",
      speaker: "Rev. Grace Okonkwo",
      date: "January 3, 2025",
      duration: "35 min",
      audioUrl: "#",
    },
    {
      title: "Living Above Circumstances",
      speaker: "Pastor Sarah Oladele",
      date: "December 27, 2024",
      duration: "38 min",
      audioUrl: "#",
    },
    {
      title: "The Ministry of the Holy Spirit",
      speaker: "Pastor John Adeyemi",
      date: "December 20, 2024",
      duration: "45 min",
      audioUrl: "#",
    },
    {
      title: "Breaking Generational Curses",
      speaker: "Prophet Daniel Okoro",
      date: "December 13, 2024",
      duration: "40 min",
      audioUrl: "#",
    },
    {
      title: "Faith for Financial Breakthrough",
      speaker: "Pastor John Adeyemi",
      date: "December 6, 2024",
      duration: "37 min",
      audioUrl: "#",
    },
  ];

  return (
    <div className="media-sermon-page">
      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section
        className="media-hero text-center text-white py-5"
        style={{
          background:
            "linear-gradient(135deg, #6a1b9a 0%, #8e24aa 50%, #c2185b 100%)",
          minHeight: "50vh",
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
              Sermons & Messages
            </h1>
            <p
              className="lead fs-3 fw-light"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Spirit-filled teachings to bless, strengthen, and transform your
              faith
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
          FEATURED SERMON SECTION
      ======================================== */}
      <section className="featured-sermon py-5 bg-light">
        <Container className="py-5">
          <div className="text-center mb-5">
            <Badge
              bg="primary"
              className="mb-3 px-3 py-2 fs-6"
              style={{
                background: "linear-gradient(135deg, #6a1b9a, #c2185b)",
                border: "none",
              }}
            >
              LATEST MESSAGE
            </Badge>
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#6a1b9a" }}>
              Featured Sermon
            </h2>
            <p className="lead text-muted fs-5">
              The most recent word from the pulpit
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-lg overflow-hidden">
                <Row className="g-0">
                  <Col lg={7}>
                    {/* Video Player */}
                    <div
                      className="ratio ratio-16x9"
                      style={{
                        background: "#000",
                        minHeight: "400px",
                      }}
                    >
                      <iframe
                        src={featuredSermon.videoUrl}
                        title={featuredSermon.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ border: "none" }}
                      />
                    </div>
                  </Col>
                  <Col lg={5}>
                    <Card.Body className="p-5 h-100 d-flex flex-column justify-content-center">
                      <Badge
                        className="mb-3 align-self-start"
                        style={{
                          background:
                            "linear-gradient(135deg, #c2185b, #d32f2f)",
                          border: "none",
                          fontSize: "0.75rem",
                          padding: "0.4rem 0.8rem",
                        }}
                      >
                        {featuredSermon.series}
                      </Badge>
                      <h3 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                        {featuredSermon.title}
                      </h3>
                      <p className="text-muted mb-2">
                        <strong>Speaker:</strong> {featuredSermon.speaker}
                      </p>
                      <p className="text-muted mb-4">
                        <strong>Date:</strong> {featuredSermon.date}
                      </p>
                      <p className="text-muted lh-lg mb-0">
                        {featuredSermon.description}
                      </p>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          VIDEO SERMONS SECTION
      ======================================== */}
      <section className="video-sermons py-5 bg-white">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#8e24aa" }}>
              Video Sermons
            </h2>
            <p className="lead text-muted fs-5">
              Watch powerful messages from our pulpit
            </p>
          </div>

          <Row className="g-4">
            {videoSermons.map((sermon, index) => (
              <Col key={index} md={6} lg={4}>
                <Card
                  className="border-0 shadow-sm h-100 overflow-hidden"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 35px rgba(142,36,170,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  {/* Video Thumbnail with Play Overlay */}
                  <div
                    style={{
                      position: "relative",
                      background: "#000",
                    }}
                  >
                    <div className="ratio ratio-16x9">
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    {/* Play Button Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "60px",
                        height: "60px",
                        background: "rgba(194,24,91,0.9)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        color: "white",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(194,24,91,1)";
                        e.currentTarget.style.transform =
                          "translate(-50%, -50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(194,24,91,0.9)";
                        e.currentTarget.style.transform =
                          "translate(-50%, -50%) scale(1)";
                      }}
                    >
                      ▶
                    </div>
                  </div>

                  <Card.Body className="p-4">
                    <Badge
                      className="mb-3"
                      style={{
                        background: "linear-gradient(135deg, #8e24aa, #c2185b)",
                        border: "none",
                        fontSize: "0.7rem",
                        padding: "0.3rem 0.6rem",
                      }}
                    >
                      {sermon.series}
                    </Badge>
                    <h5 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                      {sermon.title}
                    </h5>
                    <p className="text-muted small mb-2">
                      <strong>Speaker:</strong> {sermon.speaker}
                    </p>
                    <p className="text-muted small mb-0">
                      <strong>Date:</strong> {sermon.date}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================
          AUDIO MESSAGES SECTION
      ======================================== */}
      <section
        className="audio-messages py-5"
        style={{ background: "#faf8f5" }}
      >
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#c2185b" }}>
              Audio Messages
            </h2>
            <p className="lead text-muted fs-5">
              Listen to anointed teachings anytime, anywhere
            </p>
          </div>

          <Row className="g-4">
            {audioMessages.map((message, index) => (
              <Col key={index} md={6} lg={4}>
                <Card
                  className="border-0 shadow-sm h-100"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(194,24,91,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <Card.Body className="p-4">
                    {/* Audio Icon */}
                    <div
                      className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                        fontSize: "1.8rem",
                      }}
                    >
                      🎧
                    </div>

                    <h5 className="fw-bold mb-3" style={{ color: "#c2185b" }}>
                      {message.title}
                    </h5>

                    <p className="text-muted small mb-2">
                      <strong>Speaker:</strong> {message.speaker}
                    </p>
                    <p className="text-muted small mb-3">
                      <strong>Date:</strong> {message.date}
                    </p>

                    {/* Audio Player Placeholder */}
                    <div
                      className="rounded p-3 mb-3"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(194,24,91,0.05), rgba(211,47,47,0.05))",
                        border: "1px solid rgba(194,24,91,0.2)",
                      }}
                    >
                      <audio controls style={{ width: "100%" }} preload="none">
                        <source src={message.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <Badge
                        bg="light"
                        text="dark"
                        className="px-3 py-2"
                        style={{ fontSize: "0.75rem" }}
                      >
                        ⏱️ {message.duration}
                      </Badge>
                      <a
                        href={message.audioUrl}
                        className="text-decoration-none fw-bold"
                        style={{ color: "#c2185b", fontSize: "0.85rem" }}
                        download
                      >
                        Download ⬇️
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================
          SERIES OVERVIEW SECTION (Optional Enhancement)
      ======================================== */}
      <section className="sermon-series py-5 bg-white">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#6a1b9a" }}>
              Current Sermon Series
            </h2>
            <p className="lead text-muted fs-5">
              Ongoing teachings and thematic messages
            </p>
          </div>

          <Row className="g-4">
            {/* Revival Series */}
            <Col md={6} lg={4}>
              <Card
                className="border-0 shadow-sm h-100 text-center p-4"
                style={{ borderTop: "4px solid #6a1b9a" }}
              >
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #6a1b9a, #8e24aa)",
                    fontSize: "2rem",
                  }}
                >
                  🔥
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                  Revival Series
                </h5>
                <p className="text-muted mb-0">
                  A call to encounter the fire of God and live a transformed
                  life in the Spirit
                </p>
              </Card>
            </Col>

            {/* Power Series */}
            <Col md={6} lg={4}>
              <Card
                className="border-0 shadow-sm h-100 text-center p-4"
                style={{ borderTop: "4px solid #8e24aa" }}
              >
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #8e24aa, #c2185b)",
                    fontSize: "2rem",
                  }}
                >
                  ⚡
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#8e24aa" }}>
                  Power Series
                </h5>
                <p className="text-muted mb-0">
                  Walking in the authority and anointing given to believers in
                  Christ Jesus
                </p>
              </Card>
            </Col>

            {/* Faith Foundations */}
            <Col md={6} lg={4}>
              <Card
                className="border-0 shadow-sm h-100 text-center p-4"
                style={{ borderTop: "4px solid #c2185b" }}
              >
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                    fontSize: "2rem",
                  }}
                >
                  📖
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#c2185b" }}>
                  Faith Foundations
                </h5>
                <p className="text-muted mb-0">
                  Building a solid foundation of faith through the Word and
                  prayer
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          CLOSING CALL TO ACTION
      ======================================== */}
      <section
        className="media-closing py-5 text-white"
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
              "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        ></div>
        <Container className="py-5 position-relative">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center">
                <h3 className="display-5 fw-bold mb-4">
                  Stay Connected to the Word
                </h3>
                <p className="fs-5 lh-lg mb-4" style={{ opacity: 0.95 }}>
                  Whether you're watching online or listening on the go, these
                  messages are designed to strengthen your faith, deepen your
                  walk with God, and equip you for victorious living.
                </p>
                <p className="fs-5 lh-lg mb-5" style={{ opacity: 0.95 }}>
                  Subscribe to our YouTube channel and download our podcast to
                  never miss a word from the pulpit.
                </p>
                <p className="fs-4 fw-bold mb-0" style={{ color: "#ffd700" }}>
                  The Word is alive. Let it transform you today.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ScrollToTop />

      {/* Bottom Spacing */}
      <div className="pb-5"></div>
    </div>
  );
};

export default MediaSermon;
