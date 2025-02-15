// src/components/AboutSection.jsx

import React, { useState } from "react";
import { Lightbulb, ClipboardList } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("philosophy");

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 transition-shadow hover:shadow-2xl duration-300">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          About Us
        </h2>

        {/* Intro Paragraph */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Planning Resources Center, we specialize in offering a wide range
            of insurance solutions. As an independent insurance agency, we take
            the time to understand your objectives before recommending any
            product. Since we are not affiliated with any insurance carrier, we
            have no proprietary products and no obligation to sell specific
            policies—ensuring that our recommendations are always in your best
            interest.
          </p>
          <br />
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide investment-related services through our sister firm,
            Investment Resources Center, an investment advisory firm registered
            with the State of Illinois. As a fee-only advisory firm, we do not
            earn commissions or accept kickbacks. Our sole revenue source is the
            fees paid by our clients, ensuring complete transparency and
            eliminating conflicts of interest.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 justify-center">
          {/* Our Philosophy Tab */}
          <button
            onClick={() => setActiveTab("philosophy")}
            className={`
              relative px-5 py-3 font-semibold 
              rounded-t-md transition-colors duration-300
              ${
                activeTab === "philosophy"
                  ? "bg-white text-blue-600 hover:text-gray-300 shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            Our Philosophy
            {activeTab === "philosophy" && (
              <span
                className="
                  absolute 
                  -bottom-3 left-1/2 
                  transform -translate-x-1/2 
                  w-0 h-0 
                  border-l-[10px] border-l-transparent 
                  border-r-[10px] border-r-transparent 
                  border-t-[10px] 
                  border-t-white
                "
              />
            )}
          </button>

          {/* Fiduciary Duty Tab */}
          <button
            onClick={() => setActiveTab("fiduciary")}
            className={`
              relative px-5 py-3 font-semibold 
              rounded-t-md transition-colors duration-300
              ${
                activeTab === "fiduciary"
                  ? "bg-white text-blue-600 hover:text-gray-300 shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            Fiduciary Duty
            {activeTab === "fiduciary" && (
              <span
                className="
                  absolute 
                  -bottom-3 left-1/2 
                  transform -translate-x-1/2 
                  w-0 h-0 
                  border-l-[10px] border-l-transparent 
                  border-r-[10px] border-r-transparent 
                  border-t-[10px] 
                  border-t-white
                "
              />
            )}
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white shadow-md rounded-b-md p-6 mt-[-1px]">
          {activeTab === "philosophy" && (
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="text-blue-400">
                <Lightbulb size={40} />
              </div>
              {/* Text Content */}
              <div className="text-left text-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Our Philosophy
                </h3>
                <p>
                  We believe in building lasting relationships based on trust,
                  transparency, and integrity. Our approach is centered on:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>Listening to your needs and goals</li>
                  <li>Creating tailored financial strategies</li>
                  <li>Focusing on risk management and diversification</li>
                  <li>
                    Providing ongoing adjustments to align with market
                    conditions and personal changes
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "fiduciary" && (
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="text-blue-400">
                <ClipboardList size={40} />
              </div>
              {/* Text Content */}
              <div className="text-left text-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Fiduciary Duty
                </h3>
                <p>
                  As an investment advisor, we operate under a fiduciary
                  standard—one of the highest legal and ethical obligations in
                  financial services. This means:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1">
                  <li>
                    Your best interests come first in every recommendation we
                    make.
                  </li>
                  <li>
                    We are committed to transparency, avoiding conflicts of
                    interest.
                  </li>
                  <li>
                    We provide advice based on care, loyalty, and honesty.
                  </li>
                </ul>
                <p className="mt-3">
                  When you work with us, you can trust that every decision is
                  made with your financial success in mind.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
