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
        <a href="#service" >Get Started</a> {/* target="_blank" rel="noopener noreferrer" */}
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
        <div className='card' id='service'>
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

      </div>
      <div className='services-button'>
        <a href="/services" class="cta-button">View More →</a>
      </div>
      </div>
    </section>
    <section className='guanxi-section' id='about'>
    <div class="container">
  <div class="large-text">Guanxi</div>
  <div class="content-wrapper">
    <h2 class="subheading">Tech Hardware import & Export</h2>
    <p class="description">
      At Guanxi International Holdings, we bridge the gap between manufacturers
      and businesses by providing top-notch tech hardware solutions.
    </p>
    <a href="/about" class="back-home">Read More →</a>
  </div>
</div>
    </section>
    <section id='Call-to-action'>
  <div class="container2">
  <div class="content-wrapper2" id='products'>
    <div class="text-content">
      <h2>Try the Guanxi International Holdings of the future, today.</h2>
      <p>
        Whether it`s sourcing cutting-edge components or delivering custom-built systems,
        we ensure efficiency, reliability and unmatched customer service at every step of the 
        process.
      </p>
      <a href="/products" class="cta-button">Our Products →</a>
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
            <a href="/get-started" className="link">community forum</a>, reach out our{" "}
            <a href="/" className="link">Contact Info</a>, or write to{" "}
            <a href="mailto:guanxi@gmail.com" className="link">guanxi@gmail.com</a>.
          </p>
        </div>
        <div className='questions-wrapper'>
  <div className="background-circle-white3"></div>
  {[
    { question: "What services do you offer?", answer: "We offer sourcing, exporting, customization, logistics, and consulting services for tech hardware." },
    { question: "Can I integrate your service with my existing setup?", answer: "Yes, we provide custom solutions and technical support to integrate our services with your current systems." },
    { question: "How secure is the hardware during transit?", answer: "We ensure secure packaging and use reliable shipping partners to guarantee safe delivery." },
    { question: "What is your warranty policy?", answer: "We facilitate manufacturer warranty claims and offer repair services for eligible products." },
  ].map((item, index) => (
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