import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      {/* ========================================
          HERO / WELCOME SECTION
      ======================================== */}
      <section
        className="contact-hero text-center text-white py-5"
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
              Come Worship With Us
            </h1>
            <p
              className="lead fs-3 fw-light"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              We would love to hear from you and welcome you home
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
          CHURCH LOCATION - MAP SECTION
      ======================================== */}
      <section className="church-location py-5 bg-light">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#6a1b9a" }}>
              Find Us Here
            </h2>
            <p className="lead text-muted fs-5">
              Visit us in person and experience the presence of God
            </p>
          </div>

          {/* Map Container */}
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <Card className="border-0 shadow-lg overflow-hidden">
                <div
                  style={{
                    height: "500px",
                    background:
                      "linear-gradient(135deg, rgba(106,27,154,0.05) 0%, rgba(194,24,91,0.05) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Google Maps Embed Placeholder */}
                  {/* Replace with actual Google Maps iframe */}
                  <iframe
                    title="Church Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019288494177!2d-122.41941548468208!3d37.77492927975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* If you don't have a map URL yet, use this placeholder instead:
                  <div className="text-center p-5">
                    <div 
                      className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #6a1b9a, #c2185b)',
                        fontSize: '2rem'
                      }}
                    >
                      📍
                    </div>
                    <h5 className="fw-bold mb-2" style={{ color: '#6a1b9a' }}>
                      Interactive Map
                    </h5>
                    <p className="text-muted">
                      [Google Maps embed will appear here]
                    </p>
                  </div>
                  */}
                </div>
              </Card>
            </Col>
          </Row>

          {/* Address Details */}
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card
                className="border-0 shadow text-center p-4"
                style={{ borderTop: "4px solid #6a1b9a" }}
              >
                <Card.Body>
                  <h4 className="fw-bold mb-4" style={{ color: "#6a1b9a" }}>
                    House of Fire Pentecostal Church
                  </h4>
                  <address className="mb-0">
                    <p className="fs-5 lh-lg text-muted mb-2">
                      <strong>Address:</strong>
                      <br />
                      123 Revival Avenue, Glory District
                      <br />
                      Abuja, FCT, Nigeria
                    </p>
                    <p className="fs-6 text-muted fst-italic mb-0">
                      <strong>Landmark:</strong> Opposite Kingdom Plaza, near
                      Faith Junction
                    </p>
                  </address>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          CONTACT DETAILS SECTION
      ======================================== */}
      <section className="contact-details py-5">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#6a1b9a" }}>
              Get In Touch
            </h2>
            <p className="lead text-muted fs-5">
              We're here to serve you and answer any questions
            </p>
          </div>

          <Row className="g-4">
            {/* Phone Contact */}
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #6a1b9a, #8e24aa)",
                    fontSize: "1.8rem",
                  }}
                >
                  📞
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                  Call Us
                </h5>
                <p className="text-muted mb-2">
                  <strong>Main Line:</strong>
                  <br />
                  <a
                    href="tel:+2341234567890"
                    className="text-decoration-none"
                    style={{ color: "#c2185b" }}
                  >
                    +234 123 456 7890
                  </a>
                </p>
                <p className="text-muted mb-0">
                  <strong>WhatsApp:</strong>
                  <br />
                  <a
                    href="tel:+2349876543210"
                    className="text-decoration-none"
                    style={{ color: "#c2185b" }}
                  >
                    +234 987 654 3210
                  </a>
                </p>
              </Card>
            </Col>

            {/* Email Contact */}
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #8e24aa, #c2185b)",
                    fontSize: "1.8rem",
                  }}
                >
                  ✉️
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#8e24aa" }}>
                  Email Us
                </h5>
                <p className="text-muted mb-2">
                  <strong>General Inquiries:</strong>
                  <br />
                  <a
                    href="mailto:info@hofchurch.com"
                    className="text-decoration-none"
                    style={{ color: "#c2185b" }}
                  >
                    info@hofchurch.com
                  </a>
                </p>
                <p className="text-muted mb-0">
                  <strong>Prayer Requests:</strong>
                  <br />
                  <a
                    href="mailto:prayer@hofchurch.com"
                    className="text-decoration-none"
                    style={{ color: "#c2185b" }}
                  >
                    prayer@hofchurch.com
                  </a>
                </p>
              </Card>
            </Col>

            {/* Office Hours */}
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                    fontSize: "1.8rem",
                  }}
                >
                  🕐
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#c2185b" }}>
                  Office Hours
                </h5>
                <p className="text-muted mb-2">
                  <strong>Monday - Friday:</strong>
                  <br />
                  9:00 AM - 5:00 PM
                </p>
                <p className="text-muted mb-0">
                  <strong>Saturday:</strong>
                  <br />
                  10:00 AM - 2:00 PM
                </p>
              </Card>
            </Col>

            {/* Service Times */}
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #d32f2f, #f57c00)",
                    fontSize: "1.8rem",
                  }}
                >
                  ⛪
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#d32f2f" }}>
                  Service Times
                </h5>
                <p className="text-muted mb-2">
                  <strong>Sunday Worship:</strong>
                  <br />
                  8:00 AM & 10:30 AM
                </p>
                <p className="text-muted mb-0">
                  <strong>Wednesday Service:</strong>
                  <br />
                  6:00 PM
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          MINISTRY & DEPARTMENT CONTACTS
      ======================================== */}
      <section className="ministry-contacts py-5 bg-light">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#6a1b9a" }}>
              Ministry Contacts
            </h2>
            <p className="lead text-muted fs-5">
              Connect with specific departments for specialized support
            </p>
          </div>

          <Row className="g-4">
            {/* Church Office */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #6a1b9a, #8e24aa)",
                        fontSize: "1.3rem",
                      }}
                    >
                      🏛️
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: "#6a1b9a" }}>
                      Church Office
                    </h5>
                  </div>
                  <p className="text-muted mb-2">
                    For general inquiries, membership, and administrative
                    matters
                  </p>
                  <p className="mb-1">
                    <strong className="text-muted">Phone:</strong>
                    <a
                      href="tel:+2341234567890"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      +234 123 456 7890
                    </a>
                  </p>
                  <p className="mb-0">
                    <strong className="text-muted">Email:</strong>
                    <a
                      href="mailto:office@hofchurch.com"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      office@hofchurch.com
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Pastoral Care */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #8e24aa, #c2185b)",
                        fontSize: "1.3rem",
                      }}
                    >
                      🤲
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: "#8e24aa" }}>
                      Pastoral Care
                    </h5>
                  </div>
                  <p className="text-muted mb-2">
                    For counseling, prayer support, and spiritual guidance
                  </p>
                  <p className="mb-1">
                    <strong className="text-muted">Phone:</strong>
                    <a
                      href="tel:+2349876543211"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      +234 987 654 3211
                    </a>
                  </p>
                  <p className="mb-0">
                    <strong className="text-muted">Email:</strong>
                    <a
                      href="mailto:pastoral@hofchurch.com"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      pastoral@hofchurch.com
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Prayer Line */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                        fontSize: "1.3rem",
                      }}
                    >
                      🙏
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: "#c2185b" }}>
                      Prayer Line
                    </h5>
                  </div>
                  <p className="text-muted mb-2">
                    24/7 prayer support and intercession requests
                  </p>
                  <p className="mb-1">
                    <strong className="text-muted">Phone:</strong>
                    <a
                      href="tel:+2349876543212"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      +234 987 654 3212
                    </a>
                  </p>
                  <p className="mb-0">
                    <strong className="text-muted">Email:</strong>
                    <a
                      href="mailto:prayer@hofchurch.com"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      prayer@hofchurch.com
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Youth Ministry */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #d32f2f, #f57c00)",
                        fontSize: "1.3rem",
                      }}
                    >
                      🎉
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: "#d32f2f" }}>
                      Youth Ministry
                    </h5>
                  </div>
                  <p className="text-muted mb-2">
                    For young adults, teens, and youth programs
                  </p>
                  <p className="mb-1">
                    <strong className="text-muted">Phone:</strong>
                    <a
                      href="tel:+2349876543213"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      +234 987 654 3213
                    </a>
                  </p>
                  <p className="mb-0">
                    <strong className="text-muted">Email:</strong>
                    <a
                      href="mailto:youth@hofchurch.com"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      youth@hofchurch.com
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Media & Technology */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #f57c00, #ff6f00)",
                        fontSize: "1.3rem",
                      }}
                    >
                      🎥
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: "#f57c00" }}>
                      Media Desk
                    </h5>
                  </div>
                  <p className="text-muted mb-2">
                    For streaming, recordings, and technical support
                  </p>
                  <p className="mb-1">
                    <strong className="text-muted">Phone:</strong>
                    <a
                      href="tel:+2349876543214"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      +234 987 654 3214
                    </a>
                  </p>
                  <p className="mb-0">
                    <strong className="text-muted">Email:</strong>
                    <a
                      href="mailto:media@hofchurch.com"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      media@hofchurch.com
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Children's Ministry */}
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #6a1b9a, #c2185b)",
                        fontSize: "1.3rem",
                      }}
                    >
                      👶
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: "#6a1b9a" }}>
                      Children's Ministry
                    </h5>
                  </div>
                  <p className="text-muted mb-2">
                    For kids' programs, Sunday school, and family services
                  </p>
                  <p className="mb-1">
                    <strong className="text-muted">Phone:</strong>
                    <a
                      href="tel:+2349876543215"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      +234 987 654 3215
                    </a>
                  </p>
                  <p className="mb-0">
                    <strong className="text-muted">Email:</strong>
                    <a
                      href="mailto:children@hofchurch.com"
                      className="text-decoration-none ms-2"
                      style={{ color: "#c2185b" }}
                    >
                      children@hofchurch.com
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          VISIT INFORMATION / WHAT TO EXPECT
      ======================================== */}
      <section className="visit-info py-5">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2
                  className="display-5 fw-bold mb-3"
                  style={{ color: "#6a1b9a" }}
                >
                  Planning Your First Visit?
                </h2>
                <p className="lead text-muted fs-5">
                  Here's what you can expect when you worship with us
                </p>
              </div>

              <Row className="g-4">
                <Col md={6}>
                  <Card className="h-100 border-0 shadow-sm p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                      A Warm Welcome
                    </h5>
                    <p className="text-muted lh-lg mb-0">
                      From the moment you arrive, our greeters and ushers will
                      welcome you with open arms. We're a friendly,
                      Spirit-filled community that loves to see new faces. Feel
                      free to ask questions—we're here to help you feel at home.
                    </p>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="h-100 border-0 shadow-sm p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#8e24aa" }}>
                      What to Wear
                    </h5>
                    <p className="text-muted lh-lg mb-0">
                      Come as you are! We believe in modesty and reverence, but
                      we don't have a strict dress code. Whether you wear your
                      Sunday best or casual attire, what matters most is your
                      heart to worship God.
                    </p>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="h-100 border-0 shadow-sm p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#c2185b" }}>
                      Worship Experience
                    </h5>
                    <p className="text-muted lh-lg mb-0">
                      Our services are Spirit-led and vibrant. Expect passionate
                      worship, anointed preaching, and opportunities for prayer
                      and ministry. We believe in the power of God to move,
                      heal, and transform lives.
                    </p>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="h-100 border-0 shadow-sm p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#d32f2f" }}>
                      Parking & Facilities
                    </h5>
                    <p className="text-muted lh-lg mb-0">
                      We have ample parking space available on-site. Our
                      facilities include clean restrooms, a nursery for infants,
                      and dedicated areas for children and youth. Refreshments
                      are served after service.
                    </p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          CLOSING INVITATION SECTION
      ======================================== */}
      <section
        className="closing-invitation py-5 text-white"
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
                  We're Waiting to Welcome You
                </h3>
                <p className="fs-5 lh-lg mb-4" style={{ opacity: 0.95 }}>
                  Whether you're seeking a church home, need prayer, or simply
                  want to experience the presence of God, House of Fire is the
                  place for you. We're more than a church—we're a family united
                  by faith, fire, and the love of Christ.
                </p>
                <p className="fs-5 lh-lg mb-5" style={{ opacity: 0.95 }}>
                  Don't hesitate to reach out through any of the channels above.
                  We would be honored to hear from you, pray with you, and walk
                  with you on your spiritual journey.
                </p>
                <p className="fs-4 fw-bold mb-0" style={{ color: "#ffd700" }}>
                  Come and experience the fire. Come and encounter the King.
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

export default ContactUs;
