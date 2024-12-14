import React from 'react';

const Services = () => {
  return (
    <section className='guanxi-section'>
    <div class="container-pages">
  <div class="large-text">Guanxi</div>
  <div class="content-wrapper">
    <h2 class="subheading">Our Services</h2>
    <p class="description">
      At Guanxi International Holdings, we specialize in delivering end-to-end
      solutions for tech hardware import and export. Our comprehensive range of
      services ensures that every step of your journey, from procurement to delivery, is
      seamless and efficient.
    </p>
    <a href="/" class="back-home">Home Page →</a>
  </div>
</div>
<div className='services-cards-wrapper2'>
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
    </section>
  );
};

export default Services;
