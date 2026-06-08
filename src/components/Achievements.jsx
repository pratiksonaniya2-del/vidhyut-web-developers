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
    image: "/images/community.jpg",
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
    <section className="achievements">
      <div className="achievements-header">
        <span>⚡ OUR ACHIEVEMENTS</span>

        <h2>
          Impact Beyond
          <span> Competition</span>
        </h2>

        <p>
          VIDHYUT continues to inspire innovation, recognition,
          collaboration and technological advancement in the
          electric mobility ecosystem.
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
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="achievement-image"
              />

              <div className="image-overlay"></div>

              <div className="card-number">
                0{index + 1}
              </div>
            </div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}