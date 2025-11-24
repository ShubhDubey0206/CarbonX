// import express from 'express';

// const app = express();
// const port = 3001;

// // Use built-in express middleware instead of body-parser
// // body-parser is now deprecated and its functionality is included in Express
// app.use(express.json());

// // Add CORS headers to allow requests from your React app
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Allows all origins
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Specify allowed methods
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

// // The API endpoint to calculate carbon credits
// app.post('/api/calculate', (req, res) => {
//     const { electricity, fuel, travel } = req.body;

//     // Perform the calculation logic
//     const electricityEmissions = Number(electricity) * 0.5; // kg CO2 per kWh
//     const fuelEmissions = Number(fuel) * 2.3; // kg CO2 per litre
//     const travelEmissions = Number(travel) * 0.15; // kg CO2 per km
//     const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;

//     const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

//     const result = {
//         credits: calculatedCredits.toFixed(2),
//         breakdown: {
//             electricity: electricityEmissions.toFixed(2),
//             fuel: fuelEmissions.toFixed(2),
//             travel: travelEmissions.toFixed(2),
//             total: totalEmissions.toFixed(2),
//         },
//     };

//     res.json(result);
// });

// // Start the server and listen on the specified port
// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });

// import express from 'express';
// import fetch from 'node-fetch'; // make sure to install with: npm install node-fetch

// const app = express();
// const port = 3001;

// // Middleware
// app.use(express.json());

// // CORS headers to allow requests from your React app
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Allows all origins
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     next();
// });

// // API endpoint to calculate carbon credits using Gemini API
// app.post('/api/calculate', async (req, res) => {
//     const { electricity, fuel, travel } = req.body;

//     try {
//         // Call Gemini API (replace with actual endpoint & API key)
//         const geminiResponse = await fetch('https://api.gemini.com/carbon-credit/calculate', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer AIzaSyAwWlQZRyyfuGis0-AVtbp_vgZs4POVHbM', // keep secret
//             },
//             body: JSON.stringify({ electricity, fuel, travel }),
//         });

//         if (!geminiResponse.ok) {
//             throw new Error(`Gemini API error: ${geminiResponse.status}`);
//         }

//         const data = await geminiResponse.json();

//         // Send structured result to frontend
//         res.json({
//             credits: data.totalCredits ?? 0, // fallback to 0 if undefined
//             breakdown: data.emissionsBreakdown ?? {
//                 electricity: 'N/A',
//                 fuel: 'N/A',
//                 travel: 'N/A',
//                 total: 'N/A',
//             },
//         });
//     } catch (err) {
//         console.error('Error calculating carbon credits:', err);

//         // Fallback to local calculation if Gemini API fails
//         const electricityEmissions = Number(electricity) * 0.5; // kg CO2 per kWh
//         const fuelEmissions = Number(fuel) * 2.3; // kg CO2 per litre
//         const travelEmissions = Number(travel) * 0.15; // kg CO2 per km
//         const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;

//         const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

//         res.json({
//             credits: calculatedCredits.toFixed(2),
//             breakdown: {
//                 electricity: electricityEmissions.toFixed(2),
//                 fuel: fuelEmissions.toFixed(2),
//                 travel: travelEmissions.toFixed(2),
//                 total: totalEmissions.toFixed(2),
//             },
//         });
//     }
// });

// // Start server
// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });


// import express from 'express';
// import fetch from 'node-fetch';

// const app = express();
// const port = 3001;

// app.use(express.json());

// // CORS middleware
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// app.post('/api/calculate', async (req, res) => {
//   const { electricity, fuel, travel } = req.body;

//   try {
//     // Example: Electricity calculation
//     const electricityResponse = await fetch('https://www.carboninterface.com/api/v1/estimates', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer msrjaxDJD4iLA2CQtdSw', // your key
//       },
//       body: JSON.stringify({
//         type: 'electricity',
//         electricity: { kwh: Number(electricity) },
//         country: 'IN', // adjust if needed
//       }),
//     });

//     if (!electricityResponse.ok) throw new Error(`Carbon Interface error: ${electricityResponse.statusText}`);

//     const electricityData = await electricityResponse.json();
//     const electricityEmissions = electricityData.data.attributes.carbon_kg || 0;

//     // For simplicity, fallback for fuel & travel locally
//     const fuelEmissions = Number(fuel) * 2.3; 
//     const travelEmissions = Number(travel) * 0.15; 

//     const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;
//     const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

//     res.json({
//       credits: calculatedCredits.toFixed(2),
//       breakdown: {
//         electricity: electricityEmissions.toFixed(2),
//         fuel: fuelEmissions.toFixed(2),
//         travel: travelEmissions.toFixed(2),
//         total: totalEmissions.toFixed(2),
//       },
//     });
//   } catch (err) {
//     console.error('Error calculating carbon credits:', err);

//     // Fallback if API fails
//     const electricityEmissions = Number(electricity) * 0.5; 
//     const fuelEmissions = Number(fuel) * 2.3; 
//     const travelEmissions = Number(travel) * 0.15; 
//     const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;
//     const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

//     res.json({
//       credits: calculatedCredits.toFixed(2),
//       breakdown: {
//         electricity: electricityEmissions.toFixed(2),
//         fuel: fuelEmissions.toFixed(2),
//         travel: travelEmissions.toFixed(2),
//         total: totalEmissions.toFixed(2),
//       },
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });


// import express from 'express';
// import fetch from 'node-fetch';

// const app = express();
// const port = 3001;

// // Middleware
// app.use(express.json());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   next();
// });

// app.post('/api/calculate', async (req, res) => {
//   const { electricity, fuel, travel } = req.body;

//   console.log("Received inputs:", electricity, fuel, travel);

//   try {
//     // === Attempt API call to Carbon Interface for electricity ===
//     const apiKey = 'msrjaxDJD4iLA2CQtdSw'; // your key
//     const response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         type: 'electricity',
//         electricity: { unit: 'kwh', value: Number(electricity) },
//         country: 'IN',
//       }),
//     });

//     let electricityEmissions = 0;

//     if (response.ok) {
//       const data = await response.json();
//       electricityEmissions = data.data.attributes.carbon_kg || 0;
//     } else {
//       console.warn('Carbon Interface API failed, using fallback for electricity.');
//       electricityEmissions = Number(electricity) * 0.5;
//     }

//     // === Fallback for fuel & travel ===
//     const fuelEmissions = Number(fuel) * 2.3;
//     const travelEmissions = Number(travel) * 0.15;

//     const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;
//     const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

//     res.json({
//       credits: calculatedCredits.toFixed(2),
//       breakdown: {
//         electricity: electricityEmissions.toFixed(2),
//         fuel: fuelEmissions.toFixed(2),
//         travel: travelEmissions.toFixed(2),
//         total: totalEmissions.toFixed(2),
//       },
//     });
//   } catch (err) {
//     console.error('Error calculating carbon credits:', err);

//     // === Complete fallback calculation ===
//     const electricityEmissions = Number(electricity) * 0.5;
//     const fuelEmissions = Number(fuel) * 2.3;
//     const travelEmissions = Number(travel) * 0.15;
//     const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;
//     const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

//     res.json({
//       credits: calculatedCredits.toFixed(2),
//       breakdown: {
//         electricity: electricityEmissions.toFixed(2),
//         fuel: fuelEmissions.toFixed(2),
//         travel: travelEmissions.toFixed(2),
//         total: totalEmissions.toFixed(2),
//       },
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });


// import express from 'express';

// const app = express();
// const port = 3001;

// app.use(express.json());

// // CORS middleware
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// app.post('/api/calculate', (req, res) => {
//   const { electricity, fuel, travel } = req.body;

//   console.log("Received inputs:", electricity, fuel, travel);

//   try {
//     // Local hardcoded calculation
//     const electricityEmissions = Number(electricity) * 0.5; // kg CO2 per kWh
//     const fuelEmissions = Number(fuel) * 2.3; // kg CO2 per litre
//     const travelEmissions = Number(travel) * 0.15; // kg CO2 per km
//     const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;

//     const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

//     res.json({
//       credits: calculatedCredits.toFixed(2),
//       breakdown: {
//         electricity: electricityEmissions.toFixed(2),
//         fuel: fuelEmissions.toFixed(2),
//         travel: travelEmissions.toFixed(2),
//         total: totalEmissions.toFixed(2),
//       },
//     });
//   } catch (err) {
//     console.error('Calculation error:', err);
//     res.status(500).json({ error: 'Failed to calculate.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });


import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // allow all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.post('/api/calculate', async (req, res) => {
  const { electricity, fuel, travel } = req.body;

  console.log("Received inputs:", electricity, fuel, travel);

  // Validate input
  if (
    electricity === undefined ||
    fuel === undefined ||
    travel === undefined ||
    electricity === "" ||
    fuel === "" ||
    travel === ""
  ) {
    return res.status(400).json({ error: "All inputs are required" });
  }

  const elecValue = Number(electricity);
  const fuelValue = Number(fuel);
  const travelValue = Number(travel);

  if (isNaN(elecValue) || isNaN(fuelValue) || isNaN(travelValue)) {
    return res.status(400).json({ error: "Inputs must be numbers" });
  }

  try {
    // --- API Call to Carbon Interface for electricity ---
    const apiKey = 'msrjaxDJD4iLA2CQtdSw'; // Your API key
    let electricityEmissions = 0;

    const response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        type: 'electricity',
        electricity: { unit: 'kwh', value: elecValue },
        country: 'IN',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      electricityEmissions = data.data.attributes.carbon_kg || 0;
    } else {
      console.warn('Carbon Interface API failed, using fallback for electricity.');
      electricityEmissions = elecValue * 0.5;
    }

    // --- Fallback for fuel & travel ---
    const fuelEmissions = fuelValue * 2.3;
    const travelEmissions = travelValue * 0.15;

    const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;
    const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

    res.json({
      credits: calculatedCredits.toFixed(2),
      breakdown: {
        electricity: electricityEmissions.toFixed(2),
        fuel: fuelEmissions.toFixed(2),
        travel: travelEmissions.toFixed(2),
        total: totalEmissions.toFixed(2),
      },
    });
  } catch (err) {
    console.error("Error calculating carbon credits:", err);

    // --- Complete fallback calculation ---
    const electricityEmissions = elecValue * 0.5;
    const fuelEmissions = fuelValue * 2.3;
    const travelEmissions = travelValue * 0.15;
    const totalEmissions = electricityEmissions + fuelEmissions + travelEmissions;
    const calculatedCredits = Math.max(0, 5000 - totalEmissions / 5);

    res.json({
      credits: calculatedCredits.toFixed(2),
      breakdown: {
        electricity: electricityEmissions.toFixed(2),
        fuel: fuelEmissions.toFixed(2),
        travel: travelEmissions.toFixed(2),
        total: totalEmissions.toFixed(2),
      },
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
