import React, { useState } from 'react';
import BrandsCarousel from "../BrandsCarousel";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (

    <>
    <section id='hero-section'>
      <div className='home-container'>
      <div className='home-content'>
        <h1>Unifying Trade through Tech</h1>
        <p>We are a company that specializes in tech hardware import & export</p>
        <button>
        <a href="https://your-external-url.com" target="_blank" rel="noopener noreferrer">Get Started</a>
        </button>
      </div>
      </div>

    </section>
    <section id='about-section'>
      <div className='about-container'>
        <BrandsCarousel />
      <div className='services-cards-wrapper'>
        <div className='card'>
          <h3>Procurement and Supply Chain Management</h3>
          <ul>
            <li>Sourcing and Importing: Acquiring hardware components from international manufacturers.</li>
            <li>Exporting Solutions: Facilitating the export of locally available tech hardware to international markets.</li>
            <li>Vendor Management: Negotiating with global suppliers for bulk orders or specialized components</li>
          </ul>
          <div class="background-circle-white"></div>
        </div>
        <div className='card'>
          <h3>Customization and Assembly</h3>
          <ul>
            <li>Custom-built Systems: Providing custom-configured PCs, servers, or other hardware tailored to client specifications.</li>
            <li>Pre-assembly Services: Assembling components for delivery as ready-to-use systems.</li>
            <li>Hardware Integration: Bundling hardware with pre-installed software or other peripherals.</li>
          </ul>
        </div>

        <div className='card'>
          <h3>Logistics and Distribution</h3>
          <div class="background-circle-white2"></div>
          <ul>
            <li>International Shipping: Managing shipping logistics for hardware across borders, including customs clearance.</li>
            <li>Warehousing: Providing secure storage facilities for tech hardware</li>
            <li>Last-Mile Delivery: Ensuring timely delivery to the client's specified location.</li>
          </ul>
        </div>

        <div className='card'>
          <h3>Technical Support and Maintenance</h3>
          <ul>
            <li>Installation and Setup: Offering onsite installation for hardware like servers, networking equipment, and industrial machinery.</li>
            <li>Repair Services: Providing repairs and servicing for damaged or malfunctioning hardware.</li>
            <li>Warranty Management: Facilitating manufacturer warranty claims or replacements.</li>
          </ul>
        </div>

        <div className='card'>
          <h3>Consulting Services</h3>
          <ul>
            <li>Hardware Selection Guidance: Helping businesses choose the right hardware for their specific needs.</li>
            <li>Tech Upgrades: Advising on and supplying hardware upgrades for legacy systems.</li>
            <li>Cost Analysis: Providing cost-effective solutions for tech procurement and deployment.</li>
          </ul>
        </div>

        <div className='card'>
        <div class="background-circle-white"></div>
          <h3>Consulting Services</h3>
          <ul>
            <li>Hardware Selection Guidance: Helping businesses choose the right hardware for their specific needs.</li>
            <li>Tech Upgrades: Advising on and supplying hardware upgrades for legacy systems.</li>
            <li>Cost Analysis: Providing cost-effective solutions for tech procurement and deployment.</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
    <section className='guanxi-section'>
    <div class="container">
  <div class="large-text">Guanxi</div>
  <div class="content-wrapper">
    <h2 class="subheading">Tech Hardware import & Export</h2>
    <p class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit arcu cras posuere gravida neque felis a ullamcorper interdum.
    </p>
    <a href="/" class="back-home">Read More →</a>
  </div>
</div>
    </section>
    <section id='Call-to-action'>
  <div class="container2">
  <div class="content-wrapper2">
    <div class="text-content">
      <h2>Try the Guanxi International Holdings of the future, today.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur in aenean a in tempor varius
        amet aliquam suspendisse et tortor orci natoque dui.
      </p>
      <a href="/get-started" class="cta-button">Get started →</a>
    </div>
    <div class="background-circle"></div>
  </div>
</div>
</section>
<section id='FAQs-section'>
        <div className='FAQs-heading'>
          <h1>Frequently Asked Questions</h1>
          <p className='small-heading'>
            If you can't find an answer here, check out the{" "}
            <a href="/get-started" className="link">community forum</a>, reach out on{" "}
            <a href="/get-started" className="link">Twitter</a>, or write to{" "}
            <a href="mailto:support@pirsch.io" className="link">support@pirsch.io</a>.
          </p>
        </div>
        <div className='questions-wrapper'>
          <div className="background-circle-white3"></div>
          {[
            "Lorem amet aliquam suspendisse et tortor orci natoque dui?",
            "Can I integrate your service with my existing setup?",
            "How secure is the hardware during transit?",
            "What is your warranty policy?",
          ].map((question, index) => (
            <React.Fragment key={index}>
              <div className='question' onClick={() => toggleAnswer(index)}>
                <p>{question}</p>
                <p className='review-button'>{activeIndex === index ? "−" : "+"}</p>
              </div>
              {activeIndex === index && (
                <div className="answer">
                  <p>This is the answer to: {question}</p>
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