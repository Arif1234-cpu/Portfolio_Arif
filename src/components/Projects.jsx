import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import './Projects.css';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef(null);
  const animFrameRef = useRef(null);
  const dragInfoRef = useRef({ startX: 0, scrollStart: 0, hasMoved: false });

  // Check user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }
  }, []);

  // Continuous Seamless Circular Auto-Scroll Engine
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const scrollSpeed = 0.7; // Pixels per frame (buttery smooth speed)

    const step = () => {
      // Auto-advance only when playing and not interacted with
      if (isPlaying && !isHovered && !isFocused && !isDragging) {
        viewport.scrollLeft += scrollSpeed;

        // Circular loop logic: half of scrollWidth is exactly one full set of cards
        const halfWidth = viewport.scrollWidth / 2;
        if (halfWidth > 0 && viewport.scrollLeft >= halfWidth) {
          viewport.scrollLeft -= halfWidth;
        }
      }
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, isHovered, isFocused, isDragging]);

  // Handle Manual Step Navigation via Arrow Buttons
  const handleScrollPrev = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cardStep = 370; // card width + gap
    const halfWidth = viewport.scrollWidth / 2;

    if (viewport.scrollLeft <= cardStep) {
      viewport.scrollLeft += halfWidth;
    }
    viewport.scrollBy({ left: -cardStep, behavior: 'smooth' });
  };

  const handleScrollNext = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const cardStep = 370;
    const halfWidth = viewport.scrollWidth / 2;

    viewport.scrollBy({ left: cardStep, behavior: 'smooth' });

    // Ensure within bounds
    setTimeout(() => {
      if (viewport && viewport.scrollLeft >= halfWidth) {
        viewport.scrollLeft -= halfWidth;
      }
    }, 400);
  };

  // Drag handling to allow fluid mouse/touch swipe
  const handleMouseDown = (e) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    setIsDragging(true);
    dragInfoRef.current = {
      startX: e.clientX,
      scrollStart: viewport.scrollLeft,
      hasMoved: false
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    const deltaX = e.clientX - dragInfoRef.current.startX;

    if (Math.abs(deltaX) > 6) {
      dragInfoRef.current.hasMoved = true;
    }
    viewport.scrollLeft = dragInfoRef.current.scrollStart - deltaX;

    // Boundary wrapping during drag
    const halfWidth = viewport.scrollWidth / 2;
    if (viewport.scrollLeft >= halfWidth) {
      viewport.scrollLeft -= halfWidth;
      dragInfoRef.current.scrollStart -= halfWidth;
    } else if (viewport.scrollLeft <= 0) {
      viewport.scrollLeft += halfWidth;
      dragInfoRef.current.scrollStart += halfWidth;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Safe Project Selection: only trigger if visitor didn't drag
  const handleCardClick = (project) => {
    if (dragInfoRef.current.hasMoved) {
      dragInfoRef.current.hasMoved = false;
      return;
    }
    setSelectedProject(project);
  };

  return (
    <section 
      className="section projects-section" 
      id="projects" 
      aria-label="Machine Learning & Software Engineering Projects"
    >
      <div className="container">
        {/* Section Header with Carousel Controls */}
        <div className="projects-section-header-row">
          <div className="section-header">
            <div className="section-label">Featured Projects</div>
            <h2 className="section-title">Applied machine learning &amp; software.</h2>
            <p className="section-description">
              Compact interactive showcase of deep learning, computer vision, and engineering projects. Click any project card to view full architecture and implementation details.
            </p>
          </div>

          {/* Carousel Action Controls */}
          <div className="carousel-controls-bar" aria-label="Project carousel controls">
            <button
              type="button"
              className="carousel-control-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
              title={isPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
            >
              {isPlaying ? <Pause size={17} /> : <Play size={17} />}
            </button>

            <button
              type="button"
              className="carousel-control-btn"
              onClick={handleScrollPrev}
              aria-label="Previous project card"
              title="Previous project"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              className="carousel-control-btn"
              onClick={handleScrollNext}
              aria-label="Next project card"
              title="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Seamless Auto-Scrolling Carousel */}
        <div 
          className="projects-carousel-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={() => setIsFocused(false)}
        >
          {/* Subtle Side Fade Overlays */}
          <div className="carousel-fade-edge carousel-fade-left" aria-hidden="true" />
          <div className="carousel-fade-edge carousel-fade-right" aria-hidden="true" />

          {/* Viewport */}
          <div
            ref={viewportRef}
            className={`projects-carousel-viewport ${isDragging ? 'is-dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            tabIndex={0}
            role="region"
            aria-label="Auto-scrolling project cards carousel"
          >
            <div className="projects-carousel-track">
              {/* Primary Interactive Cards (Set 1) */}
              {projectsData.map((project) => (
                <ProjectCard
                  key={`primary-${project.id}`}
                  project={project}
                  onSelect={handleCardClick}
                  isClone={false}
                />
              ))}

              {/* Cloned Seamless Visual Buffer (Set 2) */}
              {/* Clones ensure seamless circular loop without blank space; aria-hidden and tabIndex=-1 protect assistive tech */}
              {projectsData.map((project) => (
                <ProjectCard
                  key={`clone-${project.id}`}
                  project={project}
                  onSelect={handleCardClick}
                  isClone={true}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Helper Note for Visitors */}
        <div className="carousel-interaction-hint">
          <span className="hint-dot" aria-hidden="true" />
          <span>Hover or focus to pause · Drag or swipe horizontally to navigate · Click any card for full details</span>
        </div>
      </div>

      {/* Full Project Detail Modal Overlay */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
