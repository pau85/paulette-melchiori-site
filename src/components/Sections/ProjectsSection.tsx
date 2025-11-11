import React, { useState } from 'react';
import './ProjectsSection.css';
import { Section, Cat } from '../../types';

interface ProjectsSectionProps {
  onSectionChange: (section: Section) => void;
  cats: Cat[];
  calculateCatAge: (birthDate: string) => number;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  demo?: string;
  github?: string;
  image?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  onSectionChange, 
  cats, 
  calculateCatAge 
}) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedCat, setSelectedCat] = useState<number>(0);

  const projects: Project[] = [
    {
      id: 'portfolio',
      title: 'Interactive Portfolio Website',
      description: 'This very website you\'re viewing! A modern, responsive portfolio built with React and TypeScript featuring animated banners, theme switching, and modular architecture.',
      technologies: ['React', 'TypeScript', 'CSS3', 'EmailJS', 'reCAPTCHA'],
      features: [
        'Animated banner system with hover-to-pause functionality',
        'Six custom color themes with real-time switching',
        'Modular TypeScript architecture for maintainability',
        'Interactive skill cards with detailed experience information',
        'Email integration for resume requests with reCAPTCHA security',
        'Fully responsive design optimized for all devices'
      ],
      status: 'completed',
      demo: 'You\'re looking at it!',
      github: 'https://github.com/pau85/paulette-melchiori-site'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Admin Dashboard',
      description: 'A comprehensive admin panel for managing products, orders, and customer data with real-time analytics and inventory management.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Chart.js'],
      features: [
        'Real-time sales and inventory analytics',
        'Product management with image uploads',
        'Order tracking and status management',
        'Customer data visualization and reporting',
        'Role-based authentication and permissions',
        'Automated email notifications for order updates'
      ],
      status: 'completed',
      image: '/images/projects/ecommerce-dashboard.jpg'
    },
    {
      id: 'weather',
      title: 'Weather Forecast Application',
      description: 'A sleek weather app with geolocation support, detailed forecasts, and beautiful weather animations.',
      technologies: ['React', 'Weather API', 'Geolocation', 'CSS Animations'],
      features: [
        'Real-time weather data from multiple sources',
        'Geolocation-based automatic location detection',
        'Detailed 7-day forecast with hourly breakdowns',
        'Animated weather icons and background effects',
        'Favorite locations with quick switching',
        'Weather alerts and notification system'
      ],
      status: 'completed',
      demo: 'https://weather-app-demo.netlify.app',
      image: '/images/projects/weather-app.jpg'
    },
    {
      id: 'task-manager',
      title: 'Collaborative Task Manager',
      description: 'A team-focused task management application with real-time collaboration, file sharing, and project tracking.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      features: [
        'Real-time collaborative editing and updates',
        'Project organization with team member assignments',
        'File upload and sharing within tasks',
        'Deadline tracking with automated reminders',
        'Progress visualization with charts and metrics',
        'Integration with popular calendar applications'
      ],
      status: 'in-progress',
      image: '/images/projects/task-manager.jpg'
    }
  ];

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
          Here's a collection of projects that demonstrate my technical skills and problem-solving approach. 
          Each project represents a different aspect of my development expertise, from frontend design to 
          full-stack architecture.
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
        <p>A fun little tool to calculate cat ages! Meet my furry coding companions:</p>
        
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
                ? "Butters is my coding buddy who loves to sit on my keyboard and 'help' with debugging!" 
                : "Margie is the supervisor who makes sure I take proper breaks and stay hydrated!"
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