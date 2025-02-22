import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./main-components/LandingPage";
import Navbar from "./main-components/Navbar";
import ProjectsSection from "./main-components/Projects";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
