import React from "react";

export default function Help() {
  return (
    <div className="container">
      {/* HEADER */}
      <div className="card">
        <h1>🆘 Help & Support</h1>
        <p>
          Facing issues while using MedCare?  
          Don’t worry — we’ve listed common problems with easy solutions below.
        </p>
      </div>

      {/* PROBLEM 1 */}
      <div className="card">
        <h3>❓ Problem: Unable to Login</h3>
        <p>
          <strong>Possible Reasons:</strong>
          <ul>
            <li>Incorrect email or password</li>
            <li>Account not registered yet</li>
          </ul>
        </p>

        <p>
          <strong>✅ Solution:</strong>
          <ul>
            <li>Double-check your email & password</li>
            <li>Go to <b>Register</b> if you are a new user/doctor</li>
          </ul>
        </p>
      </div>

      {/* PROBLEM 2 */}
      <div className="card">
        <h3>❓ Problem: Cart is Empty After Refresh</h3>
        <p>
          <strong>Possible Reason:</strong>  
          Items were not saved properly.
        </p>

        <p>
          <strong>✅ Solution:</strong>
          <ul>
            <li>Ensure items are added before refreshing</li>
            <li>Cart data is stored locally (demo mode)</li>
          </ul>
        </p>
      </div>

      {/* PROBLEM 3 */}
      <div className="card">
        <h3>❓ Problem: Checkout Not Working</h3>
        <p>
          <strong>Possible Reason:</strong>  
          User not logged in.
        </p>

        <p>
          <strong>✅ Solution:</strong>
          <ul>
            <li>Please <b>Login / Register</b> before checkout</li>
            <li>Guest users can browse but must login to buy</li>
          </ul>
        </p>
      </div>

      {/* PROBLEM 4 */}
      <div className="card">
        <h3>❓ Problem: Doctor Not Visible in Budget Finder</h3>
        <p>
          <strong>Possible Reason:</strong>  
          No doctor registered under selected budget.
        </p>

        <p>
          <strong>✅ Solution:</strong>
          <ul>
            <li>Try increasing your budget range</li>
            <li>Ensure doctors are registered properly</li>
          </ul>
        </p>
      </div>

      {/* FOOTER */}
      <div className="card" style={{ textAlign: "center" }}>
        <p>
          Still facing issues?  
          Visit <b>Contact Us</b> page or email us at  
          <strong> support@medcare.com</strong>
        </p>
      </div>
    </div>
  );
}
