import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Wordmark } from './Wordmark';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for nav indicator
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body & html scroll completely when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add('mobile-nav-lock');
      document.body.classList.add('mobile-nav-lock');
    } else {
      document.documentElement.classList.remove('mobile-nav-lock');
      document.body.classList.remove('mobile-nav-lock');
    }
    return () => {
      document.documentElement.classList.remove('mobile-nav-lock');
      document.body.classList.remove('mobile-nav-lock');
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Render mobile drawer directly into document.body to avoid parent stacking context and backdrop-filter issues
  const mobileDrawerContent = (
    <div
      id="mobile-navigation"
      className={`mobile-drawer ${isMobileMenuOpen ? 'mobile-drawer--open' : ''}`}
      aria-hidden={!isMobileMenuOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="mobile-drawer-content">
        <div className="mobile-drawer-header">
          <Wordmark size="md" />
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'mobile-nav-link--active' : ''}`}
                  onClick={handleLinkClick}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} className="mobile-nav-arrow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="#contact"
            className="btn btn-primary mobile-cta-btn"
            onClick={handleLinkClick}
          >
            Connect with Arif
          </a>
          <div className="mobile-drawer-contact-info">
            <span className="mobile-drawer-email">arifkhan933689@gmail.com</span>
            <span className="mobile-drawer-sub">ZHCET, AMU · Class of 2028</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className={`navbar ${isScrolled && !isMobileMenuOpen ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="navbar-logo" aria-label="MARK Portfolio Home">
            <Wordmark size="md" showSubtitle={false} />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'nav-link--active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="navbar-actions">
            <a href="#contact" className="btn btn-sm btn-secondary navbar-cta">
              <span>Get in Touch</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Render mobile drawer at document.body level via portal */}
      {typeof document !== 'undefined' && createPortal(mobileDrawerContent, document.body)}
    </>
  );
};
