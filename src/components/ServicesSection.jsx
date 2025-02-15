import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#F0F9FF] text-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#0079C1] to-[#00A6A6] bg-clip-text text-transparent drop-shadow-md">
            Products and Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            We offer a comprehensive suite of insurance and investment products
            designed to meet the diverse needs of individuals and businesses.
            Our solutions are tailored to align with your financial objectives,
            risk tolerance, and time horizon.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Insurance Products */}
          <div className="bg-gradient-to-b from-[#F0F9FF] to-[#E6F4F1] border border-[#0079C1] rounded-lg shadow-lg hover:shadow-xl p-8 text-gray-900 transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#0079C1]">
              Insurance Products
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Life Insurance</li>
              <li>Annuities</li>
              <li>Health Insurance</li>
              <li>Long-Term Care Insurance</li>
              <li>Disability Insurance</li>
              <li>Travel Insurance</li>
              <li>Medicare Insurance</li>
              <li>Employee Benefit Plans</li>
              <li>Various Business and Commercial Insurance</li>
            </ul>
          </div>

          {/* Investment & Financial Services */}
          <div className="bg-gradient-to-b from-[#F0F9FF] to-[#E6F4F1] border border-[#0079C1] rounded-lg shadow-lg hover:shadow-xl p-8 text-gray-900 transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#0079C1]">
              Investment &amp; Financial Services
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Portfolio Management</li>
              <li>Private Wealth Management</li>
              <li>Investment Consulting</li>
              <li>Business Development Consulting</li>
              <li>Risk Management</li>
              <li>Retirement Planning Solutions</li>
              <li>Education Planning</li>
              <li>Comprehensive Financial Planning</li>
              <li>Asset Allocation Strategies</li>
              <li>Tax-Efficient Investment Strategies</li>
              <li>Trust and Estate Planning</li>
            </ul>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Let’s Get Started</h3>
          <p className="max-w-2xl mx-auto mb-8 leading-relaxed text-gray-700">
            Your financial future is important, and we’re here to help you make
            it as secure and prosperous as possible. Whether you’re just starting
            your investment journey or looking to optimize your portfolio,
            Planning Resources Center is ready to guide you.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-6 py-3 text-white bg-[#0079C1] rounded-lg font-semibold hover:bg-[#005f8d] transition-colors duration-300"
          >
            Ready to take the next step? Contact us today.
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
