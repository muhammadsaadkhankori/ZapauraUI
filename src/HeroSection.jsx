import React from 'react';
import './styleHeroSection.css'; 
import { Link, animateScroll as scroll } from 'react-scroll';
import splashVideo from './FinalVideo.mp4'

const HeroSection = () => {
  return (
    <header className="hero-section">
      <video autoPlay muted loop id="hero-video">
        <source src={splashVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1 className="company-name">Zapaura</h1>
        <p className="tagline">Explore, connect create: The Metaverse Awaits</p>
        <Link
          to="gallery"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-primary explore-button"
        >
          Explore
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;
