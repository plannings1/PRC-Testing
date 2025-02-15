import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-[#ADD8E6]"
    >
      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Elevate Your Wealth with Better Planning
        </h1>
        <p className="text-xl mb-8">
          Taking care of what's important so you can focus on what matters most to you.
        </p>
        <div className="flex flex-col gap-4">
          <button
            className="hero-button"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </button>
          <button
            className="hero-button"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
