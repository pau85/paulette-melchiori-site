import React from 'react';
import { BannerSlideProps } from '../../types';

interface CTABannerProps extends BannerSlideProps {}

const CTABanner: React.FC<CTABannerProps> = ({ isActive, onSectionChange }) => {
  return (
    <div className={`banner-slide ${isActive ? 'active' : ''}`}>
      <div className="cta-banner">
        <h2>Discover my journey, skills, and passion for technology!</h2>
        <button 
          className="cta-button"
          onClick={() => onSectionChange('about')}
        >
          Learn More About Me
        </button>
      </div>
    </div>
  );
};

export default CTABanner;