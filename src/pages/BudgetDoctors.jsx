import React from "react";

import { useState } from "react";

export default function BudgetDoctors() {
  const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
  const specialist = localStorage.getItem("specialist");

  const [budget, setBudget] = useState(1000);
  const [city, setCity] = useState("");

  const filteredDoctors = doctors
    .filter((d) => {
      return (
        d.specialization === specialist &&
        d.fee <= budget &&
        (city === "" ||
          d.city.toLowerCase().includes(city.toLowerCase()))
      );
    })
    .sort((a, b) => {
      const scoreA = a.rating * 10 - a.fee;
      const scoreB = b.rating * 10 - b.fee;
      return scoreB - scoreA;
    });

  return (
    <div className="container">
      <h2>Best Doctors for {specialist}</h2>

      {/* City Input */}
      <label>City</label>
      <input
        placeholder="Enter your city (e.g. Patna, Delhi)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {/* Budget Slider */}
      <label>Budget: ₹{budget}</label>
      <input
        type="range"
        min="500"
        max="5000"
        step="100"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />

      {filteredDoctors.length === 0 && (
        <p>No doctors found for this city & budget</p>
      )}

      {filteredDoctors.map((doc, i) => (
        <div className="card" key={i}>
          <h3>{doc.name}</h3>
          <p>City: {doc.city}</p>
          <p>Specialization: {doc.specialization}</p>
          <p>Fee: ₹{doc.fee}</p>
          <p>Rating: ⭐ {doc.rating}</p>
          {i === 0 && <strong>✅ Best Match</strong>}
        </div>
      ))}
    </div>
  );
}
