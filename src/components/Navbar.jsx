import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("loggedDoctor");
    setOpen(false);
    navigate("/");
  }
  const loggedUser = localStorage.getItem("loggedUser");
  const loggedDoctor = localStorage.getItem("loggedDoctor");



  return (
    <>
      {/* TOP NAVBAR */}
      <div style={styles.navbar}>
        {/* LEFT */}
        <div style={styles.left}>
          <span
            style={styles.menu}
            onClick={() => setOpen(prev => !prev)}
          >
            ☰
          </span>


          <Link to="/" style={styles.logo}>
            🩺 <span style={{ marginLeft: 6 }}>MedCare</span>
          </Link>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <Link to="/cart" style={styles.link}>🛒 Cart</Link>


          {!loggedUser && !loggedDoctor && (
            <Link to="/login" style={styles.btn}>Login / Register</Link>
          )}

          {(loggedUser || loggedDoctor) && (
            <button
              onClick={handleLogout}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: 6,
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* SIDE DRAWER */}
      {open && (
        <div style={styles.overlay} onClick={() => setOpen(false)}>
          <div style={styles.drawer} onClick={e => e.stopPropagation()}>
            <h3>Menu</h3>

            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/symptoms" onClick={() => setOpen(false)}>Symptom Checker</Link>
            <Link to="/budget" onClick={() => setOpen(false)}>Budget Doctor</Link>
            <Link to="/medicine" onClick={() => setOpen(false)}>Medicine Store</Link>
            <Link to="/help" onClick={() => setOpen(false)}>Help</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>

            <div style={{ marginTop: "auto" }}>
              {/* Guest user */}
              {!loggedUser && !loggedDoctor && (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    style={{ color: "white", marginBottom: 10 }}
                  >
                    Login / Register
                  </Link>
                </>
              )}

              {/* Logged in user / doctor */}
              {(loggedUser || loggedDoctor) && (
                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginTop: 10
                  }}
                >
                  🚪 Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#020617",
    color: "white",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    borderBottom: "1px solid #1e293b"
  },

  left: {
    display: "flex",
    alignItems: "center"
  },

  menu: {
    fontSize: 24,
    cursor: "pointer",
    marginRight: 15
  },

  logo: {
    textDecoration: "none",
    color: "#38bdf8",
    fontSize: 20,
    fontWeight: "bold"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: 15
  },

  link: {
    textDecoration: "none",
    color: "white"
  },

  btn: {
    textDecoration: "none",
    background: "#38bdf8",
    color: "#020617",
    padding: "6px 12px",
    borderRadius: 6,
    fontWeight: "bold"
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 999
  },

  drawer: {
    width: 250,
    height: "100%",
    background: "#020617",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15
  }
};
