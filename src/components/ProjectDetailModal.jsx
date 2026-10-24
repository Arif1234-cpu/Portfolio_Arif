import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  UserCheck, 
  Cpu, 
  AlertTriangle, 
  ArrowLeft,
  Calendar,
  Check
} from 'lucide-react';
import './ProjectDetailModal.css';

export const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  // Lock background scrolling when modal is open
  useEffect(() => {
    document.documentElement.classList.add('modal-scroll-lock');
    document.body.classList.add('modal-scroll-lock');

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.documentElement.classList.remove('modal-scroll-lock');
      document.body.classList.remove('modal-scroll-lock');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const modalMarkup = (
    <div 
      className="project-modal-backdrop" 
      onClick={onClose}
      role="presentation"
    >
      <div 
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Top Header Bar */}
        <div className="project-modal-header">
          <button 
            type="button" 
            className="project-modal-back-btn"
            onClick={onClose}
            aria-label="Back to projects"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Projects</span>
          </button>

          <button 
            type="button" 
            className="project-modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="project-modal-body">
          {/* Top Title Banner */}
          <div className="modal-title-section">
            <div className="modal-badge-row">
              <span className="modal-type-tag">{project.projectType}</span>
              {project.status && (
                <span className="modal-status-badge">
                  <Check size={12} aria-hidden="true" />
                  <span>{project.status}</span>
                </span>
              )}
            </div>

            <h2 id="modal-project-title" className="modal-project-title">
              {project.title}
            </h2>

            {project.shortDescription && (
              <p className="modal-project-subtitle">
                {project.shortDescription}
              </p>
            )}
          </div>

          {/* Visual Preview Banner */}
          {project.previewImage && (
            <div className="modal-preview-wrap">
              <img 
                src={project.previewImage} 
                alt={`Preview visual for ${project.title}`}
                className="modal-preview-img"
              />
            </div>
          )}

          {/* 1. Project Overview & Problem Solved */}
          <section className="modal-section" aria-labelledby="heading-overview">
            <h3 id="heading-overview" className="modal-section-heading">
              <Layers size={18} className="modal-heading-icon" aria-hidden="true" />
              <span>Project Overview</span>
            </h3>
            <p className="modal-section-text">
              {project.overview}
            </p>
          </section>

          {/* 2. Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="modal-section" aria-labelledby="heading-features">
              <h3 id="heading-features" className="modal-section-heading">
                <CheckCircle2 size={18} className="modal-heading-icon" aria-hidden="true" />
                <span>Key Features &amp; Metrics</span>
              </h3>
              <ul className="modal-features-list">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <CheckCircle2 size={15} className="modal-feature-check" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 3. Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <section className="modal-section" aria-labelledby="heading-tech">
              <h3 id="heading-tech" className="modal-section-heading">
                <Cpu size={18} className="modal-heading-icon" aria-hidden="true" />
                <span>Technologies &amp; Tools Used</span>
              </h3>
              <div className="modal-tech-pills">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="modal-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* 4. My Contribution */}
          {project.myContribution && (
            <section className="modal-section" aria-labelledby="heading-contribution">
              <h3 id="heading-contribution" className="modal-section-heading">
                <UserCheck size={18} className="modal-heading-icon" aria-hidden="true" />
                <span>My Contribution &amp; Implementation</span>
              </h3>
              <p className="modal-section-text">
                {project.myContribution}
              </p>
            </section>
          )}

          {/* 5. Implementation Details */}
          {project.implementationDetails && (
            <section className="modal-section" aria-labelledby="heading-implementation">
              <h3 id="heading-implementation" className="modal-section-heading">
                <Layers size={18} className="modal-heading-icon" aria-hidden="true" />
                <span>Architecture &amp; Implementation Details</span>
              </h3>
              <div className="modal-implementation-box">
                <p className="modal-section-text">
                  {project.implementationDetails}
                </p>
              </div>
            </section>
          )}

          {/* 6. Challenges and Solutions */}
          {project.challengesSolutions && (
            <section className="modal-section" aria-labelledby="heading-challenges">
              <h3 id="heading-challenges" className="modal-section-heading">
                <AlertTriangle size={18} className="modal-heading-icon" aria-hidden="true" />
                <span>Challenges Overcome &amp; Solutions</span>
              </h3>
              <p className="modal-section-text">
                {project.challengesSolutions}
              </p>
            </section>
          )}
        </div>

        {/* Modal Footer Bar with Links */}
        <div className="project-modal-footer">
          <div className="modal-action-buttons">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary modal-action-btn"
                aria-label={`View ${project.title} repository on GitHub (opens in new tab)`}
              >
                <Github size={16} aria-hidden="true" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary modal-action-btn"
                aria-label={`Open live demonstration for ${project.title} (opens in new tab)`}
              >
                <span>Live Demo</span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}

            <button
              type="button"
              className="btn btn-ghost modal-action-close"
              onClick={onClose}
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalMarkup, document.body)
    : null;
};
