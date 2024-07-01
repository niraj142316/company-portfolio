// Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <img src='https://glazingstar.com/wp-content/uploads/2024/05/gla-2-300x231.jpg' alt='GlazingStar Logo' />
        </div>
        <div className='footer-links'>
          <h3 className='footer-h3'>Quick Links</h3>
          <ul className='footer-ul'>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='/contact'>Contact Us</a></li>
          </ul>
        </div>
        <div className='footer-contact'>
          <h3 className='footer-h3'>Contact Us</h3>
          <p className='footer-contact-p'>Email: glazingstar39@gmail.com</p>
          <p className='footer-contact-p'>Phone: +91 9817460139</p>
          <p className='footer-contact-p'>Address: Hisar, Haryana, India</p>
        </div>
        <div className='footer-social'>
          <h3 className='footer-h3'>Follow Us</h3>
          <ul className='footer-ul'>
            <li><a href='https://facebook.com'>Facebook</a></li>
            <li><a href='https://twitter.com'>Twitter</a></li>
            <li><a href='https://linkedin.com'>LinkedIn</a></li>
            <li><a href='https://instagram.com'>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p className='footer-bottom-p'>&copy; 2024 glazingstar.com. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

