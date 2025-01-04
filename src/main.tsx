import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.tsx";
import PropertyDetailsPage from "./PropertyDetailsPage.tsx";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
        <Route path="/price-predictor" element={<PropertyDetailsPage />} />
        {/* Property details page route */}
      </Routes>
    </Router>
  </StrictMode>
);
