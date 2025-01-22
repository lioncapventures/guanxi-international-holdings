import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className='guanxi-section'>
      <div className="container-pages">
        <div className="large-text">Guanxi</div>
        <div className="content-wrapper">
          <h2 className="subheading">{t('contact.getInTouch', 'Get In Touch')}</h2>
          <p className="description">
            {t(
              'contact.description',
              "At Guanxi International Holdings, we value every inquiry and look forward to assisting you. Whether you have questions about our products and services, need support, or are interested in partnership opportunities, we're here to help!"
            )}
          </p>
          <a href="mailto:info@guanxiholdings.com" className="back-home">
            {t('contact.email', 'Email Us')} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
