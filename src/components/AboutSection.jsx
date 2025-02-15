import React, { useState } from "react";
import { Lightbulb, ClipboardList } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("philosophy");

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-b from-white to-[#E6F4F1] text-gray-900"
    >
      <div className="max-w-4xl mx-auto bg-[#FAFAFA] shadow-xl rounded-xl p-8 transition-shadow hover:shadow-3xl duration-300 text-gray-900 border border-gray-300">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8 text-[#0079C1]">
          About Us
        </h2>

        {/* Intro Paragraph */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed">
            At <span className="font-bold text-[#0079C1]">Planning Resources Center</span>, we specialize in offering a wide range
            of insurance solutions. As an independent insurance agency, we take
            the time to understand your objectives before recommending any
            product.
          </p>
          <br />
          <p className="text-lg leading-relaxed">
            We provide investment-related services through our sister firm, 
            <span className="font-bold text-[#00A6A6]"> Investment Resources Center</span>, an investment advisory firm registered
            with the State of Illinois. Our sole revenue source is the
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
                  ? "bg-[#0079C1] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            Our Philosophy
          </button>

          {/* Fiduciary Duty Tab */}
          <button
            onClick={() => setActiveTab("fiduciary")}
            className={`
              relative px-5 py-3 font-semibold 
              rounded-t-md transition-colors duration-300
              ${
                activeTab === "fiduciary"
                  ? "bg-[#0079C1] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            Fiduciary Duty
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white shadow-md rounded-b-md p-6 mt-[-1px] text-gray-900">
          {activeTab === "philosophy" && (
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className="text-[#0079C1]">
                <Lightbulb size={40} />
              </div>
              {/* Text Content */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#0079C1] mb-2">
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
              <div className="text-[#0079C1]">
                <ClipboardList size={40} />
              </div>
              {/* Text Content */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#0079C1] mb-2">
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
