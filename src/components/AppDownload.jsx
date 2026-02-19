import React from 'react';
import '../styles/AppDownload.css';
import { playStore, appStore } from '../constants/images';

const AppDownload = () => {
  return (
    <section className="app-download" id="mobile-app">
      <div className="app-download-container">
        <p className="app-download-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, ipsam!
        </p>
        <h2>Tomato App</h2>
        <div className="app-download-buttons">
          <img src={playStore} alt="Download on Google Play" />
          <img src={appStore} alt="Download on App Store" />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
