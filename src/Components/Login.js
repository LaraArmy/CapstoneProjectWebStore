// Importing React and necessary hooks
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Redux/Action";

const Login = () => {
  // State to hold the username input
  const [username, setUsername] = useState("");
  // Hooks to dispatch actions and navigate to different routes
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a user object with the provided username
    const user = {
      username,
    };

    // Dispatch the setUser action to update the Redux store with the user's information
    dispatch(setUser(user));
    // Redirect to the home page or any other page as required
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>

      <div>
        <p>Don't have an account?</p>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default Login;
