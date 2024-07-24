// Importing React and the useState hook
import React, { useState } from "react";
import "./HelpRequest.css";

const HelpRequest = () => {
  // State to manage the visibility of the help information
  const [showHelp, setShowHelp] = useState(false);

  // Function to display the help information when the button is clicked
  const handleHelpRequest = () => {
    setShowHelp(true);
  };

  return (
    <div className="help-request">
      {/* Button to toggle the display of help information */}
      <button onClick={handleHelpRequest}>Need Help with Shipping?</button>
      {/* Conditionally rendering help information based on the state */}
      {showHelp && (
        <div className="help-info">
          <h2>Shipping Help</h2>
          {/* Description of Standard Shipping */}
          <p>Standard Shipping</p>
          <p>
            Standard Shipping is our most economical shipping option. This
            method typically takes 5 to 7 business days to deliver your package.
            It is ideal for non-urgent orders and offers reliable service at a
            lower cost. With Standard Shipping, you can expect your items to
            arrive safely within the estimated delivery window. Tracking
            information will be provided once your order has shipped, allowing
            you to monitor its progress.
          </p>
          {/* Description of Express Shipping */}
          <p>Express Shipping </p>{" "}
          <p>
            Express Shipping is designed for those who need their orders
            delivered faster. This method usually takes 2 to 3 business days,
            ensuring a quicker turnaround compared to Standard Shipping. Express
            Shipping is perfect for urgent purchases or last-minute gifts. Your
            package will be prioritized in the shipping process, and you will
            receive tracking updates throughout its journey, so you can keep an
            eye on its estimated arrival time.
          </p>
          {/* Description of Overnight Shipping */}
          <p>Overnight Shipping</p>
          <p>
            Overnight Shipping offers the fastest delivery option for those who
            need their items in a hurry. As the name suggests, this service aims
            to deliver your package by the next business day. Overnight Shipping
            is the best choice for time-sensitive orders and ensures that your
            items are expedited through our shipping network. You will receive
            tracking information immediately, and our team will work to ensure
            that your package arrives as quickly as possible.
          </p>
        </div>
      )}
    </div>
  );
};

export default HelpRequest;
