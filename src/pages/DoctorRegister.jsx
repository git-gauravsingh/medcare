import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ALL_SPECIALIZATIONS = [
  "Cardiologist",
  "Dermatologist",
  "Orthopedic",
  "Neurologist",
  "Pediatrician",
  "General Physician"
];

export default function DoctorRegister() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [fees, setFees] = useState({});

  function toggleSpecialization(spec) {
    if (selected.includes(spec)) {
      setSelected(selected.filter(s => s !== spec));
      const copy = { ...fees };
      delete copy[spec];
      setFees(copy);
    } else {
      setSelected([...selected, spec]);
    }
  }

  function handleFeeChange(spec, value) {
    setFees({ ...fees, [spec]: value });
  }

  function handleRegister(e) {
    e.preventDefault();

    if (selected.length === 0) {
      alert("Select at least one specialization");
      return;
    }

    const doctor = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      city: e.target.city.value,
      specializations: selected.map(spec => ({
        name: spec,
        fee: Number(fees[spec])
      }))
    };

    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    doctors.push(doctor);
    localStorage.setItem("doctors", JSON.stringify(doctors));

    alert("Doctor registered successfully");
    navigate("/login/doctor");
  }

  return (
    <div className="container">
      <h2>Doctor Registration</h2>

      <form onSubmit={handleRegister} className="card">
        <input name="name" placeholder="Doctor Name" required />
        <input name="email" placeholder="Email" required />
        <input name="password" placeholder="Password" required />
        <input name="city" placeholder="City" required />

        <h3>Select Specializations & Fees</h3>

        {ALL_SPECIALIZATIONS.map(spec => (
          <div key={spec} style={{ marginBottom: "10px" }}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(spec)}
                onChange={() => toggleSpecialization(spec)}
              />{" "}
              {spec}
            </label>

            {selected.includes(spec) && (
              <input
                type="number"
                placeholder={`Fee for ${spec}`}
                required
                onChange={(e) => handleFeeChange(spec, e.target.value)}
              />
            )}
          </div>
        ))}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
