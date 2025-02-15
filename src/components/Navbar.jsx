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
    { label: "What Sets Us Apart", id: "what-sets-us-apart" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  // Track active section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle navigation for section links
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // If already on the homepage, scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on a non-SPA page, navigate first, then scroll after page loads
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
        <div className="text-xl font-semibold text-gray-800">
          Planning Resources Center
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="relative" ref={menuRef}>
          <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
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
              {/* Documents Page Link with Box Effect */}
              <li className="px-4 py-2">
                <Link
                  to="/documents"
                  className={`block text-gray-800 hover:text-gray-600 w-full text-left px-3 py-2 ${
                    location.pathname === "/documents" ? "page-active" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Documents
                </Link>
              </li>
            </ul>
          </div>
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
          {/* Documents Page Link with Box Effect */}
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
