"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import Home from "@/components/Home";
import Event from "@/components/Event";
import Achievements from "@/components/Achievements";
import SponsorShips from "@/components/SponsorShips";
import Footer from "@/components/Footer";

export default function Page() {

  const [loading, setLoading] = useState(true);



  return (

    <>
      {loading && (
        <Loader
          onComplete={() => setLoading(false)}
        />
      )}

      <main
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity .8s ease"
        }}
      >
        <Home />
        <Event />
        <Achievements />
        <SponsorShips />
        <Footer />
      </main>
    </>

  );

}