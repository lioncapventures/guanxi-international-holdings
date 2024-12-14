import React from 'react';

const Footer = () => {
  return (
<footer>
<div class="footer-container" id='contact'>
<div class="background-circle2"></div>
  <div class="footer-grid">
    <div>
      <div class="brand-info">
        <div class="brand-icon"></div>
        <span class="brand-name">Guanxi</span>
      </div>
      <p class="brand-description">
        Join the growing network of businesses that rely on us for efficient,
        reliable tech hardware solutions. Together, we can create smarter systems
        and seamless supply chains.
      </p>
    </div>

    <div>
      <h3 class="footer-heading">Main pages</h3>
      <div class="footer-links">
        <a href="#hero-section">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#products">Product</a>
      </div>
    </div>

    <div>
      <h3 class="footer-heading">Services</h3>
      <div class="footer-links">
        <a href="#service">Customization</a>
        <a href="#service">Consulting Services</a>
        <a href="#service">Technical Support</a>
        <a href="#service">Assembly</a>
      </div>
    </div>

    <div>
      <h3 class="footer-heading">Get In Touch</h3>
      <div class="footer-links">
        <a href="https://maps.google.com">12.125 Samora Machel,</a>
        <a href="https://maps.google.com">Matola,</a>
        <a href="tel:+258861058118">+258 861058118</a>
        <a href="tel:+258870210002">+258 870210002</a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p class="footer-copyright">
      Copyright © 2024| All rights reserved<a href="/"> Guanxi International Holdings</a>
    </p>
    <div className="social-icons">
  <a href="https://facebook.com" aria-label="Facebook">Facebook</a>
  <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
  <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
  <a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn</a>
</div>
  </div>
</div>
</footer>


  );
};

export default Footer;