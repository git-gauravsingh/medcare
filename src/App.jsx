import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

/* REGISTER & LOGIN CHOICE */
import RegisterChoice from "./pages/RegisterChoice";
import LoginChoice from "./pages/LoginChoice";

/* REGISTER PAGES */
import UserRegister from "./pages/UserRegister";
import DoctorRegister from "./pages/DoctorRegister";

/* LOGIN PAGES */
import UserLogin from "./pages/UserLogin";
import DoctorLogin from "./pages/DoctorLogin";

/* DOCTOR */
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorProfile from "./pages/DoctorProfile";

/* FEATURES */
import SymptomChecker from "./pages/SymptomChecker";
import BudgetDoctors from "./pages/BudgetDoctors";
import MedicineStore from "./pages/MedicineStore";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* REGISTER FLOW */}
        <Route path="/register" element={<RegisterChoice />} />
        <Route path="/register/user" element={<UserRegister />} />
        <Route path="/register/doctor" element={<DoctorRegister />} />

        {/* LOGIN FLOW */}
        <Route path="/login" element={<LoginChoice />} />
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/login/doctor" element={<DoctorLogin />} />

        {/* DOCTOR */}
        <Route path="/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />

        {/* FEATURES */}
        <Route path="/symptoms" element={<SymptomChecker />} />
        <Route path="/budget" element={<BudgetDoctors />} />
        <Route path="/medicine" element={<MedicineStore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />

      </Routes>
    </BrowserRouter>
  );
}
