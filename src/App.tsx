import React, { useState } from 'react';
import './App.css';
import { Section, Skill, Cat } from './types';
import { useTheme, themes } from './hooks/useTheme';
import Banner from './components/Banner';
import { AboutSection, SkillsetSection, ProjectsSection, HobbiesSection, RecruitersSection, BlogSection } from './components/Sections';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const { currentTheme, changeTheme } = useTheme('light');

  const skills: Record<string, Skill> = {
    'React': {
      name: 'React',
      level: 'Advanced',
      experience: [
        'Built multiple production applications using React hooks and functional components',
        'Experienced with React Router for client-side routing',
        'Proficient in state management using Context API and Redux',
        'Implemented responsive designs with React and CSS Grid/Flexbox',
        'Created reusable component libraries and design systems'
      ],
      projects: [
        'Portfolio Website - This interactive site showcasing my skills and projects',
        'E-commerce Dashboard - Admin panel for managing products and orders',
        'Weather App - Real-time weather application with geolocation'
      ]
    },
    'JavaScript': {
      name: 'JavaScript',
      level: 'Advanced',
      experience: [
        'Over 3 years of experience writing modern JavaScript (ES6+)',
        'Proficient in asynchronous programming with Promises and async/await',
        'Experience with DOM manipulation and event handling',
        'Knowledge of JavaScript design patterns and best practices',
        'Familiar with testing frameworks like Jest and testing methodologies'
      ]
    },
    'TypeScript': {
      name: 'TypeScript',
      level: 'Intermediate',
      experience: [
        'Converting JavaScript projects to TypeScript for better type safety',
        'Creating custom type definitions and interfaces',
        'Working with generic types and advanced TypeScript features',
        'Integrating TypeScript with React and Node.js projects'
      ]
    },
    'Node.js': {
      name: 'Node.js',
      level: 'Intermediate',
      experience: [
        'Building RESTful APIs with Express.js',
        'Database integration with MongoDB and PostgreSQL',
        'Authentication and authorization implementation',
        'File system operations and server-side scripting',
        'Package management and dependency handling with npm'
      ]
    },
    'SQL': {
      name: 'SQL',
      level: 'Advanced',
      experience: [
        '5+ years of experience with relational databases',
        'Complex query optimization and performance tuning',
        'Database design and normalization',
        'Stored procedures and trigger development',
        'Data migration and ETL processes from mainframe systems'
      ]
    },
    'CSS': {
      name: 'CSS',
      level: 'Advanced',
      experience: [
        'Modern CSS features including Grid, Flexbox, and Custom Properties',
        'Responsive design principles and mobile-first development',
        'CSS animations and transitions',
        'Preprocessors like Sass and styling methodologies',
        'Cross-browser compatibility and accessibility considerations'
      ]
    }
  };

  const sewingProjects: string[] = [
    'puff-quilt-1.png', 'puff-quilt-2.png', 'puff-quilt-3.png', 
    'bag-1.png', 'bag-2.png', 'bag-3.png',
    'basket-1.png', 'basket-2.png',
    'misc-2.png', 'misc-3.png',
    'project-1.png'
  ];

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
    { name: 'Butters', birthDate: '2008-08-15' },
    { name: 'Margie', birthDate: '2009-03-20' }
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
    
    if (activeSection === 'recruiters') {
      return (
        <RecruitersSection 
          onSectionChange={setActiveSection}
        />
      );
    }
    
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
          <li>
            <button 
              className={activeSection === 'recruiters' ? 'active' : ''}
              onClick={() => setActiveSection('recruiters')}
            >
              Recruiters 👋
            </button>
          </li>
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