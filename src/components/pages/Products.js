import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className='guanxi-section'>
        <div className="container-pages">
          <div className="large-text">Guanxi</div>
          <div className="content-wrapper">
            <h2 className="subheading">{t('products.title', 'Our Products')}</h2>
            <p className="description">
              {t(
                'products.description',
                'At Guanxi International Holdings, we provide a wide range of high-quality tech hardware solutions to meet the diverse needs of our clients. From cutting-edge devices to essential components, our products are designed to empower your business with innovation and reliability.'
              )}
            </p>
            <a href="/" className="back-home">{t('about.backHome', 'Home Page')}</a>
          </div>
        </div>

        {/* PRODUCTS CARDS */}
        <div className='products-cards-wrapper'>
          <div className='card'>
            <h3>1. {t('products.computingHardware', 'Computing Hardware')}</h3>
            <ul>
              <li><span>{t('products.customPCs', 'Custom PCs')}:</span> {t('products.customPCsDesc', 'Tailored to meet your unique specifications for performance and efficiency.')}</li>
              <li><span>{t('products.servers', 'Servers')}:</span> {t('products.serversDesc', 'Reliable, scalable, and secure solutions for data.')}</li>
              <li><span>{t('products.laptopsAndDesktops', 'Laptops & Desktops')}:</span> {t('products.laptopsAndDesktopsDesc', 'High-performance devices for both personal and professional use.')}</li>
            </ul>
            <div className="background-circle-white"></div>
          </div>

          <div className='card' id='service'>
            <h3>2. {t('products.networkingEquipment', 'Networking Equipment')}</h3>
            <ul>
              <li><span>{t('products.routers', 'Routers & Switches')}:</span> {t('products.routersDesc', 'Advanced networking solutions for seamless connectivity.')}</li>
              <li><span>{t('products.accessPoints', 'Access Points')}:</span> {t('products.accessPointsDesc', 'High-speed wireless solutions for modern businesses.')}</li>
              <li><span>{t('products.firewalls', 'Firewalls')}:</span> {t('products.firewallsDesc', 'Robust security systems to protect your data and networks.')}</li>
            </ul>
          </div>

          <div className='card'>
            <h3>3. {t('products.industrialHardware', 'Industrial Hardware')}</h3>
            <div className="background-circle-white2"></div>
            <ul>
              <li><span>{t('products.iotDevices', 'IoT Devices')}:</span> {t('products.iotDevicesDesc', 'Smart solutions to streamline industrial processes.')}</li>
              <li><span>{t('products.embeddedSystems', 'Embedded Systems')}:</span> {t('products.embeddedSystemsDesc', 'Hardware for robotics and automation projects.')}</li>
              <li><span>{t('products.industrialComputers', 'Industrial Computers')}:</span> {t('products.industrialComputersDesc', 'Rugged and durable devices for challenging environments.')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='FAQs-section'>
        <div className='FAQs-heading'>
          <h1>{t('products.whyChoose', 'Why Choose Our Products')}</h1>
        </div>
        <div className='questions-wrapper'>
          <div className="background-circle-white3"></div>
          {[
            {
              question: t('products.qualityAssurance', '1. Quality Assurance'),
              answer: t('products.qualityAssuranceDesc', 'All products are sourced from trusted manufacturers and rigorously tested.')
            },
            {
              question: t('products.globalReach', '2. Global Reach'),
              answer: t('products.globalReachDesc', 'We offer seamless import and export services across borders.')
            },
            {
              question: t('products.expertSupport', '3. Expert Support'),
              answer: t('products.expertSupportDesc', 'Our team is here to help with installation, configuration, and maintenance.')
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className='question' onClick={() => toggleAnswer(index)}>
                <p>{item.question}</p>
                <p className='review-button'>{activeIndex === index ? '−' : '+'}</p>
              </div>
              {activeIndex === index && (
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
