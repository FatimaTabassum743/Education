import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Download, 
  Eye,
  Calendar,
  Clock,
  User
} from 'lucide-react';

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const notes = [
    {
      id: 1,
      title: "Web Development",
      category: "Web Development",
      description: "Complete guide to HTML basics, tags, and structure",
      content: "# HTML,CSS,Github Fundamentals\n\n## Introduction to HTML\nHTML is the standard markup language for creating web pages.",
      author: "Fatima Tabassum",
      date: "2024-01-15",
      readTime: "15 min",
      downloads: 245,
      driveLink: "https://drive.google.com/drive/u/0/folders/1aZJ7reVMkbQLfsk5dvg0IMsIksIoxjmP"
    },
    {
      id: 2,
      title: "MERN Stack Development",
      category: "MERN Stack",
      description: "Complete guide to MongoDB, Express.js, React.js, and Node.js",
      content: "# MERN Stack Development\n\n## Introduction to MERN Stack\nThe MERN stack consists of MongoDB, Express.js, React.js, and Node.js.",
      author: "Fatima Tabassum",
      date: "2024-01-20",
      readTime: "25 min",
      downloads: 189,
      driveLink: "https://docs.google.com/document1/d/1MERN_Stack_Notes"
    },
    {
      id: 3,
      title: "AI & Machine Learning Basics",
      category: "AI/ML",
      description: "Introduction to artificial intelligence and machine learning concepts",
      content: "# AI & Machine Learning Basics\n\n## Introduction to AI\nArtificial Intelligence is the simulation of human intelligence in machines.",
      author: "Fatima Tabassum",
      date: "2024-01-25",
      readTime: "30 min",
      downloads: 167,
      driveLink: "https://docs.google.com/document1/d/1AI_ML_Notes"
    },
    {
      id: 4,
      title: "Digital Marketing Fundamentals",
      category: "Digital Marketing",
      description: "Complete guide to digital marketing strategies and techniques",
      content: "# Digital Marketing Fundamentals\n\n## Introduction to Digital Marketing\nDigital marketing encompasses all marketing efforts that use electronic devices.",
      author: "Aisha Khan",
      date: "2024-01-30",
      readTime: "20 min",
      downloads: 203,
      driveLink: "https://docs.google.com/document1/d/1Digital_Marketing_Notes"
    },
    {
      id: 5,
      title: "Python Programming",
      category: "Programming",
      description: "Introduction to Python syntax, data types, and control structures",
    
      author: "Fatima Tabassum",
      date: "2024-02-05",
      readTime: "22 min",
      downloads: 156,
      driveLink: "https://docs.google.com/document1/d/1Dwbuv_FjNvDzBpuZwGnTq_S7OQso6B_R/edit"
    },
    {
      id: 6,
      title: "Linux Administration",
      category: "Linux",
      description: "Complete guide to Linux system administration and commands",
      content: "# Linux Administration\n\n## Introduction to Linux\nLinux is a family of open-source Unix-like operating systems.",
      author: "Shaista Sultana",
      date: "2024-02-10",
      readTime: "28 min",
      downloads: 134,
      driveLink: "https://docs.google.com/document1/d/1Linux_Admin_Notes"
    },
    {
      id: 7,
      title: "AWS Cloud Computing",
      category: "Aws",
      description: "Introduction to Amazon Web Services and cloud computing",
      content: "# AWS Cloud Computing\n\n## Introduction to AWS\nAmazon Web Services (AWS) is a comprehensive cloud computing platform.",
      author: "Shaista Sultana",
      date: "2024-02-15",
      readTime: "35 min",
      downloads: 98,
      driveLink: "https://docs.google.com/document1/d/1AWS_Cloud_Notes"
    }
  ];

  const categories = ['all', 'Linux', 'MERN Stack', 'Python', 'Web Development', 'Programming', 'AI/ML', 'Digital Marketing'];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewNotes = (driveLink) => {
    window.open(driveLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mt-9 mb-4">
            <BookOpen className="inline-block w-8 h-8 mr-3 text-blue-600" />
            Study Notes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive study materials and notes for all our courses. 
            Download and study at your own pace.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div key={note.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {note.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Download className="w-4 h-4 mr-1" />
                    {note.downloads}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {note.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {note.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {note.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(note.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {note.readTime}
                  </div>
                  
                  <button 
                    onClick={() => handleViewNotes(note.driveLink)}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Notes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes; 