import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

export const ProjectCard = ({ project, onSelect, isClone = false }) => {
  const [imgError, setImgError] = useState(false);

  const handleClick = (e) => {
    // If user clicked directly on an interactive child that should handle its own event, let it pass
    if (e.target.closest('a') || e.target.closest('button.nested-action')) {
      return;
    }
    if (onSelect && !isClone) {
      onSelect(project);
    }
  };

  const handleKeyDown = (e) => {
    if (isClone) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onSelect) onSelect(project);
    }
  };

  return (
    <div
      className={`compact-project-card ${isClone ? 'compact-project-card--clone' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={isClone ? 'presentation' : 'button'}
      tabIndex={isClone ? -1 : 0}
      aria-hidden={isClone ? true : undefined}
      aria-label={isClone ? undefined : `View full details for ${project.title}`}
    >
      {/* Small Project Visual */}
      <div className="compact-card-media">
        <img
          src={imgError ? '/project-portfolio-preview.svg' : project.previewImage}
          alt={isClone ? "" : `Visual for ${project.title}`}
          className="compact-card-img"
          onError={() => setImgError(true)}
          loading="lazy"
        />
        <div className="compact-card-media-overlay" />
      </div>

      {/* Card Content */}
      <div className="compact-card-body">
        <div className="compact-card-header">
          <span className="compact-card-category">{project.projectType}</span>
          <h3 className="compact-card-title">{project.title}</h3>
        </div>

        <p className="compact-card-desc">
          {project.shortDescription}
        </p>

        {/* Compact Tech Badges (3-4 items) */}
        <div className="compact-card-tags" aria-label={isClone ? undefined : "Key technologies"}>
          {project.compactTech.map((tech, idx) => (
            <span key={idx} className="compact-tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Clear Action Prompt */}
        <div className="compact-card-action">
          <span className="compact-action-label">View Project Details</span>
          <div className="compact-action-icon" aria-hidden="true">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
