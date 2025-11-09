// EmailJS Configuration
// Replace these placeholders with your actual EmailJS credentials

export const emailConfig = {
  serviceID: 'service_zvplz8i', // From EmailJS dashboard
  templateID: 'template_lm0r9hi', // From EmailJS dashboard  
  publicKey: 'a9tPilRn7b95vkdh9', // From EmailJS dashboard
};

// reCAPTCHA Configuration
// Replace with your actual reCAPTCHA site key from Google reCAPTCHA console
export const recaptchaConfig = {
  siteKey: '6Lcr9QYsAAAAAKUZ5MjbfsuJsf8ghZY_C3Ny-nwj', // From Google reCAPTCHA console
};

// Template for the email that will be sent
export const createEmailTemplate = (name, email) => ({
  from_name: name,
  from_email: email,
  to_name: 'Paulette Melchiori',
  message: `${name} (${email}) has requested your resume from your portfolio website.`,
  reply_to: email,
  timestamp: new Date().toLocaleString(),
});