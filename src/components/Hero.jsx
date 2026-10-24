import React from 'react';
import { profileData } from '../data/profile';
import { PortraitFrame } from './PortraitFrame';
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero-section" id="hero" aria-label="Introduction">
      <div className="container hero-container">
        {/* Left Column: Hero Copy & Actions */}
        <div className="hero-content">
          <div className="hero-label-badge">
            <span className="hero-label-indicator" aria-hidden="true" />
            <span className="hero-label-text">{profileData.roleLabel}</span>
          </div>

          <h1 className="hero-heading">
            Building reliable software <br />
            <span className="hero-heading-gradient">&amp; intelligent systems.</span>
          </h1>

          <p className="hero-intro">
            {profileData.bioShort}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn-primary">
              <span>Explore My Work</span>
              <ArrowDown size={16} aria-hidden="true" />
            </a>

            <a href="#contact" className="btn btn-secondary hero-btn-secondary">
              <span>Get in Touch</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="hero-social-row">
            <span className="hero-social-label">Connect:</span>
            
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile (Mohammad Arif Khan - Arif1234-cpu)"
            >
              <Github size={18} aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <span className="hero-social-divider" aria-hidden="true">/</span>

            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile (Mohammad Arif Khan)"
            >
              <Linkedin size={18} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>

            <span className="hero-social-divider" aria-hidden="true">/</span>

            <a
              href={profileData.socialLinks.gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="Send email to Mohammad Arif Khan via Gmail (opens in new tab)"
            >
              <Mail size={18} aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Dedicated Portrait Area */}
        <div className="hero-portrait-col">
          <PortraitFrame />
        </div>
      </div>
    </section>
  );
};
