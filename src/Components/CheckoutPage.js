//Importing React and the custom components ShipmentSelector and HelpRequest
import React from "react";
import ShipmentSelector from "./ShipmentSelector";
import HelpRequest from "./HelpRequest";

// CheckoutPage component for handling the checkout process
const CheckoutPage = () => {
  // State to keep track of the currently selected shipping method
  const [selectedShipment, setSelectedShipment] = React.useState("");

  // Handler function to update the selected shipping method
  const handleShipmentSelect = (method) => {
    setSelectedShipment(method);
    // Save or process the selected method as needed
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {/* ShipmentSelector component to choose a shipping method */}
      <ShipmentSelector onSelect={handleShipmentSelect} />
      {/* Displaying the currently selected shipping method */}
      <p>Selected Shipping Method: {selectedShipment}</p>
      <HelpRequest />
    </div>
  );
};

export default CheckoutPage;
