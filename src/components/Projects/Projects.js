import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import "./Projects.css";

function Projects() {
  return (
    <section>
      <Container fluid className="project-section">
        <Container>
          <Row>
            <Col md={12} className="project-header">
              <h1 className="project-heading">
                My Recent <strong className="text-gradient">Works </strong>
              </h1>
              <p style={{ color: "white" }}>
                Here are a few projects I've worked on recently.
              </p>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {/* Full-Stack E-Commerce Website */}
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Full-Stack E-Commerce Website"
                description={<>
                  <div style={{fontWeight:'bold', color:'#48bb78'}}>React, Next.js, Node.js, MongoDB <span style={{float:'right', color:'#667eea'}}>May 2025</span></div>
                  <ul style={{marginTop:8, marginBottom:0, paddingLeft:20}}>
                    <li>Developed a full-stack e-commerce platform with user authentication and cart system.</li>
                    <li>Integrated Stripe and PayPal APIs, achieving 99.9% payment success rate.</li>
                    <li>Built an admin dashboard that improved inventory management efficiency by 40%.</li>
                    <li>Optimized frontend performance to reduce average page load time by 30%.</li>
                  </ul>
                </>}
                ghLink="https://github.com/satyamjaiswal1042/ecommerce-platform"
                demoLink="https://ecommerce-demo.com"
              />
            </Col>
            {/* Smart Irrigation System */}
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Smart Irrigation System"
                description={<>
                  <div style={{fontWeight:'bold', color:'#48bb78'}}>Arduino UNO, NodeMCU, ThingSpeak, Blynk <span style={{float:'right', color:'#667eea'}}>Jan 2025</span></div>
                  <ul style={{marginTop:8, marginBottom:0, paddingLeft:20}}>
                    <li>Designed an automated irrigation system using DHT11 and soil moisture sensors.</li>
                    <li>Programmed microcontrollers for real-time data collection and response.</li>
                    <li>Enabled remote monitoring and control via mobile apps.</li>
                    <li>Reduced water consumption by 30% using smart automation.</li>
                  </ul>
                </>}
                ghLink="https://github.com/satyamjaiswal1042/smart-irrigation"
                demoLink="https://smart-irrigation-demo.com"
              />
            </Col>
            {/* Portfolio Website */}
            <Col md={4} className="project-card">
              <ProjectCards
                imgPath="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                title="Portfolio Website"
                description="A modern, responsive portfolio website built with React and styled with custom CSS. Features smooth animations, dark mode, and mobile-first design."
                ghLink="https://github.com/satyamjaiswal1042/portfolio"
                demoLink="https://portfolio-demo.com"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;