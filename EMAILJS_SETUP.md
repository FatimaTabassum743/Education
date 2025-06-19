# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New {{is_demo}} Request - {{course}}

Hello Fiesta EdTech Team,

You have received a new {{is_demo}} request:

**Contact Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Age: {{age}}
- Country: {{country}}

**Course Interest:** {{course}}

**Message:**
{{message}}

**Request Type:** {{is_demo}}

Best regards,
Fiesta EdTech Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get User ID
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (User ID)

## Step 5: Configure Environment Variables
Create a `.env` file in your project root with:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_USER_ID=your_user_id_here
```

## Step 6: Test the Setup
1. Start your development server
2. Fill out the contact form
3. Check if you receive the email

## Troubleshooting
- Make sure all environment variables are prefixed with `REACT_APP_`
- Restart your development server after adding environment variables
- Check the browser console for any errors
- Verify your EmailJS service is active and properly configured

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- Consider upgrading for higher limits if needed 