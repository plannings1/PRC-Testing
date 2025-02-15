// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>
          The information provided on this website is for general informational
          purposes only and is not intended as a solicitation for products or
          services in states where we do not conduct business.
          <br />
          <br />
          Our practice is limited to the areas where we operate, and nothing on
          this website should be considered legal, tax, or financial advice. Not
          all products are available in every state.
          <br />
          <br />
          Insurance-related services are offered through Planning Resources
          Center, Inc. Investment-related services are offered through
          Investment Resources Center, LLC. For more details, please request our
          Disclosure Brochure (ADV Part II), which outlines our services and
          associated risks.
          <br />
          <br />
          Additional information about Investment Resources Center is available
          on the SEC’s website at{" "}
          <a
            href="https://adviserinfo.sec.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            www.adviserinfo.sec.gov
          </a>{" "}
          under CRD number 156996.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
