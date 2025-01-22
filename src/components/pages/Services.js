import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className='guanxi-section'>
      <div className="container-pages">
        <div className="large-text">Guanxi</div>
        <div className="content-wrapper">
          <h2 className="subheading">{t('services.title', 'Our Services')}</h2>
          <p className="description">
            {t('services.description', 'At Guanxi International Holdings, we specialize in delivering end-to-end solutions for tech hardware import and export. Our comprehensive range of services ensures that every step of your journey, from procurement to delivery, is seamless and efficient.')}
          </p>
          <a href="/" className="back-home">{t('about.backHome', 'Home Page')}</a>
        </div>
      </div>

      <div className='services-cards-wrapper2'>
        <div className='card'>
          <h3>{t('services.procurement.title', 'Procurement and Supply Chain Management')}</h3>
          <ul>
            <li>{t('services.procurement.sourcing', 'Sourcing and Importing: Acquiring hardware components from international manufacturers.')}</li>
            <li>{t('services.procurement.exporting', 'Exporting Solutions: Facilitating the export of locally available tech hardware to international markets.')}</li>
            <li>{t('services.procurement.vendor', 'Vendor Management: Negotiating with global suppliers for bulk orders or specialized components.')}</li>
          </ul>
          <div className="background-circle-white"></div>
        </div>

        <div className='card' id='service'>
          <h3>{t('services.customization.title', 'Customization and Assembly')}</h3>
          <ul>
            <li>{t('services.customization.systems', 'Custom-built Systems: Providing custom-configured PCs, servers, or other hardware tailored to client specifications.')}</li>
            <li>{t('services.customization.assembly', 'Pre-assembly Services: Assembling components for delivery as ready-to-use systems.')}</li>
            <li>{t('services.customization.integration', 'Hardware Integration: Bundling hardware with pre-installed software or other peripherals.')}</li>
          </ul>
        </div>

        <div className='card'>
          <h3>{t('services.logistics.title', 'Logistics and Distribution')}</h3>
          <div className="background-circle-white2"></div>
          <ul>
            <li>{t('services.logistics.shipping', 'International Shipping: Managing shipping logistics for hardware across borders, including customs clearance.')}</li>
            <li>{t('services.logistics.warehousing', 'Warehousing: Providing secure storage facilities for tech hardware.')}</li>
            <li>{t('services.logistics.delivery', 'Last-Mile Delivery: Ensuring timely delivery to the client\'s specified location.')}</li>
          </ul>
        </div>

        <div className='card'>
          <h3>{t('services.support.title', 'Technical Support and Maintenance')}</h3>
          <ul>
            <li>{t('services.support.installation', 'Installation and Setup: Offering onsite installation for hardware like servers, networking equipment, and industrial machinery.')}</li>
            <li>{t('services.support.repair', 'Repair Services: Providing repairs and servicing for damaged or malfunctioning hardware.')}</li>
            <li>{t('services.support.warranty', 'Warranty Management: Facilitating manufacturer warranty claims or replacements.')}</li>
          </ul>
        </div>

        <div className='card'>
          <h3>{t('services.consulting.title', 'Consulting Services')}</h3>
          <ul>
            <li>{t('services.consulting.selection', 'Hardware Selection Guidance: Helping businesses choose the right hardware for their specific needs.')}</li>
            <li>{t('services.consulting.upgrades', 'Tech Upgrades: Advising on and supplying hardware upgrades for legacy systems.')}</li>
            <li>{t('services.consulting.cost', 'Cost Analysis: Providing cost-effective solutions for tech procurement and deployment.')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
