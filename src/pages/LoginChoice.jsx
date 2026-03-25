import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginChoice() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to MedCare</h2>
      <p>Choose an option</p>

      <div
        className="card"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/login/user")}
      >
        🔐 Login
      </div>

      <div
        className="card"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/register")}
      >
        📝 Register
      </div>
    </div>
  );
}
