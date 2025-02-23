// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router
import Header from "./components/Header"; // Correct default import
import Footer from "./components/Footer"; // Correct default import
import Home from "./pages/Home"; // Correct default import
import NotFound from "./pages/NotFound"; // Correct default import
import "./App.css"; 
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

