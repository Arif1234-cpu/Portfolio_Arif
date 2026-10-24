import React from 'react';
import './Wordmark.css';

/**
 * Custom Typographic Wordmark for MARK (Mohammad Arif Khan)
 * Intelligent, minimal, geometric, and distinctive.
 */
export const Wordmark = ({ size = 'md', showSubtitle = false, className = '' }) => {
  return (
    <div className={`mark-wordmark mark-wordmark--${size} ${className}`} aria-label="MARK — Mohammad Arif Khan">
      <span className="mark-letters">
        <span className="letter-m">M</span>
        <span className="letter-a">A</span>
        <span className="letter-r">R</span>
        <span className="letter-k">K</span>
        <span className="mark-dot" aria-hidden="true" />
      </span>
      {showSubtitle && (
        <span className="mark-sub">MOHAMMAD ARIF KHAN</span>
      )}
    </div>
  );
};
