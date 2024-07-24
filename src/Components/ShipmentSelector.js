// Importing React and the useState hook from the React library
import React, { useState } from "react";
import "./ShipmentSelector.css";

// ShipmentSelector component for selecting a shipping method
const ShipmentSelector = ({ onSelect }) => {
  // State to keep track of the currently selected shipping method
  const [selectedMethod, setSelectedMethod] = useState("");

  // Handler function to update the selected shipping method and call the onSelect callback
  const handleChange = (event) => {
    setSelectedMethod(event.target.value);
    if (onSelect) {
      onSelect(event.target.value);
    }
  };

  return (
    <div className="shipment-selector">
      <h2>Select a Shipping Method</h2>
      {/* Radio button for Standard Shipping */}
      <label>
        <input
          type="radio"
          name="shipment"
          value="standard"
          checked={selectedMethod === "standard"}
          onChange={handleChange}
        />
        Standard Shipping
      </label>
      {/* Radio button for Express Shipping */}
      <label>
        <input
          type="radio"
          name="shipment"
          value="express"
          checked={selectedMethod === "express"}
          onChange={handleChange}
        />
        Express Shipping
      </label>
      {/* Radio button for Overnight Shipping */}
      <label>
        <input
          type="radio"
          name="shipment"
          value="overnight"
          checked={selectedMethod === "overnight"}
          onChange={handleChange}
        />
        Overnight Shipping
      </label>
    </div>
  );
};

export default ShipmentSelector;
