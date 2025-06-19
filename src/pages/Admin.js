import React, { useState, useEffect, useCallback } from 'react';
import { 
  Download, 
  Filter, 
  Trash2, 
  Eye,
  CheckCircle,
  Clock,
  MessageSquare,
  BookOpen,
  RefreshCw,
  User,
  Lock,
  X
} from 'lucide-react';
import localStorageService from '../services/localStorageService';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [formData, setFormData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('timestamp');
  const [sortOrder, setSortOrder] = useState('desc');
  console.log('formData:', formData, 'filteredData:', filteredData);

  const ADMIN_PASSWORD = 'fatima123';

  const filterAndSortData = useCallback(() => {
    // Ensure formData is always an array
    const data = Array.isArray(formData) ? formData : [];
    console.log('filterAndSortData called with data:', data);
    let filtered = [...data];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone?.includes(searchTerm) ||
        item.course?.toLowerCase().includes(searchTerm.toLowerCase())
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

      if (sortBy === 'timestamp') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    console.log('Setting filteredData to:', filtered);
    setFilteredData(filtered);
  }, [formData, searchTerm, statusFilter, sortBy, sortOrder]);

  useEffect(() => {
    if (isAuthenticated) {
      loadFormData();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    filterAndSortData();
  }, [filterAndSortData]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordError(false);
      setPassword('');
    } else {
      setShowPasswordError(true);
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setFormData([]);
    setFilteredData([]);
    setSearchTerm('');
    setStatusFilter('all');
  };

  const loadFormData = async () => {
    try {
      const data = await localStorageService.getFormData();
      const safeData = Array.isArray(data) ? data : [];
      setFormData(safeData);
    } catch (error) {
      console.error('Error loading form data:', error);
      setFormData([]);
    }
  };

  const updateStatus = (id, newStatus) => {
    localStorageService.updateStatus(id, newStatus);
    loadFormData();
  };

  const deleteEntry = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      localStorageService.clearData(id);
      loadFormData();
    }
  };

  const exportData = () => {
    localStorageService.exportToCSV(filteredData);
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

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage student inquiries and demo class bookings</p>
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
                <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New</p>
                <p className="text-2xl font-bold text-gray-900">{stats.new}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Contacted</p>
                <p className="text-2xl font-bold text-gray-900">{stats.contacted}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
              </div>
            </div>
          </div>
        </div>

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
                      <div className="text-xs text-gray-500">
                        {new Date(item.timestamp).toLocaleTimeString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            // View details - you can implement a modal here
                            alert(`Name: ${item.name}\nEmail: ${item.email}\nPhone: ${item.phone}\nAge: ${item.age}\nCountry: ${item.country}\nCourse: ${item.course}\nMessage: ${item.message || 'No message'}`);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteEntry(item.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin; 