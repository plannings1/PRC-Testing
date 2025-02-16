// src/components/FloatingActionButton.jsx
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const FloatingActionButton = () => {
  const [isContactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    // If you want the FAB to hide once contact is visible, reuse your existing IntersectionObserver:
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
      // Position the FAB in the bottom-right. Adjust as needed.
      className={`
        fixed bottom-4 right-4 z-50 
        transition-transform duration-300 
        flex items-center justify-center
        w-12 h-12 
        rounded-full 
        bg-[#0079C1] text-white 
        shadow-lg

        // If contact is visible, slide or fade out. 
        // Adjust the transform/opacity to your preference.
        ${isContactVisible ? "translate-y-16 opacity-0" : "translate-y-0 opacity-100"}
      `}
      onClick={scrollToContact}
    >
      {/* Could be an icon or text */}
      <FaPhoneAlt size={20} />
      {/* Alternatively, you could do: <span className="text-sm">Get in Touch</span> */}
    </div>
  );
};

export default FloatingActionButton;
