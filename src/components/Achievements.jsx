"use client";

import "./Achievements.css";
import Image from "next/image";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "National Media Coverage",
    description:
      "VIDHYUT has gained recognition across various media platforms for promoting innovation and sustainable mobility solutions.",
    image: "/media2.jpeg",
  },
  {
    title: "Tech Community Impact",
    description:
      "Bringing together students, developers, innovators and technology enthusiasts to build a stronger EV ecosystem.",
    image: "/tech2.jpeg",
  },
  {
    title: "EV Innovation Recognition",
    description:
      "Celebrating groundbreaking ideas and engineering excellence in electric mobility and clean energy technologies.",
    image: "/innovation.jpeg",
  },
  {
    title: "Startup & Robotics Excellence",
    description:
      "Providing a platform where startups, robotics teams and future entrepreneurs showcase transformative solutions.",
    image: "/startup.jpeg",
  },
];

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-header">
        <span className="section-tag">
          ⚡ ACHIEVEMENTS & IMPACT
        </span>

        <h2>
          Building the Future of
          <span> Electric Mobility</span>
        </h2>

        <p>
          Beyond competitions, VIDHYUT creates a platform that drives
          innovation, collaboration, entrepreneurship and technological
          excellence across the EV ecosystem.
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="card-bg-number">
              0{index + 1}
            </div>

            <div className="image-wrapper">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="achievement-image"
              />

              <div className="image-overlay"></div>
            </div>

            <div className="card-content">
              <div className="card-top-line"></div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="card-footer">
                <span>Explore Impact</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}