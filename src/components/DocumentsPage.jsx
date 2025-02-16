import React, { useState } from "react";
import { Download } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const documents = [
  { year: 2024, name: "Annual Report", category: "Financial", url: "https://www.chicago.gov/content/dam/city/depts/streets/supp_info/2024-Street-Sweeping/2024-Street-Sweeping-Schedules/01st-Ward-Street-Sweeping-Schedule.pdf" },
  { year: 2023, name: "Compliance Guidelines", category: "Regulatory", url: "/docs/compliance-2023.pdf" },
  { year: 2022, name: "Privacy Policy", category: "Legal", url: "/docs/privacy-policy-2022.pdf" },
];

const DocumentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.year.toString().includes(searchTerm) ||
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#E6F4F1] text-gray-900">
      <Navbar />

      <div className="flex-grow max-w-6xl mx-auto bg-[#FAFAFA] shadow-xl rounded-xl p-6 md:p-8 border border-gray-300 mt-20 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-[#0079C1]">Documents</h2>

        {/* Search Box */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0079C1] text-gray-900"
          />
        </div>

        {/* ✅ Mobile-Friendly List Format (Shown on Small Screens) */}
        <div className="md:hidden">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map((doc, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
                <h3 className="text-lg font-semibold text-[#0079C1]">{doc.name}</h3>
                <p className="text-sm text-gray-700">Year: {doc.year}</p>
                <p className="text-sm text-gray-700">Category: {doc.category}</p>
                <a
                  href={doc.url}
                  download
                  className="mt-3 inline-flex items-center bg-[#0079C1] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#005f91] transition"
                >
                  <Download size={16} className="mr-2" /> Download
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No documents found.</p>
          )}
        </div>

        {/* ✅ Full Table Format (Only Visible on Medium Screens and Up) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-md">
            <thead className="bg-[#0079C1] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Year</th>
                <th className="px-4 py-3 text-left">Document Name</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-3">{doc.year}</td>
                    <td className="px-4 py-3">{doc.name}</td>
                    <td className="px-4 py-3">{doc.category}</td>
                    <td className="px-4 py-3 text-center">
                      <a
                        href={doc.url}
                        download
                        className="bg-[#0079C1] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#005f91] transition inline-flex items-center"
                      >
                        <Download size={16} className="mr-2" /> Download
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No documents found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocumentsPage;
