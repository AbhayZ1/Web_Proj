import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>VIT Campus Eats</h1>
        <p>Discover the best food spots inside the VIT campus!</p>
      </header>
      <div className="features">
        <button className="feature-btn">Best Maggi Spots</button>
        <button className="feature-btn">Budget Eats</button>
        <button className="feature-btn">Quick Bites Specials</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for dishes, canteens, or cuisines..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default LandingPage;
