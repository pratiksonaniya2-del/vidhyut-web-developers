"use client";

import { useState } from "react";
import Image from "next/image";
import "./sponsors.css";

import {
  FaArrowRight,
  FaTimes,
  FaStore,
  FaBullhorn,
  FaLandmark,
  FaLinkedin,
  FaImage,
  FaHotel,
  FaBuilding,
  FaRocket,
} from "react-icons/fa";
const benefits = [
  {
    icon: <FaStore />,
    title: "Dedicated EV Booth",
    desc: "Exclusive exhibition booth to showcase your EVs, charging solutions and engage directly with visitors throughout VIDHYUT Expo.",
  },
  {
    icon: <FaBullhorn />,
    title: "10+ Media Coverage",
    desc: "Brand exposure through Dainik Bhaskar, Humans of EV, MPO4, RP Vlogs, CW Behind The Wheel and official media partners.",
  },
  {
    icon: <FaLandmark />,
    title: "Ministry Recognition",
    desc: "Recognition under an event supported by Government collaboration and the Ministry of Power & Renewable Energy.",
  },
  {
    icon: <FaLinkedin />,
    title: "Official Partner Spotlight",
    desc: "Featured across LinkedIn, Instagram, website, newsletters and official promotional campaigns.",
  },
  {
    icon: <FaImage />,
    title: "Branding Everywhere",
    desc: "Logo placement on posters, brochures, standees, event backdrop, website and all promotional creatives.",
  },
  {
    icon: <FaHotel />,
    title: "Premium Hospitality",
    desc: "Networking opportunities and direct interaction with bureaucrats, investors and industry leaders.",
  },
];

/* ---------------- COLLABORATIONS ---------------- */

const collaborations = [
  {
    icon: <FaBuilding />,
    tag: "INDUSTRY",
    title: "Vaayu",
    desc: "Official Industry Collaborator",
  },
  {
    icon: <FaLandmark />,
    tag: "GOVERNMENT",
    title: "Madhya Pradesh",
    desc: "Government Collaboration",
  },
  {
    icon: <FaRocket />,
    tag: "PLATFORM",
    title: "Unstop",
    desc: "Official Platform Partner",
  },
];

/* ---------------- SPONSORS ---------------- */

const sponsors = [
  { name: "Ola", logo: "/ola.png" },
  { name: "BGauss", logo: "/bgauss.png" },
  { name: "Mercedes", logo: "/mercedes.png" },
  { name: "BYD", logo: "/byd.png" },
  { name: "Tata", logo: "/tata.png" },
  { name: "Mahindra", logo: "/mahindra.png" },
  { name: "Hyundai", logo: "/hyundai.png" },
  { name: "BMW", logo: "/bmw.png" },
  { name: "KV", logo: "/kv.png" },
];

/* ---------------- MEDIA PARTNERS ---------------- */

const mediaPartners = [
  { name: "CW Behind The Wheel", logo: "/media/cw.png" },
  { name: "City of Lakes Bhopal", logo: "/media/cityoflakes.png" },
  { name: "MPO4", logo: "/mp4.png" },
  { name: "Humans of EV", logo: "/humansev.jpg" },
  { name: "BKB Bhopali", logo: "/media/bkb.png" },
  { name: "Harmal Wala Blogger", logo: "/media/harmal.png" },
  { name: "RP Vlogs", logo: "/rpvlogs.png" },
  { name: "Dainik Bhaskar", logo: "/dainik.png" },
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
        {/* ================= HEADER ================= */}

        <div className="sp-header">
  <h2>
    Powering India's EV&nbsp;<span>Future</span>
  </h2>

  <p>
    Partner with VIDHYUT and connect your brand with innovators,
    startups, researchers, government bodies and India's fastest
    growing electric mobility ecosystem.
  </p>
</div>

        {/* ================= BENEFITS ================= */}

        <div className="sp-title">
          <h2>Why Become a VIDHYUT Partner?</h2>

          <p className="sp-subtitle">
            Every partnership goes beyond branding—it's an opportunity to engage
            with future engineers, policymakers, investors and the EV community.
          </p>
        </div>

        <div className="sp-benefits">
          {benefits.map((item, i) => (
            <div className="sp-card" key={i}>
              <div className="sp-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ================= OFFICIAL COLLABORATIONS ================= */}

        <div className="sp-collab-wrapper">
          <div className="sp-title">
            <h2>Official Collaborations</h2>

            <p className="sp-subtitle">
              Supported by industry, government and India's leading innovation
              platform.
            </p>
          </div>

          <div className="collab-carousel">
            <div className="collab-track">
              {[...collaborations, ...collaborations].map((item, i) => (
                <div className="collab-slide" key={i}>
                  <div className="collab-icon">{item.icon}</div>

                  <span>{item.tag}</span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SPONSORS ================= */}

        {/* ---------- SPONSORS ---------- */}

<div className="sp-title">
  <h2>Our Sponsors</h2>
</div>

<div className="logo-marquee">
  <div className="logo-track">
    {[...sponsors, ...sponsors].map((item, i) => (
      <div className="logo-item" key={i}>
        <Image
          src={item.logo}
          alt={item.name}
          width={170}
          height={70}
          className="brand-logo"
        />
      </div>
    ))}
  </div>
</div>

        {/* ================= MEDIA PARTNERS ================= */}

        <div className="sp-title">
          <h2>Media Partners</h2>
        </div>

        <div className="sp-media-grid">
  {mediaPartners.map((item, i) => (
    <Image
      key={i}
      src={item.logo}
      alt={item.name}
      width={120}
      height={120}
      className="sp-media-logo"
    />
  ))}
</div>

        {/* ================= CTA ================= */}

        <div className="sp-cta">
          <div className="sp-cta-content">
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

      {/* ================= MODAL ================= */}

      {open && (
        <div className="sp-modal-overlay">
          <div className="sp-modal">
            <button className="sp-close" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>

            <div className="sp-modal-header">
              <h2>Become a VIDHYUT Partner</h2>

              <p>
                Fill in your company details and our partnership team will
                contact you within 24–48 hours.
              </p>
            </div>

            <form className="sp-form">
              <div className="sp-row">
                <input type="text" placeholder="Company Name" required />
                <input type="text" placeholder="Contact Person" required />
              </div>

              <div className="sp-row">
                <input
                  type="email"
                  placeholder="Business Email"
                  required
                />
                <input type="tel" placeholder="Phone Number" required />
              </div>

              <input type="text" placeholder="Company Website" />

              <select required defaultValue="">
                <option value="" disabled>
                  Select Partnership Category
                </option>

                <option>Title Sponsor</option>
                <option>EV Sponsor</option>
                <option>Industry Collaborator</option>
                <option>Platform Partner</option>
                <option>Media Partner</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your company and partnership goals..."
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