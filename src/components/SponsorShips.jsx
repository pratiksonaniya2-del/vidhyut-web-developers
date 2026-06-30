'use client';

import './sponsors.css';

import {
  FaBullhorn,
  FaUsers,
  FaIndustry,
  FaLightbulb,
  FaArrowRight
} from 'react-icons/fa';

export default function Sponsorship() {
  return (
    <section className="Sponsors">

      <div className="sponsor-header">

        <span className="section-tag">
          PARTNERSHIP OPPORTUNITIES
        </span>

        <h2>
          Powering India's <span>EV Revolution</span>
        </h2>

        <p>
          VIDYUT brings together innovators,
          startups, industry leaders and future
          engineers under one platform.
          Partner with us and shape the future
          of mobility.
        </p>

      </div>

      <div className="sponsor-stats">

        <div className="stat-card">
          <h3>500+</h3>
          <p>Expected Participants</p>
        </div>

        <div className="stat-card">
          <h3>25+</h3>
          <p>Electric Vehicles</p>
        </div>

        <div className="stat-card">
          <h3>10+</h3>
          <p>Strategic Partners</p>
        </div>

        <div className="stat-card">
          <h3>18K+</h3>
          <p>Prize Pool</p>
        </div>

      </div>

      <div className="benefits-grid">

        <div className="benefit-card large">
          <FaBullhorn />

          <h3>Brand Visibility</h3>

          <p>
            Showcase your company to students,
            professionals and EV enthusiasts.
          </p>
        </div>

        <div className="benefit-card">
          <FaUsers />

          <h3>Talent Access</h3>

          <p>
            Meet future engineers and innovators.
          </p>
        </div>

        <div className="benefit-card">
          <FaIndustry />

          <h3>Industry Presence</h3>

          <p>
            Strengthen your EV ecosystem footprint.
          </p>
        </div>

        <div className="benefit-card large">
          <FaLightbulb />

          <h3>Innovation Network</h3>

          <p>
            Connect with startups, researchers,
            creators and industry experts.
          </p>
        </div>

      </div>

      <div className="cta-card">

        <h2>Become A Sponsor</h2>

        <p>
          Join India's growing electric mobility
          ecosystem and empower the next generation.
        </p>

        <button>
          Partner With VIDHYUT
          <FaArrowRight />
        </button>

      </div>

    </section>
  );
}