"use client";

import "./Countdown.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FlipDigit from "./FlipDigit";

export default function Countdown() {

  const targetDate = new Date("September 9, 2026 00:00:00").getTime();

  const calculateTime = () => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    return {

      days: Math.floor(distance / (1000 * 60 * 60 * 24)),

      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      ),

      minutes: Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      ),

      seconds: Math.floor(
        (distance % (1000 * 60)) / 1000
      )

    };

  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {

    const interval = setInterval(() => {

      setTimeLeft(calculateTime());

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const splitDigits = (value) =>
    value
      .toString()
      .padStart(2, "0")
      .split("");

  return (

    <motion.div

      className="countdown-dashboard"

      initial={{
        opacity: 0,
        y: 35,
        scale: .95
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }}

      transition={{
        duration: .8,
        delay: 1.2
      }}

    >

      {/* Background Glow */}

      <div className="dashboard-glow"></div>

      {/* Animated Border */}

      <div className="dashboard-border"></div>

      {/* Grid */}

      <div className="dashboard-grid"></div>

      {/* Heading */}

      <div className="dashboard-heading">

        <span className="heading-dot"></span>

        EVENT STARTS IN

      </div>

      {/* Main Timer */}

      <div className="dashboard-row">

        <TimeBlock
          digits={splitDigits(timeLeft.days)}
          label="DAYS"
        />

        

        <TimeBlock
          digits={splitDigits(timeLeft.hours)}
          label="HOURS"
        />


        <TimeBlock
          digits={splitDigits(timeLeft.minutes)}
          label="MINUTES"
        />


        <TimeBlock
          digits={splitDigits(timeLeft.seconds)}
          label="SECONDS"
        />

      </div>

      {/* Bottom Energy Line */}

      <div className="energy-line">

        <div className="energy-beam"></div>

      </div>

    </motion.div>

  );

}

function Separator() {

  return (

    <motion.div

      className="separator"

      animate={{
        opacity: [.4, 1, .4]
      }}

      transition={{
        duration: 1,
        repeat: Infinity
      }}

    >

      :

    </motion.div>

  );

}

function TimeBlock({ digits, label }) {

  return (

    <div className="time-block">

      <div className="digit-group">

        {digits.map((digit, index) => (

          <FlipDigit

            key={index + digit}

            value={digit}

          />

        ))}

      </div>

      <div className="time-label">

        {label}

      </div>

    </div>

  );

}