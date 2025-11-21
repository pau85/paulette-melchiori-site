import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './RecruitersSection.css';
import { Section, ResumeForm } from '../../types';
import { emailConfig, createEmailTemplate, recaptchaConfig } from '../../emailConfig';

interface RecruitersSectionProps {
  onSectionChange: (section: Section) => void;
}

const RecruitersSection: React.FC<RecruitersSectionProps> = ({ onSectionChange }) => {
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [resumeForm, setResumeForm] = useState<ResumeForm>({ name: '', email: '' });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleDownloadResume = (): void => {
    setShowResumeModal(true);
  };

  const handleResumeSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    
    if (!captchaValue) {
      alert('Please complete the CAPTCHA verification.');
      return;
    }

    if (!resumeForm.name || !resumeForm.email) {
      alert('Please fill in both name and email fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = createEmailTemplate(resumeForm.name, resumeForm.email);
      
      await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        templateParams,
        emailConfig.publicKey
      );

      alert('Thank you! Your request has been sent. The resume will be emailed to you shortly.');
      setShowResumeModal(false);
      setResumeForm({ name: '', email: '' });
      setCaptchaValue(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaptchaChange = (value: string | null): void => {
    setCaptchaValue(value);
  };

  const handleFormInputChange = (field: keyof ResumeForm, value: string): void => {
    setResumeForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const closeModal = (): void => {
    setShowResumeModal(false);
    setResumeForm({ name: '', email: '' });
    setCaptchaValue(null);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <div className="recruiters-section">
      <div className="section-header">
        <h1>Hey Recruiters! 👋</h1>
        <p className="section-subtitle">Let's connect and explore opportunities together</p>
      </div>

      <div className="recruiters-intro">
        <h2>Ready to Build Something Amazing?</h2>
        <p>
          I'm actively seeking new opportunities where I can contribute my skills in React, TypeScript, 
          and full-stack development. I'm passionate about creating efficient, user-friendly applications 
          and collaborating with talented teams to deliver exceptional results.
        </p>
      </div>

      <div className="value-proposition">
        <h3>What I Bring to Your Team</h3>
        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon">💻</div>
            <h4>Technical Excellence</h4>
            <p>
              Strong foundation in modern web technologies with a focus on React, TypeScript, 
              and scalable architecture. I write clean, maintainable code that stands the test of time.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h4>Growth Mindset</h4>
            <p>
              Continuously learning and adapting to new technologies. I stay current with industry 
              trends and am always eager to tackle new challenges and expand my skill set.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h4>Collaborative Spirit</h4>
            <p>
              Excellent communication skills and experience working in team environments. 
              I believe the best solutions come from diverse perspectives and open collaboration.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h4>Results-Driven</h4>
            <p>
              Focused on delivering value and meeting project goals. I understand business needs 
              and translate them into technical solutions that drive real outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="experience-highlights">
        <h3>Experience Highlights</h3>
        <div className="experience-grid">
          <div className="experience-item">
            <h4>🏗️ Full-Stack Development</h4>
            <p>End-to-end application development from database design to responsive frontend interfaces</p>
          </div>
          <div className="experience-item">
            <h4>📊 Data Management</h4>
            <p>Extensive SQL experience with complex queries, optimization, and database architecture</p>
          </div>
          <div className="experience-item">
            <h4>🔄 System Integration</h4>
            <p>Experience migrating from legacy systems and integrating modern solutions</p>
          </div>
          <div className="experience-item">
            <h4>⚡ Performance Optimization</h4>
            <p>Focus on creating efficient, fast-loading applications with optimal user experiences</p>
          </div>
        </div>
      </div>

      <div className="availability-info">
        <div className="availability-card">
          <h3>🌟 Current Availability</h3>
          <div className="availability-status">
            <span className="status-indicator available"></span>
            <span className="status-text">Open to new opportunities</span>
          </div>
          <p>
            I'm actively seeking full-time positions or interesting contract work. 
            I'm particularly interested in roles that involve:
          </p>
          <ul>
            <li>React/TypeScript frontend development</li>
            <li>Full-stack web application projects</li>
            <li>Database design and optimization</li>
            <li>Modern development practices and tooling</li>
            <li>Collaborative, growth-oriented team environments</li>
          </ul>
        </div>
      </div>

      <div className="contact-options">
        <h3>Let's Connect</h3>
        <p>Ready to discuss how I can contribute to your team? Here are the best ways to reach me:</p>
        
        <div className="contact-methods">
          {/* <div className="contact-card primary-contact">
            <h4>📄 Get My Resume</h4>
            <p>
              Request a copy of my detailed resume with complete work history, 
              technical skills, and project information.
            </p>
            <button 
              className="resume-button"
              onClick={handleDownloadResume}
            >
              Request Resume
            </button>
          </div> */}
          
          <div className="contact-card">
            <h4>💼 LinkedIn</h4>
            <p>Connect with me professionally and see my latest updates and recommendations.</p>
            <button 
              className="contact-link linkedin"
              onClick={() => window.open('https://linkedin.com/in/paulette-melchiori', '_blank')}
            >
              View LinkedIn Profile
            </button>
          </div>
          
          <div className="contact-card">
            <h4>📧 Message Me</h4>
            <p>For specific opportunities or quick questions, feel free to reach out directly.</p>
            <button 
              className="contact-link email"
              onClick={() => window.location.href = 'mailto:paulette.melchiori@email.com'}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="recruiters-cta">
        <h3>Explore My Work</h3>
        <p>Want to see my skills in action before we connect?</p>
        <div className="cta-buttons">
          <button 
            className="cta-button primary"
            onClick={() => onSectionChange('projects')}
          >
            View My Projects
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => onSectionChange('skillset')}
          >
            Technical Skills
          </button>
        </div>
      </div>

      {/* Resume Request Modal */}
      {showResumeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Request Resume</h3>
              <button className="close-button" onClick={closeModal}>✕</button>
            </div>
            
            <div className="modal-body">
              <p>
                Please provide your information below, and I'll send you my detailed resume. 
                All information is kept confidential and used solely for recruitment purposes. 
                Your data is not stored permanently and is only used to deliver your requested resume.
              </p>
              
              <form onSubmit={handleResumeSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={resumeForm.name}
                    onChange={(e) => handleFormInputChange('name', e.target.value)}
                    placeholder="Your full name"
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
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Security Verification *</label>
                  <div className="captcha-container">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptchaConfig.siteKey}
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  <div className="privacy-notice">
                    <p>
                      This site is protected by reCAPTCHA and the Google{' '}
                      <a 
                        href="https://policies.google.com/privacy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a 
                        href="https://policies.google.com/terms" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </a>{' '}
                      apply. Your information is only used to send you the requested resume and is not stored or shared.
                    </p>
                  </div>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-button"
                    onClick={closeModal}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Resume'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruitersSection;