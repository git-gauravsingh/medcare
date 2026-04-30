import React from "react";

export default function MedicineStore() {
  const medicines = [
    { name: "Paracetamol", price: 50 },
    { name: "Vitamin C", price: 120 },
    { name: "Azithromycin", price: 180 }
  ];

  function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  }

  return (
    <div className="container">
      <h2>💊 Medicine Store</h2>

      {medicines.map((m, i) => (
        <div className="card" key={i}>
          <h3>{m.name}</h3>
          <p>₹{m.price}</p>
          <button onClick={() => addToCart(m)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
