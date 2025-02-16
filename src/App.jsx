// src/App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Website from "./Website";
import DocumentsPage from "./components/DocumentsPage";

function App() {
  return (
    <Router>
      {/* ScrollToTop goes here so it can detect route changes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
