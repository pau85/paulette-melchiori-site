# EmailJS + reCAPTCHA Setup Guide for Portfolio

Follow these steps to configure EmailJS and Google reCAPTCHA for your resume request notifications:

## Part 1: EmailJS Setup

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. **Copy the Service ID** - you'll need this

### Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

#### Template Content:
```
Subject: Resume Request from Portfolio - {{from_name}}

Hello Paulette,

Someone has requested your resume from your portfolio website!

Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Request Time: {{timestamp}}
- Message: {{message}}

You can reply directly to this email to contact them.

Best regards,
Your Portfolio Website
```

#### Template Variables:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{timestamp}}` - When they requested
- `{{message}}` - Auto-generated message
- `{{reply_to}}` - Set reply-to address

4. **Copy the Template ID** - you'll need this

### Step 4: Get Public Key
1. Go to "Account" in EmailJS dashboard
2. Find "Public Key" section
3. **Copy the Public Key** - you'll need this

## Part 2: Google reCAPTCHA Setup

### Step 5: Create reCAPTCHA Site
1. Go to [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Click "Create" or "+"
3. Fill out the form:
   - **Label**: "Portfolio Resume Requests" (or your preference)
   - **reCAPTCHA type**: Choose "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: Add your domain(s):
     - `localhost` (for development)
     - `your-username.github.io` (for GitHub Pages)
     - Any custom domains you plan to use
4. Accept terms and click "Submit"
5. **Copy the Site Key** - you'll need this

## Part 3: Update Configuration

### Step 6: Update Configuration File
Edit `src/emailConfig.js` and replace:
```javascript
export const emailConfig = {
  serviceID: 'service_xyz123', // Replace with your EmailJS Service ID
  templateID: 'template_abc456', // Replace with your EmailJS Template ID
  publicKey: 'user_def789', // Replace with your EmailJS Public Key
};

export const recaptchaConfig = {
  siteKey: '6Le-wvkSAAAAA...', // Replace with your reCAPTCHA Site Key
};
```

### Step 7: Add Resume File
1. Add your resume PDF to the `public` folder
2. Name it `resume.pdf`
3. Or update the file path in `handleResumeFormSubmit`

### Step 8: Test Everything
1. Run `npm start`
2. Navigate to About Me section
3. Click "Download Resume"
4. Fill out the form completely
5. Complete the reCAPTCHA
6. Submit and check your email for the notification

## Security Benefits

### reCAPTCHA Protection:
- Prevents spam bot submissions
- Reduces fake resume requests
- Protects your email from flooding
- Free for low-volume sites

### EmailJS Security:
- Public Key is safe in client-side code
- Rate limiting prevents abuse
- No server required

## Free Tier Limits

### EmailJS:
- 200 emails per month
- 2 email templates
- Basic dashboard analytics

### Google reCAPTCHA:
- 1 million assessments per month
- Free for non-commercial use
- Basic analytics

Perfect for a personal portfolio site!

## Troubleshooting

### Common Issues:
1. **reCAPTCHA not loading**: Check site key and domain settings
2. **Email not sending**: Verify EmailJS service connection
3. **CAPTCHA fails**: Ensure you're testing on allowed domains
4. **Console errors**: Check browser dev tools for specific error messages

### Testing Tips:
- Test on `localhost` first
- Verify both email and CAPTCHA work separately
- Check spam folder for email notifications
- Use browser dev tools to debug

### Domain Configuration:
- For GitHub Pages: `your-username.github.io`
- For custom domains: Add each domain separately
- Include both `www` and non-`www` versions if needed