import React, { useState, useEffect, useCallback } from 'react';
import { 
  User, 
  Target, 
  Award, 
  Mail, 
  Phone, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Edit, 
  Trash2, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Clock, 
   Lock,
   ExternalLink,
   RefreshCw,
   BookOpen,
   X,
   ArrowLeft,
   ArrowRight,
   ArrowUp,
  ChevronDown, 
  ChevronUp, 
  Star, 
  StarHalf, 
  StarOff 
} from 'lucide-react';


const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if there's an existing auth token
    const token = localStorage.getItem('adminAuth');
    return token === 'true';
  });
  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [formData, setFormData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('timestamp');
  const [sortOrder, setSortOrder] = useState('desc');
  const [taskCompletions, setTaskCompletions] = useState([]);
  const [assessmentSubmissions, setAssessmentSubmissions] = useState([]);
  const [activeTab, setActiveTab] = useState('inquiries');
  console.log('formData:', formData, 'filteredData:', filteredData);

  // Get admin password from environment variable
  const ADMIN_PASSWORD = 'fatima123';

  const filterAndSortData = useCallback(() => {
    let filtered = [...formData];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.course?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.message?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(item => item.status === statusFilter);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'date') {
        aValue = new Date(a.date);
        bValue = new Date(b.date);
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    
    setFilteredData(filtered);
  }, [formData, searchTerm, statusFilter, sortBy, sortOrder]);

  useEffect(() => {
    if (isAuthenticated) {
      loadFormData();
      loadTaskCompletions();
      loadAssessmentSubmissions();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    filterAndSortData();
  }, [filterAndSortData]);

  const loadTaskCompletions = () => {
    // No longer using localStorage - data will be empty
    setTaskCompletions([]);
  };

  const loadAssessmentSubmissions = () => {
    // No longer using localStorage - data will be empty
    setAssessmentSubmissions([]);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordError(false);
      setPassword('');
      // Store authentication state
      localStorage.setItem('adminAuth', 'true');
    } else {
      setShowPasswordError(true);
      setPassword('');
      localStorage.removeItem('adminAuth');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setFormData([]);
    setFilteredData([]);
    setTaskCompletions([]);
        setSearchTerm('');
    setStatusFilter('all');
    setActiveTab('inquiries');
    // Clear authentication state
    localStorage.removeItem('adminAuth');
  };

  const loadFormData = async () => {
    // No longer using localStorage service - data will be empty
    setFormData([]);
  };

  const updateStatus = (id, newStatus) => {
    // No longer using localStorage service
    console.log('Status update not available - localStorage service removed');
  };

  const deleteEntry = (id) => {
    // No longer using localStorage service
    console.log('Delete not available - localStorage service removed');
  };

  const deleteTaskCompletion = (id) => {
    if (window.confirm('Are you sure you want to delete this task completion?')) {
      const updatedCompletions = taskCompletions.filter(completion => completion.id !== id);
      setTaskCompletions(updatedCompletions);
    }
  };

  const deleteAssessmentSubmission = (id) => {
    if (window.confirm('Are you sure you want to delete this assessment submission?')) {
      const updatedSubmissions = assessmentSubmissions.filter(submission => submission.id !== id);
      setAssessmentSubmissions(updatedSubmissions);
    }
  };

  const exportData = () => {
    console.log('Export not available - localStorage service removed');
  };

  const exportTaskCompletions = () => {
    const csvContent = [
      ['Student Name', 'Course Name', 'Task Title', 'GitHub Link', 'Completed At', 'Points'],
      ...taskCompletions.map(completion => [
        completion.studentName,
        completion.courseName,
        completion.taskTitle,
        completion.githubLink,
        new Date(completion.completedAt).toLocaleString(),
        completion.points
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `task-completions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const exportAssessmentSubmissions = () => {
    const csvContent = [
      ['Student Name', 'Student Email', 'Assessment Title', 'Category', 'Score', 'Correct Answers', 'Total Questions', 'Passed', 'Completed At'],
      ...assessmentSubmissions.map(submission => [
        submission.studentName,
        submission.studentEmail,
        submission.assessmentTitle,
        submission.assessmentCategory,
        submission.score,
        submission.correctAnswers,
        submission.totalQuestions,
        submission.passed ? 'Yes' : 'No',
        submission.completedAt
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `assessment-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStats = () => {
    // Use formData instead of calling localStorageService directly
    const data = Array.isArray(formData) ? formData : [];
    const total = data.length;
    const newCount = data.filter(item => item.status === 'new').length;
    const contactedCount = data.filter(item => item.status === 'contacted').length;
    const completedCount = data.filter(item => item.status === 'completed').length;
    
    return {
      total,
      new: newCount,
      contacted: contactedCount,
      completed: completedCount
    };
  };

  const getTaskStats = () => {
    const total = taskCompletions.length;
    const totalPoints = taskCompletions.reduce((sum, completion) => sum + completion.points, 0);
    const uniqueStudents = new Set(taskCompletions.map(completion => completion.studentName)).size;
    const uniqueCourses = new Set(taskCompletions.map(completion => completion.courseName)).size;
    
    return {
      total,
      totalPoints,
      uniqueStudents,
      uniqueCourses
    };
  };

  const getAssessmentStats = () => {
    const total = assessmentSubmissions.length;
    const passed = assessmentSubmissions.filter(submission => submission.passed).length;
    const failed = total - passed;
    const averageScore = total > 0 ? Math.round(assessmentSubmissions.reduce((sum, submission) => sum + submission.score, 0) / total) : 0;
    const uniqueStudents = new Set(assessmentSubmissions.map(submission => submission.studentName)).size;
    
    return {
      total,
      passed,
      failed,
      averageScore,
      uniqueStudents
    };
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-md mx-auto px-4 py-16">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h1>
              <p className="text-gray-600">Enter password to access admin dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              {showPasswordError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">Incorrect password. Please try again.</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                <Lock className="mr-2 h-5 w-5" />
                Login to Admin
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const stats = getStats();
  const taskStats = getTaskStats();
  const assessmentStats = getAssessmentStats();

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage student inquiries, demo class bookings, and task completions</p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
          >
            <X className="mr-2 h-4 w-4" />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <User className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Inquiries</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Task Completions</p>
                <p className="text-2xl font-bold text-gray-900">{taskStats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Assessment Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{assessmentStats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Assessment Score</p>
                <p className="text-2xl font-bold text-gray-900">{assessmentStats.averageScore}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'inquiries'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <User className="inline-block w-4 h-4 mr-2" />
                Student Inquiries ({stats.total})
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'tasks'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Target className="inline-block w-4 h-4 mr-2" />
                Task Completions ({taskStats.total})
              </button>
              <button
                onClick={() => setActiveTab('assessments')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'assessments'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Award className="inline-block w-4 h-4 mr-2" />
                Assessment Submissions ({assessmentStats.total})
              </button>
            </nav>
          </div>
        </div>

        {/* Inquiries Tab Content */}
        {activeTab === 'inquiries' && (
          <>
            {/* Filters and Actions */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search by name, email, phone, or course..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                  </select>

                  <select
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => {
                      const [field, order] = e.target.value.split('-');
                      setSortBy(field);
                      setSortOrder(order);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="timestamp-desc">Newest First</option>
                    <option value="timestamp-asc">Oldest First</option>
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={loadFormData}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh
                  </button>
                  <button
                    onClick={exportData}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </button>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="admin-table">
                  <thead className="bg-gray-50">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Age</th>
                      <th>Country</th>
                      <th>Course</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.age}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.country}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.course}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            item.type === 'demo' 
                              ? 'bg-purple-100 text-purple-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {item.type === 'demo' ? 'Demo Class' : 'Inquiry'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={item.status}
                            onChange={(e) => updateStatus(item.id, e.target.value)}
                            className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${
                              item.status === 'new' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : item.status === 'contacted'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(item.timestamp).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => deleteEntry(item.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Tasks Tab Content */}
        {activeTab === 'tasks' && (
          <>
            {/* Task Actions */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Task Completion Summary</h3>
                  <p className="text-sm text-gray-600">
                    {taskStats.uniqueStudents} students completed {taskStats.totalCompletions} tasks across {taskStats.uniqueCourses} courses
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={loadTaskCompletions}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh
                  </button>
                  <button
                    onClick={exportTaskCompletions}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </button>
                </div>
              </div>
            </div>

            {/* Task Completions Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="admin-table">
                  <thead className="bg-gray-50">
                    <tr>
                      <th>Student Name</th>
                      <th>Course</th>
                      <th>Task</th>
                      <th>Points</th>
                      <th>GitHub Link</th>
                      <th>Completed At</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {taskCompletions.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                          <Target className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                          <p className="text-lg font-medium">No task completions yet</p>
                          <p className="text-sm">Students will appear here when they complete tasks</p>
                        </td>
                      </tr>
                    ) : (
                      taskCompletions.map((completion) => (
                        <tr key={completion.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{completion.studentName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{completion.courseName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{completion.taskTitle}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {completion.points} pts
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a
                              href={completion.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-900 flex items-center"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View Project
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(completion.completedAt).toLocaleDateString()}
                            </div>
                            <div className="text-xs text-gray-500">
                              {new Date(completion.completedAt).toLocaleTimeString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => deleteTaskCompletion(completion.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Assessments Tab Content */}
        {activeTab === 'assessments' && (
          <>
            {/* Assessment Actions */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment Submission Summary</h3>
                  <p className="text-sm text-gray-600">
                    {assessmentStats.uniqueStudents} students completed {assessmentStats.total} assessments
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={loadAssessmentSubmissions}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh
                  </button>
                  <button
                    onClick={exportAssessmentSubmissions}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export CSV
                  </button>
                </div>
              </div>
            </div>

            {/* Assessment Submissions Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="admin-table">
                  <thead className="bg-gray-50">
                    <tr>
                      <th>Student Name</th>
                      <th>Student Email</th>
                      <th>Assessment Title</th>
                      <th>Category</th>
                      <th>Score</th>
                      <th>Correct Answers</th>
                      <th>Total Questions</th>
                      <th>Passed</th>
                      <th>Completed At</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {assessmentSubmissions.length === 0 ? (
                      <tr>
                        <td colSpan="10" className="px-6 py-8 text-center text-gray-500">
                          <Target className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                          <p className="text-lg font-medium">No assessment submissions yet</p>
                          <p className="text-sm">Students will appear here when they submit assessments</p>
                        </td>
                      </tr>
                    ) : (
                      assessmentSubmissions.map((submission) => (
                        <tr key={submission.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{submission.studentName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{submission.studentEmail}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{submission.assessmentTitle}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{submission.assessmentCategory}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {submission.score}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{submission.correctAnswers}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{submission.totalQuestions}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{submission.passed ? 'Yes' : 'No'}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(submission.completedAt).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => deleteAssessmentSubmission(submission.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin; 