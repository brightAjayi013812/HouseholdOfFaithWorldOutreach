import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-3 w-100"
      style={{
        background:
          "linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)",
        zIndex: 1030,
      }}
    >
      <Container>
        {/* Main Footer Content */}
        <Row className="g-4 pb-4">
          {/* About Section */}
          <Col md={6} lg={4}>
            <h5 className="fw-bold mb-3" style={{ color: "#ffd700" }}>
              Household of Faith Church
            </h5>
            <p className="lh-lg" style={{ opacity: 0.9, fontSize: "0.95rem" }}>
              A Spirit-filled, Bible-believing Pentecostal church committed to
              worship, prayer, evangelism, and transforming lives through the
              power of God.
            </p>
            <div className="mt-3">
              <p className="mb-2 fw-bold" style={{ fontSize: "0.9rem" }}>
                Follow Us:
              </p>
              <div className="d-flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  📘
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  📺
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  📷
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                  style={{
                    fontSize: "1.5rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  🐦
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={6} lg={2}>
            <h5 className="fw-bold mb-3" style={{ color: "#ffd700" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about/story"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Our Story
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about/history"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Our History
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/media/sermon"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Sermons
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/media/gallery"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </Col>

          {/* Get Involved */}
          <Col md={6} lg={3}>
            <h5 className="fw-bold mb-3" style={{ color: "#ffd700" }}>
              Get Involved
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/live"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Watch Live
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/donations"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Give Online
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Join a Ministry
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  style={{
                    opacity: 0.9,
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Prayer Request
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={6} lg={3}>
            <h5 className="fw-bold mb-3" style={{ color: "#ffd700" }}>
              Contact Us
            </h5>
            <div style={{ opacity: 0.9, fontSize: "0.95rem" }}>
              <p className="mb-2">
                <strong>Address:</strong>
                <br />
                123 Revival Avenue
                <br />
                Glory District, Abuja
                <br />
                FCT, Nigeria
              </p>
              <p className="mb-2">
                <strong>Phone:</strong>
                <br />
                <a
                  href="tel:+2341234567890"
                  className="text-white text-decoration-none"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  +234 123 456 7890
                </a>
              </p>
              <p className="mb-2">
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:info@hofchurch.com"
                  className="text-white text-decoration-none"
                  style={{ transition: "color 0.3s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#ffd700")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  info@hofchurch.com
                </a>
              </p>
              <p className="mb-0">
                <strong>Office Hours:</strong>
                <br />
                Mon - Fri: 9:00 AM - 5:00 PM
              </p>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <div
          className="my-4"
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.2)",
          }}
        ></div>

        {/* Bottom Footer */}
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              &copy; {new Date().getFullYear()} Household of Faith Church. All
              rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Built with faith & purpose |
              <a
                href="#"
                className="text-white text-decoration-none ms-2"
                style={{ transition: "color 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd700")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              >
                Privacy Policy
              </a>{" "}
              |
              <a
                href="#"
                className="text-white text-decoration-none ms-2"
                style={{ transition: "color 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd700")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              >
                Terms of Use
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
