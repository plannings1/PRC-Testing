// src/Website.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatSetsUsApartSection from "./components/WhatSetsUsApartSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const Website = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState(null);

  // Smooth scrolling + active link detection
  useEffect(() => {
    const handleScroll = () => {
      if (clickedSection) return; // Skip if user manually clicked a link

      const sections = document.querySelectorAll("section");
      let active = "home";
      let closestDistance = Number.MAX_VALUE;

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      // Check if user is near bottom
      if (scrollPosition >= pageHeight - 10) {
        setActiveSection("contact");
        return;
      }

      // Determine which section is closest to top
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distanceFromTop = Math.abs(rect.top);
        const threshold = window.innerHeight / 3;

        if (rect.top >= -threshold && distanceFromTop < closestDistance) {
          closestDistance = distanceFromTop;
          active = section.id;
        }
      });

      setActiveSection(active);
    };

    const resetClickedSection = () => setClickedSection(null);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", resetClickedSection, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", resetClickedSection);
    };
  }, [clickedSection]);

  const handleNavClick = (section) => {
    setClickedSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });

    // Update active section after a short delay
    setTimeout(() => {
      setActiveSection(section);
      setClickedSection(null);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <HeroSection />
      <AboutSection />
      <WhatSetsUsApartSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Website;
