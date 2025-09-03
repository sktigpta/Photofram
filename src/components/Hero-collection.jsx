import React, { useState } from "react";
import "./Hero-collection.css";
// Import your frame images here
// import frame1 from "../assets/frames/frame1.png";
// import frame2 from "../assets/frames/frame2.png";
// etc.

function HeroCollection() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample frame data - replace with your actual frame imports
  const frames = [
    { id: 1, category: 'Passport', image: 'frame1.png', name: 'Professional Frame 1' },
    { id: 2, category: 'Passport', image: 'frame2.png', name: 'Professional Frame 2' },
    { id: 3, category: 'Family', image: 'frame3.png', name: 'Family Moments 1' },
    { id: 4, category: 'Family', image: 'frame4.png', name: 'Family Moments 2' },
    { id: 5, category: 'Family', image: 'frame5.png', name: 'Family Memories' },
    { id: 6, category: 'Saadi', image: 'frame6.png', name: 'Traditional Frame 1' },
    { id: 7, category: 'Saadi', image: 'frame7.png', name: 'Traditional Frame 2' },
    { id: 8, category: 'Love', image: 'frame8.png', name: 'Romantic Frame 1' },
     ];

  const categories = ['All', 'Passport', 'Family', 'Saadi', 'Love'];

  const filteredFrames = activeFilter === 'All' 
    ? frames 
    : frames.filter(frame => frame.category === activeFilter);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <section className="heroCollection-section">
      <div className="collection-container">
        {/* Header */}
        <div className="collection-header">
          <h1 className="collection-title">Our Collection</h1>
          <p className="collection-subtitle">
            Choose from our beautiful selection of frames to enhance your photos
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          {categories.map((category) => (
            <button 
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Frames Grid */}
        <div className="frames-grid">
          {filteredFrames.map((frame) => (
            <div 
              key={frame.id} 
              className="frame-card"
              onClick={() => handleFrameClick(frame)}
            >
              <div className="frame-image-container">
                <img src={frame.image} className="frame-image" />
                {frame.badge && (
                  <span className={`frame-badge ${frame.badge.toLowerCase()}`}>
                    {frame.badge}
                  </span>
                )}
              </div>
              <div className="frame-info">
                <h3 className="frame-name">{frame.name}</h3>
                <span className="frame-price">{frame.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCollection;