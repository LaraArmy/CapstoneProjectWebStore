//Importing React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the Provider component from React-Redux to connect the Redux store to the React application
import { Provider } from "react-redux";

//Importing the Redux store
import { store } from "./Redux/Store";

// Importing the main App component that serves as the root component of the application
import App from "./App";

// Get the container element with the id 'root' from the HTML document
const container = document.getElementById("root");

// Create a root for rendering the React application
const root = ReactDOM.createRoot(container);

// Render the App component wrapped with the Provider component to allow access to the Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
