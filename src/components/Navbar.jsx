"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
 
const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "Events",     href: "#events" },
  { label: "Achievements",       href: "#achievements" },
  { label: "Sponsors",         href: "#Sponsors" },
  { label: "Team", href: "#teams" },
];
 
export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
 
 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          const active = navLinks.find(
            (link) => link.href === `#${id}`
          );

          if (active) {
            setActiveLink(active.label);
          }
        }
      });
    },
    {
      root: null,
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0,
    }
  );

  navLinks.forEach((link) => {
    const section = document.querySelector(link.href);

    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);
 
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, []);
 
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
 
  const handleNavClick = (label) => {

  setMenuOpen(false);

  setActiveLink(label);

};
 
  return (
    <>
      <header className={`${styles.wrapper} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.navbar}>
 
          {/* Logo */}
          <a href="#home" className={styles.logo} onClick={() => handleNavClick("Home")}>
            <Image
              src="https://evolve.nitb.in/Evolve_Logo.png"
              alt="Evolve Logo"
              width={40}
              height={40}
              className={styles.logoImg}
              unoptimized
            />
          </a>
 
          {/* Center pill */}
          <div className={styles.linksPill}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${activeLink === link.label ? styles.navLinkActive : ""}`}
                onClick={() => handleNavClick(link.label)}
              >
                <span className={styles.linkInner}>
                  <span className={styles.linkFront}>{link.label}</span>
                  <span className={styles.linkBack}>{link.label}</span>
                </span>
              </a>
            ))}
          </div>
 
          {/* Right */}
          <div className={styles.right}>
            <a href="#events" className={styles.ctaBtn} onClick={() => handleNavClick("Events")}>
              <span className={styles.linkInner}>
                <span className={styles.linkFront}>Register Now</span>
                <span className={styles.linkBack}>Register Now</span>
              </span>
            </a>
 
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
 
        </nav>
      </header>
 
      {/* Mobile drawer */}
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
              <span className={styles.mobileLinkNum}>0{i + 1}</span>
              {link.label}
            </a>
          ))}
          <a href="#events" className={styles.mobileCta} onClick={() => handleNavClick("Events")}>
            Register Now
          </a>
        </nav>
      </div>
 
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </>
  );
}