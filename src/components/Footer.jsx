import React from 'react';
import '../styles/Footer.css';
import { facebookIcon, twitterIcon, linkedinIcon } from '../constants/images';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h2 className="footer-logo">Tomato.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus alias, vel tempora nam labore quod dolorum assumenda hic voluptatibus.</p>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get In Touch</h3>
          <ul>
            <li>+233559438418</li>
            <li>agbocollins15@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Star Dev</p>
      </div>
    </footer>
  );
};

export default Footer;
