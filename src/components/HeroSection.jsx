import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate 20 floating bubbles
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      animationDuration: Math.random() * 5 + 5 + "s",
      animationDelay: Math.random() * 5 + "s",
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-gradient-to-r from-[#0079C1] to-[#00A6A6] flex items-center justify-center animate-gradient"
    >
      {/* Animated Floating Bubbles */}
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-float"
          style={{
            left: bubble.left,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.animationDelay,
          }}
        ></span>
      ))}

      {/* Light Radial Overlay */}
      <div
        className="absolute inset-0 bg-opacity-50 animate-fadeIn"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15), transparent 70%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 text-white">
        <h2 className="text-4xl font-semibold mb-2 drop-shadow-md">
          Planning Resources Center
        </h2>
        <h1 className="text-6xl font-extrabold mb-8 drop-shadow-md text-white">
          Elevate Your Wealth with Better Planning
        </h1>

        <div className="flex flex-col gap-4">
          <button
            className="hero-button bg-white text-[#0079C1] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </button>
          <button
            className="hero-button bg-white text-[#0079C1] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
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
