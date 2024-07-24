// Define action types
export const SET_USER = "SET_USER"; // Action type for setting user information
export const LOGOUT_USER = "LOGOUT_USER"; // Action type for logging out the user

// Action creator for setting user information
export const setUser = (userData) => ({
  type: SET_USER, // Action type indicating a user is being set
  payload: userData, // Payload containing the user data to be set in the store
});

// Action creator for logging out the user
export const logoutUser = () => ({
  type: LOGOUT_USER, // Action type indicating the user is being logged out
});
