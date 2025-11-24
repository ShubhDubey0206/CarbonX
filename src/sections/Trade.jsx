// import React from "react";

// function Trade() {
//   return (
//     <div className="trade-page">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h3>Markets</h3>
//         <ul>
//           <li>BTC/USDT</li>
//           <li>ETH/USDT</li>
//           <li>MATIC/USDT</li>
//           <li>SOL/USDT</li>
//           <li>ADA/USDT</li>
//         </ul>
//       </aside>

//       {/* Main trading area */}
//       <main className="trade-main">
//         <div className="chart">
//           <h3>BTC/USDT Chart</h3>
//           <div className="chart-placeholder">📊 Chart Placeholder</div>
//         </div>

//         <div className="order-section">
//           {/* Order Book */}
//           <div className="order-book">
//             <h4>Order Book</h4>
//             <ul>
//               <li>Sell 0.5 BTC @ 27000</li>
//               <li>Sell 1.0 BTC @ 26950</li>
//               <li>Buy 0.3 BTC @ 26800</li>
//               <li>Buy 0.7 BTC @ 26780</li>
//             </ul>
//           </div>

//           {/* Place Order */}
//           <div className="place-order">
//             <h4>Place Order</h4>
//             <form>
//               <input type="number" placeholder="Amount (BTC)" />
//               <input type="number" placeholder="Price (USDT)" />
//               <button className="buy">Buy</button>
//               <button className="sell">Sell</button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Trade;

// import React, { useState, useEffect } from "react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function Trade() {
//   const [chartData, setChartData] = useState(generateData());

//   // Function to generate random initial data
//   function generateData() {
//     return Array.from({ length: 15 }, (_, i) => {
//       return {
//         time: `T${i + 1}`,
//         price: 25000 + Math.floor(Math.random() * 10000 - 5000), // larger swings
//         volume: Math.floor(Math.random() * 2000) + 500, // bigger volume
//       };
//     });
//   }

//   // Update data every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setChartData((prev) => {
//         const newPoint = {
//           time: `T${prev.length + 1}`,
//           price: 25000 + Math.floor(Math.random() * 10000 - 5000),
//           volume: Math.floor(Math.random() * 2000) + 500,
//         };
//         return [...prev.slice(1), newPoint]; // keep only last 15
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="trade-page">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h3>Markets</h3>
//         <ul>
//           <li>BTC/USDT</li>
//           <li>ETH/USDT</li>
//           <li>MATIC/USDT</li>
//           <li>SOL/USDT</li>
//           <li>ADA/USDT</li>
//         </ul>
//       </aside>

//       {/* Main trading area */}
//       <main className="trade-main">
//         <div className="chart">
//           <h3>BTC/USDT Chart</h3>
//           <div style={{ display: "flex", gap: "20px", height: "300px" }}>
//             {/* Line Chart (Price trend) */}
//             <ResponsiveContainer width="50%" height="100%">
//               <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="time" hide />
//                 <YAxis />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke="#0077ff"
//                   strokeWidth={2}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>

//             {/* Bar Chart (Volume) */}
//             <ResponsiveContainer width="50%" height="100%">
//               <BarChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="time" hide />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="volume" fill="#26a69a" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="order-section">
//           {/* Order Book */}
//           <div className="order-book">
//             <h4>Order Book</h4>
//             <ul>
//               <li>Sell 0.5 BTC @ 27000</li>
//               <li>Sell 1.0 BTC @ 26950</li>
//               <li>Buy 0.3 BTC @ 26800</li>
//               <li>Buy 0.7 BTC @ 26780</li>
//             </ul>
//           </div>

//           {/* Place Order */}
//           <div className="place-order">
//             <h4>Place Order</h4>
//             <form>
//               <input type="number" placeholder="Amount (BTC)" />
//               <input type="number" placeholder="Price (USDT)" />
//               <button type="button" className="buy">
//                 Buy
//               </button>
//               <button type="button" className="sell">
//                 Sell
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Trade;

// import React, { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function Trade() {
//   const [chartData, setChartData] = useState(generateData());

//   // Function to generate random initial data
//   function generateData() {
//     return Array.from({ length: 15 }, (_, i) => {
//       return {
//         time: `T${i + 1}`,
//         price: 25000 + Math.floor(Math.random() * 10000 - 5000), // larger swings
//       };
//     });
//   }

//   // Update data every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setChartData((prev) => {
//         const newPoint = {
//           time: `T${prev.length + 1}`,
//           price: 25000 + Math.floor(Math.random() * 10000 - 5000),
//         };
//         return [...prev.slice(1), newPoint]; // keep only last 15
//       });
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="trade-page">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h3>Markets</h3>
//         <ul>
//           <li>BTC/USDT</li>
//           <li>ETH/USDT</li>
//           <li>MATIC/USDT</li>
//           <li>SOL/USDT</li>
//           <li>ADA/USDT</li>
//         </ul>
//       </aside>

//       {/* Main trading area */}
//       <main className="trade-main">
//         <div className="chart">
//           <h3>BTC/USDT Chart</h3>
//           <div style={{ width: "100%", height: "400px" }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="time" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke="#0077ff"
//                   strokeWidth={2}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="order-section">
//           {/* Order Book */}
//           <div className="order-book">
//             <h4>Order Book</h4>
//             <ul>
//               <li>Sell 0.5 BTC @ 27000</li>
//               <li>Sell 1.0 BTC @ 26950</li>
//               <li>Buy 0.3 BTC @ 26800</li>
//               <li>Buy 0.7 BTC @ 26780</li>
//             </ul>
//           </div>

//           {/* Place Order */}
//           <div className="place-order">
//             <h4>Place Order</h4>
//             <form>
//               <input type="number" placeholder="Amount (BTC)" />
//               <input type="number" placeholder="Price (USDT)" />
//               <button type="button" className="buy">
//                 Buy
//               </button>
//               <button type="button" className="sell">
//                 Sell
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Trade;

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Trade() {
  const [chartData, setChartData] = useState(generateData());

  // Function to generate random initial data
  function generateData() {
    return Array.from({ length: 15 }, (_, i) => {
      return {
        time: `T${i + 1}`,
        price: 25000 + Math.floor(Math.random() * 10000 - 5000), // larger swings
      };
    });
  }

  // Update data every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const newPoint = {
          time: `T${prev.length + 1}`,
          price: 25000 + Math.floor(Math.random() * 10000 - 5000),
        };
        return [...prev.slice(1), newPoint]; // keep only last 15
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trade-page">
      {/* Main trading area */}
      <main className="trade-main">
        {/* Chart */}
        <div className="chart">
          <h3>Carbon Credits</h3>
          <div style={{ width: "100%", height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#0077ff"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Place Order */}
        <div className="place-order" style={{ marginTop: "20px" }}>
          <h4>Place Order</h4>
          <form>
            <input type="number" placeholder="Amount (BTC)" />
            <input type="number" placeholder="Price (USDT)" />
            <button type="button" className="buy">
              Buy
            </button>
            <button type="button" className="sell">
              Sell
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Trade;
