import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const AboutHistory = () => {
  return (
    <div className="about-history-page">
      {/* ========================================
          HERO SECTION - HISTORY INTRODUCTION
      ======================================== */}
      <section
        className="history-hero text-center text-white py-5"
        style={{
          background:
            "linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
        <Container className="position-relative">
          <div className="py-5">
            <p
              className="text-uppercase fw-bold mb-3"
              style={{ letterSpacing: "3px", color: "#ffd700" }}
            >
              A Legacy of Faith
            </p>
            <h1
              className="display-1 fw-bold mb-4"
              style={{ letterSpacing: "2px" }}
            >
              Our History
            </h1>
            <p
              className="lead fs-3 fw-light mb-4"
              style={{ maxWidth: "900px", margin: "0 auto" }}
            >
              A divine journey through seasons of growth, faith, and the mighty
              hand of God
            </p>
            <div
              className="mt-4"
              style={{
                width: "100px",
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
          ERA 1: HOUSE FELLOWSHIP ERA
          Humble Beginnings
      ======================================== */}
      <section
        className="house-fellowship-era py-5"
        style={{ background: "#f8f4ef" }}
      >
        <Container className="py-5">
          {/* Era Header */}
          <div className="text-center mb-5">
            <p
              className="text-uppercase fw-bold mb-2"
              style={{ color: "#c2185b", letterSpacing: "2px" }}
            >
              Chapter One • 1990s
            </p>
            <h2 className="display-4 fw-bold mb-3" style={{ color: "#4a148c" }}>
              The House Fellowship Era
            </h2>
            <p
              className="lead fs-5 text-muted"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              In the beginning, there was faith, a living room, and a hunger for
              God's presence
            </p>
          </div>

          {/* Story + Image Layout */}
          <Row className="align-items-center g-5 mb-5">
            <Col lg={6}>
              <div
                className="rounded shadow-lg overflow-hidden"
                style={{
                  height: "450px",
                  background:
                    "linear-gradient(135deg, rgba(106,27,154,0.1) 0%, rgba(194,24,91,0.1) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid #6a1b9a",
                }}
              >
                <p className="text-center text-muted px-4">
                  <span className="fs-5 fw-light">
                    Image: Early House Fellowship Gathering
                  </span>
                  <br />
                  <span className="fs-6">
                    [Believers gathered in a living room]
                  </span>
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <h3 className="fw-bold mb-4" style={{ color: "#6a1b9a" }}>
                Humble Beginnings in Faith
              </h3>
              <p className="fs-5 lh-lg mb-4 text-muted">
                Our journey began in the warmth of a home, where a small group
                of believers gathered with one desire—to seek the face of God.
                There were no elaborate buildings, no grand programs, just
                hearts ablaze with passion for worship and prayer.
              </p>
              <p className="fs-5 lh-lg mb-4 text-muted">
                Week after week, families would come together, sharing
                testimonies, interceding for their community, and believing God
                for the impossible. The living room became a sanctuary, the
                kitchen table an altar, and every gathering a divine encounter.
              </p>
              <p className="fs-5 lh-lg text-muted">
                Though small in number, the fellowship was mighty in spirit.
                Seeds of faith were planted, foundations were laid, and God
                began to move in remarkable ways.
              </p>
            </Col>
          </Row>

          {/* Image Gallery - House Fellowship */}
          <Row className="g-4">
            <Col md={4}>
              <figure className="mb-0">
                <div
                  className="rounded shadow overflow-hidden"
                  style={{
                    height: "300px",
                    background:
                      "linear-gradient(135deg, rgba(74,20,140,0.1) 0%, rgba(142,36,170,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center px-3">
                    <span className="d-block fw-light">
                      First Prayer Meeting
                    </span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <figcaption className="text-center mt-3 text-muted fst-italic">
                  Where it all began—prayer in a living room
                </figcaption>
              </figure>
            </Col>
            <Col md={4}>
              <figure className="mb-0">
                <div
                  className="rounded shadow overflow-hidden"
                  style={{
                    height: "300px",
                    background:
                      "linear-gradient(135deg, rgba(74,20,140,0.1) 0%, rgba(142,36,170,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center px-3">
                    <span className="d-block fw-light">Early Worship</span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <figcaption className="text-center mt-3 text-muted fst-italic">
                  Simple worship, powerful presence
                </figcaption>
              </figure>
            </Col>
            <Col md={4}>
              <figure className="mb-0">
                <div
                  className="rounded shadow overflow-hidden"
                  style={{
                    height: "300px",
                    background:
                      "linear-gradient(135deg, rgba(74,20,140,0.1) 0%, rgba(142,36,170,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center px-3">
                    <span className="d-block fw-light">Founding Members</span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <figcaption className="text-center mt-3 text-muted fst-italic">
                  The pioneers who dared to believe
                </figcaption>
              </figure>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          ERA 2: ANFANI CHURCH ERA
          First Church Building
      ======================================== */}
      <section className="anfani-church-era py-5 bg-white">
        <Container className="py-5">
          {/* Era Header */}
          <div className="text-center mb-5">
            <p
              className="text-uppercase fw-bold mb-2"
              style={{ color: "#c2185b", letterSpacing: "2px" }}
            >
              Chapter Two • Early 2000s
            </p>
            <h2 className="display-4 fw-bold mb-3" style={{ color: "#4a148c" }}>
              The Anfani Church Era
            </h2>
            <p
              className="lead fs-5 text-muted"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              God gave us our first building—a place to call home
            </p>
          </div>

          {/* Reverse Layout: Image First (Right Side) */}
          <Row className="align-items-center g-5 mb-5">
            <Col lg={6} className="order-lg-2">
              <div
                className="rounded shadow-lg overflow-hidden"
                style={{
                  height: "450px",
                  background:
                    "linear-gradient(135deg, rgba(142,36,170,0.1) 0%, rgba(194,24,91,0.1) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid #8e24aa",
                }}
              >
                <p className="text-center text-muted px-4">
                  <span className="fs-5 fw-light">
                    Image: Anfani Church Building
                  </span>
                  <br />
                  <span className="fs-6">[First church structure]</span>
                </p>
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <h3 className="fw-bold mb-4" style={{ color: "#8e24aa" }}>
                A Building, A Miracle, A New Beginning
              </h3>
              <p className="fs-5 lh-lg mb-4 text-muted">
                As the fellowship grew beyond the capacity of homes, God opened
                a door we could never have imagined. Through faith, sacrifice,
                and the generosity of believers, we acquired our first church
                building at Anfani.
              </p>
              <p className="fs-5 lh-lg mb-4 text-muted">
                It was more than a structure—it was a testimony of God's
                provision. Every brick laid was a declaration of faith. Every
                service held was a celebration of His faithfulness. We had a
                place to gather, to worship, to grow.
              </p>
              <p className="fs-5 lh-lg text-muted">
                The Anfani Church became a beacon of hope in the community.
                Souls were saved, families were restored, and the fire of
                revival began to spread beyond our walls.
              </p>
            </Col>
          </Row>

          {/* Highlighted Memory Card */}
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <Card
                className="border-0 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(142,36,170,0.05) 0%, rgba(194,24,91,0.05) 100%)",
                  borderLeft: "5px solid #8e24aa",
                }}
              >
                <Card.Body className="p-5">
                  <h4 className="fw-bold mb-3" style={{ color: "#8e24aa" }}>
                    A Testament of Faith
                  </h4>
                  <p className="fs-5 lh-lg text-muted mb-0">
                    "Looking back at the Anfani Church era, we see God's hand at
                    work in every detail. From fundraising campaigns fueled by
                    faith to dedication services filled with the presence of the
                    Holy Spirit, this building represented a covenant between
                    God and His people. It was here that generations learned to
                    pray, worship, and serve."
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Image Gallery - Anfani Era */}
          <Row className="g-4">
            <Col md={6}>
              <figure className="mb-0">
                <div
                  className="rounded shadow overflow-hidden"
                  style={{
                    height: "350px",
                    background:
                      "linear-gradient(135deg, rgba(142,36,170,0.1) 0%, rgba(194,24,91,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center px-3">
                    <span className="d-block fw-light">
                      Church Dedication Service
                    </span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <figcaption className="text-center mt-3 text-muted fst-italic">
                  The day we dedicated our first building to God
                </figcaption>
              </figure>
            </Col>
            <Col md={6}>
              <figure className="mb-0">
                <div
                  className="rounded shadow overflow-hidden"
                  style={{
                    height: "350px",
                    background:
                      "linear-gradient(135deg, rgba(142,36,170,0.1) 0%, rgba(194,24,91,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center px-3">
                    <span className="d-block fw-light">
                      Sunday Service at Anfani
                    </span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <figcaption className="text-center mt-3 text-muted fst-italic">
                  A full sanctuary, a joyful congregation
                </figcaption>
              </figure>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          ERA 3: ADEOYO AUDITORIUM ERA
          Season of Expansion
      ======================================== */}
      <section
        className="adeoyo-auditorium-era py-5"
        style={{ background: "#faf8f5" }}
      >
        <Container className="py-5">
          {/* Era Header */}
          <div className="text-center mb-5">
            <p
              className="text-uppercase fw-bold mb-2"
              style={{ color: "#c2185b", letterSpacing: "2px" }}
            >
              Chapter Three • 2010s
            </p>
            <h2 className="display-4 fw-bold mb-3" style={{ color: "#4a148c" }}>
              The Adeoyo Auditorium Era
            </h2>
            <p
              className="lead fs-5 text-muted"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Growing beyond walls—expanding our reach and impact
            </p>
          </div>

          {/* Story + Large Featured Image */}
          <Row className="align-items-center g-5 mb-5">
            <Col lg={6}>
              <div
                className="rounded shadow-lg overflow-hidden"
                style={{
                  height: "500px",
                  background:
                    "linear-gradient(135deg, rgba(194,24,91,0.1) 0%, rgba(211,47,47,0.1) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid #c2185b",
                }}
              >
                <p className="text-center text-muted px-4">
                  <span className="fs-5 fw-light">
                    Image: Adeoyo Auditorium Worship
                  </span>
                  <br />
                  <span className="fs-6">
                    [Congregation in larger facility]
                  </span>
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <h3 className="fw-bold mb-4" style={{ color: "#c2185b" }}>
                Expansion by Divine Design
              </h3>
              <p className="fs-5 lh-lg mb-4 text-muted">
                As the congregation continued to multiply, we knew God was
                calling us to expand. The Adeoyo Auditorium became our next
                season—a spacious venue that could accommodate the growing
                numbers of souls hungry for the Word and the presence of God.
              </p>
              <p className="fs-5 lh-lg mb-4 text-muted">
                This era was marked by bold faith and strategic vision. We
                hosted revival meetings, conferences, and evangelistic crusades
                that drew thousands. The auditorium became a center of
                transformation, where miracles happened and lives were changed.
              </p>
              <p className="fs-5 lh-lg text-muted">
                Our reach extended beyond the church walls. Outreach programs,
                community initiatives, and missions became central to our
                identity. We were no longer just a local church—we were becoming
                a movement.
              </p>
            </Col>
          </Row>

          {/* Image Grid - Adeoyo Highlights */}
          <Row className="g-4 mb-5">
            <Col md={4}>
              <figure className="mb-0">
                <div
                  className="rounded shadow overflow-hidden"
                  style={{
                    height: "280px",
                    background:
                      "linear-gradient(135deg, rgba(194,24,91,0.1) 0%, rgba(211,47,47,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center px-3">
                    <span className="d-block fw-light">Revival Conference</span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <figcaption className="text-center mt-3 text-muted fst-italic">
                  Thousands gathered for breakthrough
                </figcaption>
              </figure>
            </Col>
            <Col md={4}>
              <figure className="mb-0">
                <div
                  className="rounded shadow overflow-hidden"
                  style={{
                    height: "280px",
                    background:
                      "linear-gradient(135deg, rgba(194,24,91,0.1) 0%, rgba(211,47,47,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center px-3">
                    <span className="d-block fw-light">Community Outreach</span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <figcaption className="text-center mt-3 text-muted fst-italic">
                  Extending love beyond the sanctuary
                </figcaption>
              </figure>
            </Col>
            <Col md={4}>
              <figure className="mb-0">
                <div
                  className="rounded shadow overflow-hidden"
                  style={{
                    height: "280px",
                    background:
                      "linear-gradient(135deg, rgba(194,24,91,0.1) 0%, rgba(211,47,47,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center px-3">
                    <span className="d-block fw-light">Youth Convention</span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <figcaption className="text-center mt-3 text-muted fst-italic">
                  Raising the next generation
                </figcaption>
              </figure>
            </Col>
          </Row>

          {/* Quote Card */}
          <Row className="justify-content-center">
            <Col lg={8}>
              <div
                className="text-center p-5 rounded shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(194,24,91,0.05) 0%, rgba(211,47,47,0.05) 100%)",
                  borderTop: "4px solid #c2185b",
                }}
              >
                <p
                  className="fs-4 fw-bold mb-0 fst-italic"
                  style={{ color: "#c2185b" }}
                >
                  "The Adeoyo era taught us that when God expands your vision,
                  He also provides the capacity to carry it."
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          ERA 4: AJINDE CATHEDRAL ERA
          The Established House
      ======================================== */}
      <section
        className="ajinde-cathedral-era py-5 text-white"
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
              "radial-gradient(circle at 70% 30%, rgba(255,215,0,0.1) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        ></div>
        <Container className="py-5 position-relative">
          {/* Era Header */}
          <div className="text-center mb-5">
            <p
              className="text-uppercase fw-bold mb-2"
              style={{ color: "#ffd700", letterSpacing: "2px" }}
            >
              Chapter Four • Present Day
            </p>
            <h2 className="display-4 fw-bold mb-3">The Ajinde Cathedral Era</h2>
            <p
              className="lead fs-5"
              style={{ maxWidth: "700px", margin: "0 auto", opacity: 0.9 }}
            >
              Our permanent dwelling—a cathedral of glory and worship
            </p>
          </div>

          {/* Story + Featured Image (Reverse) */}
          <Row className="align-items-center g-5 mb-5">
            <Col lg={6} className="order-lg-2">
              <div
                className="rounded shadow-lg overflow-hidden"
                style={{
                  height: "500px",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid rgba(255,215,0,0.5)",
                }}
              >
                <p
                  className="text-center px-4"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <span className="fs-5 fw-light">
                    Image: Ajinde Cathedral Exterior
                  </span>
                  <br />
                  <span className="fs-6">
                    [Magnificent cathedral structure]
                  </span>
                </p>
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <h3 className="fw-bold mb-4" style={{ color: "#ffd700" }}>
                A House of Glory, Established Forever
              </h3>
              <p className="fs-5 lh-lg mb-4" style={{ opacity: 0.95 }}>
                The Ajinde Cathedral represents the culmination of decades of
                faith, sacrifice, and divine favor. This magnificent edifice
                stands as a testament to God's faithfulness and the unwavering
                commitment of His people.
              </p>
              <p className="fs-5 lh-lg mb-4" style={{ opacity: 0.95 }}>
                Built with excellence and consecrated for worship, the cathedral
                is more than a building—it is a spiritual landmark. Here, the
                presence of God dwells richly. Here, thousands gather to
                worship, pray, and encounter the living God.
              </p>
              <p className="fs-5 lh-lg" style={{ opacity: 0.95 }}>
                From a living room to a cathedral—our journey has been marked by
                God's grace at every step. And this is not the end, but a new
                beginning of greater exploits in the Kingdom.
              </p>
            </Col>
          </Row>

          {/* Cathedral Features Grid */}
          <Row className="g-4 mb-5">
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 bg-white text-dark">
                <div
                  style={{
                    height: "200px",
                    background:
                      "linear-gradient(135deg, rgba(106,27,154,0.1) 0%, rgba(194,24,91,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center">
                    <span className="d-block">Sanctuary</span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <Card.Body>
                  <h6 className="fw-bold text-center">Main Sanctuary</h6>
                  <p className="text-muted text-center small mb-0">
                    Seating thousands in worship
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 bg-white text-dark">
                <div
                  style={{
                    height: "200px",
                    background:
                      "linear-gradient(135deg, rgba(106,27,154,0.1) 0%, rgba(194,24,91,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center">
                    <span className="d-block">Prayer Tower</span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <Card.Body>
                  <h6 className="fw-bold text-center">24/7 Prayer Tower</h6>
                  <p className="text-muted text-center small mb-0">
                    Intercession never ceases
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 bg-white text-dark">
                <div
                  style={{
                    height: "200px",
                    background:
                      "linear-gradient(135deg, rgba(106,27,154,0.1) 0%, rgba(194,24,91,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center">
                    <span className="d-block">Conference Hall</span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <Card.Body>
                  <h6 className="fw-bold text-center">Conference Center</h6>
                  <p className="text-muted text-center small mb-0">
                    Hosting nations
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 bg-white text-dark">
                <div
                  style={{
                    height: "200px",
                    background:
                      "linear-gradient(135deg, rgba(106,27,154,0.1) 0%, rgba(194,24,91,0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted text-center">
                    <span className="d-block">Children's Wing</span>
                    <span className="fs-6">[Placeholder]</span>
                  </p>
                </div>
                <Card.Body>
                  <h6 className="fw-bold text-center">Children's Ministry</h6>
                  <p className="text-muted text-center small mb-0">
                    Training the next generation
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Closing Statement */}
          <Row className="justify-content-center">
            <Col lg={10}>
              <div
                className="text-center p-5 rounded"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "2px solid rgba(255,215,0,0.3)",
                }}
              >
                <h4 className="fw-bold mb-4" style={{ color: "#ffd700" }}>
                  The Journey Continues
                </h4>
                <p className="fs-5 lh-lg mb-4" style={{ opacity: 0.95 }}>
                  From a living room to a cathedral, our history is a testimony
                  of God's faithfulness. Every season, every building, every
                  transition has been marked by His presence and provision.
                </p>
                <p className="fs-5 fw-bold mb-0" style={{ color: "#ffd700" }}>
                  We honor the past, celebrate the present, and anticipate the
                  future with faith and expectation.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          LEGACY TIMELINE SUMMARY
      ======================================== */}
      <section className="legacy-timeline py-5 bg-light">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h3 className="display-6 fw-bold mb-3" style={{ color: "#4a148c" }}>
              Timeline of Grace
            </h3>
            <p className="lead text-muted">Four chapters, one divine story</p>
          </div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="text-center">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #6a1b9a, #8e24aa)",
                    fontSize: "1.5rem",
                  }}
                >
                  1
                </div>
                <h6 className="fw-bold mb-2">House Fellowship</h6>
                <p className="text-muted small">1990s • Humble Beginnings</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #8e24aa, #c2185b)",
                    fontSize: "1.5rem",
                  }}
                >
                  2
                </div>
                <h6 className="fw-bold mb-2">Anfani Church</h6>
                <p className="text-muted small">Early 2000s • First Building</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                    fontSize: "1.5rem",
                  }}
                >
                  3
                </div>
                <h6 className="fw-bold mb-2">Adeoyo Auditorium</h6>
                <p className="text-muted small">2010s • Expansion Era</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #d32f2f, #f57c00)",
                    fontSize: "1.5rem",
                  }}
                >
                  4
                </div>
                <h6 className="fw-bold mb-2">Ajinde Cathedral</h6>
                <p className="text-muted small">Present • Established Glory</p>
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

export default AboutHistory;