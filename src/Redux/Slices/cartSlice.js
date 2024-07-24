//Importing createSlice from the Redux toolkit
import { createSlice } from "@reduxjs/toolkit";

//The initial state for the cart slice
const initialState = {
  items: [], //The cart is initially empty
  total: 0, //The total price is initially zero
};

//Creating the cart slice
const cartSlice = createSlice({
  name: "cart", //The name of the slice
  initialState, //The initial state
  reducers: {
    //The reducer for adding items to the cart
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    //The reducer for removing items from the cart
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.id === itemId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== itemId);
        }
        state.total = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

//Exporting the actions and reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
