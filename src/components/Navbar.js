import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
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
          <li><Link to="/">{t('nav.home')}</Link></li>
          <li><Link to="/about">{t('nav.about')}</Link></li>
          <li><Link to="/products">{t('nav.products')}</Link></li>
          <li><Link to="/services">{t('nav.services')}</Link></li>
          <li><Link to="/contact">{t('nav.contact')}</Link></li>
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
            <li><Link to="/" onClick={toggleMenu}>{t('nav.home')}</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>{t('nav.about')}</Link></li>
            <li><Link to="/products" onClick={toggleMenu}>{t('nav.products')}</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>{t('nav.services')}</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>{t('nav.contact')}</Link></li>
          </ul>
        </div>

        {/* Language toggle button */}
        <button 
          className="language-toggle"
          onClick={toggleLanguage}
        >
          {i18n.language === 'en' ? '🇵🇹 PT' : '🇬🇧 EN'}
        </button>

        {/* Get Started button */}
        <div className="navbar-actions">
          <a href="#service"><button className="get-started">{t('nav.getStarted')}</button></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;