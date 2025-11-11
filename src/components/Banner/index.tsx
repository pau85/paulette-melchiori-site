import React, { useEffect, useState } from 'react';
import { Section } from '../../types';
import WelcomeBanner from './WelcomeBanner';
import CTABanner from './CTABanner';
import SkillsetBanner from './SkillsetBanner';

interface BannerProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Banner: React.FC<BannerProps> = ({ activeSection, onSectionChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (activeSection === 'home' && !isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % 3);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [activeSection, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="home-section">
      <div 
        className="banner-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <WelcomeBanner 
          isActive={currentSlide === 0} 
          onSectionChange={onSectionChange}
        />
        <CTABanner 
          isActive={currentSlide === 1} 
          onSectionChange={onSectionChange}
        />
        <SkillsetBanner 
          isActive={currentSlide === 2} 
          onSectionChange={onSectionChange}
        />
      </div>
    </div>
  );
};

export default Banner;