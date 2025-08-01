import React, { useState } from 'react';
import { 
  Code, 
  ExternalLink, 
  Github, 
  Globe, 

  FileText, 
  Send,
  X,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import emailjs from 'emailjs-com';

const AssignProjects = () => {
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submissionData, setSubmissionData] = useState({
    studentName: '',
    projectName: '',
    githubCodeLink: '',
    githubHostedLink: ''
  });

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_lzv0n76';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_hywc48o';
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || '92m3Tvs-ztcNiRG6X';

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Build a modern, responsive portfolio website using HTML and CSS. Deploy your site online using GitHub Pages!",
      category: "Web Development",
      difficulty: "Beginner",
      requirements: [
        "Create a responsive design",
        "Include navigation menu",
        "Add sections for About, Skills, Projects, Contact",
        "Use modern CSS techniques",
        "Deploy to GitHub Pages"
      ],
      referenceLink: "https://fatimatabassum743.github.io/Project/",
      points: 150
    },
    {
      id: 2,
      title: "Calculator",
      description: "Design and develop a professional calculator with basic arithmetic operations and user-friendly interface.",
      category: "Web Development",
      difficulty: "Beginner",
      requirements: [
        "Calculator with basic operations like addition, subtraction, multiplication, division",
        "Responsive design",
        "User-friendly interface",
        "Deploy to GitHub Pages"
      ],
      referenceLink: "https://fatimatabassum743.github.io/Calculator/",
      points: 150
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Create a task management system that allows users to add and display all tasks with local storage functionality.",
      category: "Web Development",
      difficulty: "Beginner",
      requirements: [
        "Add a task",
        "Display all tasks",
        "Responsive design",
        "User-friendly interface",
        "Local storage",
        "Deploy to GitHub Pages"
      ],
      referenceLink: "https://fatimatabassum743.github.io/TaskManager/",
      points: 200
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubmissionData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitProject = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send project submission via email FIRST
      const templateParams = {
        from_name: submissionData.studentName,
        from_email: 'project-submission@fiesta-edtech.com',
        phone: 'Not provided',
        age: 'Not provided',
        country: 'Not provided',
        course: selectedProject.title,
        message: `Project Submission Details:

Project: ${selectedProject.title}
Category: ${selectedProject.category}
Difficulty: ${selectedProject.difficulty}

Points: ${selectedProject.points}

Student Details:
- Name: ${submissionData.studentName}
- Project Name: ${submissionData.projectName}

GitHub Links:
- Code Repository: ${submissionData.githubCodeLink}
- Hosted Link: ${submissionData.githubHostedLink}

Project Requirements:
${selectedProject.requirements.map((req, index) => `${index + 1}. ${req}`).join('\n')}

Submitted at: ${new Date().toLocaleString()}`,
        is_demo: 'Project Submission',
        to_name: 'Fiesta EdTech Team'
      };

      // Send email first - this is the most important part
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      // Only after successful email, try to save to localStorage (optional)
      try {
        const projectSubmission = {
          id: Date.now(),
          projectId: selectedProject.id,
          projectTitle: selectedProject.title,
          studentName: submissionData.studentName,
          projectName: submissionData.projectName,
          githubCodeLink: submissionData.githubCodeLink,
          githubHostedLink: submissionData.githubHostedLink,
          submittedAt: new Date().toISOString(),
          points: selectedProject.points
        };

        // Get existing project submissions from localStorage
        const existingSubmissions = JSON.parse(localStorage.getItem('projectSubmissions') || '[]');
        
        // Add new submission
        existingSubmissions.push(projectSubmission);
        
        // Save back to localStorage
        localStorage.setItem('projectSubmissions', JSON.stringify(existingSubmissions));
      } catch (localStorageError) {
        console.warn('LocalStorage save failed, but email was sent successfully:', localStorageError);
        // Don't fail the submission if localStorage fails
      }

      setSubmitStatus('success');
      setSubmissionData({
        studentName: '',
        projectName: '',
        githubCodeLink: '',
        githubHostedLink: ''
      });

      setTimeout(() => {
        setShowSubmissionModal(false);
        setSubmitStatus(null);
        setSelectedProject(null);
      }, 2000);

    } catch (error) {
      console.error('Error submitting project:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openSubmissionModal = (project) => {
    setSelectedProject(project);
    setShowSubmissionModal(true);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Development': return <Code className="w-5 h-5" />;
      case 'JavaScript': return <Code className="w-5 h-5" />;
      case 'React.js': return <Code className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 mt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-10">
            <Code className="inline-block w-8 h-8 mr-3 text-blue-600" />
            Assign Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            List of projects to work on. Complete the requirements and submit your work for review. 
            Each project includes detailed instructions and reference materials.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {getCategoryIcon(project.category)}
                    <span className="ml-2 text-sm font-medium text-gray-600">{project.category}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="space-y-2 mb-4">
                  {/* <div className="flex items-center text-sm text-gray-500">
                     <Clock className="w-4 h-4 mr-2" /> 
                    Duration: {project.duration} 
                  </div>  */}
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Points: {project.points}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.referenceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary flex items-center justify-center text-sm p-1"
                  >
                    <ExternalLink className="w-3 h-4 mr-2" />
                    View Reference
                  </a>
                  <button
                    onClick={() => openSubmissionModal(project)}
                    className="flex-1 btn-primary flex items-center justify-center text-sm p-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submission Modal */}
        {showSubmissionModal && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Submit Project
                  </h2>
                  <button
                    onClick={() => setShowSubmissionModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Project Info */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">{selectedProject.title}</h3>
                  <p className="text-sm text-blue-700">{selectedProject.description}</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          Project submitted successfully!
                        </p>
                        <p className="text-sm text-green-700 mt-1">
                          We'll review your submission and get back to you soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-red-800">
                          Something went wrong!
                        </p>
                        <p className="text-sm text-red-700 mt-1">
                          Please try again or contact us directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmitProject} className="space-y-4">
                  <div>
                    <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={submissionData.studentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Name *
                    </label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      value={submissionData.projectName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your project name"
                    />
                  </div>

                  <div>
                    <label htmlFor="githubCodeLink" className="block text-sm font-medium text-gray-700 mb-1">
                      GitHub Code Link *
                    </label>
                    <div className="flex items-center">
                      <Github className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        type="url"
                        id="githubCodeLink"
                        name="githubCodeLink"
                        value={submissionData.githubCodeLink}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="https://github.com/username/repository"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="githubHostedLink" className="block text-sm font-medium text-gray-700 mb-1">
                      GitHub Hosted Link *
                    </label>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        type="url"
                        id="githubHostedLink"
                        name="githubHostedLink"
                        value={submissionData.githubHostedLink}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="https://username.github.io/repository"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Submit Project
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    By submitting this project, you agree to our{' '}
                    <button 
                      type="button"
                      className="text-primary-600 hover:text-primary-700 font-medium bg-transparent border-none p-0 cursor-pointer"
                      onClick={() => window.open('/privacy-policy', '_blank')}
                    >
                      Privacy Policy
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignProjects; 