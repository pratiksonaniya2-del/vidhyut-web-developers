"use client";

import { useState } from "react";
import Image from "next/image";
import "./sponsors.css";

import {
  FaArrowRight,
  FaTimes,
  FaStore,
  FaBullhorn,
  FaLandmark,
  FaLinkedin,
  FaImage,
  FaHotel,
  FaBuilding,
  FaRocket,
} from "react-icons/fa";

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: <FaStore />,
    title: "Dedicated EV Booth",
    desc: "Exclusive exhibition booth to showcase your EVs, charging solutions and engage directly with visitors throughout VIDHYUT Expo.",
  },
  {
    icon: <FaBullhorn />,
    title: "10+ Media Coverage",
    desc: "Brand exposure through Dainik Bhaskar, Humans of EV, MPO4, RP Vlogs, CW Behind The Wheel and official media partners.",
  },
  {
    icon: <FaLandmark />,
    title: "Ministry Recognition",
    desc: "Recognition under an event supported by Government collaboration and the Ministry of Power & Renewable Energy.",
  },
  {
    icon: <FaLinkedin />,
    title: "Official Partner Spotlight",
    desc: "Featured across LinkedIn, Instagram, website, newsletters and official promotional campaigns.",
  },
  {
    icon: <FaImage />,
    title: "Branding Everywhere",
    desc: "Logo placement on posters, brochures, standees, event backdrop, website and all promotional creatives.",
  },
  {
    icon: <FaHotel />,
    title: "Premium Hospitality",
    desc: "Networking opportunities and direct interaction with bureaucrats, investors and industry leaders.",
  },
];

/* =========================================================
   OFFICIAL COLLABORATIONS
========================================================= */

const collaborations = [
  {
    icon: <FaBuilding />,
    tag: "INDUSTRY",
    title: "Vaayu",
    desc: "Official Industry Collaborator",
  },
  {
    icon: <FaLandmark />,
    tag: "GOVERNMENT",
    title: "Madhya Pradesh",
    desc: "Government Collaboration",
  },
  {
    icon: <FaRocket />,
    tag: "PLATFORM",
    title: "Unstop",
    desc: "Official Platform Partner",
  },
];

/* =========================================================
   SPONSORS
========================================================= */

const sponsors = [
  {
    name: "Ola",
    logo: "/ola.png",
  },
  {
    name: "BGauss",
    logo: "/bgauss.png",
  },
  {
    name: "Mercedes",
    logo: "/mercedes.png",
  },
  {
    name: "BYD",
    logo: "/byd.png",
  },
  {
    name: "Tata",
    logo: "/tata.png",
  },
  {
    name: "Mahindra",
    logo: "/mahindra.png",
  },
  {
    name: "Hyundai",
    logo: "/hyundai.png",
  },
  {
    name: "BMW",
    logo: "/bmw.png",
  },
  {
    name: "KV",
    logo: "/kv.png",
  },
];

/* =========================================================
   MEDIA PARTNERS
========================================================= */

const mediaPartners = [
  {
    name: "CW Behind The Wheel",
    logo: "/behindthewheel.png",
  },
  {
    name: "City of Lakes Bhopal",
    logo: "/cityoflakes.jpg",
  },
  {
    name: "MPO4",
    logo: "/mp4.png",
  },
  {
    name: "Humans of EV",
    logo: "/humansev.jpg",
  },
  {
    name: "BKB Bhopali",
    logo: "/harmal.jpg",
  },
  {
    name: "Harmal Wala Blogger",
    logo: "/bkb.jpg",
  },
  {
    name: "RP Vlogs",
    logo: "/rpvlogs.png",
  },
  {
    name: "Dainik Bhaskar",
    logo: "/dainik.png",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SponsorShips() {
  /* -------------------------------------------------------
     MODAL STATES
  ------------------------------------------------------- */

  const [open, setOpen] = useState(false);

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  /* -------------------------------------------------------
     FORM SUBMIT
  ------------------------------------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*
      IMPORTANT:
      Preventing default stops the page refresh.
    */

    setLoading(true);
    setError("");

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      companyName: formData.get("companyName")?.trim(),
      contactPerson: formData.get("contactPerson")?.trim(),
      email: formData.get("email")?.trim(),
      phone: formData.get("phone")?.trim(),
      website: formData.get("website")?.trim(),
      category: formData.get("category"),
      message: formData.get("message")?.trim(),
    };

    /*
      Frontend validation
    */

    if (
      !data.companyName ||
      !data.contactPerson ||
      !data.email ||
      !data.phone ||
      !data.category
    ) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      /* ---------------------------------------------------
         SEND REQUEST TO NEXT.JS API
      --------------------------------------------------- */

      const response = await fetch("/api/sponsorship", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      /*
        Don't directly do response.json().

        If API returns HTML because of 404,
        response.json() causes:

        Unexpected token '<'
      */

      const contentType = response.headers.get("content-type") || "";

      let result;

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();

        console.error("API returned non-JSON response:", text);

        throw new Error(
          `Server returned ${response.status}. Please check your API route.`
        );
      }

      /* ---------------------------------------------------
         HANDLE API ERROR
      --------------------------------------------------- */

      if (!response.ok) {
        throw new Error(
          result?.message || "Unable to submit sponsorship inquiry."
        );
      }

      /* ---------------------------------------------------
         SUCCESS
      --------------------------------------------------- */

      console.log("Sponsorship inquiry submitted:", result);

      /*
        Reset form
      */

      form.reset();

      /*
        Close sponsorship form
      */

      setOpen(false);

      /*
        Open success popup
      */

      setSuccess(true);
    } catch (err) {
      console.error("SPONSORSHIP SUBMIT ERROR:", err);

      setError(
        err?.message ||
          "Something went wrong while submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* -------------------------------------------------------
     CLOSE SUCCESS MODAL
  ------------------------------------------------------- */

  const handleSuccessClose = () => {
    setSuccess(false);

    /*
      Stay on sponsorship section
    */

    const sponsorshipSection = document.getElementById("sponsors");

    if (sponsorshipSection) {
      sponsorshipSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <section className="Sponsors" id="Sponsors">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="sp-glow sp-left" />

      <div className="sp-glow sp-right" />

      <div className="sp-grid" />

      <div className="sp-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="sp-header">

          <h2>
            Powering India's EV&nbsp;<span>Future</span>
          </h2>

          <p>
            Partner with VIDHYUT and connect your brand with innovators,
            startups, researchers, government bodies and India's fastest
            growing electric mobility ecosystem.
          </p>

        </div>

        {/* =================================================
            BENEFITS
        ================================================= */}

        <div className="sp-title">

          <h2>Why Become a VIDHYUT Partner?</h2>

          <p className="sp-subtitle">
            Every partnership goes beyond branding—it's an opportunity to
            engage with future engineers, policymakers, investors and the EV
            community.
          </p>

        </div>

        <div className="sp-benefits">

          {benefits.map((item, i) => (
            <div className="sp-card" key={i}>

              <div className="sp-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* =================================================
            OFFICIAL COLLABORATIONS
        ================================================= */}

        <div className="sp-collab-wrapper">

          <div className="sp-title">

            <h2>
              Official Collaborations
            </h2>

            <p className="sp-subtitle">
              Supported by industry, government and India's leading
              innovation platform.
            </p>

          </div>

          <div className="collab-carousel">

            <div className="collab-track">

              {[...collaborations, ...collaborations].map(
                (item, i) => (
                  <div
                    className="collab-slide"
                    key={i}
                  >

                    <div className="collab-icon">
                      {item.icon}
                    </div>

                    <span>
                      {item.tag}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.desc}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

        {/* =================================================
            SPONSORS
        ================================================= */}

        <div className="sp-title">

          <h2>
            Our Sponsors
          </h2>

        </div>

        <div className="logo-marquee">

          <div className="logo-track">

            {[...sponsors, ...sponsors].map(
              (item, i) => (
                <div
                  className="logo-item"
                  key={i}
                >

                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={170}
                    height={70}
                    className="brand-logo"
                  />

                </div>
              )
            )}

          </div>

        </div>

        {/* =================================================
            MEDIA PARTNERS
        ================================================= */}

        <div className="sp-title">

          <h2>
            Media Partners
          </h2>

        </div>

        <div className="sp-media-grid">

          {mediaPartners.map(
            (item, i) => (
              <Image
                key={i}
                src={item.logo}
                alt={item.name}
                width={120}
                height={120}
                className="sp-media-logo"
              />
            )
          )}

        </div>

        {/* =================================================
            CTA
        ================================================= */}

        <div className="sp-cta">

          <div className="sp-cta-content">

            <h2>
              Ready to Power VIDHYUT 2026?
            </h2>

            <p>
              Become an official sponsor and position your brand at
              the forefront of India's electric mobility revolution.
            </p>

            <button
              type="button"
              className="sp-btn"
              onClick={() => {
                setError("");
                setOpen(true);
              }}
            >

              Become A Sponsor

              <FaArrowRight />

            </button>

          </div>

        </div>

      </div>

      {/* =====================================================
          SPONSORSHIP FORM MODAL
      ===================================================== */}

      {open && (
        <div
          className="sp-modal-overlay"
          onMouseDown={(e) => {
            /*
              Clicking outside modal closes it.
              Clicking inside modal does nothing.
            */

            if (e.target === e.currentTarget) {
              setOpen(false);
              setError("");
            }
          }}
        >

          <div className="sp-modal">

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="sp-close"
              onClick={() => {
                setOpen(false);
                setError("");
              }}
              aria-label="Close sponsorship form"
            >
              <FaTimes />
            </button>

            {/* MODAL HEADER */}

            <div className="sp-modal-header">

              <h2>
                Become a VIDHYUT Partner
              </h2>

              <p>
                Fill in your company details and our partnership team
                will contact you within 24–48 hours.
              </p>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              className="sp-form"
              onSubmit={handleSubmit}
            >

              {/* COMPANY + CONTACT */}

              <div className="sp-row">

                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  autoComplete="organization"
                  required
                />

                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Contact Person"
                  autoComplete="name"
                  required
                />

              </div>

              {/* EMAIL + PHONE */}

              <div className="sp-row">

                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  autoComplete="email"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  autoComplete="tel"
                  required
                />

              </div>

              {/* WEBSITE */}

              <input
                type="text"
                name="website"
                placeholder="Company Website"
                autoComplete="url"
              />

              {/* PARTNERSHIP CATEGORY */}

              <select
                name="category"
                required
                defaultValue=""
              >

                <option
                  value=""
                  disabled
                >
                  Select Partnership Category
                </option>

                <option value="Title Sponsor">
                  Title Sponsor
                </option>

                <option value="EV Sponsor">
                  EV Sponsor
                </option>

                <option value="Industry Collaborator">
                  Industry Collaborator
                </option>

                <option value="Platform Partner">
                  Platform Partner
                </option>

                <option value="Media Partner">
                  Media Partner
                </option>

              </select>

              {/* MESSAGE */}

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your company and partnership goals..."
              />

              {/* ERROR */}

              {error && (
                <div className="sp-form-error">
                  {error}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                className="sp-submit"
                disabled={loading}
              >

                {loading
                  ? "Sending..."
                  : "Submit Inquiry"}

                {!loading && (
                  <FaArrowRight />
                )}

              </button>

            </form>

          </div>

        </div>
      )}

      {/* =====================================================
          SUCCESS MODAL
      ===================================================== */}

      {success && (
        <div className="sp-success-overlay">

          <div className="sp-success-modal">

            {/* SUCCESS ICON */}

            <div className="sp-success-icon">
              ✓
            </div>

            {/* TITLE */}

            <h2>
              Inquiry Sent Successfully!
            </h2>

            {/* MESSAGE */}

            <p>
              Thank you for your interest in partnering with
              VIDHYUT 2026. Our team will contact you shortly.
            </p>

            {/* OKAY */}

            <button
              type="button"
              className="sp-success-btn"
              onClick={handleSuccessClose}
            >
              Okay
            </button>

          </div>

        </div>
      )}

    </section>
  );
}