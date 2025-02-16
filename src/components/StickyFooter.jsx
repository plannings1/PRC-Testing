// src/components/StickyFooter.jsx
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const StickyFooter = () => {
  const [isContactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setContactVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(contactSection);
    return () => observer.unobserve(contactSection);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0079C1] text-white shadow-md transition-transform duration-300
        ${isContactVisible ? "translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Slightly smaller vertical padding on mobile, larger on desktop */}
      <div className="container mx-auto px-4 py-2 sm:py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        {/* Left Side: Contact Details */}
        {/* Gap is smaller on mobile (gap-1), larger on desktop (sm:gap-4) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 text-sm">
          {/* Address */}
          <a
            href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <FaMapMarkerAlt />
            <span>728 E Northwest Hwy, Suite #100</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+18477010253"
            className="flex items-center gap-1 hover:underline"
          >
            <FaPhoneAlt />
            <span>(847) 701-0253</span>
          </a>

          {/* Email */}
          <a
            href="mailto:plannings@hotmail.com"
            className="flex items-center gap-1 hover:underline"
          >
            <FaEnvelope />
            <span>plannings@hotmail.com</span>
          </a>
        </div>

        {/* Right Side: "Get in Touch" Button */}
        {/* Smaller padding on mobile (px-3 py-1), larger on desktop (sm:px-4 sm:py-2) */}
        <button
          onClick={scrollToContact}
          className="bg-transparent border border-white text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-white hover:text-[#0079C1] transition-colors duration-300 text-sm"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;
