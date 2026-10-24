import React from 'react';
import { educationData, certificationsData } from '../data/education';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import './Education.css';

export const Education = () => {
  return (
    <section className="section education-section" id="education" aria-label="Education & Certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Academic Foundations</div>
          <h2 className="section-title">Education &amp; verified certifications.</h2>
          <p className="section-description">
            Undergraduate Computer Engineering studies at Aligarh Muslim University, supplemented by rigorous specialized coursework in machine learning and computer science.
          </p>
        </div>

        {/* Academic Degree & Coursework Grid */}
        <div className="education-compact-container">
          {/* Main Institution & Degree Card */}
          <div className="education-main-card card">
            <div className="education-top-bar">
              <div className="education-icon-box" aria-hidden="true">
                <GraduationCap size={24} />
              </div>
              
              <div className="education-cpi-pill">
                <span className="education-cpi-label">Current CGPA</span>
                <span className="education-cpi-value">{educationData.cpi}</span>
                <span className="education-cpi-scale">/ {educationData.scale}</span>
              </div>
            </div>

            <div className="education-degree-info">
              <h3 className="education-degree-title">{educationData.degree}</h3>
              <div className="education-college">{educationData.institution}</div>
              <div className="education-university">{educationData.university}</div>
            </div>

            <div className="education-meta-row">
              <div className="education-meta-item">
                <Calendar size={14} className="education-meta-icon" aria-hidden="true" />
                <span>{educationData.duration}</span>
              </div>
              <div className="education-meta-item">
                <MapPin size={14} className="education-meta-icon" aria-hidden="true" />
                <span>{educationData.location}</span>
              </div>
            </div>

            {/* Prior Academic Background from CV */}
            <div className="education-secondary-row">
              <span className="secondary-label">Prior Board Results:</span>
              <div className="secondary-badges">
                {educationData.secondaryEducation.map((sec, idx) => (
                  <span key={idx} className="secondary-badge">
                    {sec.level}: <strong>{sec.score}</strong> ({sec.board})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Coursework & Focus Card */}
          <div className="education-coursework-card card">
            <div className="coursework-header">
              <BookOpen size={18} className="coursework-icon" aria-hidden="true" />
              <h4 className="coursework-title">Relevant Core Coursework</h4>
            </div>

            <ul className="coursework-grid">
              {educationData.coursework.map((course, idx) => (
                <li key={idx} className="coursework-item">
                  <CheckCircle size={14} className="coursework-check" aria-hidden="true" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>

            <div className="coursework-focus-box">
              <span className="coursework-focus-label">Academic Orientation:</span>
              <p className="coursework-focus-text">{educationData.academicFocus}</p>
            </div>
          </div>
        </div>

        {/* Certifications Sub-Section */}
        <div className="certifications-section-wrap">
          <div className="certifications-header">
            <div className="certifications-badge">
              <Award size={14} aria-hidden="true" />
              <span>VERIFIED CERTIFICATIONS &amp; SPECIALIZATIONS</span>
            </div>
            <h3 className="certifications-title">Independent Rigor &amp; Professional Coursework</h3>
          </div>

          <div className="certifications-grid">
            {certificationsData.map((cert, idx) => (
              <div key={idx} className="certification-card card">
                <div className="certification-top">
                  <span className="cert-platform-pill">{cert.platform}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <div className="cert-org">{cert.organization}</div>
                <p className="cert-focus">{cert.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
