# Google Sheets Setup Guide for Fiesta Website

## 📋 Overview
This guide will help you set up Google Sheets API to store form submissions from your Fiesta website.

## 🚀 Step-by-Step Setup

### 1. Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Fiesta Contact Form Data"
3. Add these headers in row 1:
   ```
   Timestamp | Name | Email | Phone | Course | Subject | Message | Demo Request | Status
   ```
4. Copy the Spreadsheet ID from the URL (the long string between /d/ and /edit)

### 2. Enable Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 3. Create API Credentials
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API Key
4. (Optional) Restrict the API key to Google Sheets API only

### 4. Configure the Application
1. Open `src/services/sheetsService.js`
2. Replace the placeholder values:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Your Google Sheet ID
   const API_KEY = 'YOUR_API_KEY'; // Your Google API Key
   ```

### 5. Test the Setup
1. Start your development server: `npm start`
2. Go to `/admin` route to view the admin dashboard
3. Submit a test form to verify data is being saved

## 🔐 Security Notes
- Keep your API key secure
- Consider restricting the API key to specific domains
- The admin route `/admin` should be protected in production

## 📊 Admin Dashboard Features
- View all form submissions
- Filter by status (New, Contacted, Completed)
- Search by name, email, or course
- Sort by different columns
- Update submission status
- Export data to CSV
- Real-time statistics

## 🛠️ Troubleshooting

### Common Issues:
1. **CORS Error**: Make sure your API key is properly configured
2. **Permission Denied**: Check if Google Sheets API is enabled
3. **Invalid Spreadsheet ID**: Verify the ID is correct from the URL

### Error Messages:
- "Failed to save to Google Sheets": Check API key and spreadsheet ID
- "Failed to load form data": Verify API permissions

## 📱 Admin Access
- URL: `https://yourdomain.com/admin`
- No authentication required (add protection for production)
- View all form submissions in a table format
- Manage lead status and track conversions

## 🔄 Data Flow
1. User submits form → EmailJS sends email
2. Form data saved to Google Sheets
3. Admin can view data in dashboard
4. Admin can update status and export data

## 📈 Analytics
The admin dashboard provides:
- Total submissions count
- New leads count
- Contacted leads count
- Demo requests count
- Real-time filtering and sorting

## 🚀 Production Deployment
For production, consider:
1. Adding authentication to admin route
2. Using environment variables for API keys
3. Implementing rate limiting
4. Adding data backup mechanisms 