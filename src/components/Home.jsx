"use client";

import "./Home.css";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  BatteryCharging,
  Trophy,
} from "lucide-react";

export default function Home() {
  return (
    <section className="hero">

      {/* Background Overlay */}
      <div className="overlay"></div>

      {/* Green Glow Effects */}
      <div className="green-glow glow-1"></div>
      <div className="green-glow glow-2"></div>

      <div className="hero-container">

        {/* Left Side */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="event-tag">
            ⚡ ACCELERATING INDIA'S ELECTRIC FUTURE
          </div>

          <h1 className="hero-title">
            VIDHYUT
          </h1>

          <h2 className="hero-subtitle">
            Driving The Next Generation Of Electric Mobility
          </h2>

          <p className="hero-description">
            EVOLVE Club's flagship event bringing together innovators,
            engineers, entrepreneurs and future leaders to shape the
            future of sustainable transportation and clean energy.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Register Now
              <ArrowRight size={18} />
            </button>

            <button className="secondary-btn">
              Explore Event
            </button>

          </div>

          <div className="stats">

            <div className="stat">
              <h3>500+</h3>
              <span>Participants</span>
            </div>

            <div className="stat">
              <h3>10+</h3>
              <span>Industry Experts</span>
            </div>

            <div className="stat">
              <h3>20+</h3>
              <span>EV Projects</span>
            </div>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="feature-card">

            <div className="feature">
              <Zap size={36} />
              <div>
                <h3>EV Design Challenge</h3>
                <p>
                  Build innovative solutions for the future
                  of mobility.
                </p>
              </div>
            </div>

            <div className="feature">
              <BatteryCharging size={36} />
              <div>
                <h3>Expert Sessions</h3>
                <p>
                  Learn from industry leaders and EV pioneers.
                </p>
              </div>
            </div>

            <div className="feature">
              <Trophy size={36} />
              <div>
                <h3>Future Mobility Showcase</h3>
                <p>
                  Experience cutting-edge electric technologies.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}