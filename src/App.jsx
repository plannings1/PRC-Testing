import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Website from "./Website";
import DocumentsPage from "./components/DocumentsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
