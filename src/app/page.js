"use client";

import { useState } from "react";

import Loader from "@/components/Loader";
import Home from "@/components/Home";
import Event from "@/components/Event";
import Achievements from "@/components/Achievements";
import SponsorShips from "@/components/SponsorShips";
import Footer from "@/components/Footer";

export default function Page() {


  return (
    <>
      
        <main>

          <Home />

          <Event />

          <Achievements />

          <SponsorShips />

          <Footer />

        </main>
      
    </>
  );
}