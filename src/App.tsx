import React, { useState } from 'react';
import './App.css';
import { Section, Skill, Cat, SewingProject } from './types';
import { useTheme, themes } from './hooks/useTheme';
import Banner from './components/Banner';
import { AboutSection, SkillsetSection, ProjectsSection, HobbiesSection, RecruitersSection, BlogSection } from './components/Sections';
import skillsData from './data/skills.json';
import sewingProjectsData from './data/sewingProjects.json';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const { currentTheme, changeTheme } = useTheme('light');

  const skills: Record<string, Skill> = skillsData;

  const sewingProjects: SewingProject[] = sewingProjectsData;

  const calculateCatAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const cats: Cat[] = [
    { name: 'Butters', birthDate: '2010-04-01' },
    { name: 'Margie', birthDate: '2011-02-23' }
  ];

  const renderContent = (): React.ReactNode => {
    if (activeSection === 'home') {
      return (
        <Banner 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      );
    }
    
    if (activeSection === 'about') {
      return (
        <AboutSection 
          onSectionChange={setActiveSection}
        />
      );
    }
    
    if (activeSection === 'skillset') {
      return (
        <SkillsetSection 
          onSectionChange={setActiveSection}
          skills={skills}
        />
      );
    }
    
    if (activeSection === 'projects') {
      return (
        <ProjectsSection 
          onSectionChange={setActiveSection}
          cats={cats}
          calculateCatAge={calculateCatAge}
        />
      );
    }
    
    if (activeSection === 'hobbies') {
      return (
        <HobbiesSection 
          onSectionChange={setActiveSection}
          sewingProjects={sewingProjects}
        />
      );
    }
    
    // if (activeSection === 'recruiters') {
    //   return (
    //     <RecruitersSection 
    //       onSectionChange={setActiveSection}
    //     />
    //   );
    // }
    
    if (activeSection === 'blog') {
      return (
        <BlogSection 
          onSectionChange={setActiveSection}
        />
      );
    }
    
    // All sections are now implemented!
    return (
      <div>
        <h2>Section Not Found</h2>
        <p>The requested section could not be found.</p>
        <button onClick={() => setActiveSection('home')}>Return to Home</button>
      </div>
    );
  };

  return (
    <div className="App" data-theme={currentTheme} style={{
      '--primary-color': themes[currentTheme].primary,
      '--secondary-color': themes[currentTheme].secondary,
      '--accent-color': themes[currentTheme].accent,
      '--success-color': themes[currentTheme].success,
      '--warning-color': themes[currentTheme].warning,
      '--background-color': themes[currentTheme].background,
      '--surface-color': themes[currentTheme].surface,
      '--text-color': themes[currentTheme].text,
      '--text-secondary-color': themes[currentTheme].textSecondary,
      '--border-color': themes[currentTheme].border,
      '--sidebar-bg-color': themes[currentTheme].sidebarBg,
      '--sidebar-text-color': themes[currentTheme].sidebarText
    } as React.CSSProperties}>
      <nav className="sidebar">
        <div className="sidebar-header">
          <h1>Paulette Melchiori</h1>
          <div className="theme-selector">
            <label htmlFor="theme-select">🎨</label>
            <select 
              id="theme-select"
              value={currentTheme} 
              onChange={(e) => changeTheme(e.target.value)}
              className="theme-dropdown"
            >
              {Object.entries(themes).map(([key, theme]) => (
                <option key={key} value={key}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setActiveSection('about')}
            >
              About Me
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'skillset' ? 'active' : ''}
              onClick={() => setActiveSection('skillset')}
            >
              Skillset
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'hobbies' ? 'active' : ''}
              onClick={() => setActiveSection('hobbies')}
            >
              Hobbies
            </button>
          </li>
          {/* <li>
            <button 
              className={activeSection === 'recruiters' ? 'active' : ''}
              onClick={() => setActiveSection('recruiters')}
            >
              Recruiters 👋
            </button>
          </li> */}
          <li>
            <button 
              className={activeSection === 'blog' ? 'active' : ''}
              onClick={() => setActiveSection('blog')}
            >
              My Blog
            </button>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;