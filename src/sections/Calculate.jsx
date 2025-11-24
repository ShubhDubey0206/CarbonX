// import React, { useState } from "react";

// function Calculate() {
//   const [formData, setFormData] = useState({
//     electricity: "",
//     fuel: "",
//     travel: "",
//   });
//   const [credits, setCredits] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // simple mock formula for carbon credits
//     const { electricity, fuel, travel } = formData;
//     const carbonEmissions =
//       Number(electricity) * 0.5 +
//       Number(fuel) * 2.3 +
//       Number(travel) * 0.15;

//     // credits are inverse of emissions (just demo logic)
//     const calculatedCredits = Math.max(0, (1000 - carbonEmissions) / 10);

//     setCredits(calculatedCredits.toFixed(2));
//   };

//   return (
//     <div className="calculate-container">
//       <h1>🌱 Calculate Your Carbon Credits</h1>
//       <form onSubmit={handleSubmit} className="calculate-form">
//         <label>
//           Electricity Usage (kWh/month):
//           <input
//             type="number"
//             name="electricity"
//             value={formData.electricity}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Fuel Consumption (litres/month):
//           <input
//             type="number"
//             name="fuel"
//             value={formData.fuel}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Travel Distance (km/month):
//           <input
//             type="number"
//             name="travel"
//             value={formData.travel}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <button type="submit">Calculate</button>
//       </form>

//       {credits !== null && (
//         <div className="result-card">
//           <h2>✅ Your Estimated Carbon Credits</h2>
//           <p>{credits} Credits</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Calculate;

// import React, { useState } from "react";

// function Calculate() {
//   const [formData, setFormData] = useState({
//     electricity: "",
//     fuel: "",
//     travel: "",
//   });
//   const [credits, setCredits] = useState(null);
//   const [emissionsBreakdown, setEmissionsBreakdown] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const calculateCredits = ({ electricity, fuel, travel }) => {
//     // Calculate emissions in tons of CO2
//     const electricityEmissions = Number(electricity) * 0.5; // kg CO2 per kWh
//     const fuelEmissions = Number(fuel) * 2.3; // kg CO2 per litre
//     const travelEmissions = Number(travel) * 0.15; // kg CO2 per km

//     const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;

//     // Credits calculation scaled for big businesses
//     const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

//     return {
//       credits: calculatedCredits.toFixed(2),
//       breakdown: {
//         electricity: electricityEmissions.toFixed(2),
//         fuel: fuelEmissions.toFixed(2),
//         travel: travelEmissions.toFixed(2),
//         total: totalEmissions.toFixed(2),
//       },
//     };
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { credits, breakdown } = calculateCredits(formData);
//     setCredits(credits);
//     setEmissionsBreakdown(breakdown);
//   };

//   const handleRandom = () => {
//     // Business-scale random values
//     const randomData = {
//   electricity: Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000, // 1,000-20,000 kWh
//   fuel: Math.floor(Math.random() * (4000 - 200 + 1)) + 200,           // 200-4,000 L
//   travel: Math.floor(Math.random() * (10000 - 500 + 1)) + 500,        // 500-10,000 km
// };
//     setFormData(randomData);
//     const { credits, breakdown } = calculateCredits(randomData);
//     setCredits(credits);
//     setEmissionsBreakdown(breakdown);
//   };

//   return (
//     <div className="calculate-container">
//       <h1>Calculate Your Carbon Credits</h1>
//       <form onSubmit={handleSubmit} className="calculate-form">
//         <label>
//           Electricity Usage (kWh/month):
//           <input
//             type="number"
//             name="electricity"
//             value={formData.electricity}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Fuel Consumption (litres/month):
//           <input
//             type="number"
//             name="fuel"
//             value={formData.fuel}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Travel Distance (km/month):
//           <input
//             type="number"
//             name="travel"
//             value={formData.travel}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <button type="submit">Calculate</button>
//         <button type="button" onClick={handleRandom} style={{ marginLeft: "10px" }}>
//           Use Random Business Data
//         </button>
//       </form>

//       {credits !== null && emissionsBreakdown && (
//         <div className="result-card">
//           <h2>✅ Your Estimated Carbon Credits</h2>
//           <p>{credits} Credits</p>

//           <h3>📊 CO₂ Emissions Breakdown (kg)</h3>
//           <ul>
//             <li>Electricity: {emissionsBreakdown.electricity}</li>
//             <li>Fuel: {emissionsBreakdown.fuel}</li>
//             <li>Travel: {emissionsBreakdown.travel}</li>
//             <li><strong>Total: {emissionsBreakdown.total}</strong></li>
//           </ul>

//           <p>
//             <strong>Data Used:</strong> Electricity: {formData.electricity} kWh, Fuel: {formData.fuel} L, Travel: {formData.travel} km
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Calculate;

// import React, { useState } from "react";

// function Calculate() {
//   const [formData, setFormData] = useState({
//     electricity: "",
//     fuel: "",
//     travel: "",
//   });
//   const [credits, setCredits] = useState(null);
//   const [emissionsBreakdown, setEmissionsBreakdown] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); // New loading state
//   const [error, setError] = useState(null); // New error state

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // This function now handles the API call
//   const fetchData = async (data) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("http://localhost:3001/api/calculate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       setCredits(result.credits);
//       setEmissionsBreakdown(result.breakdown);
//     } catch (e) {
//       console.error("Failed to fetch data:", e);
//       setError("Failed to calculate. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchData(formData);
//   };

//   const handleRandom = () => {
//     const randomData = {
//       electricity: Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000,
//       fuel: Math.floor(Math.random() * (4000 - 200 + 1)) + 200,
//       travel: Math.floor(Math.random() * (10000 - 500 + 1)) + 500,
//     };
//     setFormData(randomData);
//     fetchData(randomData);
//   };

//   return (
//     <div className="calculate-container">
//       <h1>Calculate Your Carbon Credits</h1>
//       <form onSubmit={handleSubmit} className="calculate-form">
//         <label>
//           Electricity Usage (kWh/month):
//           <input
//             type="number"
//             name="electricity"
//             value={formData.electricity}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         {/* ... (other input fields) ... */}
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Calculating..." : "Calculate"}
//         </button>
//         <button type="button" onClick={handleRandom} style={{ marginLeft: "10px" }} disabled={isLoading}>
//           {isLoading ? "..." : "Use Random Business Data"}
//         </button>
//       </form>

//       {/* Show loading, error, or result */}
//       {isLoading && <p>Calculating...</p>}
//       {error && <p className="error">{error}</p>}
//       {credits !== null && emissionsBreakdown && !isLoading && (
//         <div className="result-card">
//           {/* ... (result display) ... */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Calculate;

// import React, { useState } from "react";

// function Calculate() {
//   const [formData, setFormData] = useState({
//     electricity: "",
//     fuel: "",
//     travel: "",
//   });
//   const [credits, setCredits] = useState(null);
//   const [emissionsBreakdown, setEmissionsBreakdown] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const fetchData = async (data) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("http://localhost:3001/api/calculate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//       const result = await response.json();
//       setCredits(result.credits);
//       setEmissionsBreakdown(result.breakdown);
//     } catch (e) {
//       console.error("Failed to fetch data:", e);
//       setError("Failed to calculate. Please try again later.");
//       setCredits(null);
//       setEmissionsBreakdown(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchData(formData);
//   };

//   const handleRandom = () => {
//     const randomData = {
//       electricity: Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000,
//       fuel: Math.floor(Math.random() * (4000 - 200 + 1)) + 200,
//       travel: Math.floor(Math.random() * (10000 - 500 + 1)) + 500,
//     };
//     setFormData(randomData);
//     fetchData(randomData);
//   };

//   return (
//     <div className="calculate-container" style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
//       <h1>Calculate Your Carbon Credits</h1>
//       <form onSubmit={handleSubmit} className="calculate-form" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//         <label>
//           Electricity Usage (kWh/month):
//           <input
//             type="number"
//             name="electricity"
//             value={formData.electricity}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Fuel Consumption (liters/month):
//           <input
//             type="number"
//             name="fuel"
//             value={formData.fuel}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Travel Distance (km/month):
//           <input
//             type="number"
//             name="travel"
//             value={formData.travel}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <div style={{ display: "flex", gap: "10px" }}>
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? "Calculating..." : "Calculate"}
//           </button>
//           <button type="button" onClick={handleRandom} disabled={isLoading}>
//             {isLoading ? "..." : "Use Random Business Data"}
//           </button>
//         </div>
//       </form>

//       {/* Show loading, error, or result */}
//       {isLoading && <p>Calculating...</p>}
//       {error && <p className="error" style={{ color: "red" }}>{error}</p>}
//       {credits !== null && emissionsBreakdown && !isLoading && (
//         <div className="result-card" style={{ marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", background: "#f9f9f9" }}>
//           <h2>Result</h2>
//           <p><strong>Total Carbon Credits:</strong> {credits}</p>
//           <h3>Emissions Breakdown:</h3>
//           <ul>
//             {Object.entries(emissionsBreakdown).map(([key, value]) => (
//               <li key={key}><strong>{key}:</strong> {value}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Calculate;

import React, { useState } from "react";

function Calculate() {
  const [formData, setFormData] = useState({
    land: "",
    vegetation: "",
    trees: "",
    age: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚡ Simple estimation logic (placeholder formula)
    const landFactor = parseFloat(formData.land) * 2; // 2 credits per acre
    const treeFactor = parseFloat(formData.trees) * 0.5; // 0.5 credit per tree
    const ageFactor = parseFloat(formData.age) * 0.2; // 0.2 credit per year
    const vegetationFactor =
      formData.vegetation.toLowerCase() === "forest"
        ? 50
        : formData.vegetation.toLowerCase() === "grassland"
        ? 20
        : 10;

    const totalCredits = landFactor + treeFactor + ageFactor + vegetationFactor;

    setResult(totalCredits.toFixed(2));
  };

  return (
    <div
      className="calculate-container"
      style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
    >
      <h1>Calculate Your Carbon Credits</h1>
      <form
        onSubmit={handleSubmit}
        className="calculate-form"
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <label>
          Land (in acres):
          <input
            type="number"
            name="land"
            value={formData.land}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Type of Vegetation (Forest / Grassland / Other):
          <input
            type="text"
            name="vegetation"
            value={formData.vegetation}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Trees:
          <input
            type="number"
            name="trees"
            value={formData.trees}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Average Age of Trees (years):
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#0077ff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Calculate
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
          🌍 Estimated Carbon Credits: {result}
        </div>
      )}
    </div>
  );
}

export default Calculate;
