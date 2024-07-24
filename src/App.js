// Importing React and the Router components from react-router-dom
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing custom components for different pages of the application
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import StorePage from "./Components/StorePage";
import CartPage from "./Components/CartPage";
import Login from "./Components/Login";
import RegistrationForm from "./Components/RegistrationForm";
import UserProfile from "./Components/UserProfile";
import CheckoutPage from "./Components/CheckoutPage";

const App = () => {
  return (
    <Router>
      {/* Render the Header component on all pages */}
      <Header />
      {/* Define routes for different pages of the application */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
