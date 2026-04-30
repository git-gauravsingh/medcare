import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      u => u.email === email && u.password === password
    );

    if (found) {
      localStorage.setItem("loggedUser", JSON.stringify(found));
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <form onSubmit={handleLogin} className="container card">
      <h2>User Login</h2>
      <input name="email" placeholder="Email" required />
      <input name="password" placeholder="Password" required />
      <button>Login</button>
    </form>
  );
}
