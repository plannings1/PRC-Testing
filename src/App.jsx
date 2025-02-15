import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Website from "./Website";
import DocumentsPage from "./components/DocumentsPage";

const basename = import.meta.env.MODE === "development" ? "/" : "/prc-site";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
