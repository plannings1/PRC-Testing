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
      className="relative py-20 bg-gradient-to-b from-[#0079C1] to-[#00A6A6] text-white"
    >
      <div className="container mx-auto px-4">
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
                className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0079C1]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0079C1]"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                required
                className="w-full p-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0079C1]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#0079C1] text-white px-6 py-3 rounded-lg hover:bg-[#005f8d] focus:outline-none focus:ring-2 focus:ring-[#00A6A6]"
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
          <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-900">
            <h2 className="text-lg font-semibold">Message Sent Successfully!</h2>
            <p className="mt-2">Thank you for reaching out. We’ll get back to you soon!</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-[#0079C1] text-white px-4 py-2 rounded-lg hover:bg-[#005f8d]"
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