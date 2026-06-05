"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "Sponsors",     href: "#sponsors" },
  { label: "Events",       href: "#events" },
  { label: "Team",         href: "#team" },
  { label: "Achievements", href: "#achievements" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (label) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>

          {/* Logo */}
          <a href="#home" className={styles.logo} onClick={() => handleNavClick("Home")}>
            <Image
              src="https://evolve.nitb.in/Evolve_Logo.png"
              alt="Evolve Logo"
              width={44}
              height={44}
              className={styles.logoImg}
              unoptimized
            />
          </a>

          {/* Desktop nav links */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${activeLink === link.label ? styles.navLinkActive : ""}`}
                onClick={() => handleNavClick(link.label)}
              >
                {link.label}
                <span className={styles.linkUnderline} />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className={styles.actions}>
            <a href="#events" className={styles.ctaBtn} onClick={() => handleNavClick("Events")}>
              Register Now
            </a>

            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`${styles.mobileLink} ${activeLink === link.label ? styles.mobileLinkActive : ""}`}
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={() => handleNavClick(link.label)}
            >
              <span className={styles.mobileLinkNumber}>0{i + 1}</span>
              {link.label}
            </a>
          ))}
          <a href="#events" className={styles.mobileCta} onClick={() => handleNavClick("Events")}>
            Register Now
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
