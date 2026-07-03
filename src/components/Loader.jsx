"use client";

import "./Loader.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Battery from "./Battery";

export default function Loader({ onComplete }) {
  const [percentage, setPercentage] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Client-side particles (avoids hydration mismatch)
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 25 }, () => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 4}s`,
    }));

    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setPercentage(current);

      if (current >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoadingComplete(true);
        }, 500);

        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1300);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        animate={
          loadingComplete
            ? {
                opacity: 0,
                scale: 1.05,
                filter: "blur(8px)",
              }
            : {
                opacity: 1,
              }
        }
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {/* Background Glow */}
        <div className="loader-glow"></div>

        {/* Grid */}
        <div className="loader-grid"></div>

        {/* Floating Particles */}
        <div className="loader-particles">
          {particles.map((particle, index) => (
            <span
              key={index}
              style={{
                left: particle.left,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="loader-content">
          {/* Logo */}
          <motion.h1
            className="loader-title"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            VIDYUT
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="loader-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Driving The Future Of Electric Mobility
          </motion.p>

          {/* Battery */}
          <Battery percentage={percentage} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}