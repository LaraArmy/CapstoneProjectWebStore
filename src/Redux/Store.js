//Importing the configureStore method from the Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

//Importing the reducers from different slices of state
import authReducer from "./Slices/authSlice";
import productReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cartSlice";
import userReducer from "./UserReducer";

//Configuring the store with the reducers
export const store = configureStore({
  reducer: {
    auth: authReducer, //The reducer for the authentication state
    products: productReducer, //The reducer for the product state
    cart: cartReducer, //The reducer for the cart state
    user: userReducer, //Adding the user reducer
  },
});
