import React, { useEffect, useState } from "react";

export default function DoctorDashboard() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("doctors")) || [];
    setDoctors(stored);
  }, []);

  function deleteDoctor(index) {
    const updated = [...doctors];
    updated.splice(index, 1);
    setDoctors(updated);
    localStorage.setItem("doctors", JSON.stringify(updated));
  }

  return (
    <div className="container">
      <h2>Doctor Dashboard</h2>

      {doctors.length === 0 ? (
        <p>No doctors registered yet.</p>
      ) : (
        doctors.map((doc, index) => (
          <div key={index} className="card">
            <h3>{doc.name}</h3>
            <p>City: {doc.city}</p>
            <p>Specialization: {doc.specialization}</p>
            <p>Fee: ₹{doc.fee}</p>
            <p>Rating: ⭐ {doc.rating}</p>

            <button onClick={() => deleteDoctor(index)}>
              Delete Doctor
            </button>
          </div>
        ))
      )}
    </div>
  );
}
