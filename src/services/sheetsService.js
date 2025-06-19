// Google Sheets API Configuration
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID
const API_KEY = 'YOUR_API_KEY'; // Replace with your Google API Key
const SHEET_NAME = 'Sheet1'; // Default sheet name

class SheetsService {
  constructor() {
    this.baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
  }

  // Add new form submission to Google Sheets
  async addFormData(formData) {
    try {
      const values = [
        [
          new Date().toISOString(), // Timestamp
          formData.name,
          formData.email,
          formData.phone || 'Not provided',
          formData.course || 'General Inquiry',
          formData.title,
          formData.message,
          formData.demo === 'Yes' ? 'Yes' : 'No',
          'New' // Status
        ]
      ];

      const response = await fetch(
        `${this.baseUrl}/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:I:append?valueInputOption=RAW&key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: values
          })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to save to Google Sheets');
      }

      return await response.json();
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      throw error;
    }
  }

  // Get all form submissions (for admin view)
  async getFormData() {
    try {
      const response = await fetch(
        `${this.baseUrl}/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data from Google Sheets');
      }

      const data = await response.json();
      
      if (!data.values || data.values.length <= 1) {
        return [];
      }

      // Convert to array of objects (skip header row)
      const headers = data.values[0];
      const rows = data.values.slice(1);

      return rows.map(row => {
        const obj = {};
        headers.forEach((header, index) => {
          obj[header.toLowerCase().replace(/\s+/g, '_')] = row[index] || '';
        });
        return obj;
      });
    } catch (error) {
      console.error('Error fetching from Google Sheets:', error);
      throw error;
    }
  }

  // Update status of a submission
  async updateStatus(rowIndex, status) {
    try {
      const response = await fetch(
        `${this.baseUrl}/${SPREADSHEET_ID}/values/${SHEET_NAME}!I${rowIndex + 2}?valueInputOption=RAW&key=${API_KEY}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [[status]]
          })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating status:', error);
      throw error;
    }
  }
}

const sheetsService = new SheetsService();
export default sheetsService; 