import React from "react";
import "./RestaurantList.css";

const RestaurantList = () => {
  const canteens = [
    { name: "Quick Bites", special: "Sandwiches, Shakes" },
    { name: "H Block Canteen", special: "Maggi, Tea" },
    { name: "M Block Canteen", special: "Puffs, Snacks" },
  ];

  return (
    <div className="restaurant-list">
      <h1 className="header">Explore Canteens</h1>
      <ul>
        {canteens.map((canteen, index) => (
          <li key={index}>
            <h2>{canteen.name}</h2>
            <p>Specials: {canteen.special}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
