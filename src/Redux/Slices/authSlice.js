//Importing createSlice from the Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

//The initial state for the authentication slice
const initialState = {
  user: null, //The user is initially not logged in
};

//Creating the authentication slice
const authSlice = createSlice({
  name: "auth", //The name of the slice
  initialState, //The initial state
  reducers: {
    //The reducer for logging in
    login: (state, action) => {
      state.user = action.payload; //Setting the user data on login
    },
    //The reducer for logging out
    logout: (state) => {
      state.user = null; //Clearing the user data on logout
    },
  },
});

//Exporting actions and the reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
