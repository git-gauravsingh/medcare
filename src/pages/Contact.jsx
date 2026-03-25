import React from "react";

export default function Contact() {
  return (
    <div className="container">
      {/* HEADER */}
      <section className="card">
        <h1>📞 Contact Us</h1>
        <p>
          Have questions, feedback, or need help?  
          We’d love to hear from you. Reach out to MedCare anytime.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="card">
        <h2>📍 Our Contact Details</h2>

        <p><strong>🏢 Address:</strong> MedCare HQ, Patna, Bihar, India</p>
        <p><strong>📧 Email:</strong> support@medcare.com</p>
        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
        <p><strong>🕒 Working Hours:</strong> Mon – Sat (9 AM – 6 PM)</p>
      </section>

      {/* CONTACT FORM */}
      <section className="card">
        <h2>✉️ Send Us a Message</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            rows="4"
            style={styles.textarea}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* FOOTER NOTE */}
      <section className="card">
        <p style={{ textAlign: "center", fontSize: 14 }}>
          We usually respond within <strong>24 hours</strong>.  
          Thank you for trusting MedCare 💙
        </p>
      </section>
    </div>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  alert("Message sent successfully (Demo)");
  e.target.reset();
}

/* ================= STYLES ================= */

const styles = {
  textarea: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    background: "#020617",
    color: "white",
    border: "1px solid #38bdf8",
    borderRadius: 6,
    resize: "none"
  }
};
