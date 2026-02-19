import React, { useState } from 'react';
import '../styles/Header.css';
import { logo, searchIcon, basketIcon } from '../constants/images';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();

  const scrollToSection = (sectionId, linkName) => {
    setActiveLink(linkName);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const cartCount = getCartCount();

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo" onClick={() => { setActiveLink('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Tomato" />
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a
                  href="#home"
                  className={activeLink === 'home' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollToSection('home', 'home'); }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className={activeLink === 'menu' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollToSection('menu', 'menu'); }}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#mobile-app"
                  className={activeLink === 'mobile-app' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollToSection('mobile-app', 'mobile-app'); }}
                >
                  Mobile App
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeLink === 'contact' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact', 'contact'); }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="search-btn" aria-label="Search">
              <img src={searchIcon} alt="Search" />
            </button>
            <button className="cart-btn" aria-label="Cart" onClick={() => setIsCartOpen(true)}>
              <img src={basketIcon} alt="Cart" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button className="signin-btn" onClick={() => setIsAuthModalOpen(true)}>Sign Up</button>
          </div>
        </div>
      </header>

      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
