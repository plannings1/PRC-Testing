import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";  // ✅ Import Footer
import { Download } from "lucide-react";

const documents = [
  { year: 2024, name: "Annual Report", category: "Financial", url: "/docs/annual-report-2024.pdf" },
  { year: 2023, name: "Compliance Guidelines", category: "Regulatory", url: "/docs/compliance-2023.pdf" },
  { year: 2022, name: "Privacy Policy", category: "Legal", url: "/docs/privacy-policy-2022.pdf" },
];

const DocumentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter documents based on search
  const filteredDocuments = documents.filter(
    (doc) =>
      doc.year.toString().includes(searchTerm) ||
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#E6F4F1] text-gray-900">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow max-w-6xl mx-auto bg-[#FAFAFA] shadow-xl rounded-xl p-8 border border-gray-300 mt-20">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-center mb-8 text-[#0079C1]">Documents</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#0079C1] text-gray-900"
          />
        </div>

        {/* Documents Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-md">
            <thead className="bg-[#0079C1] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Year</th>
                <th className="px-4 py-3 text-left">Document Name</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-center">Download</th>
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
                        <Download size={16} className="mr-2" />
                        Download
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

      {/* Footer Section */}
      <Footer /> {/* ✅ Footer added at the bottom */}
    </div>
  );
};

export default DocumentsPage;
