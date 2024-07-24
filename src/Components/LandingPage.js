// Importing React library
import React from "react";
import "./LandingPage.css";
// Importing the Link component from React Router for navigation
import { Link } from "react-router-dom";

// Functional component for the landing page
const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to Glow Sports!</h1>
      <p className="landing-subtitle">Discover our amazing products!</p>
      {/* Navigation link to the store page */}
      <Link to="/store" className="store-button">
        Store
      </Link>
    </div>
  );
};

export default LandingPage;
//References
//The background image was sourced from https://i.pinimg.com/originals/7e/5d/62/7e5d62718db68e398e2f4da531a10e01.jpg
