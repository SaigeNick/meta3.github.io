import React, { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../services/cartService";
import CartItem from "./CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      const result = await getCart();
      setCartItems(result);
      calculateTotalAmount(result);
    };

    fetchCartItems();
  }, []);

  const calculateTotalAmount = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setTotalAmount(total);
  };

  const handleRemoveFromCart = async (itemId) => {
    await removeFromCart(itemId);
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    calculateTotalAmount(updatedItems);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={handleRemoveFromCart} />
        ))}
      </div>
      <div className="card-checkout w-25">
        <div className="card-body">
          <h5 className="card-title">Total Amount</h5>
          <p className="card-text">${totalAmount.toFixed(2)}</p>
          <a href="#" className="btn btn-primary">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
