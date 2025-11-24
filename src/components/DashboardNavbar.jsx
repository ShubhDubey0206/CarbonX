import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session/auth data here
    localStorage.removeItem("isLoggedIn");
    navigate("/"); // redirect back to login
  };

  return (
    <nav className="navbar">
      <div className="logo">Dashboard</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        {/* <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li> */}
        <li><a href="/calculate">Calculate</a></li>
        <li><a href="/marketplace">Marketplace</a></li>
        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default DashboardNavbar;
