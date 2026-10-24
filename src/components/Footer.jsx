import React from 'react';
import { Wordmark } from './Wordmark';
import { profileData } from '../data/profile';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Wordmark size="md" showSubtitle={true} />
            <p className="footer-tagline">
              Computer Engineering undergraduate at ZHCET, AMU. Focused on Machine Learning, Computer Vision, and software engineering.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-heading">Navigation</span>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills &amp; Tooling</a></li>
              <li><a href="#projects">Engineering Projects</a></li>
              <li><a href="#education">Education &amp; CPI</a></li>
              <li><a href="#contact">Contact &amp; Connect</a></li>
            </ul>
          </div>

          <div className="footer-social-col">
            <span className="footer-col-heading">Direct Channels</span>
            <div className="footer-social-links">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <Github size={18} aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.socialLinks.gmailCompose}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Direct Email via Gmail (opens in new tab)"
              >
                <Mail size={18} aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>&copy; {new Date().getFullYear()} Mohammad Arif Khan. Designed under the MARK brand.</span>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
