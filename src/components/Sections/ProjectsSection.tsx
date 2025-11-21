import React, { useState } from 'react';
import './ProjectsSection.css';
import { Section, Cat, Project } from '../../types';
import projectsData from '../../data/projects.json';

interface ProjectsSectionProps {
  onSectionChange: (section: Section) => void;
  cats: Cat[];
  calculateCatAge: (birthDate: string) => number;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  onSectionChange, 
  cats, 
  calculateCatAge 
}) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedCat, setSelectedCat] = useState<number>(0);

  const projects: Project[] = projectsData;

  const handleProjectClick = (projectId: string): void => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'planned':
        return 'accent';
      default:
        return 'primary';
    }
  };

  const getStatusLabel = (status: string): string => {
    switch (status) {
      case 'completed':
        return '✓ Completed';
      case 'in-progress':
        return '⚡ In Progress';
      case 'planned':
        return '📋 Planned';
      default:
        return status;
    }
  };

  return (
    <div className="projects-section">
      <div className="section-header">
        <h1>My Projects</h1>
        <p className="section-subtitle">Showcasing my development work and creative solutions</p>
      </div>

      <div className="projects-intro">
        <p>
          A showcase of projects that highlight my range as an engineer and creator. From frontend UI work and full-stack architecture to animation and interactive tools, each project demonstrates my approach to thoughtful, practical, and polished problem-solving.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`project-card ${selectedProject === project.id ? 'active' : ''}`}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className={`project-status ${getStatusColor(project.status)}`}>
                {getStatusLabel(project.status)}
              </span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            {selectedProject === project.id && (
              <div className="project-details">
                <div className="features-section">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-links">
                  {project.demo && (
                    <button className="project-link demo">
                      {project.demo.includes('http') ? '🌐 View Demo' : project.demo}
                    </button>
                  )}
                  {project.github && (
                    <button 
                      className="project-link github"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                    >
                      📁 View Code
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="featured-tool">
        <h3>🐱 Cat Age Calculator</h3>
        <p>A fun little tool I made out of boredom to calculate my cat ages (also so I don't forget!).</p>
        
        <div className="cat-selector">
          {cats.map((cat, index) => (
            <button
              key={index}
              className={`cat-button ${selectedCat === index ? 'active' : ''}`}
              onClick={() => setSelectedCat(index)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        <div className="cat-age-display">
          <div className="cat-info">
            <h4>{cats[selectedCat].name}</h4>
            <p>Born: {new Date(cats[selectedCat].birthDate).toLocaleDateString()}</p>
            <div className="age-result">
              <span className="age-number">{calculateCatAge(cats[selectedCat].birthDate)}</span>
              <span className="age-label">years old</span>
            </div>
            <p className="cat-description">
              {selectedCat === 0 
                ? "Butters is the sleepy coworker who always naps during meetings." 
                : "Margie is very social and loves to say hi once in a while I'm on calls, you may meet her one day!"
              }
            </p>
          </div>
        </div>
      </div>

      <div className="projects-cta">
        <h3>Interested in Collaborating?</h3>
        <p>I'm always excited to work on new projects and tackle interesting challenges!</p>
        <div className="cta-buttons">
          <button 
            className="cta-button primary"
            onClick={() => onSectionChange('recruiters')}
          >
            Let's Work Together
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => onSectionChange('skillset')}
          >
            View My Skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;