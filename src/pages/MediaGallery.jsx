import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const MediaGallery = () => {
  // ========================================
  // IMAGE DATA - Organized by Category
  // ========================================

  const worshipImages = [
    {
      src: "https://via.placeholder.com/600x400?text=Sunday+Worship",
      caption: "Sunday morning worship",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Praise+Team",
      caption: "Anointed worship team",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Congregation+Worship",
      caption: "Hearts lifted in praise",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Prayer+Time",
      caption: "Corporate prayer",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Altar+Call",
      caption: "Responding to the altar call",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Holy+Spirit",
      caption: "Move of the Holy Spirit",
    },
  ];

  const conferenceImages = [
    {
      src: "https://via.placeholder.com/800x500?text=Annual+Conference",
      caption: "Annual Fire Conference 2024",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Guest+Speaker",
      caption: "Guest minister preaching",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Revival+Night",
      caption: "Revival night gathering",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Conference+Worship",
      caption: "Conference worship session",
    },
  ];

  const fellowshipImages = [
    {
      src: "https://via.placeholder.com/600x400?text=Church+Family",
      caption: "Church family fellowship",
    },
    {
      src: "https://via.placeholder.com/600x400?text=New+Members",
      caption: "Welcoming new members",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Cell+Group",
      caption: "Cell group meeting",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Community+Meal",
      caption: "Breaking bread together",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Church+Picnic",
      caption: "Annual church picnic",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Fellowship+Hall",
      caption: "Fellowship after service",
    },
  ];

  const youthImages = [
    {
      src: "https://via.placeholder.com/600x400?text=Youth+Service",
      caption: "Youth service in action",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kids+Sunday+School",
      caption: "Children's Sunday school",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Teen+Camp",
      caption: "Teen summer camp",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Youth+Worship",
      caption: "Next generation worship",
    },
  ];

  const outreachImages = [
    {
      src: "https://via.placeholder.com/600x400?text=Community+Outreach",
      caption: "Community outreach program",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Food+Drive",
      caption: "Food distribution to families",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Street+Evangelism",
      caption: "Street evangelism team",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Mission+Trip",
      caption: "Mission trip 2024",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Prison+Ministry",
      caption: "Prison ministry outreach",
    },
  ];

  const milestonesImages = [
    {
      src: "https://via.placeholder.com/800x500?text=Church+Anniversary",
      caption: "25th Anniversary celebration",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Building+Dedication",
      caption: "Cathedral dedication service",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Baptism+Service",
      caption: "Water baptism service",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Ordination",
      caption: "Minister ordination ceremony",
    },
  ];

  return (
    <div className="media-gallery-page">
      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section
        className="gallery-hero text-center text-white py-5"
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
              Our Gallery
            </h1>
            <p
              className="lead fs-3 fw-light"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              A visual celebration of worship, fellowship, and God's
              faithfulness
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
          SECTION 1: WORSHIP & SERVICES
      ======================================== */}
      <section className="worship-gallery py-5 bg-light">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#6a1b9a" }}>
              Worship & Services
            </h2>
            <p
              className="lead text-muted fs-5"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Where heaven meets earth—captured moments of worship and divine
              encounter
            </p>
          </div>

          <Row className="g-4">
            {worshipImages.map((image, index) => (
              <Col key={index} md={6} lg={4}>
                <figure className="mb-0">
                  <Card
                    className="border-0 shadow-sm overflow-hidden h-100"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(106,27,154,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div
                      style={{
                        height: "280px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={image.src}
                        alt={image.caption}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </div>
                    <Card.Body className="p-3">
                      <figcaption className="text-center text-muted fst-italic mb-0">
                        {image.caption}
                      </figcaption>
                    </Card.Body>
                  </Card>
                </figure>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================
          SECTION 2: SPECIAL PROGRAMS & CONFERENCES
      ======================================== */}
      <section className="conference-gallery py-5 bg-white">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#8e24aa" }}>
              Special Programs & Conferences
            </h2>
            <p
              className="lead text-muted fs-5"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Powerful gatherings where lives are transformed and faith is
              ignited
            </p>
          </div>

          <Row className="g-4">
            {/* Featured Large Image */}
            <Col lg={8}>
              <figure className="mb-0">
                <Card
                  className="border-0 shadow-lg overflow-hidden h-100"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(142,36,170,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div
                    style={{
                      height: "500px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={conferenceImages[0].src}
                      alt={conferenceImages[0].caption}
                      style={{
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <figcaption
                      className="text-center fs-5 fw-bold mb-0"
                      style={{ color: "#8e24aa" }}
                    >
                      {conferenceImages[0].caption}
                    </figcaption>
                  </Card.Body>
                </Card>
              </figure>
            </Col>

            {/* Side Images */}
            <Col lg={4}>
              <Row className="g-4">
                {conferenceImages.slice(1).map((image, index) => (
                  <Col key={index} xs={12}>
                    <figure className="mb-0">
                      <Card
                        className="border-0 shadow-sm overflow-hidden"
                        style={{
                          transition: "transform 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <div style={{ height: "150px", overflow: "hidden" }}>
                          <Card.Img
                            variant="top"
                            src={image.src}
                            alt={image.caption}
                            style={{
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          />
                        </div>
                        <Card.Body className="p-3">
                          <figcaption className="text-center text-muted fst-italic small mb-0">
                            {image.caption}
                          </figcaption>
                        </Card.Body>
                      </Card>
                    </figure>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          SECTION 3: FELLOWSHIP & COMMUNITY
      ======================================== */}
      <section
        className="fellowship-gallery py-5"
        style={{ background: "#faf8f5" }}
      >
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#c2185b" }}>
              Fellowship & Community
            </h2>
            <p
              className="lead text-muted fs-5"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              More than a church—we're a family united in love and faith
            </p>
          </div>

          <Row className="g-4">
            {fellowshipImages.map((image, index) => (
              <Col key={index} md={6} lg={4}>
                <figure className="mb-0">
                  <Card
                    className="border-0 shadow-sm overflow-hidden h-100"
                    style={{
                      transition: "transform 0.3s ease",
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
                    <div style={{ height: "280px", overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={image.src}
                        alt={image.caption}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </div>
                    <Card.Body className="p-3">
                      <figcaption className="text-center text-muted fst-italic mb-0">
                        {image.caption}
                      </figcaption>
                    </Card.Body>
                  </Card>
                </figure>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================
          SECTION 4: YOUTH & CHILDREN
      ======================================== */}
      <section className="youth-gallery py-5 bg-white">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#d32f2f" }}>
              Youth & Children
            </h2>
            <p
              className="lead text-muted fs-5"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Raising the next generation to love God and walk in purpose
            </p>
          </div>

          <Row className="g-4">
            {youthImages.map((image, index) => (
              <Col key={index} md={6} lg={3}>
                <figure className="mb-0">
                  <Card
                    className="border-0 shadow-sm overflow-hidden h-100"
                    style={{
                      transition: "transform 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(211,47,47,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div style={{ height: "250px", overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={image.src}
                        alt={image.caption}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </div>
                    <Card.Body className="p-3">
                      <figcaption className="text-center text-muted fst-italic small mb-0">
                        {image.caption}
                      </figcaption>
                    </Card.Body>
                  </Card>
                </figure>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================
          SECTION 5: OUTREACH & MISSIONS
      ======================================== */}
      <section className="outreach-gallery py-5 bg-light">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#f57c00" }}>
              Outreach & Missions
            </h2>
            <p
              className="lead text-muted fs-5"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Taking the Gospel beyond our walls—serving, loving, and
              transforming communities
            </p>
          </div>

          <Row className="g-4">
            {outreachImages.map((image, index) => (
              <Col key={index} md={6} lg={4}>
                <figure className="mb-0">
                  <Card
                    className="border-0 shadow-sm overflow-hidden h-100"
                    style={{
                      transition: "transform 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(245,124,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div style={{ height: "280px", overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={image.src}
                        alt={image.caption}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </div>
                    <Card.Body className="p-3">
                      <figcaption className="text-center text-muted fst-italic mb-0">
                        {image.caption}
                      </figcaption>
                    </Card.Body>
                  </Card>
                </figure>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================
          SECTION 6: SPECIAL MOMENTS & MILESTONES
      ======================================== */}
      <section
        className="milestones-gallery py-5 text-white"
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
              "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        ></div>
        <Container className="py-5 position-relative">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Special Moments & Milestones
            </h2>
            <p
              className="lead fs-5"
              style={{ maxWidth: "700px", margin: "0 auto", opacity: 0.95 }}
            >
              Celebrating the faithfulness of God through every season and
              landmark
            </p>
          </div>

          <Row className="g-4">
            {milestonesImages.map((image, index) => (
              <Col key={index} md={6} lg={index === 0 ? 12 : 4}>
                <figure className="mb-0">
                  <Card
                    className="border-0 overflow-hidden h-100"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      transition: "transform 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 40px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div
                      style={{
                        height: index === 0 ? "400px" : "280px",
                        overflow: "hidden",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={image.src}
                        alt={image.caption}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      />
                    </div>
                    <Card.Body className="p-4">
                      <figcaption
                        className="text-center fw-bold mb-0"
                        style={{
                          color: "#6a1b9a",
                          fontSize: index === 0 ? "1.2rem" : "1rem",
                        }}
                      >
                        {image.caption}
                      </figcaption>
                    </Card.Body>
                  </Card>
                </figure>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ========================================
          CLOSING SECTION
      ======================================== */}
      <section className="gallery-closing py-5 bg-light">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center">
                <h3
                  className="display-6 fw-bold mb-4"
                  style={{ color: "#6a1b9a" }}
                >
                  Memories That Inspire Faith
                </h3>
                <p className="fs-5 lh-lg text-muted mb-4">
                  Every image tells a story. Every moment captured is a
                  testimony of God's presence, power, and provision. These are
                  more than pictures—they are visual reminders of a journey
                  marked by grace, growth, and glory.
                </p>
                <p className="fs-5 fw-bold mb-0" style={{ color: "#c2185b" }}>
                  Come be part of the next chapter. Come write your own story
                  with us.
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

export default MediaGallery;
