// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import DashboardNavbar from "./components/DashboardNavbar";
// import LandingPage from "./components/HeroModel/LandingPage";
// import Form from "./sections/Form";
// import Trade from "./sections/Trade"; 
// import Marketplace from "./sections/Marketplace";
// import Calculate from './sections/Calculate';

// function AppLayout() {
//   const location = useLocation();

//   const isFormPage = location.pathname === "/form";
//   const isDashboard = location.pathname.startsWith("/dashboard");

//   return (
//     <>
//       {/* Show correct Navbar */}
//       {!isFormPage && !isDashboard && <Navbar />}
//       {isDashboard && <DashboardNavbar />}

//       <Routes>
//         {/* Public pages */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/form" element={<Form />} />
//         <Route path="/trade" element={<Trade />} />
//         <Route path="/marketplace" element={<Marketplace />} />
//         <Route path="/calculate" element={<Calculate />} />


//         {/* Dashboard pages */}
//         <Route path="/dashboard" element={<h1>Welcome to Dashboard 🎉</h1>} />
//         <Route path="/profile" element={<h1>Your Profile</h1>} />
//         <Route path="/settings" element={<h1>Settings Page</h1>} />

//         {/* Fallback */}
//         <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//       </Routes>
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashboardNavbar from "./components/DashboardNavbar";
import LandingPage from "./components/HeroModel/LandingPage";
import Form from "./sections/Form";
import Trade from "./sections/Trade"; 
import Marketplace from "./sections/Marketplace";
import Calculate from './sections/Calculate';
import Dashboard from "./sections/Dashboard";

function AppLayout() {
  const location = useLocation();

  const isFormPage = location.pathname === "/form";
  const isTradePage = location.pathname === "/trade";
  const isCalculatePage = location.pathname === "/calculate";   
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isMarketPlace = location.pathname.startsWith("/marketplace");

  return (
    <>
      {/* Show correct Navbar */}
      {!isFormPage && !isTradePage && !isDashboard && !isCalculatePage && !isMarketPlace && <Navbar />}  
      {isDashboard && <DashboardNavbar />}

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/calculate" element={<Calculate />} />

        {/* Dashboard pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<h1>Your Profile</h1>} />
        <Route path="/settings" element={<h1>Settings Page</h1>} />

        {/* Fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
