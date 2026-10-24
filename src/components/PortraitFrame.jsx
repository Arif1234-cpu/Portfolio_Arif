import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { Terminal } from 'lucide-react';
import './PortraitFrame.css';

export const PortraitFrame = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="portrait-container">
      <div className="portrait-frame">
        {/* Subtle decorative corner accents */}
        <div className="portrait-corner portrait-corner--tl" aria-hidden="true" />
        <div className="portrait-corner portrait-corner--tr" aria-hidden="true" />
        <div className="portrait-corner portrait-corner--bl" aria-hidden="true" />
        <div className="portrait-corner portrait-corner--br" aria-hidden="true" />

        {/* Ambient background aura behind image */}
        <div className="portrait-glow" aria-hidden="true" />

        {/* Image wrapper */}
        <div className="portrait-image-wrapper">
          <img
            src={profileData.portrait.src}
            alt={profileData.portrait.alt}
            className={`portrait-image ${imageLoaded ? 'portrait-image--loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
          />

          {/* Quick status pill anchored to frame */}
          <div className="portrait-status-pill">
            <span className="portrait-status-dot" aria-hidden="true" />
            <span className="portrait-status-text">{profileData.portrait.statusText}</span>
          </div>
        </div>

        {/* Caption at bottom */}
        <div className="portrait-caption">
          <span className="portrait-caption-label">
            <Terminal size={12} aria-hidden="true" />
            <span>MOHAMMAD ARIF KHAN</span>
          </span>
          <span className="portrait-caption-sub">AMU · 2024–2028</span>
        </div>
      </div>
    </div>
  );
};
