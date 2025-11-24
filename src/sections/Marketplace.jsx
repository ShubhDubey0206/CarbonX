// import React, { useState } from "react";

// function Marketplace() {
//   const [listings, setListings] = useState([
//     { id: 1, seller: "Green Corp", credits: 100, price: 12 },
//     { id: 2, seller: "Eco Solutions", credits: 250, price: 10 },
//   ]);

//   const [requests, setRequests] = useState([
//     { id: 1, buyer: "CleanAir Pvt Ltd", credits: 50, price: 11 },
//     { id: 2, buyer: "Future Energy", credits: 150, price: 9 },
//   ]);

//   const [formType, setFormType] = useState("sell"); // sell or buy
//   const [formData, setFormData] = useState({ name: "", credits: "", price: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formType === "sell") {
//       setListings([
//         ...listings,
//         {
//           id: listings.length + 1,
//           seller: formData.name || "Anonymous Seller",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//         },
//       ]);
//     } else {
//       setRequests([
//         ...requests,
//         {
//           id: requests.length + 1,
//           buyer: formData.name || "Anonymous Buyer",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//         },
//       ]);
//     }
//     setFormData({ name: "", credits: "", price: "" });
//   };

//   return (
//     <div className="marketplace">
//       <h1>🌍 Carbon Credit Marketplace</h1>

//       {/* Listings Section */}
//       <section className="listings">
//         <h2>Available Listings (Sellers)</h2>
//         <ul>
//           {listings.map((item) => (
//             <li key={item.id}>
//               <strong>{item.seller}</strong> – {item.credits} credits @ ${item.price} each
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Requests Section */}
//       <section className="requests">
//         <h2>Buy Requests (Buyers)</h2>
//         <ul>
//           {requests.map((req) => (
//             <li key={req.id}>
//               <strong>{req.buyer}</strong> wants {req.credits} credits @ ${req.price}
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Post Request / Listing Form */}
//       <section className="form-section">
//         <h2>Post Your Request</h2>
//         <div className="form-toggle">
//           <button onClick={() => setFormType("sell")} className={formType === "sell" ? "active" : ""}>
//             Sell Credits
//           </button>
//           <button onClick={() => setFormType("buy")} className={formType === "buy" ? "active" : ""}>
//             Buy Credits
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="marketplace-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name / Company"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="credits"
//             placeholder="Number of Credits"
//             value={formData.credits}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price per Credit ($)"
//             value={formData.price}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">{formType === "sell" ? "List for Sale" : "Post Buy Request"}</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Marketplace;

// import React, { useState } from "react";

// function Marketplace() {
//   const [listings, setListings] = useState([
//     {
//       id: 1,
//       seller: "Green Corp",
//       credits: 100,
//       price: 12,
//       image: "https://via.placeholder.com/100x80?text=GreenCorp",
//     },
//     {
//       id: 2,
//       seller: "Eco Solutions",
//       credits: 250,
//       price: 10,
//       image: "https://via.placeholder.com/100x80?text=Eco",
//     },
//   ]);

//   const [requests, setRequests] = useState([
//     { id: 1, buyer: "CleanAir Pvt Ltd", credits: 50, price: 11 },
//     { id: 2, buyer: "Future Energy", credits: 150, price: 9 },
//   ]);

//   const [formType, setFormType] = useState("sell"); // sell or buy
//   const [formData, setFormData] = useState({ name: "", credits: "", price: "", image: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formType === "sell") {
//       setListings([
//         ...listings,
//         {
//           id: listings.length + 1,
//           seller: formData.name || "Anonymous Seller",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//           image: formData.image || "https://via.placeholder.com/100x80?text=Credits",
//         },
//       ]);
//     } else {
//       setRequests([
//         ...requests,
//         {
//           id: requests.length + 1,
//           buyer: formData.name || "Anonymous Buyer",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//         },
//       ]);
//     }
//     setFormData({ name: "", credits: "", price: "", image: "" });
//   };

//   return (
//     <div className="marketplace">
//       <h1>🌍 Carbon Credit Marketplace</h1>

//       {/* Listings Section */}
//       <section className="listings">
//         <h2>Available Listings (Sellers)</h2>
//         <div className="card-container">
//           {listings.map((item) => (
//             <div className="card" key={item.id}>
//               <img src={item.image} alt={item.seller} />
//               <div className="card-info">
//                 <h3>{item.seller}</h3>
//                 <p>{item.credits} credits</p>
//                 <p>
//                   <strong>${item.price}</strong> each
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Requests Section */}
//       <section className="requests">
//         <h2>Buy Requests (Buyers)</h2>
//         <div className="card-container">
//           {requests.map((req) => (
//             <div className="card" key={req.id}>
//               <div className="card-info">
//                 <h3>{req.buyer}</h3>
//                 <p>Wants {req.credits} credits</p>
//                 <p>
//                   <strong>${req.price}</strong> offer
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Post Request / Listing Form */}
//       <section className="form-section">
//         <h2>Post Your {formType === "sell" ? "Listing" : "Request"}</h2>
//         <div className="form-toggle">
//           <button onClick={() => setFormType("sell")} className={formType === "sell" ? "active" : ""}>
//             Sell Credits
//           </button>
//           <button onClick={() => setFormType("buy")} className={formType === "buy" ? "active" : ""}>
//             Buy Credits
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="marketplace-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name / Company"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="credits"
//             placeholder="Number of Credits"
//             value={formData.credits}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price per Credit ($)"
//             value={formData.price}
//             onChange={handleChange}
//             required
//           />
//           {formType === "sell" && (
//             <input
//               type="text"
//               name="image"
//               placeholder="Image URL (optional)"
//               value={formData.image}
//               onChange={handleChange}
//             />
//           )}
//           <button type="submit">{formType === "sell" ? "List for Sale" : "Post Buy Request"}</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Marketplace;

// import React, { useState } from "react";


// function Marketplace() {
//   const [listings, setListings] = useState([
//     {
//       id: 1,
//       seller: "Green Corp",
//       credits: 100,
//       price: 12,
//       image: "https://via.placeholder.com/100x80?text=GreenCorp",
//     },
//     {
//       id: 2,
//       seller: "Eco Solutions",
//       credits: 250,
//       price: 10,
//       image: "https://via.placeholder.com/100x80?text=Eco",
//     },
//   ]);

//   const [requests, setRequests] = useState([
//     { id: 1, buyer: "CleanAir Pvt Ltd", credits: 50, price: 11 },
//     { id: 2, buyer: "Future Energy", credits: 150, price: 9 },
//   ]);

//   const [formType, setFormType] = useState("sell"); // sell or buy
//   const [formData, setFormData] = useState({ name: "", credits: "", price: "", image: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formType === "sell") {
//       setListings([
//         ...listings,
//         {
//           id: listings.length + 1,
//           seller: formData.name || "Anonymous Seller",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//           image: formData.image || "https://via.placeholder.com/100x80?text=Credits",
//         },
//       ]);
//     } else {
//       setRequests([
//         ...requests,
//         {
//           id: requests.length + 1,
//           buyer: formData.name || "Anonymous Buyer",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//         },
//       ]);
//     }
//     setFormData({ name: "", credits: "", price: "", image: "" });
//   };

//   const handleDeleteListing = (id) => {
//     setListings(listings.filter((item) => item.id !== id));
//   };

//   const handleDeleteRequest = (id) => {
//     setRequests(requests.filter((req) => req.id !== id));
//   };

//   return (
//     <div className="marketplace">
//       <h1>🌍 Carbon Credit Marketplace</h1>

//       {/* Listings Section */}
//       <section className="listings">
//         <h2>Available Listings (Sellers)</h2>
//         <div className="card-container">
//           {listings.map((item) => (
//             <div className="card" key={item.id}>
//               <img src={item.image} alt={item.seller} />
//               <div className="card-info">
//                 <h3>{item.seller}</h3>
//                 <p>{item.credits} credits</p>
//                 <p>
//                   <strong>${item.price}</strong> each
//                 </p>
//               </div>
//               <button className="delete-btn" onClick={() => handleDeleteListing(item.id)}>❌</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Requests Section */}
//       <section className="requests">
//         <h2>Buy Requests (Buyers)</h2>
//         <div className="card-container">
//           {requests.map((req) => (
//             <div className="card" key={req.id}>
//               <div className="card-info">
//                 <h3>{req.buyer}</h3>
//                 <p>Wants {req.credits} credits</p>
//                 <p>
//                   <strong>${req.price}</strong> offer
//                 </p>
//               </div>
//               <button className="delete-btn" onClick={() => handleDeleteRequest(req.id)}>❌</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Post Request / Listing Form */}
//       <section className="form-section">
//         <h2>Post Your {formType === "sell" ? "Listing" : "Request"}</h2>
//         <div className="form-toggle">
//           <button onClick={() => setFormType("sell")} className={formType === "sell" ? "active" : ""}>
//             Sell Credits
//           </button>
//           <button onClick={() => setFormType("buy")} className={formType === "buy" ? "active" : ""}>
//             Buy Credits
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="marketplace-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name / Company"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="credits"
//             placeholder="Number of Credits"
//             value={formData.credits}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price per Credit ($)"
//             value={formData.price}
//             onChange={handleChange}
//             required
//           />
//           {formType === "sell" && (
//             <input
//               type="text"
//               name="image"
//               placeholder="Image URL (optional)"
//               value={formData.image}
//               onChange={handleChange}
//             />
//           )}
//           <button type="submit">{formType === "sell" ? "List for Sale" : "Post Buy Request"}</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Marketplace;


// import React, { useState } from "react";

// function Marketplace() {
//   const [listings, setListings] = useState([
//     {
//       id: 1,
//       seller: "Green Corp",
//       credits: 100,
//       price: 12,
//       image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80", // Forest
//     },
//     {
//       id: 2,
//       seller: "Eco Solutions",
//       credits: 250,
//       price: 10,
//       image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80", // Wind turbines
//     },
//     {
//       id: 3,
//       seller: "Solar Future",
//       credits: 400,
//       price: 14,
//       image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80", // Solar panels
//     },
//   ]);

//   const [requests, setRequests] = useState([
//     {
//       id: 1,
//       buyer: "CleanAir Pvt Ltd",
//       credits: 50,
//       price: 11,
//     },
//     {
//       id: 2,
//       buyer: "Future Energy",
//       credits: 150,
//       price: 9,
//     },
//   ]);

//   const [formType, setFormType] = useState("sell"); // sell or buy
//   const [formData, setFormData] = useState({ name: "", credits: "", price: "", image: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formType === "sell") {
//       setListings([
//         ...listings,
//         {
//           id: listings.length + 1,
//           seller: formData.name || "Anonymous Seller",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//           image: formData.image || "https://via.placeholder.com/100x80?text=Credits",
//         },
//       ]);
//     } else {
//       setRequests([
//         ...requests,
//         {
//           id: requests.length + 1,
//           buyer: formData.name || "Anonymous Buyer",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//         },
//       ]);
//     }
//     setFormData({ name: "", credits: "", price: "", image: "" });
//   };

//   const handleDeleteListing = (id) => {
//     setListings(listings.filter((item) => item.id !== id));
//   };

//   const handleDeleteRequest = (id) => {
//     setRequests(requests.filter((req) => req.id !== id));
//   };

//   return (
//     <div className="marketplace">
//       <h1>🌍 Carbon Credit Marketplace</h1>

//       {/* Listings Section */}
//       <section className="listings">
//         <h2>Available Listings (Sellers)</h2>
//         <div className="card-container">
//           {listings.map((item) => (
//             <div className="card" key={item.id}>
//               <img src={item.image} alt={item.seller} />
//               <div className="card-info">
//                 <h3>{item.seller}</h3>
//                 <p>{item.credits} credits</p>
//                 <p>
//                   <strong>${item.price}</strong> each
//                 </p>
//               </div>
//               <button className="delete-btn" onClick={() => handleDeleteListing(item.id)}>❌</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Requests Section */}
//       <section className="requests">
//         <h2>Buy Requests (Buyers)</h2>
//         <div className="card-container">
//           {requests.map((req) => (
//             <div className="card" key={req.id}>
//               <div className="card-info">
//                 <h3>{req.buyer}</h3>
//                 <p>Wants {req.credits} credits</p>
//                 <p>
//                   <strong>${req.price}</strong> offer
//                 </p>
//               </div>
//               <button className="delete-btn" onClick={() => handleDeleteRequest(req.id)}>❌</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Post Request / Listing Form */}
//       <section className="form-section">
//         <h2>Post Your {formType === "sell" ? "Listing" : "Request"}</h2>
//         <div className="form-toggle">
//           <button onClick={() => setFormType("sell")} className={formType === "sell" ? "active" : ""}>
//             Sell Credits
//           </button>
//           <button onClick={() => setFormType("buy")} className={formType === "buy" ? "active" : ""}>
//             Buy Credits
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="marketplace-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name / Company"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="credits"
//             placeholder="Number of Credits"
//             value={formData.credits}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price per Credit ($)"
//             value={formData.price}
//             onChange={handleChange}
//             required
//           />
//           {formType === "sell" && (
//             <input
//               type="text"
//               name="image"
//               placeholder="Image URL (optional)"
//               value={formData.image}
//               onChange={handleChange}
//             />
//           )}
//           <button type="submit">{formType === "sell" ? "List for Sale" : "Post Buy Request"}</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Marketplace;


// import React, { useState } from "react";

// function Marketplace() {
//   const [listings, setListings] = useState([
//     {
//       id: 1,
//       seller: "Green Corp",
//       credits: 100,
//       price: 12,
//       image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80", // Forest
//     },
//     {
//       id: 2,
//       seller: "Eco Solutions",
//       credits: 250,
//       price: 10,
//       image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80", // Wind turbines
//     },
//     {
//       id: 3,
//       seller: "Solar Future",
//       credits: 400,
//       price: 14,
//       image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80", // Solar panels
//     },
//   ]);

//   const [requests, setRequests] = useState([
//     {
//       id: 1,
//       buyer: "CleanAir Pvt Ltd",
//       credits: 50,
//       price: 11,
//     },
//     {
//       id: 2,
//       buyer: "Future Energy",
//       credits: 150,
//       price: 9,
//     },
//   ]);

//   const [formType, setFormType] = useState("sell"); // sell or buy
//   const [formData, setFormData] = useState({ name: "", credits: "", price: "", image: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formType === "sell") {
//       setListings([
//         ...listings,
//         {
//           id: listings.length + 1,
//           seller: formData.name || "Anonymous Seller",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//           image: formData.image || "https://via.placeholder.com/100x80?text=Credits",
//         },
//       ]);
//     } else {
//       setRequests([
//         ...requests,
//         {
//           id: requests.length + 1,
//           buyer: formData.name || "Anonymous Buyer",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//         },
//       ]);
//     }
//     setFormData({ name: "", credits: "", price: "", image: "" });
//   };

//   const handleDeleteListing = (id) => {
//     setListings(listings.filter((item) => item.id !== id));
//   };

//   const handleDeleteRequest = (id) => {
//     setRequests(requests.filter((req) => req.id !== id));
//   };

//   const handleSelectListing = (item) => {
//     setFormType("buy"); // Switch to buy form
//     setFormData({
//       name: "",
//       credits: item.credits,
//       price: item.price,
//       image: "", // Not needed for buy
//     });
//   };

//   return (
//     <div className="marketplace">
//       <h1>🌍 Carbon Credit Marketplace</h1>

//       {/* Listings Section */}
//       <section className="listings">
//         <h2>Available Listings (Sellers)</h2>
//         <div className="card-container">
//           {listings.map((item) => (
//             <div className="card" key={item.id}>
//               <img src={item.image} alt={item.seller} />
//               <div className="card-info">
//                 <h3>{item.seller}</h3>
//                 <p>ID: {item.id}</p> {/* Display listing ID */}
//                 <p>{item.credits} credits</p>
//                 <p>
//                   <strong>${item.price}</strong> each
//                 </p>
//               </div>
//               <button className="delete-btn" onClick={() => handleDeleteListing(item.id)}>❌</button>
//               <button className="select-btn" onClick={() => handleSelectListing(item)}>Select</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Requests Section */}
//       <section className="requests">
//         <h2>Buy Requests (Buyers)</h2>
//         <div className="card-container">
//           {requests.map((req) => (
//             <div className="card" key={req.id}>
//               <div className="card-info">
//                 <h3>{req.buyer}</h3>
//                 <p>Wants {req.credits} credits</p>
//                 <p>
//                   <strong>${req.price}</strong> offer
//                 </p>
//               </div>
//               <button className="delete-btn" onClick={() => handleDeleteRequest(req.id)}>❌</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Post Request / Listing Form */}
//       <section className="form-section">
//         <h2>Post Your {formType === "sell" ? "Listing" : "Request"}</h2>
//         <div className="form-toggle">
//           <button onClick={() => setFormType("sell")} className={formType === "sell" ? "active" : ""}>
//             Sell Credits
//           </button>
//           <button onClick={() => setFormType("buy")} className={formType === "buy" ? "active" : ""}>
//             Buy Credits
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="marketplace-form">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name / Company"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="credits"
//             placeholder="Number of Credits"
//             value={formData.credits}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price per Credit ($)"
//             value={formData.price}
//             onChange={handleChange}
//             required
//           />
//           {formType === "sell" && (
//             <input
//               type="text"
//               name="image"
//               placeholder="Image URL (optional)"
//               value={formData.image}
//               onChange={handleChange}
//             />
//           )}
//           <button type="submit">{formType === "sell" ? "List for Sale" : "Post Buy Request"}</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Marketplace;


// import React, { useState } from "react";
// import { ethers } from "ethers";

// function Marketplace() {
//   const [walletAddress, setWalletAddress] = useState("");

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//         setWalletAddress(accounts[0]);
//       } catch (err) {
//         console.error("Connection rejected", err);
//       }
//     } else {
//       alert("Please install MetaMask!");
//     }
//   };

//   const [listings, setListings] = useState([
//     {
//       id: 1,
//       seller: "Green Corp",
//       walletAddress: "0xSellerWallet1Here",
//       credits: 100,
//       price: 12,
//       image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       id: 2,
//       seller: "Eco Solutions",
//       walletAddress: "0xSellerWallet2Here",
//       credits: 250,
//       price: 10,
//       image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       id: 3,
//       seller: "Solar Future",
//       walletAddress: "0xSellerWallet3Here",
//       credits: 400,
//       price: 14,
//       image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80",
//     },
//   ]);

//   const [requests, setRequests] = useState([
//     { id: 1, buyer: "CleanAir Pvt Ltd", credits: 50, price: 11 },
//     { id: 2, buyer: "Future Energy", credits: 150, price: 9 },
//   ]);

//   const [formType, setFormType] = useState("sell");
//   const [formData, setFormData] = useState({ name: "", credits: "", price: "", image: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formType === "sell") {
//       setListings([
//         ...listings,
//         {
//           id: listings.length + 1,
//           seller: formData.name || "Anonymous Seller",
//           walletAddress: formData.walletAddress || "0xYourWalletHere",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//           image: formData.image || "https://via.placeholder.com/100x80?text=Credits",
//         },
//       ]);
//     } else {
//       setRequests([
//         ...requests,
//         {
//           id: requests.length + 1,
//           buyer: formData.name || "Anonymous Buyer",
//           credits: Number(formData.credits),
//           price: Number(formData.price),
//         },
//       ]);
//     }
//     setFormData({ name: "", credits: "", price: "", image: "" });
//   };

//   const handleDeleteListing = (id) => setListings(listings.filter((item) => item.id !== id));
//   const handleDeleteRequest = (id) => setRequests(requests.filter((req) => req.id !== id));

//   const handleSelectListing = (item) => {
//     setFormType("buy");
//     setFormData({ name: "", credits: item.credits, price: item.price, image: "" });
//   };

//   // ✅ MetaMask Buy function
//   const buyListing = async (listing) => {
//     if (!walletAddress) return alert("Connect your wallet first!");

//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();

//       // Example: convert USD price to ETH (~0.0003 ETH per USD)
//       const totalEth = (listing.price * listing.credits * 0.0003).toString();

//       const tx = {
//         to: listing.walletAddress,
//         value: ethers.parseEther(totalEth),
//       };

//       const transaction = await signer.sendTransaction(tx);
//       await transaction.wait();

//       alert(`Successfully bought ${listing.credits} credits from ${listing.seller}!`);

//       // Remove listing after purchase
//       setListings(listings.filter((item) => item.id !== listing.id));
//     } catch (err) {
//       console.error(err);
//       alert("Transaction failed or rejected.");
//     }
//   };

//   return (
//     <div className="marketplace">
//       <h1>🌍 Carbon Credit Marketplace</h1>

//       {/* Connect Wallet */}
//       <button onClick={connectWallet}>
//         {walletAddress
//           ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
//           : "Connect Wallet"}
//       </button>

//       {/* Listings Section */}
//       <section className="listings">
//         <h2>Available Listings (Sellers)</h2>
//         <div className="card-container">
//           {listings.map((item) => (
//             <div className="card" key={item.id}>
//               <img src={item.image} alt={item.seller} />
//               <div className="card-info">
//                 <h3>{item.seller}</h3>
//                 <p>ID: {item.id}</p>
//                 <p>{item.credits} credits</p>
//                 <p><strong>${item.price}</strong> each</p>
//               </div>
//               <button className="delete-btn" onClick={() => handleDeleteListing(item.id)}>❌</button>
//               <button className="select-btn" onClick={() => handleSelectListing(item)}>Select</button>
//               <button className="buy-btn" onClick={() => buyListing(item)}>Buy with MetaMask</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Requests Section */}
//       <section className="requests">
//         <h2>Buy Requests (Buyers)</h2>
//         <div className="card-container">
//           {requests.map((req) => (
//             <div className="card" key={req.id}>
//               <div className="card-info">
//                 <h3>{req.buyer}</h3>
//                 <p>Wants {req.credits} credits</p>
//                 <p><strong>${req.price}</strong> offer</p>
//               </div>
//               <button className="delete-btn" onClick={() => handleDeleteRequest(req.id)}>❌</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Post Form */}
//       <section className="form-section">
//         <h2>Post Your {formType === "sell" ? "Listing" : "Request"}</h2>
//         <div className="form-toggle">
//           <button onClick={() => setFormType("sell")} className={formType === "sell" ? "active" : ""}>Sell Credits</button>
//           <button onClick={() => setFormType("buy")} className={formType === "buy" ? "active" : ""}>Buy Credits</button>
//         </div>

//         <form onSubmit={handleSubmit} className="marketplace-form">
//           <input type="text" name="name" placeholder="Your Name / Company" value={formData.name} onChange={handleChange} required />
//           <input type="number" name="credits" placeholder="Number of Credits" value={formData.credits} onChange={handleChange} required />
//           <input type="number" name="price" placeholder="Price per Credit ($)" value={formData.price} onChange={handleChange} required />
//           {formType === "sell" && (
//             <input type="text" name="image" placeholder="Image URL (optional)" value={formData.image} onChange={handleChange} />
//           )}
//           {formType === "sell" && (
//             <input type="text" name="walletAddress" placeholder="Your Wallet Address" value={formData.walletAddress || ""} onChange={handleChange} required />
//           )}
//           <button type="submit">{formType === "sell" ? "List for Sale" : "Post Buy Request"}</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Marketplace;
import React, { useState } from "react";
import { ethers } from "ethers";


function Marketplace() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error("Connection rejected", err);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const [listings, setListings] = useState([
    {
      id: 1,
      seller: "Green Corp",
      walletAddress: "0x12a7eaafcB2F4BDCC64C39123473674bf4492529", // your wallet for testing
      credits: 100,
      price: 2,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      seller: "Eco Solutions",
      walletAddress: "0x12a7eaafcB2F4BDCC64C39123473674bf4492529",
      credits: 250,
      price: 1,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      seller: "Solar Future",
      walletAddress: "0x12a7eaafcB2F4BDCC64C39123473674bf4492529",
      credits: 400,
      price: 14,
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80",
    },
  ]);

  const [requests, setRequests] = useState([
    { id: 1, buyer: "CleanAir Pvt Ltd", credits: 50, price: 11 },
    { id: 2, buyer: "Future Energy", credits: 150, price: 9 },
  ]);

  const [formType, setFormType] = useState("sell");
  const [formData, setFormData] = useState({ name: "", credits: "", price: "", image: "", walletAddress: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "sell") {
      setListings([
        ...listings,
        {
          id: listings.length + 1,
          seller: formData.name || "Anonymous Seller",
          walletAddress: formData.walletAddress || "0x12a7eaafcB2F4BDCC64C39123473674bf4492529",
          credits: Number(formData.credits),
          price: Number(formData.price),
          image: formData.image || "https://via.placeholder.com/100x80?text=Credits",
        },
      ]);
    } else {
      setRequests([
        ...requests,
        {
          id: requests.length + 1,
          buyer: formData.name || "Anonymous Buyer",
          credits: Number(formData.credits),
          price: Number(formData.price),
        },
      ]);
    }
    setFormData({ name: "", credits: "", price: "", image: "", walletAddress: "" });
  };

  const handleDeleteListing = (id) => setListings(listings.filter((item) => item.id !== id));
  const handleDeleteRequest = (id) => setRequests(requests.filter((req) => req.id !== id));

  const handleSelectListing = (item) => {
    setFormType("buy");
    setFormData({ name: "", credits: item.credits, price: item.price, image: "", walletAddress: "" });
  };

  // ✅ Buy with MetaMask
  const buyListing = async (listing) => {
    if (!walletAddress) return alert("Connect your wallet first!");

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // Example conversion: USD price → Sepolia ETH
      const totalEth = (listing.price * listing.credits * 0.0003).toString();

      // Show confirmation
      const confirmBuy = window.confirm(
        `You are about to buy ${listing.credits} credits from ${listing.seller} for approx. ${totalEth} ETH. Proceed?`
      );
      if (!confirmBuy) return;

      const tx = {
        to: listing.walletAddress,
        value: ethers.parseEther(totalEth),
      };

      const transaction = await signer.sendTransaction(tx);
      await transaction.wait();

      alert(`Successfully bought ${listing.credits} credits from ${listing.seller}!`);

      setListings(listings.filter((item) => item.id !== listing.id));
    } catch (err) {
      console.error(err);
      alert("Transaction failed or rejected.");
    }
  };

  return (
    <div className="marketplace">
      <h1>Carbon Credit Marketplace</h1>

      {/* Connect Wallet */}
      <button className="wallet-btn" onClick={connectWallet}>
        {walletAddress
          ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
          : "Connect Wallet"}
      </button>

      {/* Listings Section */}
      {/* <section className="listings">
        <h2>Available Listings (Sellers)</h2>
        <div className="card-container">
          {listings.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.seller} />
              <div className="card-info">
                <h3>{item.seller}</h3>
                <p>ID: {item.id}</p>
                <p>{item.credits} credits</p>
                <p><strong>${item.price}</strong> each</p>
              </div>
              <button className="delete-btn" onClick={() => handleDeleteListing(item.id)}>❌</button>
              <button className="select-btn" onClick={() => handleSelectListing(item)}>Select</button>
              <button className="buy-btn" onClick={() => buyListing(item)}>Buy with MetaMask</button>
            </div>
          ))}
        </div>
      </section> */}
      <section className="listings">
  <h2>Available Listings (Sellers)</h2>
  <div className="card-container">
    {listings.map((item) => (
      <div className="card" key={item.id}>
        <img src={item.image} alt={item.seller} />
        <div className="card-info">
          <h3>{item.seller}</h3>
          <p>ID: {item.id}</p>
          <p>{item.credits} credits</p>
          <p><strong>${item.price}</strong> each</p>
        </div>

        {/* Dropdown Button */}
        <div className="dropdown">
          <button className="dropdown-btn">Actions ▼</button>
          <div className="dropdown-content">
            <button onClick={() => handleDeleteListing(item.id)}>Delete ❌</button>
            <button onClick={() => handleSelectListing(item)}>Select</button>
            <button onClick={() => buyListing(item)}>Buy with MetaMask</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Requests Section */}
      <section className="requests">
        <h2>Buy Requests (Buyers)</h2>
        <div className="card-container">
          {requests.map((req) => (
            <div className="card" key={req.id}>
              <div className="card-info">
                <h3>{req.buyer}</h3>
                <p>Wants {req.credits} credits</p>
                <p><strong>${req.price}</strong> offer</p>
              </div>
              <button className="delete-btn" onClick={() => handleDeleteRequest(req.id)}>❌</button>
            </div>
          ))}
        </div>
      </section>

      {/* Post Form */}
      <section className="form-section">
        <h2>Post Your {formType === "sell" ? "Listing" : "Request"}</h2>
        <div className="form-toggle">
          <button onClick={() => setFormType("sell")} className={formType === "sell" ? "active" : ""}>Sell Credits</button>
          <button onClick={() => setFormType("buy")} className={formType === "buy" ? "active" : ""}>Buy Credits</button>
        </div>

        <form onSubmit={handleSubmit} className="marketplace-form">
          <input type="text" name="name" placeholder="Your Name / Company" value={formData.name} onChange={handleChange} required />
          <input type="number" name="credits" placeholder="Number of Credits" value={formData.credits} onChange={handleChange} required />
          <input type="number" name="price" placeholder="Price per Credit ($)" value={formData.price} onChange={handleChange} required />
          {formType === "sell" && (
            <>
              <input type="text" name="image" placeholder="Image URL (optional)" value={formData.image} onChange={handleChange} />
              <input type="text" name="walletAddress" placeholder="Your Wallet Address" value={formData.walletAddress} onChange={handleChange} required />
            </>
          )}
          <button type="submit">{formType === "sell" ? "List for Sale" : "Post Buy Request"}</button>
        </form>
      </section>
    </div>
  );
}

export default Marketplace;
