//Importing React and the useSelector hook React-Redux
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { logoutUser } from "../Redux/Action";

const Header = () => {
  //Getting the user data from the authentication slice of the state
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="navbar">
      <nav>
        <ul className="nav-links">
          {/*Navigation links*/}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <div className="auth-links">
          {/*Display user info if logged in, otherwise show login link*/}
          {user.username ? (
            <>
              <span>Welcome, {user.username}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
