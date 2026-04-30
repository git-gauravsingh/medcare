import React from "react";
import { Link } from "react-router-dom";

export default function RegisterChoice() {
  return (
    <div className="container">
      <h2>Register As</h2>

      <div className="card">
        <Link to="/register/user">👤 User Register</Link>
      </div>

      <div className="card">
        <Link to="/register/doctor">👨‍⚕️ Doctor Register</Link>
      </div>
    </div>
  );
}
