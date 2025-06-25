import React, { useState } from 'react';
import { 
  CheckCircle, 
  Circle, 
  Play, 
  Clock, 
  Calendar,
  BookOpen,
  Code,
  Target,
  Award,
  Users,
  X
} from 'lucide-react';

const Tasks = () => {
  const [enabledTasks, setEnabledTasks] = useState([1]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    courseName: '',
    githubLink: ''
  });

  const tasks = [
    {
      id: 1,
      title: "Task: Web Development",
      description: "Learn HTML,css, github,js fundamentals and create your first webpage",
      duration: "2 hours",
      difficulty: "Beginner",
      category: "Web Development",
      requirements: [
        "Learn HTML,Css,Github, tutorial",
        "Build Same  webpage Given in the task",
        "Submit assignment"
      ],
      instructions: `
# Task 1: HTML Basics

## Objective
Create a simple webpage using HTML to demonstrate your understanding of basic HTML elements.

## Requirements
1. Create an HTML file with proper structure
2. Include at least 3 different heading levels (h1, h2, h3)
3. Add paragraphs with some text content
4. Include an ordered list and an unordered list
5. Add at least 2 images (you can use placeholder images)
6. Create a simple form with name and email fields
7. Add a table with at least 3 rows and 3 columns

## Submission
- Save your file as "task1.html"
- Test your webpage in a browser
- Submit the file through the assignment portal

## Evaluation Criteria
- Proper HTML structure
- Correct use of HTML tags
- Clean and readable code
- All requirements met
      `,
      dueDate: "2024-02-15",
      points: 100,
      taskLink: "https://fatimatabassum743.github.io/WebDevelopmentTasks/"
    },
    {
      id: 2,
      title: "Task: MERN Stack Development",
      description: "Build a full-stack web application using MongoDB, Express.js, React.js, and Node.js",
      duration: "4 hours",
      difficulty: "Intermediate",
      category: "MERN Stack",
      requirements: [
        "Set up MongoDB database",
        "Create Express.js backend API",
        "Build React.js frontend",
        "Connect frontend and backend",
        "Deploy application"
      ],
      instructions: `
# Task 2: MERN Stack Application

## Objective
Create a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Requirements
1. Set up a MongoDB database with at least 2 collections
2. Create RESTful API endpoints using Express.js
3. Build a React.js frontend with at least 3 components
4. Implement CRUD operations
5. Add form validation and error handling
6. Deploy the application to a hosting platform

## Submission
- GitHub repository with complete code
- Live demo link
- README with setup instructions

## Evaluation Criteria
- Proper MERN stack implementation
- Clean code structure
- Functional CRUD operations
- Responsive design
- Error handling
      `,
      dueDate: "2024-03-01",
      points: 150,
      taskLink: "https://github.com/example/mern-stack-project"
    },
    {
      id: 3,
      title: "Task: AI & Machine Learning",
      description: "Implement a machine learning model and create a simple AI application",
      duration: "3 hours",
      difficulty: "Intermediate",
      category: "AI/ML",
      requirements: [
        "Choose a dataset for analysis",
        "Implement ML algorithm",
        "Train and evaluate model",
        "Create prediction interface",
        "Document results and insights"
      ],
      instructions: `
# Task 3: Machine Learning Project

## Objective
Build a machine learning model and create an application that demonstrates AI capabilities.

## Requirements
1. Select an appropriate dataset (classification, regression, or clustering)
2. Implement at least one ML algorithm (Random Forest, Linear Regression, K-means, etc.)
3. Preprocess data and handle missing values
4. Train the model and evaluate performance
5. Create a simple web interface for predictions
6. Document your findings and model performance

## Submission
- Jupyter notebook with complete analysis
- Python scripts for model training
- Web interface for predictions
- Performance metrics and insights report

## Evaluation Criteria
- Proper data preprocessing
- Model selection and implementation
- Performance evaluation
- Code quality and documentation
- Practical application
      `,
      dueDate: "2024-03-15",
      points: 200,
      taskLink: "https://github.com/example/ai-ml-project"
    },
    {
      id: 4,
      title: "Task: Digital Marketing",
      description: "Create and execute a digital marketing campaign with analytics tracking",
      duration: "2.5 hours",
      difficulty: "Intermediate",
      category: "Digital Marketing",
      requirements: [
        "Define target audience",
        "Create marketing content",
        "Set up social media campaign",
        "Implement tracking tools",
        "Analyze campaign performance"
      ],
      instructions: `
# Task 4: Digital Marketing Campaign

## Objective
Plan, create, and execute a digital marketing campaign with proper analytics and tracking.

## Requirements
1. Define target audience and create buyer personas
2. Develop marketing content (blog posts, social media posts, email campaigns)
3. Set up social media accounts and create posting schedule
4. Implement Google Analytics and social media tracking
5. Create landing page with conversion tracking
6. Run campaign for at least 1 week and analyze results

## Submission
- Marketing strategy document
- Content calendar and samples
- Analytics dashboard screenshots
- Campaign performance report
- Recommendations for optimization

## Evaluation Criteria
- Audience targeting accuracy
- Content quality and consistency
- Campaign execution
- Analytics implementation
- Performance analysis
      `,
      dueDate: "2024-03-10",
      points: 120,
      taskLink: "https://example.com/marketing-campaign"
    },
    {
      id: 5,
      title: "Task: Python Programming",
      description: "Build a Python application demonstrating advanced programming concepts",
      duration: "3 hours",
      difficulty: "Intermediate",
      category: "Python Programming",
      requirements: [
        "Use object-oriented programming",
        "Implement data structures",
        "Handle file operations",
        "Add error handling",
        "Create unit tests"
      ],
      instructions: `
# Task 5: Python Application Development

## Objective
Create a comprehensive Python application that demonstrates advanced programming concepts.

## Requirements
1. Use object-oriented programming with classes and inheritance
2. Implement various data structures (lists, dictionaries, sets, tuples)
3. Handle file operations (read, write, append)
4. Implement proper error handling with try-catch blocks
5. Create unit tests for your functions
6. Use external libraries (pandas, requests, etc.)
7. Create a command-line interface or simple GUI

## Submission
- Complete Python application with source code
- Unit test files
- Requirements.txt file
- Documentation and user guide
- Sample data files

## Evaluation Criteria
- Code structure and organization
- Proper use of OOP concepts
- Error handling implementation
- Test coverage
- Documentation quality
      `,
      dueDate: "2024-03-20",
      points: 130,
      taskLink: "https://github.com/example/python-project"
    },
    {
      id: 6,
      title: "Task: Linux Administration",
      description: "Set up and configure a Linux server with essential services",
      duration: "2 hours",
      difficulty: "Intermediate",
      category: "Linux Administration",
      requirements: [
        "Install and configure Linux distribution",
        "Set up user management",
        "Configure network services",
        "Implement security measures",
        "Monitor system performance"
      ],
      instructions: `
# Task 6: Linux Server Administration

## Objective
Set up and configure a Linux server with essential services and security measures.

## Requirements
1. Install a Linux distribution (Ubuntu/CentOS) on virtual machine
2. Configure user accounts and permissions
3. Set up SSH access with key-based authentication
4. Install and configure web server (Apache/Nginx)
5. Configure firewall rules
6. Set up monitoring tools
7. Create backup and recovery procedures

## Submission
- Screenshots of server setup
- Configuration files
- User management documentation
- Security checklist
- Performance monitoring report

## Evaluation Criteria
- Proper server installation
- Security configuration
- Service setup and configuration
- Documentation quality
- Troubleshooting skills
      `,
      dueDate: "2024-03-25",
      points: 140,
      taskLink: "https://example.com/linux-admin-guide"
    },
    {
      id: 7,
      title: "Task: AWS Cloud Computing",
      description: "Deploy and manage applications on AWS cloud infrastructure",
      duration: "3.5 hours",
      difficulty: "Advanced",
      category: "AWS Cloud Computing",
      requirements: [
        "Set up AWS account and IAM",
        "Deploy EC2 instances",
        "Configure S3 storage",
        "Set up RDS database",
        "Implement auto-scaling"
      ],
      instructions: `
# Task 7: AWS Cloud Infrastructure

## Objective
Design, deploy, and manage a scalable application on AWS cloud infrastructure.

## Requirements
1. Set up AWS account with proper IAM roles and permissions
2. Deploy EC2 instances with proper security groups
3. Configure S3 buckets for static content storage
4. Set up RDS database instance
5. Configure load balancer and auto-scaling groups
6. Implement monitoring and logging
7. Create backup and disaster recovery plan

## Submission
- AWS architecture diagram
- Infrastructure as Code (CloudFormation/Terraform)
- Deployment documentation
- Cost analysis report
- Security assessment

## Evaluation Criteria
- AWS service utilization
- Security best practices
- Scalability implementation
- Cost optimization
- Documentation and monitoring
      `,
      dueDate: "2024-04-01",
      points: 180,
      taskLink: "https://github.com/example/aws-infrastructure"
    }
  ];

  const toggleTask = (taskId) => {
    // Prevent web development task (id: 1) from being disabled
    if (taskId === 1) {
      return; // Do nothing - web development task stays enabled
    }
    
    if (enabledTasks.includes(taskId)) {
      setEnabledTasks(enabledTasks.filter(id => id !== taskId));
    } else {
      setEnabledTasks([...enabledTasks, taskId]);
    }
  };

  const handleMarkComplete = (task) => {
    setSelectedTask(task);
    setShowCompletionModal(true);
  };

  const handleSubmitCompletion = () => {
    if (!studentInfo.name || !studentInfo.courseName || !studentInfo.githubLink) {
      alert('Please fill in all fields');
      return;
    }

    // Create completion record
    const completionRecord = {
      id: Date.now(),
      taskId: selectedTask.id,
      taskTitle: selectedTask.title,
      studentName: studentInfo.name,
      courseName: studentInfo.courseName,
      githubLink: studentInfo.githubLink,
      completedAt: new Date().toISOString(),
      points: selectedTask.points
    };

    // Get existing completions from localStorage
    const existingCompletions = JSON.parse(localStorage.getItem('taskCompletions') || '[]');
    
    // Add new completion
    const updatedCompletions = [...existingCompletions, completionRecord];
    
    // Save to localStorage
    localStorage.setItem('taskCompletions', JSON.stringify(updatedCompletions));

    // Mark task as completed in state
    if (!completedTasks.includes(selectedTask.id)) {
      setCompletedTasks([...completedTasks, selectedTask.id]);
    }

    // Reset form and close modal
    setStudentInfo({ name: '', courseName: '', githubLink: '' });
    setShowCompletionModal(false);
    setSelectedTask(null);

    alert('Task completed successfully! Your submission has been recorded.');
  };

  const handleStartTask = (taskLink) => {
    window.open(taskLink, '_blank');
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
      case 'MERN Stack': return <Code className="w-5 h-5" />;
      case 'AI/ML': return <Target className="w-5 h-5" />;
      case 'Digital Marketing': return <Users className="w-5 h-5" />;
      case 'Python Programming': return <Code className="w-5 h-5" />;
      case 'Linux Administration': return <Code className="w-5 h-5" />;
      case 'AWS Cloud Computing': return <Target className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 mt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <Target className="inline-block w-8 h-8 mr-3 text-blue-600" />
            Course Tasks
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete tasks to progress through your course. The Web Development task is always enabled. 
            Click on other tasks to enable them, then work through the requirements to earn points.
          </p>
        </div>

        {/* Progress Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{tasks.length}</div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{enabledTasks.length}</div>
              <div className="text-sm text-gray-600">Enabled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{completedTasks.length}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {completedTasks.reduce((total, taskId) => {
                  const task = tasks.find(t => t.id === taskId);
                  return total + (task ? task.points : 0);
                }, 0)}
              </div>
              <div className="text-sm text-gray-600">Points Earned</div>
            </div>
          </div>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tasks.map((task) => {
            const isEnabled = enabledTasks.includes(task.id);
            const isCompleted = completedTasks.includes(task.id);
            
            return (
              <div 
                key={task.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                  isEnabled ? 'ring-2 ring-blue-500' : ''
                } ${isCompleted ? 'ring-2 ring-green-500' : ''}`}
              >
                <div className="p-6">
                  {/* Task Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className={`p-2 rounded-full transition-colors duration-200 ${
                          task.id === 1 
                            ? 'bg-green-100 text-green-600 cursor-not-allowed' // Web Development task - always enabled
                            : isEnabled 
                              ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                        }`}
                        title={task.id === 1 ? 'Web Development task is always enabled' : ''}
                      >
                        {isEnabled ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                      </button>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {task.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(task.difficulty)}`}>
                            {task.difficulty}
                          </span>
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                            {task.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{task.points}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </div>
                  </div>

                  {/* Task Description */}
                  <p className="text-gray-600 mb-4">
                    {task.description}
                  </p>

                  {/* Task Details */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {task.duration}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Requirements */}
                  {isEnabled && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {task.requirements.map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Circle className="w-3 h-3 mr-2 text-gray-400" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {isEnabled && !isCompleted && (
                      <button
                        onClick={() => handleMarkComplete(task)}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-colors duration-200"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        Submit
                      </button>
                    )}
                    
                    {isEnabled && (
                      <button 
                        onClick={() => handleStartTask(task.taskLink)}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors duration-200"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {isCompleted ? 'Review Task' : 'Start Task'}
                      </button>
                    )}
                  </div>

                  {/* Status */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        Status: {isCompleted ? 'Completed' : isEnabled ? 'Enabled' : 'Disabled'}
                      </span>
                      {isCompleted && (
                        <span className="text-green-600 font-medium">
                          ✓ Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">How to Use Tasks</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-blue-800">
            <div className="flex items-start">
              <Circle className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
              <div>
                <strong>1. Task Status:</strong> Web Development task is always enabled. Other tasks can be toggled on/off
              </div>
            </div>
            <div className="flex items-start">
              <Play className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
              <div>
                <strong>2. Start Working:</strong> Click "Start Task" to begin working on the requirements
              </div>
            </div>
            <div className="flex items-start">
              <Award className="w-5 h-5 mr-2 mt-0.5 text-blue-600" />
              <div>
                <strong>3. Mark Complete:</strong> Click "Submit" when you finish the task
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-600" />
              <div>
                <strong>4. Track Progress:</strong> Monitor your completed tasks and earned points
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Complete Task: {selectedTask?.title}
              </h3>
              <button
                onClick={() => {
                  setShowCompletionModal(false);
                  setSelectedTask(null);
                  setStudentInfo({ name: '', courseName: '', githubLink: '' });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={studentInfo.name}
                  onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Name *
                </label>
                <select
                  value={studentInfo.courseName}
                  onChange={(e) => setStudentInfo({ ...studentInfo, courseName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="MERN Stack">MERN Stack</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Python Programming">Python Programming</option>
                  <option value="Linux Administration">Linux Administration</option>
                  <option value="AWS Cloud Computing">AWS Cloud Computing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GitHub Link *
                </label>
                <input
                  type="url"
                  value={studentInfo.githubLink}
                  onChange={(e) => setStudentInfo({ ...studentInfo, githubLink: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://github.com/yourusername/project"
                />
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Please ensure your GitHub repository contains the completed task work and is publicly accessible for review.
                </p>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowCompletionModal(false);
                  setSelectedTask(null);
                  setStudentInfo({ name: '', courseName: '', githubLink: '' });
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitCompletion}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Submit Completion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks; 