import React, { useState } from "react";
import "./AddPlace.css";

const AddPlace = () => {
  const [formData, setFormData] = useState({
    placeName: "",
    location: "",
    dish: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Place Submitted:", formData);
    alert("New place and dish added successfully!");
    setFormData({ placeName: "", location: "", dish: "", price: "" });
  };

  return (
    <div className="add-place">
      <div className="header">
        
      <h1>Add a New Place or Dish</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Place Name:
          <input
            type="text"
            name="placeName"
            value={formData.placeName}
            onChange={handleChange}
            placeholder="Enter the place name (e.g., Quick Bites)"
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter the location (e.g., Near Library)"
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
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter the price in ₹"
            required
          />
        </label>
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
};

export default AddPlace;
