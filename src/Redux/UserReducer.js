// Importing action types from the Action module
import { SET_USER, LOGOUT_USER } from "./Action";

// Defining the initial state of the user
const initialState = {
  firstName: "",
  surname: "",
  username: "",
  email: "",
};

// Reducer function to handle user-related actions
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    // Handling the LOGOUT_USER action to reset the user state to its initial values
    case LOGOUT_USER:
      return initialState;

    // Returning the current state for any unrecognized action types
    default:
      return state;
  }
};

export default userReducer;
