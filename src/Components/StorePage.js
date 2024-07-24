//Importing React and Redux hooks
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Importing the action to add items to the cart
import { addToCart } from "../Redux/Slices/cartSlice";
import { fetchProducts } from "../Redux/Slices/productSlice";
import "./StorePage.css";

const StorePage = () => {
  //Getting products from the product slice of the state
  const products = useSelector((state) => state.products.items);
  //Creating dispatch function
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  // Fetch products when the component is first rendered or if the status changes
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Determine the content to display based on the status of the product fetch
  let content;

  if (status === "loading") {
    // Show a loading message while the products are being fetched
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    // Show the list of products when fetch is successful
    content = (
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">R{product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  } else if (status === "failed") {
    // Show an error message if the fetch fails
    content = <div>{error}</div>;
  }

  return (
    <div className="store-container">
      <h1 className="store-title">Store</h1>
      {content}
    </div>
  );
};

export default StorePage;
