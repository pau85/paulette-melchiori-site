import React from 'react';
import { BannerSlideProps } from '../../types';

interface WelcomeBannerProps extends BannerSlideProps {}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ isActive }) => {
  return (
    <div className={`banner-slide ${isActive ? 'active' : ''}`}>
      <div className="welcome-container">
        <img 
          src="/images/homepage/butters-side-full.png" 
          alt="Butters the cat" 
          className="banner-image slide-left"
        />
        <div className="banner-text slide-right">
          <h2>Welcome to My Portfolio</h2>
          <p>Hello! I'm Paulette Melchiori. Navigate through the menu to learn more about me, my skills, projects, and interests.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;