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
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md text-white">
          Elevate Your Wealth with Better Planning
        </h1>

        {/* Quick Value Statement */}
        <p className="text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          At <span className="font-bold">Planning Resources Center</span>, we offer truly <strong>independent</strong>, <strong>fiduciary-based</strong> financial and insurance solutions tailored to your unique goals. With <strong>no sales quotas</strong> and a commitment to <strong>transparency</strong>, our only focus is <span className="font-bold">you</span>.
        </p>

        {/* Key Differentiators (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl">
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h3 className="font-bold text-xl mb-2">Independent & Fiduciary</h3>
            <p className="text-sm">
              We always put your best interests first—no proprietary products or hidden agendas.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h3 className="font-bold text-xl mb-2">Comprehensive Solutions</h3>
            <p className="text-sm">
              From wealth building to retirement planning, we tailor strategies to your needs.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-4">
            <h3 className="font-bold text-xl mb-2">Transparent Fees</h3>
            <p className="text-sm">
              No hidden commissions on investments—just honest, upfront guidance.
            </p>
          </div>
        </div>

        {/* Calls to Action */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="hero-button bg-white text-[#0079C1] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Schedule a Free Consultation
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
