import React from "react";
import "./DancingOverlay.css";
import dancingPic from "../assets/frames/dancing-pic.png";

function DancingOverlay() {
  return (
    <section className="dancing-section">
      <img src={dancingPic} alt="Dancing Frame" className="dancing-img" />
      <div className="dancing-overlay">
        <div className="dancing-text">
          <h2>Celebrate Every Moment</h2>
          <p>
            Discover our exclusive collection of frames that bring life to your
            memories. Perfect for family, love, and traditional moments.
          </p>
          <button className="see-collection-btn">See Collection</button>
        </div>
      </div>
    </section>
  );
}

export default DancingOverlay;
