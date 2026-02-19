import React from 'react';
import '../styles/Hero.css';
import { headerImg } from '../constants/images';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="hero-content">
        <h1>Order Your Favourite Food Here</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque excepturi rem enim dolores praesentium tenetur ea vel velit esse minus.</p>
        <button className="view-menu-btn">View Menu</button>
      </div>
    </section>
  );
};

export default Hero;
