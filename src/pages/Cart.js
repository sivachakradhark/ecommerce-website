import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.items.length > 0 ? (
        <div>
          <ul className="mb-4">
            {cart.items.map((item) => (
              <li key={item.id} className="border p-2 mb-2">
                <div>{item.name}</div>
                <div>Quantity: {item.quantity}</div>
                <div>Price: ${item.price}</div>
              </li>
            ))}
          </ul>
          <div className="mb-4">
            <strong>Total Price: ${cart.totalPrice.toFixed(2)}</strong>
          </div>
          <Link to="/checkout">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
