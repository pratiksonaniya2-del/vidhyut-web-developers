"use client";

import "./Achievements.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const achievements = [
  {
    title: "National Media Coverage",

    description:
      "VIDYUT has gained recognition across various media platforms for promoting innovation and sustainable mobility solutions.",

    detailedDescription:
      "VIDYUT has received recognition across national and regional media outlets for promoting sustainable mobility and EV innovation. The event has become a major platform connecting students, startups, researchers and industry experts to accelerate India's transition toward clean transportation.",

    image: "/media2.jpeg",
  },

  {
    title: "Tech Community Impact",

    description:
      "Bringing together students, developers, innovators and technology enthusiasts to build a stronger EV ecosystem.",

    detailedDescription:
      "VIDYUT creates a collaborative environment where students, developers and innovators work together to solve real-world challenges in electric mobility, battery technology and smart transportation systems.",

    image: "/tech2.jpeg",
  },

  {
    title: "EV Innovation Recognition",

    description:
      "Celebrating groundbreaking ideas and engineering excellence in electric mobility and clean energy technologies.",

    detailedDescription:
      "The event encourages engineering excellence by providing a platform for innovative EV projects, clean energy solutions and future mobility technologies that can shape the transportation industry.",

    image: "/innovation.jpeg",
  },

  {
    title: "Startup & Robotics Excellence",

    description:
      "Providing a platform where startups, robotics teams and future entrepreneurs showcase transformative solutions.",

    detailedDescription:
      "VIDYUT empowers startups and robotics teams by giving them exposure, networking opportunities and a stage to showcase cutting-edge technologies to industry leaders and investors.",

    image: "/startup.jpeg",
  },
];

export default function Achievements() {

  const [rotation, setRotation] = useState({});
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleMouseMove = (e, index) => {

    if (window.innerWidth < 768) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 16;
    const rotateX = ((y / rect.height) - 0.5) * -16;

    setRotation((prev) => ({
      ...prev,
      [index]: {
        rotateX,
        rotateY,
      },
    }));
  };

  const handleMouseLeave = (index) => {
    setRotation((prev) => ({
      ...prev,
      [index]: {
        rotateX: 0,
        rotateY: 0,
      },
    }));
  };

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section className="achievements" id="achievements">

      <div className="achievements-header">

        

        <h2>
          Building the Future of
          <span> Electric Mobility</span>
        </h2>

        <p>
          Beyond competitions, VIDYUT creates a platform that drives
          innovation, collaboration, entrepreneurship and technological
          excellence across the EV ecosystem.
        </p>

      </div>

      <div className="achievements-grid">

        {achievements.map((item, index) => (

          <motion.div
            key={index}
            className="achievement-card"

            initial={{
              opacity: 0,
              y: 60
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            animate={{
              rotateX: rotation[index]?.rotateX || 0,
              rotateY: rotation[index]?.rotateY || 0
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              stiffness: 250,
              damping: 18
            }}

            viewport={{ once: true }}

            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}

            whileHover={{
              scale: 1.03
            }}
          >

            <div className="card-bg-number">
              0{index + 1}
            </div>

            <div className="image-wrapper">

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="achievement-image"
              />

              <div className="image-overlay"></div>

            </div>

            <div className="card-content">

              <div className="card-top-line"></div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div
                className="card-footer"
                onClick={() => openModal(item)}
              >
                <span>Explore More →</span>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

      <AnimatePresence>

        {selectedAchievement && (

          <motion.div
            className="modal-overlay"
            onClick={closeModal}

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="achievement-modal"

              onClick={(e) => e.stopPropagation()}

              initial={{
                scale: 0.8,
                opacity: 0
              }}

              animate={{
                scale: 1,
                opacity: 1
              }}

              exit={{
                scale: 0.8,
                opacity: 0
              }}

              transition={{
                duration: 0.3
              }}
            >

              <button
                className="close-modal"
                onClick={closeModal}
              >
                ×
              </button>

              <div className="modal-image-wrapper">

                <Image
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  fill
                  className="modal-image"
                />

              </div>

              <div className="modal-content">

                <h2>
                  {selectedAchievement.title}
                </h2>

                <p>
                  {selectedAchievement.detailedDescription}
                </p>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}