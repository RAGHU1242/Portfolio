"use client";

import { useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import GlobalStarfield from "@/components/ui/GlobalStarfield";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import OpenSource from "@/components/sections/OpenSource";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* 1. Loading Screen */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Persistent Global Space Background */}
      <GlobalStarfield />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 2. Fixed Navbar */}
        <Navbar />

        {/* 3–9. Sections */}
        <main id="main-content" style={{ flex: 1 }}>
          <Hero />
          <Projects />
          <Skills />
          <OpenSource />
          <Education />
          <Achievements />
          <Contact />
        </main>

        {/* 11. Minimal Footer */}
        <Footer />
      </div>
    </>
  );
}
