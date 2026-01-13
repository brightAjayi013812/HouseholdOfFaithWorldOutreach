import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const Donations = () => {
  // ========================================
  // CHURCH ACCOUNT DATA
  // IMPORTANT: Verify all details before deployment
  // ========================================

  const churchAccounts = [
    {
      category: "Tithes & General Offerings",
      accounts: [
        {
          accountName: "House of Fire Pentecostal Church",
          bankName: "First Bank of Nigeria",
          accountNumber: "1234567890",
          purpose: "Tithes, General Offerings & Church Operations",
        },
        {
          accountName: "House of Fire Pentecostal Church",
          bankName: "Access Bank",
          accountNumber: "0987654321",
          purpose: "Tithes & Regular Giving",
        },
      ],
    },
    {
      category: "Building Project",
      accounts: [
        {
          accountName: "HOF Cathedral Building Fund",
          bankName: "Zenith Bank",
          accountNumber: "5555666677",
          purpose: "Cathedral Expansion & Construction",
        },
      ],
    },
    {
      category: "Missions & Outreach",
      accounts: [
        {
          accountName: "HOF Missions & Evangelism",
          bankName: "GTBank",
          accountNumber: "3334445556",
          purpose: "Missions, Evangelism & Community Outreach",
        },
      ],
    },
    {
      category: "Special Seeds & Projects",
      accounts: [
        {
          accountName: "HOF Special Projects",
          bankName: "UBA",
          accountNumber: "7778889990",
          purpose: "Special Seeds, Projects & Partner Support",
        },
      ],
    },
  ];

  return (
    <div className="donations-page">
      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section
        className="donations-hero text-center text-white py-5"
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
              Partner With Us
            </h1>
            <p
              className="lead fs-3 fw-light"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Honoring God through cheerful, generous, and faith-filled giving
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
          BIBLICAL / INSPIRATIONAL CONTEXT
      ======================================== */}
      <section className="giving-context py-5 bg-light">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center">
                <h2
                  className="display-5 fw-bold mb-4"
                  style={{ color: "#6a1b9a" }}
                >
                  The Heart of Giving
                </h2>
                <p className="fs-5 lh-lg text-muted mb-4">
                  Giving is not merely a financial transaction—it is an act of
                  worship, a declaration of trust, and a partnership with God in
                  advancing His Kingdom. When we give cheerfully and faithfully,
                  we open doors for divine provision, blessing, and impact that
                  extends far beyond what we can see.
                </p>
                <p className="fs-5 lh-lg text-muted mb-4">
                  As stewards of what God has entrusted to us, we honor Him by
                  supporting the vision, mission, and work of the church. Your
                  generosity fuels evangelism, feeds the hungry, builds houses
                  of worship, and transforms lives around the world.
                </p>
                <p className="fs-5 fw-bold mb-0" style={{ color: "#c2185b" }}>
                  Thank you for partnering with us in faith. Together, we are
                  making an eternal impact.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          CHURCH ACCOUNT DETAILS SECTION (CORE)
      ======================================== */}
      <section className="account-details py-5 bg-white">
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#6a1b9a" }}>
              Church Account Details
            </h2>
            <p className="lead text-muted fs-5">
              Official bank accounts for your tithes, offerings, and seeds
            </p>
          </div>

          {/* Loop Through Account Categories */}
          {churchAccounts.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-5">
              {/* Category Header */}
              <div className="text-center mb-4">
                <Badge
                  className="px-4 py-2 fs-5"
                  style={{
                    background: "linear-gradient(135deg, #6a1b9a, #c2185b)",
                    border: "none",
                  }}
                >
                  {category.category}
                </Badge>
              </div>

              {/* Accounts in This Category */}
              <Row className="g-4 justify-content-center">
                {category.accounts.map((account, accountIndex) => (
                  <Col key={accountIndex} lg={6}>
                    <Card
                      className="border-0 shadow-sm h-100"
                      style={{
                        borderLeft: "4px solid #6a1b9a",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
                      <Card.Body className="p-4">
                        {/* Account Name */}
                        <h5
                          className="fw-bold mb-3"
                          style={{ color: "#6a1b9a" }}
                        >
                          {account.accountName}
                        </h5>

                        {/* Bank Name */}
                        <div className="mb-3">
                          <p className="text-muted small mb-1">
                            <strong>Bank Name:</strong>
                          </p>
                          <p
                            className="fs-5 fw-bold mb-0"
                            style={{ color: "#333" }}
                          >
                            {account.bankName}
                          </p>
                        </div>

                        {/* Account Number */}
                        <div className="mb-3">
                          <p className="text-muted small mb-1">
                            <strong>Account Number:</strong>
                          </p>
                          <div
                            className="p-3 rounded text-center"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(106,27,154,0.05), rgba(194,24,91,0.05))",
                              border: "2px dashed #6a1b9a",
                              fontSize: "1.5rem",
                              fontWeight: "bold",
                              letterSpacing: "2px",
                              color: "#6a1b9a",
                              fontFamily: "monospace",
                            }}
                          >
                            {account.accountNumber}
                          </div>
                        </div>

                        {/* Purpose */}
                        <div>
                          <p className="text-muted small mb-1">
                            <strong>Purpose:</strong>
                          </p>
                          <p className="text-muted mb-0 fst-italic">
                            {account.purpose}
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>

      {/* ========================================
          ALTERNATIVE GIVING INSTRUCTIONS
      ======================================== */}
      <section
        className="giving-methods py-5"
        style={{ background: "#faf8f5" }}
      >
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#8e24aa" }}>
              How to Give
            </h2>
            <p className="lead text-muted fs-5">
              Multiple convenient ways to partner with us
            </p>
          </div>

          <Row className="g-4">
            {/* Bank Transfer */}
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center p-4 h-100">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #6a1b9a, #8e24aa)",
                    fontSize: "2rem",
                  }}
                >
                  🏦
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                  Bank Transfer
                </h5>
                <p className="text-muted small mb-0">
                  Transfer directly to any of the church accounts listed above
                  using your mobile banking app or at your bank branch.
                </p>
              </Card>
            </Col>

            {/* In-Person Giving */}
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center p-4 h-100">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #8e24aa, #c2185b)",
                    fontSize: "2rem",
                  }}
                >
                  ⛪
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#8e24aa" }}>
                  In-Person Giving
                </h5>
                <p className="text-muted small mb-0">
                  Bring your tithes and offerings during any of our Sunday or
                  mid-week services. Offering envelopes are available.
                </p>
              </Card>
            </Col>

            {/* Online Banking */}
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center p-4 h-100">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #c2185b, #d32f2f)",
                    fontSize: "2rem",
                  }}
                >
                  📱
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#c2185b" }}>
                  Mobile Banking
                </h5>
                <p className="text-muted small mb-0">
                  Use your mobile banking app for instant transfers. Simply
                  select the appropriate church account based on your giving
                  intention.
                </p>
              </Card>
            </Col>

            {/* Standing Order */}
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center p-4 h-100">
                <div
                  className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #d32f2f, #f57c00)",
                    fontSize: "2rem",
                  }}
                >
                  🔄
                </div>
                <h5 className="fw-bold mb-3" style={{ color: "#d32f2f" }}>
                  Standing Order
                </h5>
                <p className="text-muted small mb-0">
                  Set up a recurring transfer with your bank to automatically
                  give monthly. Contact the church office for assistance.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          GIVING INTEGRITY & ASSURANCE
      ======================================== */}
      <section className="giving-integrity py-5 bg-white">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card
                className="border-0 shadow-lg p-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(106,27,154,0.03), rgba(194,24,91,0.03))",
                  borderTop: "4px solid #6a1b9a",
                }}
              >
                <div className="text-center mb-4">
                  <div
                    className="mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #6a1b9a, #c2185b)",
                      fontSize: "2.5rem",
                    }}
                  >
                    🛡️
                  </div>
                  <h3 className="fw-bold mb-3" style={{ color: "#6a1b9a" }}>
                    Accountability & Transparency
                  </h3>
                </div>

                <Row className="g-4">
                  <Col md={4}>
                    <div className="text-center">
                      <h6 className="fw-bold mb-2" style={{ color: "#6a1b9a" }}>
                        Proper Stewardship
                      </h6>
                      <p className="text-muted small mb-0">
                        Every seed is handled with integrity and used for
                        Kingdom purposes under pastoral oversight and financial
                        accountability.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center">
                      <h6 className="fw-bold mb-2" style={{ color: "#8e24aa" }}>
                        Clear Purpose
                      </h6>
                      <p className="text-muted small mb-0">
                        Your giving supports church operations, missions,
                        building projects, and community outreach as designated.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center">
                      <h6 className="fw-bold mb-2" style={{ color: "#c2185b" }}>
                        Faithful Management
                      </h6>
                      <p className="text-muted small mb-0">
                        We honor your trust by managing resources wisely and
                        reporting regularly on the impact of your partnership.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          IMPORTANT NOTICE (Optional)
      ======================================== */}
      <section className="giving-notice py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div
                className="p-4 rounded text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,193,7,0.1), rgba(255,152,0,0.1))",
                  border: "2px solid #ffc107",
                }}
              >
                <h6 className="fw-bold mb-2" style={{ color: "#f57c00" }}>
                  ⚠️ Important Notice
                </h6>
                <p className="text-muted small mb-0">
                  Please ensure you are transferring to the correct account. The
                  church will never request donations via phone calls, text
                  messages, or personal accounts. If in doubt, contact the
                  church office directly at <strong>+234 123 456 7890</strong>{" "}
                  or
                  <strong> info@hofchurch.com</strong>.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          CLOSING BLESSING / APPRECIATION
      ======================================== */}
      <section
        className="giving-blessing py-5 text-white"
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
                  Thank You for Your Faithfulness
                </h3>
                <p className="fs-5 lh-lg mb-4" style={{ opacity: 0.95 }}>
                  Your generosity is a testimony of faith and a declaration of
                  partnership with God. Every seed you sow is not just a
                  financial contribution—it is an investment in souls, a
                  catalyst for transformation, and a witness to the world of
                  God's goodness.
                </p>
                <p className="fs-5 lh-lg mb-5" style={{ opacity: 0.95 }}>
                  We pray that as you give cheerfully, God will open the windows
                  of heaven over your life, multiply your seed, and bless you
                  beyond measure.
                </p>
                <p className="fs-3 fw-bold mb-0" style={{ color: "#ffd700" }}>
                  May the Lord richly reward your generosity. Amen.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bottom Spacing */}
      <div className="pb-5"></div>
    </div>
  );
};

export default Donations;
