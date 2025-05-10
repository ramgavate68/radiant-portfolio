import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="image">
        <img src="/about.jpg" alt="About Us" className="about-image" />
      </div>
      <div className="info">
        <h1 className="about-title font-bold mb-4">About Us</h1>
        <p className="about-text font-bold mb-4 nowrap">
          At 'Radiant Process Equipment', we are committed to engineering excellence and provide high-quality process equipment to a variety of sectors. We service industries such as chemical processing, pharmaceuticals, food and beverage, energy, and others.
          Our commitment to innovation, reliability, and client satisfaction sets us apart.  We specialize in heat exchangers, pressure vessels, reactors, salt dosing systems, storage tanks, and distillation columns.
          Driven by a team of industry specialists, we ensure that all equipment fulfills the highest quality and safety standards.
        </p>
      </div>
    </section>
  );
};

export default About;
