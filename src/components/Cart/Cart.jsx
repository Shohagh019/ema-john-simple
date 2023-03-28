import React from "react";
import "./cart.css";

const Cart = (props) => {
    const cart = props.cart;
    let total= 0;
    for(const product of cart){
        total= total+ product.price;
    }
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Prcie: ${total}</p>
      <p>Total Shipping Charge: </p>
      <p>Tax: </p>
      <h6>Grand Total: </h6>
    </div>
  );
};

export default Cart;