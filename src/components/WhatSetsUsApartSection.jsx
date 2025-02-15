import React, { useState } from "react";

// FlipCard component with fixed dimensions to prevent resizing on flip
const FlipCard = ({ header, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped((prev) => !prev);

  return (
    <div
      className="relative w-full h-64 cursor-pointer select-none"
      style={{ perspective: "1200px" }}
      onClick={handleClick}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 transform"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side (Header) */}
        <div
          className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center overflow-hidden w-full h-full"
          style={{ backfaceVisibility: "hidden", position: "relative" }}
        >
          <h3 className="text-xl font-semibold text-gray-800 text-center">{header}</h3>
          <div
            className="absolute top-0 right-0 w-10 h-10 bg-gray-200"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%)",
              transform: "translate(5px, -5px)",
            }}
          ></div>
        </div>
        {/* Back Side (Description) */}
        <div
          className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center w-full h-full"
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
  const items = [
    { header: "Truly Independent", description: "We are a fully independent advisory firm, not affiliated with any insurance carrier or investment firm. We have no proprietary products and are not required to meet sales quotas." },
    { header: "Fiduciary Commitment", description: "We follow a strict 'Client-First' philosophy. We will never recommend a product or service that does not align with your needs." },
    { header: "Transparency", description: "We provide multiple options and educate our clients on the differences, empowering you to make well-informed financial decisions." },
    { header: "No-Commission Investments", description: "As a fee-only investment advisory firm, we do not earn commissions on investment products. This eliminates conflicts of interest and ensures that our advice is entirely in your best interest." },
    { header: "Personalized Advice", description: "Every client has unique financial goals. We develop customized investment strategies tailored to your specific needs and aspirations." },
    { header: "Expertise You Can Trust", description: "With a deep understanding of financial markets and an ever-evolving investment landscape, we provide knowledgeable and reliable guidance." },
    { header: "Proactive Communication", description: "We believe in keeping you informed. Regular updates, clear explanations, and open communication ensure that you always understand your financial landscape." },
    { header: "Long-Term Relationships", description: "Our goal is not just to grow your wealth but to build a lasting partnership, helping you navigate life’s financial challenges and opportunities." },
  ];

  return (
    <section id="what-sets-us-apart" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-center w-full md:w-80 min-w-[280px]">
              <FlipCard header={item.header} description={item.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApartSection;
