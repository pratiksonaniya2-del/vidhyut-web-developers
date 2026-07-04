"use client";

import "./Footer.css";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-line"></div>

        <div className="footer-container">
          {/* Left Side */}
          <div className="footer-brand">
            <h2>VIDYUT</h2>

            <p>
              A student-led EV summit bringing together innovation,
              sustainability and future mobility under one platform.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h3>Quick Links</h3>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#events">Events</a>
              <a href="#sponsors">Sponsors</a>
            </div>
            <div>
              <h3>Company</h3>
              <a href="#">Gallery</a>
              <a href="#">FAQs</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h3>Social</h3>
              <a
                className="instagram"
                href="https://www.instagram.com/evolve_nitb?igsh=MW41MDhnMzllMWFt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
                Instagram
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/company/evolve-nit-bhopal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a className="twitter" href="#">
                <FaXTwitter />
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 VIDYUT. All Rights Reserved.</p>

          <p>
            Built by <span>Evolve Team</span>
          </p>
        </div>
      </footer>

      
      <section className="footer-title-section">
        <h1>VIDYUT</h1>
      </section>
    </>
  );
}