import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import "./About.css";

function About() {
  return (
    <section>
      <Container fluid className="about-section">
        <Container>
          <div className="about-card-main">
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={5}
                style={{ paddingTop: "60px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="about" className="img-fluid" />
              </Col>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Know Who <strong className="text-gradient">I'M</strong>
                </h1>
                <AboutCard />
              </Col>
            </Row>
          </div>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={12}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Professional <strong className="text-gradient">Rundown</strong>
              </h1>
              <Techstack />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={12}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="text-gradient">Tools</strong> I use
              </h1>
              <Toolstack />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={12}>
              <div className="contact-section">
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Let's <strong className="text-gradient">Connect</strong>
                </h1>
                <p style={{ fontSize: "1.2em", marginBottom: "30px" }}>
                  I'm always open to discussing new opportunities, innovative projects, 
                  and creative ideas. Let's build something amazing together!
                </p>
                <a
                  href="https://linkedin.com/in/satyam-jaiswal-15489a259"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-custom"
                >
                  Get In Touch
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default About;
