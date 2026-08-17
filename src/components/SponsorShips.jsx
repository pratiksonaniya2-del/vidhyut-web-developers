"use client";

import { useState } from "react";
import Image from "next/image";
import "./sponsors.css";

import {
  FaArrowRight,
  FaTimes,
  FaGlobe,
  FaUsers,
  FaBolt,
  FaHandshake,
  FaBullhorn,
  FaRocket,
  FaBuilding,
  FaLandmark,
} from "react-icons/fa";

/* ---------------- BENEFITS ---------------- */

const benefits = [
  {
    icon: <FaGlobe />,
    title: "National Visibility",
    desc: "Showcase your brand before India's brightest engineering talent.",
  },
  {
    icon: <FaUsers />,
    title: "Talent Recruitment",
    desc: "Connect with students for internships and hiring opportunities.",
  },
  {
    icon: <FaBolt />,
    title: "Product Showcase",
    desc: "Display EV products, charging tech and mobility innovations.",
  },
  {
    icon: <FaHandshake />,
    title: "Industry Networking",
    desc: "Meet startups, founders and researchers under one platform.",
  },
  {
    icon: <FaBullhorn />,
    title: "Media Reach",
    desc: "Gain visibility through social campaigns and digital branding.",
  },
  {
    icon: <FaRocket />,
    title: "Innovation Ecosystem",
    desc: "Support India's sustainable mobility movement through VIDHYUT.",
  },
];

/* ---------------- SPONSORS ---------------- */

const sponsors = [
  { name: "Ola", logo: "/sponsors/ola.png" },
  { name: "BGauss", logo: "/sponsors/bgauss.png" },
  { name: "Mercedes", logo: "/sponsors/mercedes.png" },
  { name: "BYD", logo: "/sponsors/byd.png" },
  { name: "Tata", logo: "/sponsors/tata.png" },
  { name: "Mahindra", logo: "/sponsors/mahindra.png" },
  { name: "Hyundai", logo: "/sponsors/hyundai.png" },
  { name: "BMW", logo: "/sponsors/bmw.png" },
  { name: "KV", logo: "/sponsors/kv.png" },
];

/* ---------------- MEDIA ---------------- */

const mediaPartners = [
  { name: "CW Behind The Wheel", logo: "/media/cw.png" },
  { name: "City of Lakes Bhopal", logo: "/media/cityoflakes.png" },
  { name: "MPO4", logo: "/media/mpo4.png" },
  { name: "Humans of EV", logo: "/media/humansofev.png" },
  { name: "BKB Bhopali", logo: "/media/bkb.png" },
  { name: "Harmal Wala Blogger", logo: "/media/harmal.png" },
  { name: "RP Vlogs", logo: "/media/rpvlogs.png" },
  { name: "Dainik Bhaskar", logo: "/media/db.png" },
];

export default function SponsorShips() {
  const [open, setOpen] = useState(false);

  return (
    <section className="sp-section" id="sponsors">
      {/* Background */}
      <div className="sp-glow sp-left" />
      <div className="sp-glow sp-right" />
      <div className="sp-grid" />

      <div className="sp-container">
        {/* HERO */}
        <div className="sp-header">
          <span className="sp-tag">SPONSORSHIP</span>

          <h2>
            Powering India's EV <span>Future</span>
          </h2>

          <p>
            Partner with VIDHYUT and connect your brand with innovators,
            startups, researchers and the country's leading electric mobility
            community.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="sp-benefits">
          {benefits.map((item, i) => (
            <div className="sp-card" key={i}>
              <div className="sp-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* COLLABORATIONS */}
        <div className="sp-collab-wrapper">
          <div className="sp-title">
            <h2>Official Collaborations</h2>
          </div>

          <div className="sp-collab-grid">
            {/* Industry */}
            <div className="sp-collab-card large">
              <div className="sp-collab-icon">
                <FaBuilding />
              </div>

              <span>INDUSTRY COLLABORATOR</span>

              <div className="sp-brand-logo">
                <Image
                  src="/partners/vaayu.png"
                  alt="Vaayu"
                  width={170}
                  height={60}
                />
              </div>

              <p>Official Industry Collaborator of VIDHYUT 2026.</p>
            </div>

            {/* Government */}
            <div className="sp-collab-card">
              <div className="sp-collab-icon">
                <FaLandmark />
              </div>

              <span>GOVERNMENT COLLABORATION</span>

              <div className="sp-brand-logo">
                <Image
                  src="/partners/mpgov.png"
                  alt="MP Government"
                  width={150}
                  height={55}
                />
              </div>
            </div>

            {/* Platform */}
            <div className="sp-collab-card">
              <div className="sp-collab-icon">
                <FaRocket />
              </div>

              <span>PLATFORM PARTNER</span>

              <div className="sp-brand-logo">
                <Image
                  src="/partners/unstop.png"
                  alt="Unstop"
                  width={140}
                  height={55}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SPONSORS */}
        <div className="sp-title">
          <h2>Our Sponsors</h2>
        </div>

        <div className="sp-marquee">
          <div className="sp-track">
            {[...sponsors, ...sponsors].map((item, i) => (
              <div className="sp-logo-card" key={i}>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={60}
                  className="sp-logo-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MEDIA */}
        <div className="sp-title">
          <h2>Media Partners</h2>
        </div>

        <div className="sp-media-grid">
          {mediaPartners.map((item, i) => (
            <div className="sp-media-card" key={i}>
              <Image
                src={item.logo}
                alt={item.name}
                width={130}
                height={55}
                className="sp-media-logo"
              />

              <p>{item.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="sp-cta">
          <div className="sp-cta-content">
            <span className="sp-tag">PARTNERSHIP OPPORTUNITY</span>

            <h2>Ready to Power VIDHYUT 2026?</h2>

            <p>
              Become an official sponsor and position your brand at the forefront
              of India's electric mobility revolution.
            </p>

            <button className="sp-btn" onClick={() => setOpen(true)}>
              Become A Sponsor
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="sp-modal-overlay">
          <div className="sp-modal">
            <button className="sp-close" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>

            <div className="sp-modal-header">
              <span className="sp-tag">SPONSORSHIP FORM</span>

              <h2>Become A Sponsor</h2>

              <p>
                Fill in your company details and our partnership team will
                contact you within 24–48 hours.
              </p>
            </div>

            <form className="sp-form">
              <div className="sp-row">
                <input placeholder="Company Name" required />
                <input placeholder="Contact Person" required />
              </div>

              <div className="sp-row">
                <input
                  type="email"
                  placeholder="Business Email"
                  required
                />
                <input placeholder="Phone Number" required />
              </div>

              <input placeholder="Company Website" />

              <select required defaultValue="">
                <option value="" disabled>
                  Sponsorship Tier
                </option>
                <option>Silver Partner</option>
                <option>Gold Partner</option>
                <option>Platinum Partner</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your company..."
              />

              <button type="submit" className="sp-submit">
                Submit Inquiry
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}