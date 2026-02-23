import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { logo, searchIcon, basketIcon } from '../constants/images';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';
import { IoHomeOutline, IoRestaurantOutline, IoPhonePortraitOutline, IoCallOutline, IoPersonOutline } from 'react-icons/io5';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId, linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
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
          
          <nav className="nav desktop-nav">
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
            <button className="signin-btn desktop-signin" onClick={() => setIsAuthModalOpen(true)}>Sign Up</button>
            
            <button 
              className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <a
              href="#home"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home', 'home'); }}
            >
              <span className="nav-icon home-icon"><IoHomeOutline /></span>
              Home
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className={activeLink === 'menu' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('menu', 'menu'); }}
            >
              <span className="nav-icon menu-icon"><IoRestaurantOutline /></span>
              Menu
            </a>
          </li>
          <li>
            <a
              href="#mobile-app"
              className={activeLink === 'mobile-app' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('mobile-app', 'mobile-app'); }}
            >
              <span className="nav-icon app-icon"><IoPhonePortraitOutline /></span>
              Mobile App
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact', 'contact'); }}
            >
              <span className="nav-icon contact-icon"><IoCallOutline /></span>
              Contact Us
            </a>
          </li>
          <li className="mobile-signin">
            <button onClick={() => { setIsAuthModalOpen(true); setIsMobileMenuOpen(false); }}>
              <span className="nav-icon user-icon"><IoPersonOutline /></span>
              Sign Up
            </button>
          </li>
        </ul>
      </nav>

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
