// src/pages/Home.js
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero"; // Import Hero component
// import "./App.css";
const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`home-container ${fadeIn ? "fade-in" : ""}`}>
      <Hero />
      <div id="projects" className="container mt-5">
        <h2>Projects</h2>
        <p>Check out some of my recent work below!</p>
      </div>
    </div>
  );
};

export default Home;



