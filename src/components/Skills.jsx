import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { Code2, Brain, Server, Layout, Wrench } from 'lucide-react';
import './Skills.css';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming-languages': return <Code2 size={18} />;
      case 'ml-cv': return <Brain size={18} />;
      case 'backend-fundamentals': return <Server size={18} />;
      case 'frontend-web': return <Layout size={18} />;
      case 'developer-tools': return <Wrench size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section className="section skills-section" id="skills" aria-label="Skills & Technical Tooling">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Technical Tooling</div>
          <h2 className="section-title">Verified skills &amp; core technologies.</h2>
          <p className="section-description">
            A focused breakdown of programming languages, machine learning frameworks, software fundamentals, and daily developer tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-bar" role="tablist" aria-label="Skill category filter">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            className={`skills-filter-tab ${selectedCategory === 'all' ? 'skills-filter-tab--active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Areas
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`skills-filter-tab ${selectedCategory === cat.id ? 'skills-filter-tab--active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="skills-tab-icon">{getCategoryIcon(cat.id)}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="skill-category-card card">
              <div className="skill-category-header">
                <div className="skill-category-icon" aria-hidden="true">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="skill-category-title">{category.title}</h3>
                  <p className="skill-category-desc">{category.description}</p>
                </div>
              </div>

              <div className="skill-items-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item-row">
                    <div className="skill-item-main">
                      <span className="skill-item-name">{skill.name}</span>
                    </div>
                    {skill.notes && (
                      <span className="skill-item-notes">{skill.notes}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
