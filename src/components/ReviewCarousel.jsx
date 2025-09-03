import React, { useState } from "react";
import "./ReviewCarousel.css";

function ReviewCarousel() {
  // Sample reviews - replace with API or DB data
  const reviews = [
    {
      id: 1,
      name: "Amit Sharma",
      rating: 5,
      text: "Absolutely loved the frame quality! It made my family photo look even more special.",
      image: "user1.png",
    },
    {
      id: 2,
      name: "Priya Verma",
      rating: 4,
      text: "Good collection and finishing. Delivery was on time.",
      image: "user2.png",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      rating: 5,
      text: "The Saadi frame was perfect for my wedding photo. Highly recommend!",
      image: "user3.png",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      rating: 4,
      text: "Nice frames and affordable. Will definitely order again.",
      image: "user4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="review-section">
      <div className="review-container">
        <h2 className="review-title">What Our Customers Say</h2>
        <p className="review-subtitle">
          Hear from our happy customers about their experience with our frames
        </p>

        <div className="review-card">
          <div className="review-image">
            <img
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
            />
          </div>
          <div className="review-content">
            {renderStars(reviews[currentIndex].rating)}
            <p className="review-text">“{reviews[currentIndex].text}”</p>
            <h4 className="review-name">- {reviews[currentIndex].name}</h4>
          </div>
        </div>

        {/* Navigation */}
        <div className="review-navigation">
          <button onClick={prevReview} className="nav-btn">‹</button>
          <button onClick={nextReview} className="nav-btn">›</button>
        </div>
      </div>
    </section>
  );
}

export default ReviewCarousel;
