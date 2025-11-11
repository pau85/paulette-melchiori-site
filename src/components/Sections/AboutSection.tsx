import React from 'react';
import './AboutSection.css';
import { Section } from '../../types';

interface AboutSectionProps {
  onSectionChange: (section: Section) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onSectionChange }) => {
  return (
    <div className="about-section">
      <div className="section-header">
        <h1>About Me</h1>
        <p className="section-subtitle">Get to know Paulette Melchiori</p>
      </div>
      
      <div className="about-content">
        <div className="about-intro">
          <h2>Hello! I'm Paulette</h2>
          <p>
            I'm a passionate developer with a love for creating beautiful, functional web applications. 
            My journey in technology has been driven by curiosity and a desire to solve real-world problems 
            through innovative solutions.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-section">
            <h3>🚀 My Journey</h3>
            <p>
              I started my career working with mainframe systems and have evolved into modern web development. 
              This unique background gives me a solid foundation in system architecture and data management, 
              combined with cutting-edge frontend technologies.
            </p>
          </div>

          <div className="detail-section">
            <h3>💻 What I Do</h3>
            <p>
              I specialize in full-stack web development, with a particular passion for React and TypeScript. 
              I enjoy creating user-friendly interfaces that not only look great but also provide exceptional 
              user experiences. My background in SQL and database design helps me build robust, scalable applications.
            </p>
          </div>

          <div className="detail-section">
            <h3>🎯 My Approach</h3>
            <p>
              I believe in writing clean, maintainable code and following best practices. Whether it's 
              implementing responsive designs, optimizing performance, or ensuring accessibility, 
              I strive for excellence in every project I work on.
            </p>
          </div>

          <div className="detail-section">
            <h3>🌟 Beyond Code</h3>
            <p>
              When I'm not coding, you'll find me working on sewing projects, spending time with my cats 
              Butters and Margie, or exploring new technologies. I believe that diverse interests make 
              me a more creative and well-rounded developer.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <h3>Let's Connect!</h3>
          <p>
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together or just chat about technology!
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-button primary"
              onClick={() => onSectionChange('skillset')}
            >
              View My Skills
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => onSectionChange('projects')}
            >
              See My Projects
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => onSectionChange('recruiters')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;