import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  // Intersection Observer for Active Section Highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: 0.2,  // Adjusted threshold for mobile
        rootMargin: "0px 0px -100px 0px",  // Helps detect intersection earlier
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Handle navigation for section links
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // If already on homepage, scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate first, then scroll after page load
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Business Name Clickable */}
        <div className="text-xl font-semibold text-gray-800">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (window.scrollY === 0) {
                navigate(`/#home`);
                setTimeout(() => {
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="cursor-pointer hover:text-gray-600 transition-all"
          >
            Planning Resources Center
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="relative" ref={menuRef}>
          <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Dropdown Menu (Mobile) */}
          {menuOpen && (
            <div
              className="absolute top-full right-0 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              style={{ width: "200px" }}
            >
              <ul className="flex flex-col py-2">
                {sections.map((section) => (
                  <li key={section.id} className="px-4 py-2">
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => handleSectionClick(e, section.id)}
                      className={`block text-gray-800 hover:text-gray-600 w-full text-left ${
                        activeSection === section.id ? "active-section" : ""
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
                {/* Documents Page Link */}
                <li className="px-4 py-2">
                  <Link
                    to="/documents"
                    className={`block text-gray-800 hover:text-gray-600 w-full text-left ${
                      location.pathname === "/documents" ? "page-active" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Documents
                  </Link>
                </li>
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
              onClick={(e) => handleSectionClick(e, section.id)}
              className={`relative hover:text-gray-600 transition-all ${
                activeSection === section.id ? "active-section" : ""
              }`}
            >
              {section.label}
            </a>
          ))}
          {/* Documents Page Link */}
          <Link
            to="/documents"
            className={`hover:text-gray-600 transition-all px-3 py-2 ${
              location.pathname === "/documents" ? "page-active" : ""
            }`}
          >
            Documents
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
