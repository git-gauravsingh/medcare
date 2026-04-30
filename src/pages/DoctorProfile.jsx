import React from "react";

export default function DoctorProfile() {
  const loginName = localStorage.getItem("doctorLogin");
  const doctors = JSON.parse(localStorage.getItem("doctors")) || [];

  const doctor = doctors.find(d => d.name === loginName);

  if (!doctor) return <p className="container">No profile found</p>;

  return (
    <div className="container">
      <h2>Doctor Profile</h2>
      <div className="card">
        <p>Name: {doctor.name}</p>
        <p>City: {doctor.city}</p>
        <p>Specialization: {doctor.specialization}</p>
        <p>Fee: ₹{doctor.fee}</p>
        <p>Rating: ⭐ {doctor.rating}</p>
      </div>
    </div>
  );
}
