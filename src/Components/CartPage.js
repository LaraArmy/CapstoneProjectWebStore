//Importing React and Redux hooks
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Import actions to remove items from the cart and clear the cart
import { clearCart, removeFromCart } from "../Redux/Slices/cartSlice";
import "./CartPage.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  // Get cart items and total price from the cart slice of the state
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.total);
  //Creating the dispatch function
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: R{item.price}</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: R{totalPrice ? totalPrice.toFixed(2) : "0.00"}</h3>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="clear-cart-button"
          >
            Clear Cart
          </button>
          {/* Conditional rendering for Checkout button */}
          <br></br>
          {cartItems.length > 0 && (
            <Link to="/checkout">
              <button className="checkout-button">Proceed to Checkout</button>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
