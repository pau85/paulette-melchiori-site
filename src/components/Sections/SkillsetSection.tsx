import React, { useState } from 'react';
import './SkillsetSection.css';
import { Section, Skill } from '../../types';

interface SkillsetSectionProps {
  onSectionChange: (section: Section) => void;
  skills: Record<string, Skill>;
}

const SkillsetSection: React.FC<SkillsetSectionProps> = ({ onSectionChange, skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (skillName: string): void => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  const getSkillLevelClass = (level: string): string => {
    return `skill-level ${level.toLowerCase()}`;
  };

  return (
    <div className="skillset-section">
      <div className="section-header">
        <h1>My Skillset</h1>
        <p className="section-subtitle">Technologies I work with and love</p>
      </div>

      <div className="skills-intro">
        <p>
          Click on any skill below to see detailed experience, projects, and expertise level. 
          My technical journey spans from traditional mainframe systems to modern web technologies.
        </p>
      </div>

      <div className="skills-grid">
        {Object.entries(skills).map(([skillName, skill]) => (
          <div 
            key={skillName}
            className={`skill-card ${selectedSkill === skillName ? 'active' : ''}`}
            onClick={() => handleSkillClick(skillName)}
          >
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span className={getSkillLevelClass(skill.level)}>
                {skill.level}
              </span>
            </div>
            
            {selectedSkill === skillName && (
              <div className="skill-details">
                <div className="experience-section">
                  <h4>Experience & Expertise</h4>
                  <ul>
                    {skill.experience.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>
                
                {skill.projects && skill.projects.length > 0 && (
                  <div className="projects-section">
                    <h4>Notable Projects</h4>
                    <ul>
                      {skill.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="skillset-summary">
        <div className="summary-card">
          <h3>🚀 Always Learning</h3>
          <p>
            Technology evolves rapidly, and I'm committed to staying current with the latest 
            trends and best practices. I regularly explore new frameworks, tools, and methodologies 
            to enhance my development skills.
          </p>
        </div>
        
        <div className="summary-card">
          <h3>🔧 Full-Stack Focus</h3>
          <p>
            My expertise spans both frontend and backend development, allowing me to build 
            complete applications from user interface design to database architecture and everything in between.
          </p>
        </div>
        
        <div className="summary-card">
          <h3>📊 Data-Driven</h3>
          <p>
            With my strong background in SQL and database systems, I bring a data-centric 
            approach to application development, ensuring efficient data handling and optimal performance.
          </p>
        </div>
      </div>

      <div className="skillset-cta">
        <h3>See These Skills in Action</h3>
        <p>Ready to explore my projects and see how I apply these technologies?</p>
        <div className="cta-buttons">
          <button 
            className="cta-button primary"
            onClick={() => onSectionChange('projects')}
          >
            View My Projects
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => onSectionChange('recruiters')}
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsetSection;