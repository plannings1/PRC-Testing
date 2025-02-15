import React, { useState, useEffect } from "react";
import { Briefcase, Users, Umbrella, Building2, Lightbulb, ClipboardList } from "lucide-react";

const images = [
  "https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg", // Replace with actual image URLs
  "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg",
  "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
];

const Website = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("philosophy");

  const autoRotateRef = React.useRef(null);

  // Start Auto-Rotate Timer
  const startAutoRotate = () => {
    autoRotateRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
  };

  // Stop and Restart Auto-Rotate Timer
  const resetAutoRotate = () => {
    clearInterval(autoRotateRef.current);
    startAutoRotate();
  };

  // Start Auto-Rotate on Component Mount
  useEffect(() => {
    startAutoRotate();
    return () => clearInterval(autoRotateRef.current); // Cleanup on unmount
  }, []);

  // Scroll handling logic
  useEffect(() => {
    const handleScroll = () => {
      if (clickedSection) return; // Skip if a section was clicked

      const sections = document.querySelectorAll("section");
      let active = "home";
      let closestDistance = Number.MAX_VALUE;

      const scrollPosition = window.innerHeight + window.scrollY; // Bottom of the viewport
      const pageHeight = document.documentElement.scrollHeight;

      // Check if user is at or near the bottom of the page
      if (scrollPosition >= pageHeight - 10) {
        setActiveSection("contact");
        return;
      }

      // Determine the section closest to the top
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distanceFromTop = Math.abs(rect.top);
        const threshold = window.innerHeight / 3; // Offset dynamically based on viewport height

        if (rect.top >= -threshold && distanceFromTop < closestDistance) {
          closestDistance = distanceFromTop;
          active = section.id;
        }
      });

      setActiveSection(active);
    };

    const resetClickedSection = () => setClickedSection(null); // Reset on manual scroll

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", resetClickedSection, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", resetClickedSection);
    };
  }, [clickedSection]);

  const handleNavClick = (section) => {
    setClickedSection(section); // Temporarily disable scroll-based detection
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  
    // Update active section after a delay
    setTimeout(() => {
      setActiveSection(section);
      setClickedSection(null); // Re-enable scroll-based detection
    }, 300); // Match animation duration
  };
  

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Left Side: Business Name */}
          <div className="text-xl font-semibold text-gray-800">
          Planning Resources Center
          </div>

          {/* Hamburger Menu */}
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full right-0 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
                menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ width: "200px" }}
            >
              <ul className="flex flex-col py-2">
                {["home", "What Sets Us Apart", "about", "team", "contact"].map(
                  (section) => (
                    <li key={section} className="px-4 py-2">
                      <a
                        href={`#${section}`}
                        className="block text-gray-800 hover:text-gray-600"
                        onClick={() => {
                          setMenuOpen(false); // Auto-collapse the menu on click
                        }}
                      >
                        {section.charAt(0).toUpperCase() +
                          section.slice(1).replace("-", " ")}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Full Navigation for Larger Screens */}
          <div className="hidden md:flex items-center space-x-6">
  {["home", "What Sets Us Apart", "about", "team", "contact"].map((section) => (
    <a
      key={section}
      href={`#${section}`}
      className={`relative hover:text-gray-600 transition-all ${
        activeSection === section ? "text-gray-800 active-link" : ""
      }`}
      onClick={() => handleNavClick(section)}
    >
      {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
    </a>
  ))}
</div>

        </div>
      </nav>

      {/* Hero Section */}
      <section
  id="home"
  className="h-screen text-white relative overflow-hidden"
  style={{
    backgroundImage: `url("https://images.unsplash.com/photo-1504064860048-974c8788c612?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // This enables the parallax effect
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  {/* Content */}
  <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
    <h1 className="text-5xl font-bold mb-4">
    Elevate Your Wealth with Better Planning
    </h1>
    <p className="text-xl mb-8">
      Taking care of what's important so you can focus on what matters most
      to you.
    </p>
    <button
      onClick={() =>
        document
          .getElementById("What Sets Us Apart")
          .scrollIntoView({ behavior: "smooth" })
      }
      className="hero-button"
    >
      Learn More
    </button>
  </div>
</section>

      {/* What Sets Us Apart Section */}
      <section id="What Sets Us Apart" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality/Trait 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Truly Independent
              </h3>
              <p className="text-gray-600">
              We are a fully independent advisory firm, not affiliated with any insurance carrier or investment firm. We have no proprietary products and are not required to meet sales quotas.
              </p>
            </div>
            {/* Quality/Trait 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Fiduciary Commitment
              </h3>
              <p className="text-gray-600">
              We follow a strict “Client-First” philosophy. We will never recommend a product or service that does not align with your needs.

</p>
            </div>
            {/* Quality/Trait 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Transparency 
              </h3>
              <p className="text-gray-600">
              We provide multiple options and educate our clients on the differences, empowering you to make well-informed financial decisions.

</p>
            </div>
                      {/* Quality/Trait 4 */}
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
              No-Commission Investments
              </h3>
              <p className="text-gray-600">
              As a fee-only investment advisory firm, we do not earn commissions on investment products. This eliminates conflicts of interest and ensures that our advice is entirely in your best interest.


              </p>
            </div>
            {/* Quality/Trait 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Personalized Advice 
              </h3>
              <p className="text-gray-600">
              Every client has unique financial goals. We develop customized investment strategies tailored to your specific needs and aspirations.




              </p>
            </div>
            {/* Quality/Trait 6 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Expertise You Can Trust
              </h3>
              <p className="text-gray-600">
              With a deep understanding of financial markets and an ever-evolving investment landscape, we provide knowledgeable and reliable guidance.
              </p>
            </div>
                  {/* Quality/Trait 7 */}
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Proactive Communication
              </h3>
              <p className="text-gray-600">
              We believe in keeping you informed. Regular updates, clear explanations, and open communication ensure that you always understand your financial landscape.

</p>
            </div>
            {/* Quality/Trait 8 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Long-Term Relationships
              </h3>
              <p className="text-gray-600">
              Our goal is not just to grow your wealth but to build a lasting partnership, helping you navigate life’s financial challenges and opportunities.


              </p>
            </div>
          </div>
        </div>
      </section>

{/* About Section */}
<section id="about" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Title */}
    <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
      About Us
    </h2>

    {/* Intro Paragraph */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-lg text-gray-600">
        At Planning Resources Center, we specialize in offering a wide range of insurance solutions. 
        As an independent insurance agency, we take the time to understand your objectives before 
        recommending any product. Since we are not affiliated with any insurance carrier, we have 
        no proprietary products and no obligation to sell specific policies—ensuring that our 
        recommendations are always in your best interest.
        <br /><br />
        We provide investment-related services through our sister firm, Investment Resources Center, 
        an investment advisory firm registered with the State of Illinois. As a fee-only advisory firm, 
        we do not earn commissions or accept kickbacks. Our sole revenue source is the fees paid by our 
        clients, ensuring complete transparency and eliminating conflicts of interest.
      </p>
    </div>

{/* Tabs */}
<div className="flex justify-center space-x-4 mb-8">
  <button
    onClick={() => setActiveTab("philosophy")}
    className={`relative px-4 py-2 font-semibold rounded-md 
      ${
        activeTab === "philosophy"
          ? "bg-blue-600 text-white after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-t-[10px] after:border-t-blue-600"
          : "bg-gray-200 text-gray-700"
      }
    `}
  >
    Our Philosophy
  </button>

  <button
    onClick={() => setActiveTab("fiduciary")}
    className={`relative px-4 py-2 font-semibold rounded-md 
      ${
        activeTab === "fiduciary"
          ? "bg-blue-600 text-white after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-t-[10px] after:border-t-blue-600"
          : "bg-gray-200 text-gray-700"
      }
    `}
  >
    Fiduciary Duty
  </button>
</div>


        {/* Content Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          {/* Our Philosophy Content */}
          {activeTab === "philosophy" && (
            <div>
              <div className="text-gray-800 mb-4">
                <Lightbulb className="mx-auto" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-700 mb-4">
                Our Philosophy
              </h3>
              <p className="text-gray-600 text-left">
                We believe in building lasting relationships based on trust, 
                transparency, and integrity. Our approach is centered on:
                <ul className="list-disc list-inside mt-2">
                  <li>Listening to your needs and goals</li>
                  <li>Creating tailored financial strategies</li>
                  <li>Focusing on risk management and diversification</li>
                  <li>Providing ongoing adjustments to align with market conditions and personal changes</li>
                </ul>
              </p>
            </div>
          )}

          {/* Fiduciary Duty Content */}
          {activeTab === "fiduciary" && (
            <div>
              <div className="text-gray-800 mb-4">
                <ClipboardList className="mx-auto" size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-700 mb-4">
                Fiduciary Duty
              </h3>
              <p className="text-gray-600 text-left">
                As an investment advisor, we operate under a fiduciary standard—one of 
                the highest legal and ethical obligations in financial services. This means:
                <ul className="list-disc list-inside mt-2">
                  <li>Your best interests come first in every recommendation we make.</li>
                  <li>We are committed to transparency, avoiding conflicts of interest.</li>
                  <li>We provide advice based on care, loyalty, and honesty.</li>
                </ul>
                When you work with us, you can trust that every decision is made with your 
                financial success in mind.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>


      {/* About Me Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">
            Meet the Founder
          </h2>
          <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 md:w-2/3 mx-auto transition-shadow hover:shadow-2xl duration-300">
            {/* Owner Photo */}
            <div className="w-48 h-48 mb-6">
              <img
                src="https://via.placeholder.com/150" // Replace with the business owner's photo
                alt="Founder"
                className="w-full h-full object-cover rounded-full shadow-md border-4 border-gray-300"
              />
            </div>
            {/* Owner Bio */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              John Doe
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              John Doe is the founder and financial advisor at PRC Financial.
              With over 10 years of experience, John is dedicated to helping
              clients achieve their financial goals through personalized
              strategies and expert advice.
            </p>
            {/* Call-to-Action */}
            <a
              href="#contact"
              className="text-gray-800 border-2 border-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Office</h3>
              <p>
                #1812 - 1177 W Hastings St
                <br />
                Vancouver BC V6E 2K3
              </p>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p>604 365 4563</p>
              <p>themes@advisorwebsites.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-200 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-200 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-200 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
            {/* Get In Touch Form */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>
          The information provided on this website is for general informational purposes only and is not intended as a solicitation for products or services in states where we do not conduct business.

Our practice is limited to the areas where we operate, and nothing on this website should be considered legal, tax, or financial advice. Not all products are available in every state.

Insurance-related services are offered through Planning Resources Center, Inc.
Investment-related services are offered through Investment Resources Center, LLC.
For more details, please request our Disclosure Brochure (ADV Part II), which outlines our services and associated risks.

Additional information about Investment Resources Center is available on the SEC’s website at www.adviserinfo.sec.gov under CRD number 156996.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Website;
