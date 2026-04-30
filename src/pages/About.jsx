import React from "react";

export default function About() {
  return (
    <div className="container">
      {/* HERO SECTION */}
      <section className="card">
        <h1>🩺 About MedCare</h1>
        <p>
          MedCare is a smart medical recommendation platform designed to
          simplify healthcare access for everyone. Our goal is to connect
          patients with the right doctors, medicines, and healthcare services
          in the most efficient and affordable way.
        </p>
      </section>

      {/* VISION */}
      <section className="card">
        <h2>🌟 Our Vision</h2>
        <p>
          We envision a future where healthcare is accessible, transparent,
          and technology-driven — helping users make informed medical decisions
          without confusion or stress.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="card">
        <h2>⚙️ What We Do</h2>
        <ul>
          <li>✔ Smart doctor recommendations based on budget & specialization</li>
          <li>✔ Digital doctor registration & dashboards</li>
          <li>✔ Symptom-based health guidance</li>
          <li>✔ Online medicine discovery & cart system</li>
          <li>✔ Secure user & doctor authentication</li>
        </ul>
      </section>

      {/* TEAM */}
      <section className="card">
        <h2>👨‍👩‍👧‍👦 Meet Our Team</h2>

        <div style={styles.teamGrid}>
          <TeamMember
            name="Dr. Ananya Sharma"
            role="Medical Advisor"
            desc="Ensures clinical accuracy and medical integrity across the platform."
            img="https://randomuser.me/api/portraits/women/44.jpg"
          />

          <TeamMember
            name="Rahul Verma"
            role="Full Stack Developer"
            desc="Builds and maintains the core web application and system logic."
            img="https://randomuser.me/api/portraits/men/32.jpg"
          />

          <TeamMember
            name="Priya Singh"
            role="UI/UX Designer"
            desc="Designs clean, intuitive, and user-friendly interfaces."
            img="https://randomuser.me/api/portraits/women/65.jpg"
          />

          <TeamMember
            name="Amit Kumar"
            role="Backend Engineer"
            desc="Handles APIs, database design, and secure data flow."
            img="https://randomuser.me/api/portraits/men/41.jpg"
          />

          <TeamMember
            name="Neha Patel"
            role="Product Manager"
            desc="Plans features, user flow, and overall product strategy."
            img="https://randomuser.me/api/portraits/women/52.jpg"
          />
        </div>
      </section>
    </div>
  );
}

/* ================= TEAM COMPONENT ================= */

function TeamMember({ name, role, desc, img }) {
  return (
    <div style={styles.member}>
      <img src={img} alt={name} style={styles.image} />
      <h4>{name}</h4>
      <p style={{ fontWeight: "bold" }}>{role}</p>
      <p style={{ fontSize: 14 }}>{desc}</p>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
    marginTop: 20
  },

  member: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: 10,
    padding: 15,
    textAlign: "center"
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 10
  }
};
