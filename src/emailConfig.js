// EmailJS Configuration

export const emailConfig = {
  serviceID: 'service_zvplz8i',
  templateID: 'template_lm0r9hi', 
  publicKey: 'a9tPilRn7b95vkdh9',
};

// reCAPTCHA Configuration
export const recaptchaConfig = {
  siteKey: '6Led4gYsAAAAABw-uRaioc0Wyc9mH9ggWvxcNYXS', 
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