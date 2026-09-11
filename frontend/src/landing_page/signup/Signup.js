import React, { useState } from "react";
import "./signup.css";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE_URL, DASHBOARD_URL } from "../../config";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setMessage("Please fill all fields");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to create account");
      }

      localStorage.setItem("userId", result.user.id);
      localStorage.setItem("userName", result.user.name);
      window.location.assign(
        `${DASHBOARD_URL}?userId=${result.user.id}&userName=${encodeURIComponent(result.user.name)}`
      );
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid signup-wrapper">
      <div className="row h-100">

        {/* Left Side */}
        <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center left-side text-white">
          <h1 className="mb-3">Welcome to zerodha</h1>
          <p className="mb-4">Start your investment journey today</p>

          <img
            src={`${process.env.PUBLIC_URL}/media/images/signup.png`}
            alt="trading"
            className="left-image"
          />
        </div>

        {/* Right Side */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card p-4 shadow signup-card">
            <h3 className="mb-3 text-center">Create Account</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button className="btn btn-primary w-100" disabled={isSubmitting}>
                {isSubmitting ? "Creating account..." : "Sign Up"}
              </button>
              {message && <p className="text-danger mt-3 mb-0">{message}</p>}
            </form>

            {/* ✅ Login link working */}
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup;