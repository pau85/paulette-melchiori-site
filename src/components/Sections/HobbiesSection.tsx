import React, { useState } from 'react';
import './HobbiesSection.css';
import { Section, SewingProject } from '../../types';

interface HobbiesSectionProps {
  onSectionChange: (section: Section) => void;
  sewingProjects: SewingProject[];
}

interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  featured?: boolean;
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ 
  onSectionChange, 
  sewingProjects 
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedHobby, setSelectedHobby] = useState<string>('sewing');

  const hobbies: Hobby[] = [
    {
      id: 'sewing',
      title: 'Sewing & Quilting',
      description: 'Creating beautiful handmade items, from quilts to bags and home decor.',
      icon: '🧵',
      details: [
        'Hand-pieced and machine quilts with intricate designs',
        'Custom bags and purses for everyday use',
        'Decorative baskets and storage solutions',
        'Home decor items and seasonal decorations',
        'Upcycling and repurposing fabric into new creations',
        'Exploring traditional and modern quilting techniques'
      ],
      featured: true
    },
    {
      id: 'cats',
      title: 'Cat Companionship',
      description: 'Sharing my life and workspace with two amazing feline coding assistants.',
      icon: '🐱',
      details: [
        'Butters: My loyal keyboard supervisor and debugging partner',
        'Margie: The project manager who ensures proper break scheduling',
        'Learning about cat behavior and enrichment activities',
        'Creating DIY cat toys and furniture',
        'Photography sessions capturing their unique personalities',
        'Volunteering at local animal shelters when possible'
      ]
    },
    {
      id: 'crafting',
      title: 'Creative Projects',
      description: 'Various crafting and DIY projects that spark creativity and problem-solving.',
      icon: '🎨',
      details: [
        'Hand lettering and calligraphy for personalized gifts',
        'DIY home improvement and organization projects',
        'Seasonal crafts and holiday decorations',
        'Upcycling furniture and household items',
        'Exploring new crafting techniques through online tutorials',
        'Gift-making for friends and family celebrations'
      ]
    },
    {
      id: 'learning',
      title: 'Continuous Learning',
      description: 'Always exploring new technologies, techniques, and creative pursuits.',
      icon: '📚',
      details: [
        'Following tech blogs and development communities',
        'Experimenting with new programming languages and frameworks',
        'Online courses in design, UX, and emerging technologies',
        'Reading about best practices in software development',
        'Participating in coding challenges and hackathons',
        'Learning from open-source projects and contributing when possible'
      ]
    }
  ];

  const handleImageClick = (project: SewingProject): void => {
    setSelectedImage(project.filename);
  };

  const closeImageModal = (): void => {
    setSelectedImage(null);
  };

  const handleHobbyClick = (hobbyId: string): void => {
    setSelectedHobby(hobbyId);
  };

  const getCategoryProjects = (category: string): SewingProject[] => {
    if (category === 'puff-quilt') {
      return sewingProjects.filter(project => project.category === 'quilts');
    }
    if (category === 'bag') {
      return sewingProjects.filter(project => project.category === 'bags');
    }
    if (category === 'basket') {
      return sewingProjects.filter(project => project.category === 'home organization');
    }
    if (category === 'misc') {
      return sewingProjects.filter(project => project.category === 'pet accessories' || project.category === 'gifts');
    }
    if (category === 'project') {
      return sewingProjects.filter(project => project.category === 'home decor');
    }
    return [];
  };

  const sewingCategories = [
    { id: 'puff-quilt', name: 'Puff Quilts', description: 'Cozy and textured quilts with dimensional puffs' },
    { id: 'bag', name: 'Bags & Purses', description: 'Functional and stylish handmade bags' },
    { id: 'basket', name: 'Storage Baskets', description: 'Organizational solutions with style' },
    { id: 'misc', name: 'Home Decor', description: 'Miscellaneous decorative items' },
    { id: 'project', name: 'Special Projects', description: 'Wedding Party Favor Bags' }
  ];

  return (
    <div className="hobbies-section">
      <div className="section-header">
        <h1>My Hobbies & Interests</h1>
        <p className="section-subtitle">The creative pursuits that inspire my work and life</p>
      </div>

      <div className="hobbies-intro">
        <p>
          Beyond coding, I'm passionate about creating with my hands and exploring new interests. 
          These hobbies keep me balanced, inspire creativity, and often influence my approach to 
          problem-solving in development work.
        </p>
      </div>

      <div className="hobbies-navigation">
        {hobbies.map((hobby) => (
          <button
            key={hobby.id}
            className={`hobby-nav-button ${selectedHobby === hobby.id ? 'active' : ''}`}
            onClick={() => handleHobbyClick(hobby.id)}
          >
            <span className="hobby-icon">{hobby.icon}</span>
            {hobby.title}
          </button>
        ))}
      </div>

      <div className="hobby-content">
        {hobbies.map((hobby) => (
          selectedHobby === hobby.id && (
            <div key={hobby.id} className="hobby-detail">
              <div className="hobby-header">
                <h2>
                  <span className="hobby-icon-large">{hobby.icon}</span>
                  {hobby.title}
                </h2>
                <p className="hobby-description">{hobby.description}</p>
              </div>

              <div className="hobby-details">
                <h3>What I Love About It</h3>
                <ul>
                  {hobby.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              {hobby.id === 'sewing' && (
                <div className="sewing-gallery">
                  <h3>My Sewing Projects Gallery</h3>
                  <p className="gallery-description">
                    Click on any image to view it in full size. Each category represents different 
                    types of projects I've completed over the years.
                  </p>
                  
                  {sewingCategories.map((category) => {
                    const categoryProjects = getCategoryProjects(category.id);
                    if (categoryProjects.length === 0) return null;
                    
                    return (
                      <div key={category.id} className="sewing-category">
                        <h4>{category.name}</h4>
                        <p className="category-description">{category.description}</p>
                        <div className="image-grid">
                          {categoryProjects.map((project) => (
                            <div 
                              key={project.id}
                              className="image-item"
                              onClick={() => handleImageClick(project)}
                              title={project.title}
                            >
                              <img 
                                src={`/images/sewing/${project.filename}`} 
                                alt={project.title}
                                loading="lazy"
                              />
                              <div className="image-overlay">
                                <span>{project.title}</span>
                                <small>{project.description}</small>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )
        ))}
      </div>

      <div className="hobbies-connection">
        <h3>How Hobbies Enhance My Development Work</h3>
        <div className="connection-grid">
          <div className="connection-card">
            <h4>🎯 Attention to Detail</h4>
            <p>
              Precision in sewing translates to careful code review and thorough testing. 
              Both require patience and an eye for the smallest details that make the biggest difference.
            </p>
          </div>
          <div className="connection-card">
            <h4>🧩 Problem Solving</h4>
            <p>
              Figuring out complex quilt patterns or troubleshooting sewing machine issues 
              strengthens the same logical thinking I use to debug code and architect solutions.
            </p>
          </div>
          <div className="connection-card">
            <h4>🎨 Creative Thinking</h4>
            <p>
              Designing projects from scratch and choosing color combinations enhances my 
              approach to UI/UX design and finding innovative solutions to technical challenges.
            </p>
          </div>
          <div className="connection-card">
            <h4>⏰ Project Management</h4>
            <p>
              Managing complex sewing projects with multiple phases mirrors software development 
              lifecycle management and helps me break down large tasks into manageable pieces.
            </p>
          </div>
        </div>
      </div>

      <div className="hobbies-cta">
        <h3>Let's Connect Over Shared Interests!</h3>
        <p>
          I'd love to hear about your hobbies and interests. Often the best collaborations 
          come from people with diverse passions and perspectives.
        </p>
        <div className="cta-buttons">
          <button 
            className="cta-button primary"
            onClick={() => onSectionChange('recruiters')}
          >
            Get In Touch
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => onSectionChange('about')}
          >
            More About Me
          </button>
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img 
              src={`/images/sewing/${selectedImage}`} 
              alt="Enlarged sewing project"
            />
            <button className="close-button" onClick={closeImageModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HobbiesSection;