import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import RestaurantList from "./components/RestaurantList/RestaurantList.jsx";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails.jsx";
import UserSuggestions from "./components/UserSuggestions/UserSuggestions.jsx";
import AddPlace from "./components/AddPlace/AddPlace.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/restaurants" className="nav-link">
            Restaurants
          </Link>
          <Link to="/details" className="nav-link">
            Details
          </Link>
          <Link to="/suggestions" className="nav-link">
            Suggestions
          </Link>
          <Link to="/add-place" className="nav-link">
            Add Place
          </Link>
        </nav>

        {/* Routes */}
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/restaurants" element={<RestaurantList />} />
            <Route path="/details" element={<RestaurantDetails />} />
            <Route path="/suggestions" element={<UserSuggestions />} />
            <Route path="/add-place" element={<AddPlace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
