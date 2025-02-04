import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-container" id="contact">
        <div className="background-circle2"></div>
        <div className="footer-grid">
          <div>
            <div className="brand-info">
              <div className="brand-icon"></div>
              <span className="brand-name">Guanxi</span>
            </div>
            <p className="brand-description">
              {t('footer.description') ||
                'Join the growing network of businesses that rely on us for efficient, reliable tech hardware solutions. Together, we can create smarter systems and seamless supply chains.'}
            </p>
          </div>

          <div>
            <h3 className="footer-heading">{t('footer.mainPages') || 'Main pages'}</h3>
            <div className="footer-links">
              <Link to="/">{t('nav.home') || 'Home'}</Link>
              <Link to="/about">{t('nav.about') || 'About'}</Link>
              <Link to="/products">{t('nav.products') || 'Products'}</Link>
              <Link to="/contact">{t('nav.contact') || 'Contact'}</Link>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">{t('footer.services') || 'Services'}</h3>
            <div className="footer-links">
              <Link to="/services">{t('home.services.customization.title') || 'Customization'}</Link>
              <Link to="/services">{t('home.services.consulting.title') || 'Consulting Services'}</Link>
              <Link to="/services">{t('home.services.support.title') || 'Technical Support'}</Link>
              <Link to="/services">{t('home.services.assembly.title') || 'Assembly'}</Link>
            </div>
          </div>
          

          <div>
            <h3 className="footer-heading">{t('footer.getInTouch') || 'Get In Touch'}</h3>
            <div className="footer-links">
              <a href="https://maps.google.com">12.125 Samora Machel,</a>
              <a href="https://maps.google.com">Matola,</a>
              <a href="tel:+258861058118">+258 86 105 8118</a>
              <a href="tel:+258870210002">+258 87 021 0002</a>
              <a href="mailto:info@guanxiholdings.com">info@guanxiholdings.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            {t('footer.copyright') || 'Copyright © 2024'} | <a href="/">Guanxi International Holdings</a>
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">{t('footer.social.facebook') || 'Facebook'}</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">{t('footer.social.twitter') || 'Twitter'}</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">{t('footer.social.instagram') || 'Instagram'}</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">{t('footer.social.linkedin') || 'LinkedIn'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;