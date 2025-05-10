import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-screen flex flex-col items-center justify-center text-white"
    >
      <div className="hero-overlay"></div>

      <header>
        <div className="flex items-center p-2">
          <img
            src="/rp-logo-full.jpeg"
            alt="Radiant Logo"
            style={{ height: '50px', width: 'auto' }}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#about" className="hover:text-blue-700">About Us</a>
          <a href="#products" className="hover:text-blue-700">Products</a>
          <a href="#gallery" className="hover:text-blue-700">Gallery</a>
          <a href="#contact" className="hover:text-blue-700">Contact Us</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white text-gray-800 p-6 transition-transform z-30 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-black text-2xl absolute top-4 right-6"
          >
            ×
          </button>
          <div className="mt-12 flex flex-col gap-4">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Powering Progress with <br /> Precision Engineering
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          At Radiant Process Equipment, we specialize in innovative, reliable solutions for industrial fluid and process systems — engineered to perform, built to last.
        </p>
        <div className="flex gap-8 items-center">
          <div className="hidden md:flex items-center justify-center text-center text-white arrow">
            <a href="#products">
              <img
                src="/weui_arrow-filled.svg"
                alt="Arrow"
                width="71%"
                height="41%"
              />
            </a>
          </div>
          <div>
            <a href="#products" className="btn btn-primary link">
              Explore Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
