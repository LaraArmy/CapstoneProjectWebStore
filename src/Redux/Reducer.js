import { SET_USER } from "./Action";

// Define the initial state of the user reducer
const initialState = {
  user: null, // The user is initially set to null (no user is logged in)
};

// Define the user reducer to handle actions and update the state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      // Handle the SET_USER action by updating the state with the new user data
      return {
        ...state,
        user: action.payload, // Set the user state to the payload of the action
      };
    default:
      // Return the current state if the action type is not recognized
      return state;
  }
};

export default userReducer;
