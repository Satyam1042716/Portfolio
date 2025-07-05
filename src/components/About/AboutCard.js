import React from "react";
import { Card } from "react-bootstrap";
import "./AboutCard.css";

const AboutCard = () => {
  return (
    <Card className="about-card">
      <Card.Body>
        <Card.Text style={{ textAlign: "left" }}>
          <strong>Hello! I'm <span className="text-gradient">Satyam Jaiswal</span></strong>, a passionate <strong>Full Stack Developer</strong> with a strong foundation in <strong>modern web technologies</strong> and a drive to create <strong>innovative solutions</strong>.<br /><br />
          I specialize in building scalable web applications using <strong className="text-gradient">React</strong>, <strong className="text-gradient">Node.js</strong>, and <strong className="text-gradient">cloud technologies</strong>. My journey in technology began with curiosity and has evolved into a passion for creating impactful digital solutions.<br /><br />
          With expertise in both <strong>frontend</strong> and <strong>backend development</strong>, I enjoy bringing ideas to life through <strong>clean, efficient code</strong> and <strong>user-centric design</strong>. I'm constantly learning and exploring <strong>new technologies</strong> to stay current with industry trends.<br /><br />
          When I'm not coding, you can find me <strong>contributing to open-source projects</strong>, <strong>participating in hackathons</strong>, or <strong>sharing knowledge</strong> with the developer community. I believe in the power of technology to solve <strong>real-world problems</strong> and make a positive impact.<br /><br />
          I'm always excited to take on <strong>new challenges</strong> and collaborate on <strong>interesting projects</strong>. <span className="text-gradient">Let's connect and build something amazing together!</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
