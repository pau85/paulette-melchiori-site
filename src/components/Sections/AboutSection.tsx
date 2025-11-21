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
      </div>
      
      <div className="about-content">
        <div className="about-intro">
          <div className="intro-image">
            <img src="/images/me/paulette-chicago.jpg" alt="Paulette Melchiori" />
          </div>
          <div className="intro-text">
            <h2>Hello, I'm Paulette!</h2>
            <p>
              I'm a full stack software engineer with 7+ years of experience building scalable, user-focused applications from mainframe systems to modern .NET, React, and cloud platforms. My work blends modular design, automation, and clean architecture with a passion for creativity, whether through detailed logging systems or animated projects starring my cats. Driven by curiosity and continuous learning, I love exploring new tech and using it to solve real-world problems, beautifully and effectively.
            </p>
          </div>
        </div>

        <div className="detail-section">
          <h3>🚀 My Journey</h3>
          <p>
            I began my career in 2018 as a Risk Engineer at Northwestern Mutual, working deep in the mainframe world with PL/I, JCL, and SAS. Over time, I transitioned into modern web and cloud development, building and securing APIs, implementing automation, and leading modernization efforts. My work there spanned frontend React applications, backend .NET and Node.js APIs, and cloud services on AWS — all while enforcing engineering and security standards across legacy and modern systems.
          </p>
          <br/>
          <p>
            In 2025, I joined Certco as a Full Stack Web Developer, where I took ownership of customer portals, re-architected systems in .NET Core 8, and helped shape the future-state of the platform using both ASP.NET and React. I led cloud migration planning, integrated with Infor CloudSuite, and built automation tools in Python, Bash, and PowerShell.
          </p>
          <br/>
          <p>
            Across both roles, I've enjoyed diving into new tech stacks, solving infrastructure challenges, and designing maintainable systems. I'm now excited to grow further in automation, scalable architecture, and leadership.
          </p>
        </div>

        <div className="detail-section">
          <h3>💻 What I Do</h3>
          <p>
            I'm a Full Stack Software Engineer with a focus on building scalable, user-focused web applications and backend systems.
          </p>
          
          <ul>
            <li>
              <strong>Frontend Development</strong><br/>
              I create responsive, interactive UIs using React, Redux, and TypeScript. My work emphasizes modular design and user experience, often integrating REST and GraphQL APIs for seamless data flow. I also have recent experience in ASP.NET Frameworks 4.5.1 through 4.7.2 written in Visual Basic for web portal applications.
            </li>
            
            <li>
              <strong>Backend Engineering</strong><br/>
              I architect and develop RESTful APIs using .NET Core and C#, managing business logic, data access, and third-party integrations. I'm experienced with SQL Server and Postgres, optimizing performance with complex stored procedures and efficient data models.
            </li>
            
            <li>
              <strong>Cloud & DevOps</strong><br/>
              I work hands-on with AWS and Azure — deploying apps, configuring pipelines, validating pre-prod environments, and integrating tools like SonarQube and Checkmarx for quality and security automation.
            </li>
            
            <li>
              <strong>Legacy & Modern Systems</strong><br/>
              I've supported and modernized legacy systems in PL/I and JCL, and helped organizations transition toward cloud-native, API-first architectures.
            </li>
            
            <li>
              <strong>Automation & Tooling</strong><br/>
              I script in Python, Bash, and PowerShell to automate repetitive workflows, enhance developer productivity, and manage CI/CD processes.
            </li>
            
            <li>
              <strong>Team Collaboration & Leadership</strong><br/>
              I've led architecture planning, mentored junior engineers, coordinated contractor work, and served as the go-to engineer for critical systems and portal support.
            </li>
          </ul>
        </div>

        <div className="about-details">
          <div className="detail-section">
            <h3>🎯 My Approach</h3>
            <p>
              I believe that clean, maintainable code is the foundation of scalable software. I emphasize modular design with clear separation of concerns, enabling flexibility, easier maintenance, and long-term growth. My development approach focuses on writing reusable components, implementing best practices, and ensuring that every layer of the application—from UI to backend—is thoughtfully structured.
            </p>
            <br/>
            <p>
              I'm also a strong advocate for detailed and consistent logging. I've worked extensively with systems like ELK to configure robust logging pipelines that support effective debugging, monitoring, and observability in both development and production environments.
            </p>
            <p>
              Whether I'm designing responsive interfaces, optimizing performance, or building APIs, I strive to deliver solutions that are elegant, reliable, and built to last.
            </p>
          </div>

          <div className="detail-section">
            <h3>🌟 Beyond the Tech</h3>
            <p>
              When I'm not coding, you'll likely find me quilting. Whether it's blankets, bags, beer caddies, or thoughtful gifts for friends and family (including my two cats), I love creating things that bring joy and serve a purpose. Crafting is my way of combining creativity with care.
            </p>
            <br/>
            <p>
              I'm also deeply passionate about animation. I've spent over a decade creating digital art with GIMP and have been animating with OpenToonz for the past five years. My favorite subjects are my cats, who star in short animated skits I'm slowly building into a series. I'm constantly refining my animation style with scalability in mind—treating it like software, in a way.
            </p>
            <br/>
            <p>
              Working in Unity with C# has been a key part of that journey. It not only opened the door to interactive animations but also sparked my interest in .NET and full stack engineering. I love discovering new tools and tech, especially when I can integrate them into my creative projects. That blend of exploration and application makes learning incredibly fun and has helped shape me into a stronger, more well-rounded engineer.
            </p>
          </div>
        </div>

        <div className="detail-section">
          <h3>Let's Connect!</h3>
          <p>
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together or just chat about technology!
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-button"
              onClick={() => onSectionChange('skillset')}
            >
              View My Skills
            </button>
            <button 
              className="cta-button"
              onClick={() => onSectionChange('projects')}
            >
              See My Projects
            </button>
            <button 
              className="cta-button"
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
