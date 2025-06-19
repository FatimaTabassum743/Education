import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, X, ChevronDown } from 'lucide-react';

const SERVICE_ID = 'service_lzv0n76';
const TEMPLATE_ID = 'template_hywc48o';
const USER_ID = '92m3Tvs-ztcNiRG6X';

const ContactFormSimple = ({ isOpen, onClose, courseTitle = null, isDemo = false }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(courseTitle || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const courses = [
    'Web Development',
    'MERN Stack',
    'AWS DevOps',
    'Python Programming',
    'AWS Linux',
    'Digital Marketing & SEO',
    'AI/ML',
    'Mathematics',
    'General Inquiry'
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Get form data
    const formData = new FormData(form.current);
    const formObject = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
      formObject[key] = value;
    }
    
    // Prepare email data
    const emailData = {
      name: formObject.name || 'Not provided',
      email: formObject.email || 'Not provided',
      title: formObject.subject || 'Contact Form Submission',
      message: formObject.message || 'No message provided',
      time: new Date().toLocaleString(),
      course: selectedCourse || 'General Inquiry',
      demo: isDemo ? 'Yes' : 'No',
      phone: formObject.phone || 'Not provided'
    };
    
    console.log('📧 EmailJS Data being sent:', emailData);
    
    // Send email using emailjs.send()
    emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, USER_ID)
      .then((result) => {
        console.log('✅ Email sent successfully:', result);
        setSent(true);
        setLoading(false);
        setTimeout(() => {
          onClose();
          setSent(false);
          setSelectedCourse('');
        }, 3000);
      }, (error) => {
        console.error('❌ Email sending failed:', error);
        setError('Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setIsDropdownOpen(false);
  };

  const getSubjectPlaceholder = () => {
    if (isDemo) {
      return selectedCourse && selectedCourse !== 'General Inquiry' 
        ? `Demo request for ${selectedCourse}` 
        : "Demo request for course";
    }
    return selectedCourse && selectedCourse !== 'General Inquiry'
      ? `Inquiry about ${selectedCourse}`
      : "What can we help you with?";
  };

  const getMessagePlaceholder = () => {
    if (isDemo) {
      return selectedCourse && selectedCourse !== 'General Inquiry'
        ? `I'm interested in booking a free demo for the ${selectedCourse} course. Please provide more details about the curriculum and schedule.`
        : "Tell us about your learning goals and preferred demo time...";
    }
    return selectedCourse && selectedCourse !== 'General Inquiry'
      ? `I'm interested in the ${selectedCourse} course. Please provide more details about the curriculum, duration, and pricing.`
      : "Your message...";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isDemo ? 'Book Free Demo' : 'Contact Us'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Course Title Display */}
          {courseTitle && (
            <div className="mb-4 p-3 bg-primary-50 rounded-lg">
              <p className="text-sm text-gray-600">Course:</p>
              <p className="font-semibold text-primary-600">{courseTitle}</p>
            </div>
          )}

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Name *</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" 
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email *</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" 
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" 
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            {/* Course Selection Dropdown */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">Select Course *</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white flex items-center justify-between"
                >
                  <span className={selectedCourse ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedCourse || 'Choose a course...'}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {courses.map((course, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleCourseSelect(course)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b last:border-b-0"
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">Subject *</label>
              <input 
                type="text" 
                name="subject" 
                required 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" 
                placeholder={getSubjectPlaceholder()}
                defaultValue={getSubjectPlaceholder()}
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">Message *</label>
              <textarea 
                name="message" 
                rows="4" 
                required 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder={getMessagePlaceholder()}
                defaultValue={getMessagePlaceholder()}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full btn-primary flex items-center justify-center" 
              disabled={loading || !selectedCourse}
            >
              <Send className="mr-2 h-5 w-5" />
              {loading ? 'Sending...' : (isDemo ? 'Book Demo' : 'Send Message')}
            </button>
            
            {sent && (
              <p className="text-green-600 font-medium text-center">
                {isDemo ? 'Demo request sent successfully! We\'ll contact you soon.' : 'Message sent successfully!'}
              </p>
            )}
            
            {error && (
              <p className="text-red-600 font-medium text-center">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSimple; 