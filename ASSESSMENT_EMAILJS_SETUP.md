# Assessment EmailJS Setup Guide

## Overview
This guide helps you set up EmailJS to send assessment results to students via email.

## Step 1: EmailJS Template Configuration

### Create a New Email Template
1. Go to your EmailJS dashboard
2. Navigate to "Email Templates"
3. Click "Create New Template"
4. Name it "Assessment Results"

### Template Content
Use this template content for assessment results:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Assessment Results - GenZ Learn</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Assessment Results</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">GenZ Learn - Your Learning Journey</p>
    </div>
    
    <div style="background: white; padding: 30px; border: 1px solid #e1e5e9; border-top: none; border-radius: 0 0 10px 10px;">
        
        <h2 style="color: #2d3748; margin-bottom: 20px;">Hello {{student_name}},</h2>
        
        <p style="margin-bottom: 25px;">Thank you for completing the <strong>{{assessment_title}}</strong> assessment. Here are your results:</p>
        
        <!-- Score Section -->
        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px; text-align: center;">
            <h3 style="margin: 0 0 15px 0; color: #2d3748;">Your Score</h3>
            <div style="font-size: 48px; font-weight: bold; color: {{score >= 70 ? '#38a169' : '#e53e3e'}}; margin-bottom: 10px;">
                {{score}}%
            </div>
            <div style="font-size: 18px; color: #4a5568; margin-bottom: 15px;">
                {{correct_answers}} out of {{total_questions}} questions correct
            </div>
            <div style="padding: 8px 16px; background: {{passed == 'Yes' ? '#c6f6d5' : '#fed7d7'}}; color: {{passed == 'Yes' ? '#22543d' : '#742a2a'}}; border-radius: 20px; display: inline-block; font-weight: bold;">
                {{passed == 'Yes' ? 'PASSED' : 'NEEDS IMPROVEMENT'}}
            </div>
        </div>
        
        <!-- Assessment Details -->
        <div style="background: #edf2f7; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="margin: 0 0 15px 0; color: #2d3748;">Assessment Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Assessment:</td>
                    <td style="padding: 8px 0; color: #2d3748;">{{assessment_title}}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Completed:</td>
                    <td style="padding: 8px 0; color: #2d3748;">{{completed_at}}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Status:</td>
                    <td style="padding: 8px 0; color: #2d3748;">
                        <span style="color: {{passed == 'Yes' ? '#38a169' : '#e53e3e'}}; font-weight: bold;">
                            {{passed == 'Yes' ? '✓ Passed' : '✗ Needs Improvement'}}
                        </span>
                    </td>
                </tr>
            </table>
        </div>
        
        <!-- Detailed Results -->
        <div style="margin-bottom: 25px;">
            <h3 style="color: #2d3748; margin-bottom: 15px;">Detailed Results</h3>
            <div style="background: #f7fafc; padding: 15px; border-radius: 8px; font-family: monospace; font-size: 14px; white-space: pre-line; color: #4a5568;">
{{questions_summary}}
            </div>
        </div>
        
        <!-- Next Steps -->
        <div style="background: #e6fffa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="margin: 0 0 15px 0; color: #2d3748;">Next Steps</h3>
            {{#if passed}}
            <p style="margin: 0 0 10px 0; color: #22543d;">🎉 Congratulations! You've successfully passed this assessment.</p>
            <ul style="margin: 0; padding-left: 20px; color: #22543d;">
                <li>Continue with the next module in your course</li>
                <li>Practice the concepts you learned</li>
                <li>Consider taking advanced assessments</li>
            </ul>
            {{else}}
            <p style="margin: 0 0 10px 0; color: #742a2a;">📚 Don't worry! Learning is a journey.</p>
            <ul style="margin: 0; padding-left: 20px; color: #742a2a;">
                <li>Review the correct answers above</li>
                <li>Revisit the course materials</li>
                <li>Take the assessment again when ready</li>
            </ul>
            {{/if}}
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 10px 0; color: #718096;">Need help? Contact our support team</p>
            <p style="margin: 0; color: #a0aec0; font-size: 14px;">
                © 2024 GenZ Learn. All rights reserved.
            </p>
        </div>
        
    </div>
</body>
</html>
```

## Step 2: Template Variables

The template uses these variables that are automatically populated:

- `{{student_name}}` - Student's full name
- `{{assessment_title}}` - Title of the assessment
- `{{score}}` - Percentage score (0-100)
- `{{total_questions}}` - Total number of questions
- `{{correct_answers}}` - Number of correct answers
- `{{passed}}` - "Yes" or "No" based on passing score
- `{{completed_at}}` - Date and time of completion
- `{{questions_summary}}` - Detailed breakdown of all questions and answers

## Step 3: Environment Variables

Make sure these environment variables are set in your `.env` file:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_USER_ID=your_user_id_here
```

## Step 4: Testing

1. Complete an assessment in your application
2. Fill in your name and email in the submission modal
3. Click "Send Results"
4. Check your email for the assessment results

## Features

### What Students Receive:
- **Personalized greeting** with their name
- **Visual score display** with color coding
- **Detailed breakdown** of all questions and answers
- **Correct answers** for learning purposes
- **Next steps** based on pass/fail status
- **Professional formatting** with GenZ Learn branding

### Email Content Includes:
- Assessment title and completion date
- Score percentage and pass/fail status
- Question-by-question breakdown
- Student's answers vs correct answers
- Personalized next steps and recommendations

## Troubleshooting

### Common Issues:
1. **Email not sending**: Check EmailJS service configuration
2. **Template variables not showing**: Ensure variable names match exactly
3. **Formatting issues**: Test the template in EmailJS preview mode

### Support:
- EmailJS Documentation: https://www.emailjs.com/docs/
- Template Testing: Use EmailJS preview feature
- Service Limits: Free tier allows 200 emails per month

## Security Notes

- EmailJS credentials are stored in environment variables
- Student data is only sent via email, not stored permanently
- Template variables are sanitized before sending
- HTTPS is required for production use 