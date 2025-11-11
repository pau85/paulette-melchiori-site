import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';
import { emailConfig, createEmailTemplate, recaptchaConfig } from './emailConfig';
import ReCAPTCHA from 'react-google-recaptcha';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeForm, setResumeForm] = useState({ name: '', email: '' });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentBannerSlide, setCurrentBannerSlide] = useState(0);
  const [bannerPaused, setBannerPaused] = useState(false);
  const recaptchaRef = useRef();

  const themes = {
    light: {
      name: 'Light Mode',
      primary: '#2c3e50',
      secondary: '#3498db',
      accent: '#e74c3c',
      success: '#27ae60',
      warning: '#f39c12',
      background: '#f8f9fa',
      surface: '#ffffff',
      text: '#2c3e50',
      textSecondary: '#5a6c7d',
      border: '#e1e8ed',
      sidebarBg: '#2c3e50',
      sidebarText: '#ecf0f1'
    },
    dark: {
      name: 'Dark Mode',
      primary: '#ecf0f1',
      secondary: '#3498db',
      accent: '#e74c3c',
      success: '#27ae60',
      warning: '#f39c12',
      background: '#1a1a1a',
      surface: '#2d3748',
      text: '#e2e8f0',
      textSecondary: '#a0aec0',
      border: '#4a5568',
      sidebarBg: '#1a202c',
      sidebarText: '#e2e8f0'
    },
    ocean: {
      name: 'Ocean Breeze',
      primary: '#0f4c75',
      secondary: '#3282b8',
      accent: '#bbe1fa',
      success: '#0e9aa7',
      warning: '#f6cd61',
      background: '#e8f4f8',
      surface: '#ffffff',
      text: '#0f4c75',
      textSecondary: '#3282b8',
      border: '#bbe1fa',
      sidebarBg: '#0f4c75',
      sidebarText: '#bbe1fa'
    },
    sunset: {
      name: 'Sunset Glow',
      primary: '#8b2635',
      secondary: '#cd5c5c',
      accent: '#ffa07a',
      success: '#32cd32',
      warning: '#ffd700',
      background: '#fff5ee',
      surface: '#ffffff',
      text: '#8b2635',
      textSecondary: '#cd5c5c',
      border: '#ffa07a',
      sidebarBg: '#8b2635',
      sidebarText: '#fff5ee'
    },
    forest: {
      name: 'Forest Fresh',
      primary: '#2d5016',
      secondary: '#4a7c59',
      accent: '#7fb069',
      success: '#588157',
      warning: '#f2cc8f',
      background: '#f7f8f3',
      surface: '#ffffff',
      text: '#2d5016',
      textSecondary: '#4a7c59',
      border: '#7fb069',
      sidebarBg: '#2d5016',
      sidebarText: '#f7f8f3'
    },
    purple: {
      name: 'Purple Dreams',
      primary: '#4a148c',
      secondary: '#7b1fa2',
      accent: '#ba68c8',
      success: '#66bb6a',
      warning: '#ffb74d',
      background: '#f3e5f5',
      surface: '#ffffff',
      text: '#4a148c',
      textSecondary: '#7b1fa2',
      border: '#ba68c8',
      sidebarBg: '#4a148c',
      sidebarText: '#f3e5f5'
    }
  };

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

  const handleResumeRequest = () => {
    setShowResumeModal(true);
    setCaptchaValue(null); // Reset CAPTCHA when opening modal
  };

  const handleResumeFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!resumeForm.name.trim() || !resumeForm.email.trim()) {
      alert('Please fill in both name and email fields.');
      return;
    }
    
    // Validate CAPTCHA
    if (!captchaValue) {
      alert('Please complete the CAPTCHA verification.');
      return;
    }
    
    try {
      // Create email template with form data
      const templateParams = createEmailTemplate(resumeForm.name, resumeForm.email);
      
      // Send email notification using EmailJS
      await emailjs.send(
        emailConfig.serviceID, 
        emailConfig.templateID, 
        templateParams, 
        emailConfig.publicKey
      );
      
      // Show success message
      alert(`Thank you ${resumeForm.name}! Your resume download will begin shortly. I've also been notified of your interest.`);
      
      // Reset form, CAPTCHA, and close modal
      setResumeForm({ name: '', email: '' });
      setCaptchaValue(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setShowResumeModal(false);
      
      // Trigger resume download
      window.open('/resume.pdf', '_blank');
      
    } catch (error) {
      console.error('Failed to send email notification:', error);
      // Still allow download even if email fails
      alert(`Thank you ${resumeForm.name}! Your resume download will begin shortly.`);
      setResumeForm({ name: '', email: '' });
      setCaptchaValue(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setShowResumeModal(false);
      window.open('/resume.pdf', '_blank');
    }
  };

  const handleFormInputChange = (field, value) => {
    setResumeForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // Banner animation effect
  useEffect(() => {
    if (activeSection === 'home' && !bannerPaused) {
      const bannerInterval = setInterval(() => {
        setCurrentBannerSlide(prev => (prev + 1) % 3); // Cycle through 0, 1, 2
      }, 6000); // Switch every 6 seconds

      return () => clearInterval(bannerInterval);
    }
  }, [activeSection, bannerPaused]);

  const calculateCatAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const buttersCatAge = calculateCatAge('2010-04-01');
  const margieCatAge = calculateCatAge('2011-02-23');

  // Sewing project images - add your image filenames here
  const sewingProjects = [
    'IMG_5582.png',
    'IMG_6641.png',
    'IMG_6642.png',
    'IMG_6896.png',
    'IMG_6905.png',
    'IMG_6907.png',
    'IMG_6908.png',
    'IMG_6910.png',
    'IMG_6923.png',
    'IMG_6924.png',
    'IMG_7071.png',
    'IMG_7072.png',
    'IMG_7073.png',
    'IMG_7183.png'
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div>
            <h2>About Me</h2>
            <p>Hello! I'm Paulette Melchiori and I built this website in using the Jekyll framework. I started this website in May of 2024 which was roughly 5 months into switching tech stacks from Mainframe to Web Development with React-Redux, Node and TypeScript. While I had taken many courses in Web Development in college at UW-Whitewater, I still had a lot to catch back up on. It was a happy return, and ever since I have been exploring more and more frameworks and tools to use while developing.</p>
            
            <p>Also I have a passion for animation, programming and writing. In my experience to stay on top of tech, it requires a routine of study and project work outside of work. I really enjoy combining my hobby of animation with programming as a combined hobby. It gives me a chance to try out some new tech and also make it really fun with animation and art.</p>
            
            <p>Feel free to leave comments or feedback on any of my projects listed. I am always open to learning new things and appreciate any constructive feedback given.</p>
            
            <p>When I'm not coding, watching/creating animations, or writing, I'm a proud mom of 2 geriatric cats, Butters ({buttersCatAge}) and Margie ({margieCatAge}) and have a wonderful husband, Aaron. Aaron and I love to go to concerts, camp and travel across the country when we aren't hanging out with our cats watching tv shows.</p>
            
            <p>So, whether you're here for the tech insights, the animation discussions, looking to employ me or the occasional cat story, welcome!</p>
            
            <div className="professional-info">
              <h3>Professional Information</h3>
              
              <div className="info-section">
                <h4>Work History</h4>
                <div className="work-experience">
                  <div className="job">
                    <div className="job-header">
                      <span className="company">Northwestern Mutual</span>
                      <span className="duration">July 2018 - January 2025</span>
                    </div>
                    <div className="role">Software Developer</div>
                    <p>Worked on SPA (Single Page Application) projects using React and Redux for front-end development.</p>
                  </div>
                  
                  <div className="job">
                    <div className="job-header">
                      <span className="company">Certco</span>
                      <span className="duration">February 2025 - October 2025</span>
                    </div>
                    <div className="role">Software Developer</div>
                    <p>Developing Digital Applications for new business insurance policy applications using React-Redux and TypeScript.</p>
                  </div>
                </div>
              </div>
              
              <div className="info-section">
                <h4>Education</h4>
                <div className="education">
                  <div className="degree">
                    <span className="school">University of Wisconsin-Whitewater</span>
                    <div className="program">Web Development Coursework</div>
                  </div>
                </div>
              </div>
              
              <div className="info-section">
                <h4>Connect With Me</h4>
                <div className="contact-links">
                  <a 
                    href="https://linkedin.com/in/paulette-melchiori" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link linkedin"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
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
            
            <div className="cat-ages">
              <h4>🎨 Featured Projects</h4>
              <div className="cat-info">
                <div className="cat">
                  <span className="cat-name">Portfolio Website</span>
                  <span className="cat-details">React • CSS • EmailJS • Built: 2024 • Status: Live</span>
                </div>
                <div className="cat">
                  <span className="cat-name">Animation Projects</span>
                  <span className="cat-details">Creative Coding • Animation • Built: Ongoing • Status: In Progress</span>
                </div>
                <div className="cat">
                  <span className="cat-name">SPA Applications</span>
                  <span className="cat-details">React-Redux • TypeScript • Built: 2022-2024 • Status: Enterprise</span>
                </div>
                <div className="total-age">
                  <strong>🚀 More projects coming soon! Check back for updates.</strong>
                </div>
              </div>
            </div>
            
            <div className="cat-ages">
              <h4>🐱 Cat Age Calculator (Fun Project!)</h4>
              <div className="cat-info">
                <div className="cat">
                  <span className="cat-name">Butters</span>
                  <span className="cat-details">Born: April 1, 2010 • Age: {buttersCatAge} years</span>
                </div>
                <div className="cat">
                  <span className="cat-name">Margie</span>
                  <span className="cat-details">Born: February 23, 2011 • Age: {margieCatAge} years</span>
                </div>
                <div className="total-age">
                  <strong>Combined Age: {buttersCatAge + margieCatAge} years of cat wisdom!</strong>
                  <br />
                  <em style={{fontSize: '0.9rem', fontWeight: 'normal'}}>
                    (This logic was used in my About Me section to always have my cats' current ages)
                  </em>
                </div>
              </div>
            </div>
          </div>
        );
      case 'hobbies':
        return (
          <div>
            <h2>Hobbies</h2>
            <p>Learn about my interests and activities outside of work.</p>
            
            <div className="hobby-section">
              <h3>🧵 Sewing & Crafting</h3>
              <p>One of my favorite hobbies is sewing! I love creating everything from puff quilts to bags and baskets. Here's a gallery of some of my projects:</p>
              
              <div className="sewing-gallery">
                {sewingProjects.length > 0 ? (
                  sewingProjects.map((project, index) => (
                    <div key={index} className="gallery-item">
                      <img 
                        src={`/images/sewing/${project}`} 
                        alt={`Sewing project ${index + 1}`}
                        className="sewing-image"
                      />
                    </div>
                  ))
                ) : (
                  <div className="gallery-placeholder">
                    <div className="placeholder-item">
                      <span>🧵</span>
                      <p>Sewing project photos coming soon!</p>
                    </div>
                    <div className="placeholder-item">
                      <span>✂️</span>
                      <p>Add your images to /public/images/sewing/</p>
                    </div>
                    <div className="placeholder-item">
                      <span>🎨</span>
                      <p>Update the sewingProjects array in App.js</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="hobby-section">
              <h3>🎨 Animation & Creative Coding</h3>
              <p>I love combining my programming skills with creative expression through animation and interactive art projects.</p>
            </div>
            
            <div className="hobby-section">
              <h3>✍️ Writing</h3>
              <p>Writing helps me express ideas and document my learning journey in tech and life.</p>
            </div>
          </div>
        );
      case 'recruiters':
        return (
          <div>
            <h2>For Recruiters</h2>
            <p>Thank you for your interest in my profile! Here's everything you need to know about my background and how to connect with me.</p>
            
            <div className="professional-info">
              <h3>Quick Overview</h3>
              
              <div className="info-section">
                <h4>Current Status</h4>
                <div className="status-info">
                  <div className="status-item">
                    <span className="label">🏢 Current Role:</span>
                    <span className="value">Software Developer at Certco</span>
                  </div>
                  <div className="status-item">
                    <span className="label">📅 Experience:</span>
                    <span className="value">2+ years in React/Redux, 1+ year TypeScript</span>
                  </div>
                  <div className="status-item">
                    <span className="label">📍 Location:</span>
                    <span className="value">Available for remote or hybrid opportunities</span>
                  </div>
                  <div className="status-item">
                    <span className="label">💼 Availability:</span>
                    <span className="value">Open to new opportunities</span>
                  </div>
                </div>
              </div>
              
              <div className="info-section">
                <h4>Key Technical Skills</h4>
                <div className="skills-summary">
                  <div className="skill-category">
                    <strong>Frontend:</strong> React, Redux, TypeScript, JavaScript, HTML5, CSS, SCSS
                  </div>
                  <div className="skill-category">
                    <strong>Backend:</strong> Node.js, RESTful APIs, Docker
                  </div>
                  <div className="skill-category">
                    <strong>Other:</strong> Java, C#, Git, Agile methodologies
                  </div>
                </div>
              </div>
              
              <div className="info-section">
                <h4>Contact Information</h4>
                <div className="contact-methods">
                  <div className="contact-method">
                    <span className="contact-icon">📧</span>
                    <span>Email: Available upon request</span>
                  </div>
                  <div className="contact-method">
                    <span className="contact-icon">💼</span>
                    <a 
                      href="https://linkedin.com/in/paulette-melchiori" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-link"
                    >
                      LinkedIn: /in/paulette-melchiori
                    </a>
                  </div>
                  <div className="contact-method">
                    <span className="contact-icon">📄</span>
                    <button 
                      className="resume-button"
                      onClick={handleResumeRequest}
                    >
                      Request Full Resume
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="info-section">
                <h4>Why Consider Me?</h4>
                <ul className="strengths-list">
                  <li><strong>Career Transition Success:</strong> Successfully transitioned from Mainframe to modern web development</li>
                  <li><strong>Rapid Learning:</strong> Gained 2+ years React experience in enterprise environments</li>
                  <li><strong>Enterprise Experience:</strong> Worked at Northwestern Mutual and Certco on production applications</li>
                  <li><strong>Problem Solver:</strong> Built insurance policy applications with complex state management</li>
                  <li><strong>Continuous Learner:</strong> Actively studying new frameworks and technologies</li>
                  <li><strong>Creative Mindset:</strong> Combines technical skills with creative hobbies like animation</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'blog':
        return (
          <div>
            <h2>My Blog</h2>
            <p>Welcome to my blog! Here I share my thoughts on technology, learning experiences, and my journey in web development.</p>
            
            <div className="blog-posts">
              <div className="blog-post">
                <div className="post-header">
                  <h3 className="post-title">From Mainframe to Modern Web: My Career Transition</h3>
                  <div className="post-meta">
                    <span className="post-date">November 2024</span>
                    <span className="post-category">Career Journey</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>Making the leap from mainframe development to modern web technologies wasn't easy, but it's been one of the most rewarding decisions of my career...</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>

              <div className="blog-post">
                <div className="post-header">
                  <h3 className="post-title">Building This Portfolio: A Technical Deep Dive</h3>
                  <div className="post-meta">
                    <span className="post-date">November 2024</span>
                    <span className="post-category">Technical</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>Let me walk you through the technical decisions behind this portfolio site, from React components to EmailJS integration...</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>

              <div className="blog-post">
                <div className="post-header">
                  <h3 className="post-title">React State Management: When to Use Redux vs Context</h3>
                  <div className="post-meta">
                    <span className="post-date">October 2024</span>
                    <span className="post-category">React</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>After working with both Redux and React Context in enterprise applications, here's my take on when to use each...</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>

              <div className="blog-post">
                <div className="post-header">
                  <h3 className="post-title">Animation Meets Code: Creative Programming Projects</h3>
                  <div className="post-meta">
                    <span className="post-date">October 2024</span>
                    <span className="post-category">Creative Coding</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>Exploring the intersection of my two passions: programming and animation. Here are some fun projects that combine both...</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>

              <div className="blog-post">
                <div className="post-header">
                  <h3 className="post-title">TypeScript in Production: Lessons from Enterprise Development</h3>
                  <div className="post-meta">
                    <span className="post-date">September 2024</span>
                    <span className="post-category">TypeScript</span>
                  </div>
                </div>
                <div className="post-content">
                  <p>Real-world TypeScript tips and patterns I've learned while working on large-scale insurance applications...</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            </div>

            <div className="blog-cta">
              <h3>Want to Read More?</h3>
              <p>I'm always writing about new technologies and sharing my learning experiences. Connect with me to stay updated on new posts!</p>
              <div className="blog-actions">
                <a 
                  href="https://linkedin.com/in/paulette-melchiori" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link linkedin"
                >
                  Follow on LinkedIn
                </a>
                <button 
                  className="contact-link resume"
                  onClick={handleResumeRequest}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="home-section">
            <div 
              className="banner-container"
              onMouseEnter={() => setBannerPaused(true)}
              onMouseLeave={() => setBannerPaused(false)}
            >
              <div className={`banner-slide ${currentBannerSlide === 0 ? 'active' : ''}`}>
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
              <div className={`banner-slide ${currentBannerSlide === 1 ? 'active' : ''}`}>
                <div className="cta-banner">
                  <h2>Discover my journey, skills, and passion for technology!</h2>
                  <button 
                    className="cta-button"
                    onClick={() => setActiveSection('about')}
                  >
                    Learn More About Me
                  </button>
                </div>
              </div>
              <div className={`banner-slide ${currentBannerSlide === 2 ? 'active' : ''}`}>
                <div className="skillset-banner">
                  <h2>My Tech Arsenal</h2>
                  <div className="skills-preview">
                    <div className="skill-item">
                      <span className="skill-icon">⚛️</span>
                      <span className="skill-name">React</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🟨</span>
                      <span className="skill-name">JavaScript</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🔷</span>
                      <span className="skill-name">TypeScript</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🟢</span>
                      <span className="skill-name">Node.js</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">💾</span>
                      <span className="skill-name">SQL</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-icon">🎨</span>
                      <span className="skill-name">CSS</span>
                    </div>
                  </div>
                  <p>Explore my technical skills and experience</p>
                  <button 
                    className="skillset-button"
                    onClick={() => setActiveSection('skillset')}
                  >
                    View My Skills
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
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
    }}>
      <nav className="sidebar">
        <div className="sidebar-header">
          <h1>Paulette Melchiori</h1>
          <div className="theme-selector">
            <label htmlFor="theme-select">🎨</label>
            <select 
              id="theme-select"
              value={currentTheme} 
              onChange={(e) => setCurrentTheme(e.target.value)}
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
      
      {showResumeModal && (
        <div className="modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Request Resume</h3>
              <button 
                className="modal-close"
                onClick={() => setShowResumeModal(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleResumeFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={resumeForm.name}
                  onChange={(e) => handleFormInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={resumeForm.email}
                  onChange={(e) => handleFormInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label>Security Verification *</label>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaConfig.siteKey}
                  onChange={handleCaptchaChange}
                  theme="light"
                />
              </div>
              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => setShowResumeModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Download Resume
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
