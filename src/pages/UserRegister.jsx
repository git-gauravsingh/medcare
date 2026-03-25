import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const age = Number(e.target.age.value);
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const city = e.target.city.value;
    const state = e.target.state.value;

    // password match check
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // duplicate email check
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("User already registered with this email");
      return;
    }

    const user = {
      name,
      email,
      age,
      password,
      city,
      state,
      role: "user"
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully");
    navigate("/login"); // login choice page
  }

  return (
    <div className="container">
      <h2>User Registration</h2>

      <form onSubmit={handleRegister} className="card">
        <input name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="number" name="age" placeholder="Age" required />
        <input name="city" placeholder="City" required />
        <input name="state" placeholder="State" required />
        <input type="password" name="password" placeholder="Password" required />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
