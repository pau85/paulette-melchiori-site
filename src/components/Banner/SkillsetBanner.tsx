import React from 'react';
import { BannerSlideProps } from '../../types';

interface SkillsetBannerProps extends BannerSlideProps {}

const SkillsetBanner: React.FC<SkillsetBannerProps> = ({ isActive, onSectionChange }) => {
  const skills = [
    { icon: '⚛️', name: 'React' },
    { icon: '🟨', name: 'JavaScript' },
    { icon: '🔷', name: 'TypeScript' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '💾', name: 'SQL' },
    { icon: '🎨', name: 'CSS' },
  ];

  return (
    <div className={`banner-slide ${isActive ? 'active' : ''}`}>
      <div className="skillset-banner">
        <h2>My Tech Arsenal</h2>
        <div className="skills-preview">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
        <p>Explore my technical skills and experience</p>
        <button 
          className="skillset-button"
          onClick={() => onSectionChange('skillset')}
        >
          View My Skills
        </button>
      </div>
    </div>
  );
};

export default SkillsetBanner;