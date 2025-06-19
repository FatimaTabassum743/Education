// Google Apps Script Web App Service
// This uses a Google Apps Script web app that you'll create

class SheetsServiceSimple {
  constructor() {
    // Replace with your Google Apps Script web app URL
    this.webAppUrl = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
  }

  // Add new form submission to Google Sheets
  async addFormData(formData) {
    try {
      const data = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        course: formData.course || 'General Inquiry',
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message || 'No message provided',
        demo_request: formData.demo === 'Yes' ? 'Yes' : 'No',
        status: 'New'
      };

      const response = await fetch(this.webAppUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

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
      const response = await fetch(`${this.webAppUrl}?action=getData`);

      if (!response.ok) {
        throw new Error('Failed to fetch data from Google Sheets');
      }

      const data = await response.json();
      return data.submissions || [];
    } catch (error) {
      console.error('Error fetching from Google Sheets:', error);
      throw error;
    }
  }

  // Update status of a submission
  async updateStatus(rowIndex, status) {
    try {
      const response = await fetch(this.webAppUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'updateStatus',
          rowIndex: rowIndex,
          status: status
        })
      });

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

export default new SheetsServiceSimple(); 