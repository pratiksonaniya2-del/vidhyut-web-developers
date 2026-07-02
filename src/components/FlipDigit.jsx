"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function FlipDigit({ value }) {
  return (
    <div className="flip-card">

      <AnimatePresence mode="wait">

        <motion.span
          key={value}
          className="flip-number"

          initial={{
            rotateX: -90,
            opacity: 0,
            y: 15,
            filter: "blur(6px)"
          }}

          animate={{
            rotateX: 0,
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}

          exit={{
            rotateX: 90,
            opacity: 0,
            y: -15,
            filter: "blur(6px)"
          }}

          transition={{
            duration: .45,
            ease: "easeOut"
          }}

        >
          {value}
        </motion.span>

      </AnimatePresence>

    </div>
  );
}