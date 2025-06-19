// Airtable Service for Form Data Storage
// Airtable is like Excel but better for web apps

class AirtableService {
  constructor() {
    // Replace with your Airtable configuration
    this.baseId = 'YOUR_AIRTABLE_BASE_ID';
    this.apiKey = 'YOUR_AIRTABLE_API_KEY';
    this.tableName = 'Form Submissions';
  }

  // Add new form submission to Airtable
  async addFormData(formData) {
    try {
      const data = {
        fields: {
          'Name': formData.name,
          'Email': formData.email,
          'Phone': formData.phone || 'Not provided',
          'Course': formData.course || 'General Inquiry',
          'Subject': formData.subject || 'Contact Form Submission',
          'Message': formData.message || 'No message provided',
          'Demo Request': formData.demo === 'Yes' ? 'Yes' : 'No',
          'Status': 'New',
          'Timestamp': new Date().toISOString()
        }
      };

      const response = await fetch(`https://api.airtable.com/v0/${this.baseId}/${encodeURIComponent(this.tableName)}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to save to Airtable');
      }

      return await response.json();
    } catch (error) {
      console.error('Error saving to Airtable:', error);
      throw error;
    }
  }

  // Get all form submissions (for admin view)
  async getFormData() {
    try {
      const response = await fetch(`https://api.airtable.com/v0/${this.baseId}/${encodeURIComponent(this.tableName)}?sort[0][field]=Timestamp&sort[0][direction]=desc`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from Airtable');
      }

      const data = await response.json();
      return data.records.map(record => ({
        id: record.id,
        timestamp: record.fields.Timestamp,
        name: record.fields.Name,
        email: record.fields.Email,
        phone: record.fields.Phone,
        course: record.fields.Course,
        subject: record.fields.Subject,
        message: record.fields.Message,
        demo_request: record.fields['Demo Request'],
        status: record.fields.Status
      }));
    } catch (error) {
      console.error('Error fetching from Airtable:', error);
      throw error;
    }
  }

  // Update status of a submission
  async updateStatus(recordId, status) {
    try {
      const response = await fetch(`https://api.airtable.com/v0/${this.baseId}/${encodeURIComponent(this.tableName)}/${recordId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Status': status
          }
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

const airtableService = new AirtableService();
export default airtableService; 