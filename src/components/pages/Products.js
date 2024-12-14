import React, { useState } from 'react';

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
  <>
      <section className='guanxi-section'>
    <div class="container-pages">
  <div class="large-text">Guanxi</div>
  <div class="content-wrapper">
    <h2 class="subheading">Our Products</h2>
    <p class="description">
      At Guanxi International Holdings, we provide a wide range of high-qaulity
      tech hardaware solutions to meet the diverse needs of our clients. From cutting-edge
      devices to essential components, our products are designed to empower your business with
      innovation and reliability.
    </p>
    <a href="/" class="back-home">Home Page →</a>
  </div>
</div>

{/* PRODUCTS CARDS */}
<div className='products-cards-wrapper'>
        <div className='card'>
          <h3>1. Computing Hardware</h3>
          <ul>
            <li><span>Custom PCs:</span> Tailored to meet your unique specifications for perfomace and efficiency.</li>
            <li><span>Servers:</span> Reliable, scalable, and secure solutions for data</li>
            <li><span>Laptops & Destops:</span> High-performance devices for both personal and professional use.</li>
          </ul>
          <div class="background-circle-white"></div>
        </div>
        <div className='card' id='service'>
          <h3>2. Networking Equipment</h3>
          <ul>
            <li><span>Routers & Switches:</span> Advanced networking solutions for seamless connectivity.</li>
            <li><span>Access Points:</span> High speed wireless solutions for modern businesses.</li>
            <li><span>Firewalls:</span> Robust security systems to protect your data and networks.</li>
          </ul>
        </div>

        <div className='card'>
          <h3>3. Industrial Hardware</h3>
          <div class="background-circle-white2"></div>
          <ul>
            <li><span>IoT Devices:</span> Smart solutions to streamline industial processes.</li>
            <li><span>Embedded Systems:</span> Hardware for roborics and automation projects.</li>
            <li><span>Industrial computers:</span> Rugged and durable devices for challenging environments.</li>
          </ul>
        </div>

      </div>
    </section>
    <section id='FAQs-section'>
    <div className='FAQs-heading'>
      <h1>Why Choose Our Products</h1>
    </div>
    <div className='questions-wrapper'>
<div className="background-circle-white3"></div>
{[
{ question: "1. Quality Assurance", answer: "All products are sourced from trusted manufacturers and rigorously tested" },
{ question: "2. Global Reach", answer: "We offer seamless import and export services across borders" },
{ question: "3. Expert Support", answer: "Our team is here to help with installation, configuration, and maintanance" },
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

export default Products;
