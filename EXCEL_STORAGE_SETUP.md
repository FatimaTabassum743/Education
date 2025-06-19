# Excel Storage Setup Guide for Fiesta Website

## 📊 Overview
This guide covers different ways to store form data in Excel format for your Fiesta website.

## 🎯 Option 1: Local Storage + CSV Export (Recommended - No Setup Required)

### ✅ Features:
- **No setup required** - Works immediately
- **Free forever** - No costs or limits
- **CSV export** - Download as Excel file
- **Admin dashboard** - View and manage submissions
- **Status tracking** - Mark leads as New/Contacted/Completed

### 🚀 How to Use:
1. **Start your website**: `npm start`
2. **Submit forms** - Data stored automatically
3. **View data**: Go to `/admin` route
4. **Export to Excel**: Click "Export to Excel" button
5. **Open in Excel**: CSV file opens in Excel automatically

### 📁 File Location:
- **Local Storage**: Browser's localStorage
- **Export Location**: Downloads folder
- **File Format**: CSV (compatible with Excel)

---

## 🎯 Option 2: Airtable (Best for Permanent Storage)

### ✅ Features:
- **Excel-like interface** - Familiar spreadsheet view
- **Free tier** - 1,200 records per base
- **Real-time sync** - Data updates instantly
- **Mobile app** - Access data anywhere
- **API access** - Programmatic access

### 🚀 Setup Steps:

#### Step 1: Create Airtable Account
1. Go to [Airtable](https://airtable.com)
2. Sign up with Google (free)
3. Create new workspace

#### Step 2: Create Base
1. Click "Add a base"
2. Choose "Start from scratch"
3. Name it: "Fiesta Form Data"

#### Step 3: Create Table
1. Rename first table to "Form Submissions"
2. Add these columns:
   - **Name** (Single line text)
   - **Email** (Email)
   - **Phone** (Single line text)
   - **Course** (Single select)
   - **Subject** (Long text)
   - **Message** (Long text)
   - **Demo Request** (Single select: Yes/No)
   - **Status** (Single select: New/Contacted/Completed)
   - **Timestamp** (Date)

#### Step 4: Get API Key
1. Go to [Airtable API](https://airtable.com/api)
2. Click "Generate API key"
3. Copy the API key

#### Step 5: Get Base ID
1. In your base, click "Help" → "API documentation"
2. Copy the Base ID from the URL

#### Step 6: Update Code
1. Open `src/services/airtableService.js`
2. Replace:
   ```javascript
   this.baseId = 'YOUR_AIRTABLE_BASE_ID';
   this.apiKey = 'YOUR_AIRTABLE_API_KEY';
   ```

#### Step 7: Update ContactForm
1. Open `src/components/ContactForm.js`
2. Replace import:
   ```javascript
   import airtableService from '../services/airtableService';
   ```
3. Replace service call:
   ```javascript
   await airtableService.addFormData(data);
   ```

---

## 🎯 Option 3: Google Sheets (Advanced)

### ✅ Features:
- **Familiar interface** - Google Sheets
- **Free tier** - 1,000 requests per 100 seconds
- **Real-time collaboration** - Multiple users
- **Advanced formulas** - Excel-like functions

### 🚀 Setup Steps:

#### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet: "Fiesta Form Data"
3. Add headers in Row 1:
   ```
   Timestamp | Name | Email | Phone | Course | Subject | Message | Demo Request | Status
   ```

#### Step 2: Create Google Apps Script
1. In your Google Sheet, go to "Extensions" → "Apps Script"
2. Replace the code with:
   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     
     sheet.appendRow([
       data.timestamp,
       data.name,
       data.email,
       data.phone,
       data.course,
       data.subject,
       data.message,
       data.demo_request,
       data.status
     ]);
     
     return ContentService.createTextOutput(JSON.stringify({success: true}))
       .setMimeType(ContentService.MimeType.JSON);
   }
   
   function doGet(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = sheet.getDataRange().getValues();
     const headers = data[0];
     const rows = data.slice(1);
     
     const submissions = rows.map(row => {
       const obj = {};
       headers.forEach((header, index) => {
         obj[header.toLowerCase().replace(/\s+/g, '_')] = row[index] || '';
       });
       return obj;
     });
     
     return ContentService.createTextOutput(JSON.stringify({submissions}))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

#### Step 3: Deploy Web App
1. Click "Deploy" → "New deployment"
2. Choose "Web app"
3. Set access to "Anyone"
4. Copy the web app URL

#### Step 4: Update Code
1. Open `src/services/sheetsServiceSimple.js`
2. Replace:
   ```javascript
   this.webAppUrl = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```

---

## 📊 Comparison Table

| Feature | Local Storage | Airtable | Google Sheets |
|---------|---------------|----------|---------------|
| **Setup Time** | 0 minutes | 10 minutes | 15 minutes |
| **Cost** | Free | Free (1,200 records) | Free (1,000 requests) |
| **Persistence** | Browser only | Cloud | Cloud |
| **Excel Export** | ✅ CSV | ✅ CSV/Excel | ✅ CSV |
| **Mobile Access** | ❌ | ✅ App | ✅ Web |
| **Real-time Sync** | ❌ | ✅ | ✅ |
| **API Access** | ❌ | ✅ | ✅ |

## 🎯 Recommendation

### **For Quick Start:**
Use **Local Storage** - No setup required, works immediately

### **For Business Use:**
Use **Airtable** - Professional interface, mobile access, permanent storage

### **For Advanced Users:**
Use **Google Sheets** - Familiar interface, advanced features

## 🚀 Quick Start (Local Storage)

1. **Start your website**: `npm start`
2. **Submit a test form**
3. **Go to admin**: `http://localhost:3000/admin`
4. **Export data**: Click "Export to Excel"
5. **Open in Excel**: File downloads as CSV

**That's it! Your form data is now stored and exportable to Excel! 🎉** 