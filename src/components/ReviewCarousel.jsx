import React, { useState, useEffect } from "react";
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
    {
      id: 5,
      name: "Ravi Kumar",
      rating: 5,
      text: "Excellent craftsmanship and beautiful designs. Worth every penny!",
      image: "user5.png",
    },
    {
      id: 6,
      name: "Neha Singh",
      rating: 4,
      text: "Fast delivery and great customer service. The frame looks amazing!",
      image: "user6.png",
    },
    {
      id: 7,
      name: "Vikram Joshi",
      rating: 5,
      text: "Premium quality frames at reasonable prices. Highly satisfied!",
      image: "user7.png",
    },
    {
      id: 8,
      name: "Kavya Reddy",
      rating: 4,
      text: "Beautiful collection! The frame perfectly matched my home decor.",
      image: "user8.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [reviews.length]);

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

        {/* Desktop: 4 cards, Mobile: 1 card */}
        <div className="review-grid">
          <div 
            className="review-track"
            style={{ transform: `translateX(-${currentIndex * (100 / reviews.length)}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={review.id} className="review-card">
                <div className="review-image">
                  <img src={review.image} alt={review.name} />
                </div>
                <div className="review-content">
                  {renderStars(review.rating)}
                  <p className="review-text">"{review.text}"</p>
                  <h4 className="review-name">- {review.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="review-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewCarousel;