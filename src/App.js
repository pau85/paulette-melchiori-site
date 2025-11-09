import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    'React-Redux',
    'TypeScript', 
    'Node.js',
    'HTML5',
    'CSS',
    'SCSS',
    'JavaScript',
    'Markdown',
    'RESTful Web Services',
    'RESTful APIs',
    'Docker',
    'Java',
    'C#'
  ];

  const skillExperience = {
    'React-Redux': {
      experience: '2+ years in React, 1 year in Redux',
      description: 'I have over 2 years of experience with React and one year specifically with Redux. All of my experience was gained at Northwestern Mutual and Certco working on SPA (Single Page Application) projects. For Redux specifically, I used it in a front-end Digital Application for new business insurance policy applications, managing complex state for multi-step forms and real-time data validation.'
    },
    'TypeScript': {
      experience: '1+ years',
      description: 'Used TypeScript extensively in enterprise applications to add type safety and improve code maintainability. Experience includes defining interfaces, generics, and working with strongly-typed React components.'
    },
    'Node.js': {
      experience: '1+ years',
      description: 'Built RESTful APIs and server-side applications using Node.js. Experience includes working with Express.js, middleware implementation, and integrating with databases.'
    },
    'HTML5': {
      experience: '3+ years',
      description: 'Strong foundation in semantic HTML5, accessibility best practices, and modern web standards. Experience from college coursework at UW-Whitewater and professional development.'
    },
    'CSS': {
      experience: '3+ years',
      description: 'Proficient in CSS including Flexbox, Grid, animations, and responsive design principles. Experience styling complex user interfaces and maintaining consistent design systems.'
    },
    'SCSS': {
      experience: '2+ years',
      description: 'Used SCSS for organizing stylesheets with variables, mixins, and nested rules. Helped maintain scalable CSS architecture in larger projects.'
    },
    'JavaScript': {
      experience: '3+ years',
      description: 'Strong JavaScript fundamentals including ES6+ features, asynchronous programming, DOM manipulation, and modern JavaScript patterns. Foundation from college and expanded through professional work.'
    },
    'Markdown': {
      experience: '2+ years',
      description: 'Used Markdown for documentation, README files, and content creation. Experience includes GitHub-flavored markdown and static site generation.'
    },
    'RESTful Web Services': {
      experience: '1+ years',
      description: 'Experience consuming and designing RESTful web services, understanding HTTP methods, status codes, and API design principles.'
    },
    'RESTful APIs': {
      experience: '1+ years',
      description: 'Built and consumed RESTful APIs, implementing proper endpoint design, error handling, and authentication patterns.'
    },
    'Docker': {
      experience: '1+ years',
      description: 'Experience with containerization using Docker for development environments and application deployment. Understanding of Docker images, containers, and basic orchestration.'
    },
    'Java': {
      experience: '2+ years',
      description: 'Previous experience with Java programming including object-oriented principles, data structures, and enterprise application development.'
    },
    'C#': {
      experience: '1+ years',
      description: 'Experience with C# development including .NET framework applications and understanding of object-oriented programming concepts.'
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div>
            <h2>About Me</h2>
            <p>Hello! I'm Paulette Melchiori and I built this website in using the Jekyll framework. I started this website in May of 2024 which was roughly 5 months into switching tech stacks from Mainframe to Web Development with React-Redux, Node and TypeScript. While I had taken many courses in Web Development in college at UW-Whitewater, I still had a lot to catch back up on. It was a happy return, and ever since I have been exploring more and more frameworks and tools to use while developing.</p>
            
            <p>Also I have a passion for animation, programming and writing. In my experience to stay on top of tech, it requires a routine of study and project work outside of work. I really enjoy combining my hobby of animation with programming as a combined hobby. It gives me a chance to try out some new tech and also make it really fun with animation and art.</p>
            
            <p>Feel free to leave comments or feedback on any of my projects listed. I am always open to learning new things and appreciate any constructive feedback given.</p>
            
            <p>When I'm not coding, watching/creating animations, or writing, I'm a proud mom of 2 geriatric cats, Butters (14) and Margie (13) and have a wonderful husband, Aaron. Aaron and I love to go to concerts, camp and travel across the country when we aren't hanging out with our cats watching tv shows.</p>
            
            <p>So, whether you're here for the tech insights, the animation discussions or the occasional cat story, welcome!</p>
          </div>
        );
      case 'skillset':
        return (
          <div>
            <h2>Skillset</h2>
            <p>Here are the technologies and tools I work with. Click on any skill to see my experience:</p>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`skill-tag ${selectedSkill === skill ? 'selected' : ''}`}
                  onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
            {selectedSkill && skillExperience[selectedSkill] && (
              <div className="skill-details">
                <h3>{selectedSkill}</h3>
                <div className="experience-badge">
                  {skillExperience[selectedSkill].experience}
                </div>
                <p>{skillExperience[selectedSkill].description}</p>
                <div className="related-projects">
                  <h4>Related Projects</h4>
                  <button 
                    className="projects-link"
                    onClick={() => setActiveSection('projects')}
                  >
                    View Projects Using {selectedSkill} →
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      case 'projects':
        return (
          <div>
            <h2>Projects</h2>
            <p>Check out some of the projects I've worked on.</p>
          </div>
        );
      case 'hobbies':
        return (
          <div>
            <h2>Hobbies</h2>
            <p>Learn about my interests and activities outside of work.</p>
          </div>
        );
      default:
        return (
          <div>
            <h2>Welcome to My Portfolio</h2>
            <p>Hello! I'm Paulette Melchiori. Navigate through the menu to learn more about me.</p>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h1>Paulette Melchiori</h1>
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
        </ul>
      </nav>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
