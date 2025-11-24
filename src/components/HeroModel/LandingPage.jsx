// import React, { useRef } from "react";
// import co2 from '../../assets/co2.jpg';
// import HeroExperience from "./HeroExperience";
// // import Model from "./Sustainable_globe";

// function LandingPage() {
//   const aboutRef = useRef(null);

//   const scrollToAbout = () => {
//     // Optional delay: 500ms before scroll
//     setTimeout(() => {
//       aboutRef.current.scrollIntoView({
//         behavior: "smooth", // smooth scroll
//         block: "start",     // scroll to top of section
//       });
//     }, 500); 
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-overlay">
//           <div className="typewriter">
//             <h1>
//               Welcome to <span>CarbonX</span>
//             </h1>
//             <h2>Your Gateway to Seamless Carbon Credit Management!</h2><br /><br />
//             <button className="button" onClick={scrollToAbout}>
//               Know about us
//             </button>
 
//           </div>
//         </div>
//           {/* Hero model will be here */}
//             <div className="heromodel">
//             <HeroExperience />
//             </div>
//       </section>

//       {/* Paragraph Section */}
//       <section ref={aboutRef} className="about">
//         <div className="about-container">
//           <div className="about-text">
//             <h2>About CarbonX</h2>
//             <p>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum
//               blanditiis ab, beatae accusantium est ducimus fugit id in voluptas ad,
//               adipisci iure animi ipsum! Nulla nesciunt sed consequuntur nobis?
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum
//               blanditiis ab, beatae accusantium est ducimus fugit id in voluptas ad,
//               adipisci iure animi ipsum! Nulla nesciunt sed consequuntur nobis?
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum
//               blanditiis ab, beatae accusantium est ducimus fugit id in voluptas ad,
//               adipisci iure animi ipsum! Nulla nesciunt sed consequuntur nobis?
//             </p>
//           </div>
//           <div className="about-image">
//             <img className="image" src={co2} alt="CarbonX illustration" />
//           </div>
//         </div>
//       </section>


//       {/* Features Section */}
//       <section className="features">
//         <h2 className="heading">What we bring on the table</h2>
//         <div className="features-row">
//             <div className="feature">
//               <h2>Safe transactions</h2>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, 
//                 deleniti est nostrum blanditiis obcaecati voluptates porro modi repudiandae
//                 quaerat provident quod deserunt inventore dolorum optio, sequi distinctio. Culpa, sed iste.
//               </p>
//             </div>
//             <div className="feature">
//               <h2>Fast processing</h2>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius nulla officia voluptatum,
//                 dolorem optio dolor voluptatem fugit necessitatibus hic rem, debitis voluptate voluptatibus
//                 illo in, quae sit id. Delectus!
//               </p>
//             </div>
//             <div className="feature">
//               <h2>Scalable platform</h2>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quod minus est deserunt amet a totam,
//                 distinctio saepe dicta atque ipsam quasi reprehenderit et inventore at fugit eius neque dolore.
//                 </p>
//             </div>
//             <div className="feature">
//               <h2>New Connections</h2>
//               <p>
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam earum, eius veniam qui possimus itaque
//                 totam maiores asperiores magnam magni. Tempore dolore repudiandae dolores beatae, aliquam sequi 
//                 voluptatibus vel perspiciatis?
//                 </p>
//             </div>
//             <div className="feature">
//               <h2>Profitable trade</h2>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque fuga corrupti nulla ea sunt, officiis
//                 veritatis veniam nemo dolorem minima eaque! Placeat debitis quam facere explicabo quidem? Veniam, 
//                 perferendis accusamus!
//                 </p>
//             </div>
//         </div>
//       </section>


//       {/* Footer Section */}
//       <section className="footer-section">
//       <div className="footer-content">
//         <h2 className="footer-logo">CarbonX</h2>
//         <p className="footer-text">
//           Empowering sustainable solutions through carbon credit management.
//         </p>
//         <ul className="footer-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#features">Features</a></li>
//           <li><a href="#pricing">Pricing</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#form">Sign Up</a></li>
//         </ul>
//         <p className="footer-copy">&copy; {new Date().getFullYear()} CarbonX. All rights reserved.</p>
//       </div>
//     </section>
//     </>
//   );
// }

// export default LandingPage;

// import React, { useRef, useState } from "react";
// import co2 from '../../assets/co2.jpg';
// import HeroExperience from "./HeroExperience";
// // import Model from "./Sustainable_globe";

// function LandingPage() {
//   const aboutRef = useRef(null);
//   const [account, setAccount] = useState(null);

//   const scrollToAbout = () => {
//     // Optional delay: 500ms before scroll
//     setTimeout(() => {
//       aboutRef.current.scrollIntoView({
//         behavior: "smooth", // smooth scroll
//         block: "start",     // scroll to top of section
//       });
//     }, 500); 
//   };

//   // MetaMask connect function
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         setAccount(accounts[0]);
//       } catch (error) {
//         console.error("User rejected connection", error);
//       }
//     } else {
//       alert("MetaMask not detected! Install from https://metamask.io/");
//     }
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-overlay">
//           <div className="typewriter">
//             <h1>
//               Welcome to <span>CarbonX</span>
//             </h1>
//             <h2>Your Gateway to Seamless Carbon Credit Management!</h2><br /><br />
//             <button className="button" onClick={scrollToAbout}>
//               Know about us
//             </button>
//             <button className="button" onClick={connectWallet}>
//               {account
//                 ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
//                 : "Connect Wallet"}
//             </button>
//           </div>
//         </div>
//           {/* Hero model will be here */}
//             <div className="heromodel">
//             <HeroExperience />
//             </div>
//       </section>

//       {/* Paragraph Section */}
//       <section ref={aboutRef} className="about">
//         <div className="about-container">
//           <div className="about-text">
//             <h2>About CarbonX</h2>
//             <p>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum
//               blanditiis ab, beatae accusantium est ducimus fugit id in voluptas ad,
//               adipisci iure animi ipsum! Nulla nesciunt sed consequuntur nobis?
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum
//               blanditiis ab, beatae accusantium est ducimus fugit id in voluptas ad,
//               adipisci iure animi ipsum! Nulla nesciunt sed consequuntur nobis?
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum
//               blanditiis ab, beatae accusantium est ducimus fugit id in voluptas ad,
//               adipisci iure animi ipsum! Nulla nesciunt sed consequuntur nobis?
//             </p>
//           </div>
//           <div className="about-image">
//             <img className="image" src={co2} alt="CarbonX illustration" />
//           </div>
//         </div>
//       </section>


//       {/* Features Section */}
//       <section className="features">
//         <h2 className="heading">What we bring on the table</h2>
//         <div className="features-row">
//             <div className="feature">
//               <h2>Safe transactions</h2>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, 
//                 deleniti est nostrum blanditiis obcaecati voluptates porro modi repudiandae
//                 quaerat provident quod deserunt inventore dolorum optio, sequi distinctio. Culpa, sed iste.
//               </p>
//             </div>
//             <div className="feature">
//               <h2>Fast processing</h2>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eius nulla officia voluptatum,
//                 dolorem optio dolor voluptatem fugit necessitatibus hic rem, debitis voluptate voluptatibus
//                 illo in, quae sit id. Delectus!
//               </p>
//             </div>
//             <div className="feature">
//               <h2>Scalable platform</h2>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quod minus est deserunt amet a totam,
//                 distinctio saepe dicta atque ipsam quasi reprehenderit et inventore at fugit eius neque dolore.
//                 </p>
//             </div>
//             <div className="feature">
//               <h2>New Connections</h2>
//               <p>
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam earum, eius veniam qui possimus itaque
//                 totam maiores asperiores magnam magni. Tempore dolore repudiandae dolores beatae, aliquam sequi 
//                 voluptatibus vel perspiciatis?
//                 </p>
//             </div>
//             <div className="feature">
//               <h2>Profitable trade</h2>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque fuga corrupti nulla ea sunt, officiis
//                 veritatis veniam nemo dolorem minima eaque! Placeat debitis quam facere explicabo quidem? Veniam, 
//                 perferendis accusamus!
//                 </p>
//             </div>
//         </div>
//       </section>


//       {/* Footer Section */}
//       <section className="footer-section">
//       <div className="footer-content">
//         <h2 className="footer-logo">CarbonX</h2>
//         <p className="footer-text">
//           Empowering sustainable solutions through carbon credit management.
//         </p>
//         <ul className="footer-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#features">Features</a></li>
//           <li><a href="#pricing">Pricing</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#form">Sign Up</a></li>
//         </ul>
//         <p className="footer-copy">&copy; {new Date().getFullYear()} CarbonX. All rights reserved.</p>
//       </div>
//     </section>
//     </>
//   );
// }

// export default LandingPage;

import React, { useRef, useState, useEffect } from "react";
import co2 from '../../assets/co2.jpg';
import nature from '../../assets/nature.jpg';
import plant from '../../assets/plant.jpg';
import business from '../../assets/business.jpg';
import HeroExperience from "./HeroExperience";
import About from "../../sections/About";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const footerRef = useRef(null);
  const featureCardsRef = useRef([]);
  const [account, setAccount] = useState(null);

  const addFeatureCardRef = (el) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el);
    }
  };

  const scrollToAbout = () => {
    setTimeout(() => {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500); 
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected connection", error);
      }
    } else {
      alert("MetaMask not detected! Install from https://metamask.io/");
    }
  };

useEffect(() => {
  // About section
  if (aboutRef.current) {
    gsap.fromTo(
      aboutRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }

  // Features cards
  featureCardsRef.current.forEach((card, index) => {
    gsap.fromTo(
      card,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}, []);


  return (
    <>
      {/* Hero Section (no animation) */}
      {/* <section className="hero">
        <div className="hero-overlay">
          <div className="typewriter">
            <h1>
              Welcome to <span>CarbonX</span>
            </h1>
            <h2>Your Gateway to Seamless Carbon Credit Management!</h2>
            <br /><br />
            <button className="button" onClick={scrollToAbout}>
              Know about us
            </button>
            <button className="button" onClick={connectWallet}>
              {account
                ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
                : "Connect Wallet"}
            </button>
          </div>
        </div>
        <div className="heromodel">
          <HeroExperience />
        </div>
      </section> */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="typewriter">
            <h1>
              Verified Credits <span>Simplified</span>
            </h1>
            <h2>Your Gateway to Seamless Carbon Credit Management!</h2>
            <div className="button-container">
              <button className="button" onClick={scrollToAbout}>
                Know about us
              </button>
              <button className="button" onClick={connectWallet}>
                {account
                  ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
                  : "Connect Wallet"}
              </button>
            </div>
          </div>
        </div>
        <div className="heromodel">
          <HeroExperience />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About CarbonX</h2>
            <br /><br />
            <p>
              Our platform functions as a comprehensive Carbon Credit Bank, Exchange, and Verification system. Companies can easily upload their emissions data, and the system automatically calculates the carbon credits they are eligible for. To ensure complete transparency and trust, a sophisticated Verification Engine cross-checks this information using government databases and blockchain technology. Once verified, these credits are securely stored in digital wallets, providing companies with an immediate and reliable record of their verified carbon assets.

These verified credits can then be seamlessly traded on India’s Carbon Credit Trading System (CCTS) or on our voluntary marketplace, giving businesses flexible options for buying and selling. Every transaction is backed by an escrow settlement mechanism to guarantee secure and efficient deals. In addition to trading, the platform offers expert advisory services to help companies develop and optimize their emissions reduction strategies, enabling them to manage their carbon footprint effectively while maximizing financial and environmental benefits.
            <br /><br />
            </p>
          </div>
            <div className="about-image">
              <img className="image" src={co2} alt="CarbonX illustration" />
              <img className="image" src={nature} alt="carbonX" />
              <img className="image" src={plant} alt="carbonX" />
              <img className="image" src={business} alt="carbonX" />
            </div>
          </div>
      </section>
      <br />
      {/* Features Section */}
      <section ref={featuresRef} className="features">
        <h2 className="heading">What we bring on the table</h2>
        <div className="features-row">
          <div className="feature" ref={addFeatureCardRef}>
            <h2>Safe transactions</h2>
            <p>Every trade is protected with blockchain security and verified compliance. Trust and transparency are at the core of our platform.</p>
          </div>
          <div className="feature" ref={addFeatureCardRef}>
            <h2>Fast processing</h2>
            <p>Quick verification and settlement so your carbon credits move without delays. Save time while ensuring accuracy.</p>
          </div>
          <div className="feature" ref={addFeatureCardRef}>
            <h2>Scalable platform</h2>
            <p>Our system grows with you—whether you’re a startup or enterprise, we adapt to your sustainability needs.</p>
          </div>
          <div className="feature" ref={addFeatureCardRef}>
            <h2>New Connections</h2>
            <p>Join a global network of businesses, governments, and investors working together for a greener future.</p>
          </div>
          <div className="feature" ref={addFeatureCardRef}>
            <h2>Profitable trade</h2>
            <p>Turn your eco-efforts into revenue by trading verified credits with ease and confidence.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section ref={footerRef} className="footer-section">
        <div className="footer-content">
          <h2 className="footer-logo">CarbonX</h2>
          <p className="footer-text">
            Empowering sustainable solutions through carbon credit management.
          </p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#form">Sign Up</a></li>
          </ul>
          <p className="footer-copy">&copy; {new Date().getFullYear()} CarbonX. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}

export default LandingPage;