"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Events.module.css";

/* ── Stats ─────────────────────────────────── */
const stats = [
  { value: 500,  suffix: "+", label: "Participants" },
  { value: 25,   suffix: "+", label: "EVs Showcased" },
  { value: 4,    suffix: "",  label: "Events Hosted" },
  { value: 100,  suffix: "+", label: "Industry Experts" },
];

/* ── Event Cards ────────────────────────────── */
const events = [
  {
    tag: "Flagship",
    title: "EV Expo",
    desc: "An arena of new-age electric vehicles with 25+ EVs across luxury and long-range segments. Test rides, on-spot displays, and a showcase of the future of green mobility.",
    accent: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    tag: "Competition",
    title: "Tech Track 2.0",
    desc: "A dynamic platform for innovators and critical thinkers to challenge their analytical and technical skills — from problem statement to final pitch.",
    accent: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    tag: "Knowledge",
    title: "Industry Talk",
    desc: "Engaging sessions featuring EV industry experts and startup founders sharing real-world insights, innovation strategies, and future trends in electric mobility.",
    accent: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    tag: "Research",
    title: "Research Symposium",
    desc: "A poster presentation competition where students and professionals exhibited technical research on EVs and emerging technologies, judged by industry leaders.",
    accent: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
];

/* ── Count-up hook ──────────────────────────── */
function useCountUp(target, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const duration = 2000;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, started]);
  return count;
}

/* ── Stat pill ──────────────────────────────── */
function StatPill({ value, suffix, label, started, delay }) {
  const count = useCountUp(value, started);
  return (
    <div
      className={styles.statPill}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.statValue}>
        {count}<span className={styles.statSuffix}>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

/* ── Main component ─────────────────────────── */
export default function Events() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="events" className={styles.section}>

      {/* Background */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      <div className={styles.container}>

        {/* Header */}
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            What We've Built
          </span>
          <h2 className={styles.heading}>
            Milestones That<br />
            <em className={styles.headingAccent}>Define Vidyut</em>
          </h2>
          <p className={styles.subheading}>
            From packed seminar halls to live EV showcases — every edition of Vidyut
            has pushed the boundaries of what a student-led EV summit can achieve.
          </p>
        </div>

        {/* Stats row */}
        <div className={`${styles.statsRow} ${visible ? styles.statsVisible : ""}`}>
          {stats.map((s, i) => (
            <StatPill key={s.label} {...s} started={visible} delay={i * 120} />
          ))}
        </div>

        {/* Divider */}
        <div className={`${styles.divider} ${visible ? styles.visible : ""}`}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>Our Events</span>
          <span className={styles.dividerLine} />
        </div>

        {/* Event cards */}
        <div className={styles.eventsGrid}>
          {events.map((ev, i) => (
            <div
              key={ev.title}
              className={`${styles.eventCard} ${ev.accent ? styles.eventCardAccent : ""} ${visible ? styles.cardVisible : ""}`}
              style={{ transitionDelay: `${0.25 + i * 0.12}s` }}
            >
              {/* Hover glow */}
              <div className={styles.cardGlow} />

              <div className={styles.cardTop}>
                <div className={styles.cardIconWrap}>
                  {ev.icon}
                </div>
                <span className={styles.cardTag}>{ev.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{ev.title}</h3>
              <p className={styles.cardDesc}>{ev.desc}</p>
              <div className={styles.cardBar} />
            </div>
          ))}
        </div>

        {/* Photo strip */}
        <div className={`${styles.photoStrip} ${visible ? styles.visible : ""}`}>
          <div className={styles.photoLabel}>
            <span className={styles.eyebrowDot} />
            <span>Moments from Vidyut</span>
          </div>
          <div className={styles.photos}>
            <div className={`${styles.photo} ${styles.photoWide}`}>
              <img src="/team.jpeg" alt="Evolve team at Vidyut" />
              <div className={styles.photoOverlay}>
                <span>Evolve Team</span>
              </div>
            </div>
            <div className={styles.photoStack}>
              <div className={styles.photo}>
                <img src="/techtrack.jpeg" alt="TechTrack 2.0 stage" />
                <div className={styles.photoOverlay}>
                  <span>Tech Track 2.0</span>
                </div>
              </div>
              <div className={styles.photo}>
                <img src="/image2.JPG" alt="Seminar session" />
                <div className={styles.photoOverlay}>
                  <span>Industry Talk</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
