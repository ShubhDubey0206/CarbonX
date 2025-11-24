import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚡ Add real auth logic here (Firebase, API, etc.)
    localStorage.setItem("isLoggedIn", true);

    // Redirect user to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Name only for Sign Up */}
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>

        {/* Confirm password only for Sign Up */}
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
        )}

        <button type="submit" className="submit-btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm} style={{ cursor: "pointer", color: "#0077ff" }}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Form;
