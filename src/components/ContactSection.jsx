import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfbp6zbJN28Snr55WTynZHDYJx5At048-sV3_klGSP36IvzvQ/formResponse";

    const formEntries = {
      "entry.2103003808": formData.name,
      "entry.246042333": formData.email,
      "entry.396873726": formData.message,
    };

    const formBody = new URLSearchParams();
    Object.keys(formEntries).forEach((key) =>
      formBody.append(key, formEntries[key])
    );

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors", // Google Forms does not return a CORS response
        body: formBody,
      });

      setIsModalOpen(true); // Open the modal on success
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

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
              728 E Northwest Hwy, Suite #100
              <br />
              Palatine, IL 60074
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p>(847) 701-0253</p>
            <p>plannings@hotmail.com</p>
          </div>

          {/* Get In Touch Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="w-full p-3 bg-white bg-opacity-50 rounded-lg border-none text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                required
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

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mt-2">
              Thank you for reaching out. We’ll get back to you soon!
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
