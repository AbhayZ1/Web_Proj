import React, { useState } from "react";
import "./UserSuggestions.css";

const UserSuggestions = () => {
  const [formData, setFormData] = useState({
    location: "",
    dish: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Suggestion Submitted:", formData);
    alert("Thank you for your suggestion!");
    setFormData({ location: "", dish: "", reason: "" });
  };

  return (
    <div className="user-suggestions">
      <div className="header">
      <h1>Suggest the Best Food Item</h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter the location (e.g., H Block Canteen)"
            required
          />
        </label>
        <label>
          Dish:
          <input
            type="text"
            name="dish"
            value={formData.dish}
            onChange={handleChange}
            placeholder="Enter the dish name"
            required
          />
        </label>
        <label>
          Reason:
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Why is it the best?"
            required
          />
        </label>
        <button type="submit">Submit Suggestion</button>
      </form>
    </div>
  );
};

export default UserSuggestions;
