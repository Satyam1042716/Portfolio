import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Satyam Jaiswal</span>
        </Link>
        
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            <i className="fas fa-user"></i> About
          </Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
            <i className="fas fa-folder-open"></i> Projects
          </Link>
          <Link to="/resume" className="nav-link" onClick={() => setIsOpen(false)}>
            <i className="fas fa-file-alt"></i> Resume
          </Link>
          <a
            href="https://linkedin.com/in/satyam-jaiswal-15489a259"
            target="_blank"
            rel="noreferrer"
            className="nav-link contact-btn"
          >
            <i className="fas fa-paper-plane"></i> Get In Touch
          </a>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
