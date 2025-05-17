import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // CSS file import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FaPhoneAlt className="icon" />
        <span className="text">For Sales Inquiry: +5678776765 / +99667565454</span>
        <FaEnvelope className="icon" />
        <span className="text">sales@radiant.in</span>
      </div>
    </footer>
  );
};

export default Footer;

