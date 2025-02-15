// src/components/ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Office Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Office</h3>
            <p>
              #1812 - 1177 W Hastings St
              <br />
              Vancouver BC V6E 2K3
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p>604 365 4563</p>
            <p>themes@advisorwebsites.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-200 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                Twitter
              </a>
            </div>
          </div>

          {/* Get In Touch Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
