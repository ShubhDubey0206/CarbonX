import React from "react";
// import co2 from '../assets/co2.jpg';
// import nature from '../assets/nature.jpg';
// import plant from '../assets/plant.jpg';
// import business from '../assets/business.jpg';

function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-text">
          <h1>About CarbonX</h1>
          <p>
            Our platform functions as a comprehensive Carbon Credit Bank, Exchange, and Verification system.
            Companies can easily upload their emissions data, and the system automatically calculates
            the carbon credits they are eligible for. To ensure complete transparency and trust,
            a sophisticated Verification Engine cross-checks this information using government
            databases and blockchain technology. Once verified, these credits are securely stored
            in digital wallets, providing companies with an immediate and reliable record of
            their verified carbon assets.
          </p>
          <p>
            These verified credits can then be seamlessly traded on India’s Carbon Credit Trading System (CCTS)
            or on our voluntary marketplace, giving businesses flexible options for buying and selling.
            Every transaction is backed by an escrow settlement mechanism to guarantee secure and efficient deals.
            In addition to trading, the platform offers expert advisory services to help companies
            develop and optimize their emissions reduction strategies, enabling them to manage
            their carbon footprint effectively while maximizing financial and environmental benefits.
          </p>
        </div>
        <div className="about-images">
          {/* <img src={co2} alt="Carbon emissions" />
          <img src={nature} alt="Nature" />
          <img src={plant} alt="Planting" />
          <img src={business} alt="Business" /> */}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
