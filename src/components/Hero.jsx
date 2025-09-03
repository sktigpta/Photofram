import "./Hero.css";
// import your image from assets
import heroFrame from "../assets/frames/hero-frame.png";
import image1 from "../assets/hero-mages/image1.jpg";
import image2 from "../assets/hero-mages/image2.jpg";
import image3 from "../assets/hero-mages/image3.jpg";
import image4 from "../assets/hero-mages/image4.jpg";
import image5 from "../assets/hero-mages/image5.jpg";

function Hero() {
  const images = [image1, image2, image3, image4, image5];
  
  return (
    <section className="hero-section">
      {/* Left: Frame with sliding images */}
      <div className="hero-frame">
        {/* Frame (static) */}
        <img
          src={heroFrame}
          alt="Hero Frame"
          className="frame-border"
        />
        {/* Sliding images inside frame */}
        <div className="frame-slider">
          <div className="slider-track">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right: Text + Button */}
      <div className="hero-content">
        <h1 className="hero-title">
          Try Your Photo in
        </h1>
        <span className="beautiful-frames">
          Beautiful Frames
        </span>
        <p className="hero-subtitle">
          Upload your favorite image and see how it transforms <br className="desktop-break" />
          with our curated collection of elegant photo frames.
        </p>
        <button className="hero-btn">Upload Your Photo</button>
      </div>
    </section>
  );
}

export default Hero;