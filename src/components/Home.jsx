"use client";

import "./Home.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const Countdown = dynamic(
  () => import("./Countdown"),
  {
    ssr: false,
  }
);


export default function Home() {
  

  const { scrollY } = useScroll();

  // Image Animations
  const scale = useTransform(scrollY, [0, 700], [1, 1.18]);
  const y = useTransform(scrollY, [0, 700], [0, -70]);
  const opacity = useTransform(scrollY, [0, 700], [1, 0.85]);

  // Ripple Effect
  const createRipple = (e) => {
    const button = e.currentTarget;

    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${e.clientX - rect.left - radius}px`;

    circle.style.top = `${e.clientY - rect.top - radius}px`;

    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) ripple.remove();

    button.appendChild(circle);
  };
  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    document.documentElement.style.setProperty("--mouse-x", `${x}px`);
    document.documentElement.style.setProperty("--mouse-y", `${y}px`);
};

  return (
    <section className="hero" id="home" onMouseMove={handleMouseMove}>
      <div className="particles">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
    <div className="cursor-glow"></div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Animated Grid */}
      <div className="grid-overlay"></div>

      {/* Ambient Glow */}
      <div className="ambient-glow"></div>

      <div className="hero-container">

        {/* LEFT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="event-tag"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
          >
            ACCELERATING INDIA'S ELECTRIC FUTURE
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
          >
            VIDYUT
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .6 }}
          >
            Driving The Next Generation Of Electric Mobility
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
          >
            EVOLVE Club's flagship event bringing together innovators,
            engineers, entrepreneurs and future leaders to shape the future
            of sustainable transportation and clean energy.
          </motion.p>

          <motion.div
  className="hero-actions"
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
>

  <motion.div className="hero-buttons">

    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 35px rgba(34,197,94,.45)"
      }}
      whileTap={{ scale: .96 }}
      className="primary-btn"
      onClick={createRipple}
    >
      Register Now
      <ArrowRight size={18} />
    </motion.button>
    
    <div className="hero-actions">

  

  

</div>

  </motion.div>

  

</motion.div>
<Countdown />

        </motion.div>
        

        {/* RIGHT */}
        <div className="hero-right">

          <picture>

            {/* Mobile Image */}
            <source
              media="(max-width:768px)"
              srcSet="/ev-bg5.jpeg"
            />

            {/* Desktop Image */}
            <motion.img
              src="/ev-bg4.jpeg"
              alt="Electric Vehicle"
              className="vehicle-image"
              style={{
                scale,
                y,
                opacity
              }}
            />

          </picture>

        </div>

      </div>

    </section>
  );
}