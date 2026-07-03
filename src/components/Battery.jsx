"use client";

import "./Battery.css";
import { motion } from "framer-motion";

export default function Battery({ percentage }) {

  return (

    <div className="battery-wrapper">

      {/* Outer Glow */}
      <div className="battery-glow"></div>

      {/* Battery */}

      <div className="battery">

        {/* Battery Head */}

        <div className="battery-cap"></div>

        {/* Charging Fill */}

        <motion.div
          className="battery-fill"

          animate={{
            width: `${percentage}%`
          }}

          transition={{
            duration: 0.35,
            ease: "easeOut"
          }}
        >

          {/* Moving Shine */}

          <motion.div
            className="battery-shine"

            animate={{
              x: ["-120%", "250%"]
            }}

            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear"
            }}
          />

        </motion.div>

        {/* Percentage */}

        <motion.div
          className="battery-percentage"

          key={percentage}

          initial={{
            opacity: 0,
            y: 8
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.25
          }}
        >
          {percentage}%
        </motion.div>

      </div>

      {/* Charging Status */}

      <motion.p
        className="battery-status"

        animate={{
          opacity: [0.4, 1, 0.4]
        }}

        transition={{
          repeat: Infinity,
          duration: 1.5
        }}
      >
        Charging Future Mobility...
      </motion.p>

    </div>

  );

}