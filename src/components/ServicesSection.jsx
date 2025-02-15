// src/components/ServicesSection.jsx
import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-blue-50 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Products and Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of insurance and investment products
            designed to meet the diverse needs of individuals and businesses.
            Our solutions are tailored to align with your financial objectives,
            risk tolerance, and time horizon.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Insurance Products */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 transition-shadow hover:shadow-md duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Insurance Products
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
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
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 transition-shadow hover:shadow-md duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Investment &amp; Financial Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
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
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Your financial future is important, and we’re here to help you make
            it as secure and prosperous as possible. Whether you’re just starting
            your investment journey or looking to optimize your portfolio,
            Planning Resources Center is ready to guide you.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Ready to take the next step? Contact us today.
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
