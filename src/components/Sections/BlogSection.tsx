import React, { useState } from 'react';
import './BlogSection.css';
import { Section } from '../../types';

interface BlogSectionProps {
  onSectionChange: (section: Section) => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

interface BlogCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onSectionChange }) => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: BlogCategory[] = [
    {
      id: 'all',
      name: 'All Posts',
      description: 'Everything I\'ve written',
      icon: '📚'
    },
    {
      id: 'development',
      name: 'Development',
      description: 'Code, frameworks, and best practices',
      icon: '💻'
    },
    {
      id: 'career',
      name: 'Career',
      description: 'Professional growth and insights',
      icon: '🚀'
    },
    {
      id: 'learning',
      name: 'Learning',
      description: 'New technologies and skills',
      icon: '🎓'
    },
    {
      id: 'personal',
      name: 'Personal',
      description: 'Life, hobbies, and inspiration',
      icon: '✨'
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 'typescript-migration',
      title: 'Migrating a React Portfolio from JavaScript to TypeScript',
      excerpt: 'A detailed look at the process, challenges, and benefits of converting a React application to TypeScript, including real examples from this portfolio.',
      content: `
        <p>Recently, I made the decision to convert my personal portfolio from JavaScript to TypeScript. This wasn't just about following trends – it was about improving code quality, catching errors early, and making the project more maintainable.</p>
        
        <h3>Why TypeScript?</h3>
        <p>As my portfolio grew in complexity with multiple sections, interactive components, and data management, I found myself spending more time debugging runtime errors that could have been caught at compile time. TypeScript offers several key benefits:</p>
        
        <ul>
          <li><strong>Type Safety:</strong> Catch errors before they reach production</li>
          <li><strong>Better Developer Experience:</strong> IntelliSense and autocomplete</li>
          <li><strong>Self-Documenting Code:</strong> Interfaces serve as documentation</li>
          <li><strong>Easier Refactoring:</strong> Confidence when making changes</li>
        </ul>
        
        <h3>The Migration Process</h3>
        <p>I approached the migration systematically, starting with the most critical components. Here's the strategy that worked:</p>
        
        <ol>
          <li><strong>Setup TypeScript Configuration:</strong> Created tsconfig.json with strict settings</li>
          <li><strong>Install Type Definitions:</strong> Added @types packages for all dependencies</li>
          <li><strong>Create Type Definitions:</strong> Built comprehensive interfaces for all data structures</li>
          <li><strong>Convert Components One by One:</strong> Starting with the most complex components</li>
          <li><strong>Modular Architecture:</strong> Used the opportunity to improve code organization</li>
        </ol>
        
        <h3>Key Challenges and Solutions</h3>
        <p>The biggest challenge was handling CSS imports and third-party libraries without type definitions. I solved this by creating custom declaration files and using community-maintained type packages.</p>
        
        <p>Another challenge was properly typing React components and props. Creating a comprehensive type system from the beginning made the rest of the migration much smoother.</p>
        
        <h3>Results</h3>
        <p>The migration resulted in more robust code, better development experience, and easier maintenance. While it took additional time upfront, the long-term benefits are significant.</p>
      `,
      date: '2025-11-10',
      readTime: '8 min read',
      tags: ['TypeScript', 'React', 'Migration', 'Best Practices'],
      featured: true
    },
    {
      id: 'component-architecture',
      title: 'Building Modular React Components: A Practical Approach',
      excerpt: 'How I structured my portfolio components for reusability, maintainability, and clean separation of concerns.',
      content: `
        <p>When building my portfolio, I wanted to create a component architecture that was both scalable and maintainable. Here's how I approached it.</p>
        
        <h3>The Component Structure</h3>
        <p>I organized components into logical groups:</p>
        <ul>
          <li><strong>Banner Components:</strong> Animated homepage banners</li>
          <li><strong>Section Components:</strong> Individual page sections</li>
          <li><strong>Shared Components:</strong> Reusable UI elements</li>
          <li><strong>Hooks:</strong> Custom logic for state management</li>
        </ul>
        
        <h3>Key Principles</h3>
        <p>Each component follows these principles:</p>
        <ul>
          <li>Single responsibility</li>
          <li>Clear prop interfaces</li>
          <li>Consistent styling approach</li>
          <li>Proper error handling</li>
        </ul>
        
        <p>This approach made it easy to add new features and maintain existing code throughout the development process.</p>
      `,
      date: '2025-11-08',
      readTime: '6 min read',
      tags: ['React', 'Architecture', 'Components', 'Clean Code']
    },
    {
      id: 'career-transition',
      title: 'From Mainframe to Modern Web: My Development Journey',
      excerpt: 'Reflecting on my transition from legacy systems to modern web development and the lessons learned along the way.',
      content: `
        <p>My journey in technology started with mainframe systems – a world of COBOL, batch processing, and structured data. Today, I work with React, TypeScript, and modern web technologies. This transition taught me valuable lessons about adaptability and continuous learning.</p>
        
        <h3>The Foundation</h3>
        <p>Working with mainframe systems gave me a solid foundation in:</p>
        <ul>
          <li>Data management and SQL expertise</li>
          <li>System architecture and scalability</li>
          <li>Attention to detail and debugging skills</li>
          <li>Understanding of business processes</li>
        </ul>
        
        <h3>The Transition</h3>
        <p>Moving to modern web development required learning new paradigms, but the core problem-solving skills remained the same. The biggest adjustment was shifting from procedural to component-based thinking.</p>
        
        <h3>Bridging Two Worlds</h3>
        <p>My unique background allows me to:</p>
        <ul>
          <li>Design robust database schemas</li>
          <li>Understand performance implications</li>
          <li>Appreciate the value of maintainable code</li>
          <li>Bridge communication between technical and business teams</li>
        </ul>
        
        <p>This experience taught me that technology changes, but good engineering principles remain constant.</p>
      `,
      date: '2025-11-05',
      readTime: '7 min read',
      tags: ['Career', 'Development', 'Learning', 'Experience']
    },
    {
      id: 'learning-typescript',
      title: 'TypeScript Learning Resources That Actually Work',
      excerpt: 'A curated list of resources that helped me master TypeScript, from beginner concepts to advanced patterns.',
      content: `
        <p>Learning TypeScript can be overwhelming with so many resources available. Here are the ones that made the biggest difference in my learning journey.</p>
        
        <h3>Official Documentation</h3>
        <p>The TypeScript handbook is excellent for understanding core concepts. I recommend starting with the basics and gradually working through more advanced topics.</p>
        
        <h3>Practical Projects</h3>
        <p>Converting existing JavaScript projects to TypeScript is one of the best ways to learn. Start with small projects and gradually work up to larger applications.</p>
        
        <h3>Community Resources</h3>
        <ul>
          <li>TypeScript Discord community</li>
          <li>Stack Overflow TypeScript questions</li>
          <li>GitHub repositories with good TypeScript examples</li>
        </ul>
        
        <p>The key is consistent practice and not being afraid to make mistakes. TypeScript's compiler is your friend – it will guide you toward better code.</p>
      `,
      date: '2025-11-01',
      readTime: '5 min read',
      tags: ['TypeScript', 'Learning', 'Resources', 'Education']
    },
    {
      id: 'work-life-balance',
      title: 'Coding with Cats: How My Furry Assistants Improve My Work',
      excerpt: 'The unexpected ways that Butters and Margie contribute to my development process and work-life balance.',
      content: `
        <p>Meet my coding companions: Butters and Margie. While they might not write code, they've taught me valuable lessons about work-life balance and productivity.</p>
        
        <h3>The Unexpected Benefits</h3>
        <p>Having cats in my workspace provides:</p>
        <ul>
          <li><strong>Forced Breaks:</strong> When a cat decides it's lap time, you take a break</li>
          <li><strong>Stress Relief:</strong> Petting a purring cat is scientifically proven to reduce stress</li>
          <li><strong>Perspective:</strong> They remind me that not everything needs to be perfect right now</li>
          <li><strong>Entertainment:</strong> Their antics provide comic relief during challenging debugging sessions</li>
        </ul>
        
        <h3>Lessons in Problem-Solving</h3>
        <p>Cats are natural problem-solvers. Watching them figure out how to open doors or reach high places reminds me to approach coding challenges from different angles.</p>
        
        <h3>The Productivity Balance</h3>
        <p>Yes, they sometimes walk across the keyboard at the worst possible moment. But the mental health benefits far outweigh the occasional inconvenience.</p>
        
        <p>If you're working from home, consider the benefits of a furry coding companion. Just make sure to save your work frequently!</p>
      `,
      date: '2025-10-28',
      readTime: '4 min read',
      tags: ['Personal', 'Work-Life Balance', 'Cats', 'Productivity']
    }
  ];

  const handlePostClick = (postId: string): void => {
    setSelectedPost(selectedPost === postId ? null : postId);
  };

  const handleCategoryClick = (categoryId: string): void => {
    setSelectedCategory(categoryId);
    setSelectedPost(null);
  };

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.some(tag => 
        tag.toLowerCase().includes(selectedCategory) || 
        (selectedCategory === 'development' && ['TypeScript', 'React', 'JavaScript'].includes(tag))
      ));

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-section">
      <div className="section-header">
        <h1>My Blog</h1>
        <p className="section-subtitle">Thoughts, insights, and experiences from my development journey</p>
      </div>

      <div className="blog-intro">
        <h2>Welcome to My Developer Blog</h2>
        <p>
          This is where I share my experiences, insights, and learnings from the world of web development. 
          From technical deep-dives to career reflections, I hope you find something valuable here. 
          Feel free to reach out if any of these posts spark interesting conversations!
        </p>
      </div>

      <div className="blog-categories">
        <h3>Explore by Category</h3>
        <div className="categories-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <div className="category-info">
                <h4>{category.name}</h4>
                <p>{category.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="blog-posts">
        <h3>
          {selectedCategory === 'all' ? 'All Posts' : 
           categories.find(cat => cat.id === selectedCategory)?.name || 'Posts'}
        </h3>
        
        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            <p>No posts found in this category yet. Check back soon for new content!</p>
          </div>
        ) : (
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <div 
                key={post.id}
                className={`post-card ${selectedPost === post.id ? 'active' : ''} ${post.featured ? 'featured' : ''}`}
                onClick={() => handlePostClick(post.id)}
              >
                {post.featured && <div className="featured-badge">Featured</div>}
                
                <div className="post-header">
                  <h4>{post.title}</h4>
                  <div className="post-meta">
                    <span className="post-date">{formatDate(post.date)}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
                
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                {selectedPost === post.id && (
                  <div 
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                )}
                
                <div className="post-action">
                  {selectedPost === post.id ? 'Click to collapse' : 'Click to read more'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="blog-cta">
        <h3>Let's Connect!</h3>
        <p>
          Enjoyed reading? Have thoughts to share? I'd love to hear from you! 
          Let's connect and continue the conversation.
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
    </div>
  );
};

export default BlogSection;