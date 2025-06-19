// Local Storage Service with CSV Export
// Stores data locally and allows Excel export

class LocalStorageService {
  constructor() {
    this.storageKey = process.env.REACT_APP_LOCALSTORAGE_KEY || 'fiesta_form_submissions';
  }

  // Add new form submission to local storage
  async addFormData(formData) {
    try {
      const submissions = this.getSubmissions();
      
      const newSubmission = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        age: formData.age || 'Not provided',
        country: formData.country || 'Not provided',
        course: formData.course || 'General Inquiry',
        message: formData.message || 'No message provided',
        type: formData.demo === 'Yes' ? 'demo' : 'inquiry',
        status: 'new' // Use lowercase status values
      };

      submissions.unshift(newSubmission); // Add to beginning
      localStorage.setItem(this.storageKey, JSON.stringify(submissions));

      return newSubmission;
    } catch (error) {
      console.error('Error saving to local storage:', error);
      throw error;
    }
  }

  // Get all form submissions
  async getFormData() {
    try {
      return this.getSubmissions();
    } catch (error) {
      console.error('Error fetching from local storage:', error);
      throw error;
    }
  }

  // Update status of a submission
  async updateStatus(submissionId, status) {
    try {
      const submissions = this.getSubmissions();
      const submissionIndex = submissions.findIndex(s => s.id === submissionId);
      
      if (submissionIndex !== -1) {
        submissions[submissionIndex].status = status.toLowerCase(); // Ensure lowercase
        localStorage.setItem(this.storageKey, JSON.stringify(submissions));
        return submissions[submissionIndex];
      }
      
      throw new Error('Submission not found');
    } catch (error) {
      console.error('Error updating status:', error);
      throw error;
    }
  }

  // Get submissions from localStorage
  getSubmissions() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Export to CSV for Excel
  exportToCSV() {
    const submissions = this.getSubmissions();
    
    if (submissions.length === 0) {
      alert('No data to export');
      return;
    }

    const headers = [
      'Timestamp',
      'Name',
      'Email', 
      'Phone',
      'Age',
      'Country',
      'Course',
      'Message',
      'Type',
      'Status'
    ];

    const csvContent = [
      headers.join(','),
      ...submissions.map(submission => [
        submission.timestamp,
        `"${submission.name}"`,
        submission.email,
        `"${submission.phone}"`,
        submission.age,
        `"${submission.country}"`,
        `"${submission.course}"`,
        `"${submission.message}"`,
        submission.type,
        submission.status
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `genz-learn-form-data-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  // Clear all data or specific entry
  clearData(id = null) {
    if (id) {
      // Delete specific entry
      const submissions = this.getSubmissions();
      const filteredSubmissions = submissions.filter(s => s.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(filteredSubmissions));
    } else {
      // Clear all data
      localStorage.removeItem(this.storageKey);
    }
  }

  // Get statistics
  getStats() {
    const submissions = this.getSubmissions();
    return {
      total: submissions.length,
      new: submissions.filter(s => s.status === 'new').length,
      contacted: submissions.filter(s => s.status === 'contacted').length,
      completed: submissions.filter(s => s.status === 'completed').length,
      demo: submissions.filter(s => s.type === 'demo').length
    };
  }
}

const localStorageService = new LocalStorageService();
export default localStorageService; 