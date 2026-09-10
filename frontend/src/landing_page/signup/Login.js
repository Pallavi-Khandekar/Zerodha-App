import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const [data, setData] = useState({
    email: location.state?.email || "",
    password: "",
  });
  const [message, setMessage] = useState(location.state?.message || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3002/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to log in");
      }

      localStorage.setItem("userId", result.user.id);
      localStorage.setItem("userName", result.user.name);
      window.location.assign(`http://localhost:3001?userId=${result.user.id}&userName=${encodeURIComponent(result.user.name)}`);
    } catch (error) {
      setMessage(error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      
      {/* 👇 Form Box (size control yaha se hoga) */}
      <div style={{ width: "320px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
          {message && <p className="text-danger mt-3 mb-0">{message}</p>}
        </form>
      </div>

    </div>
  );
}

export default Login;