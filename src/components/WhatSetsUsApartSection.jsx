import React from "react";
import FlipCard from "./FlipCard";

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
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-center w-full max-w-sm mx-auto"
            >
              <FlipCard header={item.header} description={item.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApartSection;
