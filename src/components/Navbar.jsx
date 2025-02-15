// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = ({ activeSection, onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define sections with both label and id properties.
  const sections = [
    { label: "Home", id: "home" },
    { label: "What Sets Us Apart", id: "what-sets-us-apart" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Left Side: Business Name */}
        <div className="text-xl font-semibold text-gray-800">
          Planning Resources Center
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="relative">
          <button
            className="md:hidden focus:outline-none"
            style={{ backgroundColor: "transparent", color: "black" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Dropdown Menu (Mobile) - Conditionally Rendered */}
          {menuOpen && (
            <div
              className="absolute top-full right-0 bg-white rounded-lg shadow-lg"
              style={{ width: "200px" }}
            >
              <ul className="flex flex-col py-2">
                {sections.map((section) => (
                  <li key={section.id} className="px-4 py-2">
                    <a
                      href={`#${section.id}`}
                      className="block text-gray-800 hover:text-gray-600 w-full text-left"
                      onClick={() => {
                        setMenuOpen(false);
                        onNavClick(section.id);
                      }}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Full Navigation for Larger Screens */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => onNavClick(section.id)}
              className={`relative hover:text-gray-600 transition-all ${
                activeSection === section.id ? "text-gray-800 active-link" : ""
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
