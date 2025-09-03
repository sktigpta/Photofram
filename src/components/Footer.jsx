import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <h2 className="brand-name">FrameCraft</h2>
            <p className="brand-description">
              Beautiful frames for your precious memories.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><a href="#">Photo Frames</a></li>
              <li><a href="#">Custom Framing</a></li>
              <li><a href="#">Collections</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="contact-info">
              <p>+91 98765 43210</p>
              <p>hello@framecraft.com</p>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} FrameCraft. All rights reserved.</p>
            <div className="scroll-top-btn" onClick={scrollToTop} title="Scroll to Top">
              <ArrowUp size={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
