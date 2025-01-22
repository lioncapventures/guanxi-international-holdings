import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BrandsCarousel from "../BrandsCarousel";

const Home = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section id='hero-section'>
        <div className='home-container'>
          <div className='home-content'>
            <h1>{t('home.hero.title') || 'Unifying Trade through Tech'}</h1>
            <p>{t('home.hero.subtitle') || 'We are a company that specializes in tech hardware import & export'}</p>
            <button>
              <a href="#service">{t('home.hero.cta') || 'Get Started'}</a>
            </button>
          </div>
        </div>
      </section>

      <section id='about-section'>
        <div className='about-container'>
          <BrandsCarousel />
          <div className='services-cards-wrapper'>
            <div className='card'>
              <h3>{t('home.services.procurement.title') || 'Procurement and Supply Chain Management'}</h3>
              <ul>
                <li>{t('home.services.procurement.sourcing') || 'Sourcing and Importing: Acquiring hardware components from international manufacturers.'}</li>
                <li>{t('home.services.procurement.exporting') || 'Exporting Solutions: Facilitating the export of locally available tech hardware to international markets.'}</li>
                <li>{t('home.services.procurement.vendor') || 'Vendor Management: Negotiating with global suppliers for bulk orders or specialized components.'}</li>
              </ul>
              <div className="background-circle-white"></div>
            </div>
            <div className='card' id='service'>
              <h3>{t('home.services.customization.title') || 'Customization and Assembly'}</h3>
              <ul>
                <li>{t('home.services.customization.systems') || 'Custom-built Systems: Providing custom-configured PCs, servers, or other hardware tailored to client specifications.'}</li>
                <li>{t('home.services.customization.assembly') || 'Pre-assembly Services: Assembling components for delivery as ready-to-use systems.'}</li>
                <li>{t('home.services.customization.integration') || 'Hardware Integration: Bundling hardware with pre-installed software or other peripherals.'}</li>
              </ul>
            </div>
            <div className='card'>
              <h3>{t('home.services.logistics.title') || 'Logistics and Distribution'}</h3>
              <ul>
                <li>{t('home.services.logistics.shipping') || 'International Shipping: Managing shipping logistics for hardware across borders, including customs clearance.'}</li>
                <li>{t('home.services.logistics.warehousing') || 'Warehousing: Providing secure storage facilities for tech hardware.'}</li>
                <li>{t('home.services.logistics.delivery') || 'Last-Mile Delivery: Ensuring timely delivery to the client\'s specified location.'}</li>
              </ul>
              <div className="background-circle-white2"></div>
            </div>
          </div>
          <div className='services-button'>
            <a href="/services" className="cta-button">{t('nav.services') || 'View More'}</a>
          </div>
        </div>
      </section>

      <section className='guanxi-section' id='about'>
        <div className="container">
          <div className="large-text">Guanxi</div>
          <div className="content-wrapper">
            <h2 className="subheading">{t('home.guanxi.title') || 'Tech Hardware Import & Export'}</h2>
            <p className="description">{t('home.guanxi.description') || 'At Guanxi International Holdings, we bridge the gap between manufacturers and businesses by providing top-notch tech hardware solutions.'}</p>
            <a href="/about" className="back-home">{t('home.guanxi.cta') || 'Read More'}</a>
          </div>
        </div>
      </section>

      <section id='Call-to-action'>
        <div className="container2">
          <div className="content-wrapper2" id='products'>
            <div className="text-content">
              <h2>{t('home.cta.title') || 'Try the Guanxi International Holdings of the future, today.'}</h2>
              <p>{t('home.cta.description') || 'Whether it\'s sourcing cutting-edge components or delivering custom-built systems, we ensure efficiency, reliability, and unmatched customer service at every step of the process.'}</p>
              <a href="/products" className="cta-button">{t('home.cta.cta') || 'Our Products'}</a>
            </div>
            <div className="background-circle"></div>
          </div>
        </div>
      </section>

      <section id='FAQs-section'>
        <div className='FAQs-heading'>
          <h1>{t('home.faqs.title') || 'Frequently Asked Questions'}</h1>
          <p className='small-heading'>
            {t('home.faqs.subtitle') || "If you can't find an answer here, check out the "}
            <a href="/get-started" className="link">{t('home.faqs.community') || 'community forum'}</a>, {t('home.faqs.or') || 'reach out to our'}
            <a href="/" className="link">{t('home.faqs.contact') || 'Contact Info'}</a>, {t('home.faqs.write') || 'or write to'}
            <a href="mailto:info@guanxiholdings.com" className="link">guanxi@gmail.com</a>.
          </p>
        </div>
        <div className='questions-wrapper'>
          <div className="background-circle-white3"></div>
          {[{
            question: t('home.faqs.q1') || "What services do you offer?",
            answer: t('home.faqs.a1') || "We offer sourcing, exporting, customization, logistics, and consulting services for tech hardware."
          }, {
            question: t('home.faqs.q2') || "Can I integrate your service with my existing setup?",
            answer: t('home.faqs.a2') || "Yes, we provide custom solutions and technical support to integrate our services with your current systems."
          }, {
            question: t('home.faqs.q3') || "How secure is the hardware during transit?",
            answer: t('home.faqs.a3') || "We ensure secure packaging and use reliable shipping partners to guarantee safe delivery."
          }, {
            question: t('home.faqs.q4') || "What is your warranty policy?",
            answer: t('home.faqs.a4') || "We facilitate manufacturer warranty claims and offer repair services for eligible products."
          }].map((item, index) => (
            <React.Fragment key={index}>
              <div className='question' onClick={() => toggleAnswer(index)}>
                <p>{item.question}</p>
                <p className='review-button'>{activeIndex === index ? "−" : "+"}</p>
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

export default Home;