// src/components/WhatSetsUsApartSection.jsx
import React, { useState } from "react";

// FlipCard component with fixed height for consistency
const FlipCard = ({ header, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped((prev) => !prev);

  return (
    <div
      className="w-full h-64 cursor-pointer select-none"
      style={{ perspective: "1000px" }}
      onClick={handleClick}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 transform"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side (Header) */}
        <div
          className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-xl font-semibold text-gray-800">{header}</h3>
        </div>
        {/* Back Side (Description) */}
        <div
          className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

const WhatSetsUsApartSection = () => {
  return (
    // Updated the id to remove spaces
    <section id="what-sets-us-apart" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FlipCard
            header="Truly Independent"
            description="We are a fully independent advisory firm, not affiliated with any insurance carrier or investment firm. We have no proprietary products and are not required to meet sales quotas."
          />
          <FlipCard
            header="Fiduciary Commitment"
            description="We follow a strict 'Client-First' philosophy. We will never recommend a product or service that does not align with your needs."
          />
          <FlipCard
            header="Transparency"
            description="We provide multiple options and educate our clients on the differences, empowering you to make well-informed financial decisions."
          />
          <FlipCard
            header="No-Commission Investments"
            description="As a fee-only investment advisory firm, we do not earn commissions on investment products. This eliminates conflicts of interest and ensures that our advice is entirely in your best interest."
          />
          <FlipCard
            header="Personalized Advice"
            description="Every client has unique financial goals. We develop customized investment strategies tailored to your specific needs and aspirations."
          />
          <FlipCard
            header="Expertise You Can Trust"
            description="With a deep understanding of financial markets and an ever-evolving investment landscape, we provide knowledgeable and reliable guidance."
          />
          <FlipCard
            header="Proactive Communication"
            description="We believe in keeping you informed. Regular updates, clear explanations, and open communication ensure that you always understand your financial landscape."
          />
          <FlipCard
            header="Long-Term Relationships"
            description="Our goal is not just to grow your wealth but to build a lasting partnership, helping you navigate life’s financial challenges and opportunities."
          />
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApartSection;
