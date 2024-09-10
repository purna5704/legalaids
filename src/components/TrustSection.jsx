import React from 'react';
import './TrustSection.css';
import TrustSectionImg from "../assets/trustsection.png"

const TrustSection = () => {
  return (
    <div className="trust-section">
      <div className="trust-content">
        <div className="image-container">
          <img src={TrustSectionImg} alt="Group of people" className="trust-image" />
        </div>
        <div className="trust-text">
          <p>Trust us to handle your case with care and precision. Together, we'll work toward a successful resolution. Start your path to justice with confidence—we're here to support you every step of the way.</p>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;