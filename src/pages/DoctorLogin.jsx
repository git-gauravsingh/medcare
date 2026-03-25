import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorLogin() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // all registered doctors
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];

    // find matching doctor
    const doctor = doctors.find(
      (d) => d.email === email && d.password === password
    );

    if (doctor) {
      // save logged-in doctor
      localStorage.setItem("loggedDoctor", JSON.stringify(doctor));
      alert("Doctor login successful");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="container">
      <h2>Doctor Login</h2>

      <form onSubmit={handleLogin} className="card">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
