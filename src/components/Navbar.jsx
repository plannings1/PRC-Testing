import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ activeSection, onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const sections = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "What Sets Us Apart", id: "what-sets-us-apart" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-semibold text-gray-800">
          Planning Resources Center
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="relative" ref={menuRef}>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Dropdown Menu (Mobile) */}
          <div
            className={`absolute top-full right-0 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
            style={{ width: "200px" }}
          >
            <ul className="flex flex-col py-2">
              {sections.map((section) => (
                <li key={section.id} className="px-4 py-2">
                  {location.pathname === "/" ? (
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                        setMenuOpen(false); // Close mobile menu if open
                      }}
                      className="block text-gray-800 hover:text-gray-600 w-full text-left"
                    >
                      {section.label}
                    </a>
                  ) : (
                    <Link
                      to={`/#${section.id}`}
                      className="block text-gray-800 hover:text-gray-600 w-full text-left"
                      onClick={() => setMenuOpen(false)}
                    >
                      {section.label}
                    </Link>
                  )}
                </li>
              ))}
              {/* NEW: Documents Page Link */}
              <li className="px-4 py-2">
                <Link to="/documents" className="block text-gray-800 hover:text-gray-600 w-full text-left">
                  Documents
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Full Navigation for Larger Screens */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <React.Fragment key={section.id}>
              {location.pathname === "/" ? (
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`relative hover:text-gray-600 transition-all ${
                    activeSection === section.id ? "text-gray-800 active-link" : ""
                  }`}
                >
                  {section.label}
                </a>
              ) : (
                <Link to={`/#${section.id}`} className="relative hover:text-gray-600 transition-all">
                  {section.label}
                </Link>
              )}
            </React.Fragment>
          ))}
          {/* NEW: Documents Page Link */}
          <Link to="/documents" className="hover:text-gray-600 transition-all">
            Documents
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
