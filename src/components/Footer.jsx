"use client";

import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-divider"></div>

      <div className="footer-content">
        <div className="footer-brand">
          <h1>VIDHYUT</h1>

          <p>
            A student-led EV summit bringing together innovation, technology and
            sustainability under one platform.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#team">Team</a>
        </div>

        <div className="footer-contact">
          <h3>Contact-us</h3>
          <a href="https://www.instagram.com/evolve_nitb?igsh=MW41MDhnMzllMWFt" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            Instagram
          </a>

          <a href="https://www.linkedin.com/company/evolve-nit-bhopal/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 VIDHYUT. All Rights Reserved.</span>

        <span>Built by Evolve Team</span>
      </div>
    </footer>
  );
}
