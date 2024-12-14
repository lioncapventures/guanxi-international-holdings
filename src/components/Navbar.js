import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">Guanxi.</Link>
        </div>

        {/* Navigation links (displayed on large screens) */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Icons and Hamburger menu */}
        <div className="navbar-icons">
          <a href="tel:+258861058118"><i className="fas fa-phone"></i></a>
          <a href="https://maps.google.com"><i className="fas fa-map-marker-alt"></i></a>
          <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        {/* Dropdown menu for small screens */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>

        {/* Get Started button */}
        <div className="navbar-actions">
         <a href="#service"><button className="get-started">Get started</button></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
