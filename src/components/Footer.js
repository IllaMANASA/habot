import React from "react";
import "./Footer.css";
import img from '../assets/image.png';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-line"></div>
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={img} alt="Company Logo" className="footer-logo" />
          <p className="copyright">© R Singhania</p>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="/about" aria-label="About page">About</a></li>
              <li><a href="/faq" aria-label="FAQ page">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Terms</h3>
            <ul>
              <li><a href="/privacy" aria-label="Data privacy page">Data Privacy</a></li>
              <li><a href="/terms" aria-label="Terms and conditions page">Terms</a></li>
              <li><a href="/accessibility" aria-label="Accessibility page">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Related</h3>
            <ul>
              <li><a href="/find-buyer" aria-label="Find buyer page">Find Buyer</a></li>
              <li><a href="/feedback" aria-label="Feedback page">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com" aria-label="LinkedIn profile"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.twitter.com" aria-label="Twitter profile"><i className="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com" aria-label="Facebook profile"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com" aria-label="Instagram profile"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-line"></div>
    </footer>
  );
};

export default Footer;
