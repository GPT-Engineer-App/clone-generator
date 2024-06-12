import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Clones from "./pages/Clones.jsx";
import CreateClone from "./pages/CreateClone.jsx";
import CloneSettings from "./pages/CloneSettings.jsx";
import ClonePreview from "./pages/ClonePreview.jsx";
import ClonePublicPage from "./pages/ClonePublicPage.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/clones" element={<Clones />} />
          <Route exact path="/create-clone" element={<CreateClone />} />
          <Route exact path="/clone-settings" element={<CloneSettings />} />
          <Route exact path="/clone-preview" element={<ClonePreview />} />
          <Route exact path="/clone-public-page" element={<ClonePublicPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;