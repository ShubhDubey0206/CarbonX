// import React from "react";

// function Dashboard() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Welcome to your Dashboard 🎉</h1>
//       <p>You have successfully logged in!</p>
//       <section></section>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";

function Dashboard() {
  // return (
  //   <div className="dashboard">
  //     <h1 className="dashboard-title">Dashboard</h1>

  //     <div className="dashboard-grid">
        
  //       <div className="dashboard-card">
  //         <h2>Carbon Credits</h2>
  //         <p>Track and analyze your earned carbon credits with real-time insights.</p>
  //       </div>

        
  //       <div className="dashboard-card">
  //         <h2>Marketplace</h2>
  //         <p>Buy and sell carbon credits securely on our marketplace platform.</p>
  //       </div>

        
  //       <div className="dashboard-card">
  //         <h2>Reports & Analytics</h2>
  //         <p>Generate reports and view detailed analytics of your activities.</p>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
  <div className="dashboard">
    <h1 className="dashboard-title">Dashboard</h1>

    <div className="dashboard-grid">
      
      <div className="dashboard-card">
        <h2>CALCULATE YOUR CREDITS</h2>
        <p>
          Monitor and manage your carbon credits efficiently. Our dashboard provides
          real-time insights into your carbon footprint reduction, allowing you to
          track progress, identify trends, and make data-driven decisions to maximize
          your sustainability impact.
        </p>
      </div>

      
      <div className="dashboard-card">
        <h2>MARKETPLACE</h2>
        <p>
          Access a secure and transparent marketplace for buying and selling carbon credits.
          Connect with verified companies, trade credits seamlessly, and ensure compliance
          with environmental regulations. Our platform simplifies transactions while
          promoting eco-friendly business practices.
        </p>
      </div>

      
      <div className="dashboard-card">
        <h2>VERIFICATION</h2>
        <p>
          Generate detailed reports and analytics of your carbon-related activities. Visualize
          trends, measure performance, and gain actionable insights to optimize your
          sustainability strategy. Use these reports to showcase your progress and make
          informed decisions for future initiatives.
        </p>
      </div>
    </div>
  </div>
);

}

export default Dashboard;
