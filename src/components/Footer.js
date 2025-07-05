import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section social">
          <div className="social-links" aria-label="Social Media Links">
            <a href="https://github.com/Satyam1042716" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/satyam-jaiswal-15489a259" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:satyamjaiswal1042@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Satyam Jaiswal. All rights reserved.</p>
        <p className="designer-credit">Designed and Developed by <strong>Satyam Jaiswal</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
