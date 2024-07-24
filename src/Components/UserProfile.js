import React from "react";
import { useSelector } from "react-redux";
import "./UserProfile.css";

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <div className="profile-details">
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Surname:</strong> {user.surname}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
