import React from 'react';
import { profileData } from '../data/profile';
import { GraduationCap, Award, Server } from 'lucide-react';
import './About.css';

export const About = () => {
  return (
    <section className="section about-section" id="about" aria-label="About Mohammad Arif Khan">
      <div className="container">
        <div className="section-header">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Software engineering &amp; applied intelligence.</h2>
          <p className="section-description">
            An overview of my Computer Engineering studies at Aligarh Muslim University, connecting computational fundamentals, backend software development, and practical Machine Learning.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Text */}
          <div className="about-text-column">
            {profileData.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-philosophy">
              <h3 className="about-philosophy-title">How I Approach Engineering</h3>
              <div className="about-principles-list">
                <div className="about-principle-item">
                  <div className="about-principle-bullet" aria-hidden="true" />
                  <div>
                    <strong className="about-principle-heading">Computational Foundations:</strong>
                    <span className="about-principle-desc"> Grounding my code in strong Data Structures &amp; Algorithms, memory efficiency, and clean object-oriented design in C++ and Python.</span>
                  </div>
                </div>
                <div className="about-principle-item">
                  <div className="about-principle-bullet" aria-hidden="true" />
                  <div>
                    <strong className="about-principle-heading">Backend &amp; Systems Thinking:</strong>
                    <span className="about-principle-desc"> Understanding how data transactions flow, database schemas, and structured APIs turn complex problems into dependable services.</span>
                  </div>
                </div>
                <div className="about-principle-item">
                  <div className="about-principle-bullet" aria-hidden="true" />
                  <div>
                    <strong className="about-principle-heading">Applied Machine Learning Rigor:</strong>
                    <span className="about-principle-desc"> Building and evaluating neural networks and computer vision models with real metrics (F1-score, mAP, RMSE) and interactive deployments.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Academic Context Cards */}
          <div className="about-cards-column">
            <div className="about-metric-card card">
              <div className="about-metric-header">
                <div className="about-metric-icon" aria-hidden="true">
                  <Award size={20} />
                </div>
                <span className="about-metric-badge">Academic Metric</span>
              </div>
              <div className="about-metric-value">{profileData.about.highlights[2].value}</div>
              <div className="about-metric-label">Current Academic CGPA / CPI</div>
              <p className="about-metric-detail">
                Demonstrating consistent rigor in core computer engineering coursework and laboratory practicals.
              </p>
            </div>

            <div className="about-metric-card card">
              <div className="about-metric-header">
                <div className="about-metric-icon" aria-hidden="true">
                  <GraduationCap size={20} />
                </div>
                <span className="about-metric-badge">Education</span>
              </div>
              <div className="about-metric-value">ZHCET, AMU</div>
              <div className="about-metric-label">B.Tech Computer Engineering (2024–2028)</div>
              <p className="about-metric-detail">
                Zakir Husain College of Engineering &amp; Technology, Aligarh Muslim University.
              </p>
            </div>

            <div className="about-metric-card card">
              <div className="about-metric-header">
                <div className="about-metric-icon" aria-hidden="true">
                  <Server size={20} />
                </div>
                <span className="about-metric-badge">Career Direction</span>
              </div>
              <div className="about-metric-value">Backend &amp; Software</div>
              <div className="about-metric-label">Software Engineering &amp; Applied AI</div>
              <p className="about-metric-detail">
                Combining core backend development principles and algorithmic foundations with practical Machine Learning and Computer Vision implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
