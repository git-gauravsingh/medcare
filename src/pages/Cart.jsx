import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const loggedUser = localStorage.getItem("loggedUser");
  const loggedDoctor = localStorage.getItem("loggedDoctor");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, i) => sum + i.price, 0);

  function checkout() {
    // ❌ login nahi hai
    if (!loggedUser && !loggedDoctor) {
      localStorage.setItem("redirectAfterLogin", "/cart");
      navigate("/login");
      return;
    }

    // ✅ login hai
    localStorage.removeItem("cart");
    alert("Order placed successfully (Demo)");
  }

  return (
    <div className="container">
      <h2>🛒 Cart</h2>

      {cart.map((c, i) => (
        <div className="card" key={i}>
          <p>{c.name} - ₹{c.price}</p>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
