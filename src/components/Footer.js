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
        Lorem ipsum dolor sit amet consectetur in aenean a in.
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
        <a href="https://maps.google.com">5 Benmore Road,</a>
        <a href="https://maps.google.com">Sandton, SA</a>
        <a href="https://maps.google.com">5031 Crowhill Views,</a>
        <a href="https://maps.google.com">Harare, ZW</a>
        <a href="tel:+263772724514">+263 772 72 4514</a>
        <a href="tel:+27646394007">+27 646 39 4007</a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p class="footer-copyright">
      Copyright © 2024| Designed and Developed by<a href="https://www.lioncapventures.com/"> Lioncap Ventures</a>
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