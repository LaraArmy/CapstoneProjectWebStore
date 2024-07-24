import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Redux/Action";
import "./RegistrationForm.css";

// State to hold form data
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the email format
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validate the password length
  const validatePassword = (password) => password.length >= 6;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate each field and populate errors if any
    if (!formData.firstName) newErrors.firstName = "First name is recquired";
    if (!formData.surname) newErrors.surname = "Surname is recquired";
    if (!formData.username) newErrors.username = "Username is recquired";
    if (!formData.email || !validateEmail(formData.email))
      newErrors.email = "Valid email address is recquired";
    if (!formData.password || !validatePassword(formData.password))
      newErrors.password = "Password must be at least 6 characters long";

    // If no errors, handle successful registration
    if (Object.keys(newErrors).length === 0) {
      // Log form data to the console (for debugging purposes)
      console.log("Registration successful:", formData);

      // Dispatch the setUser action to store user information
      dispatch(setUser(formData));

      // Redirect to the landing page
      navigate("/");
    } else {
      // Set validation errors in the state
      setErrors(newErrors);
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
          {errors.surname && <span className="error">{errors.surname}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
