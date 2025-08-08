import React, { useState } from 'react';
import { 
  Code, 
  Clock, 
  Users, 
  Star, 
  Play,
  FileText, 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Award, 
  BookOpen, 
  Video, 
  Globe, 
  Calendar, 
  MessageCircle, 
  Send, 
  ExternalLink, 
  X, 
  AlertCircle, 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  ChevronDown, 
  ChevronUp, 
  StarHalf, 
  StarOff 
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import EnhancedSEO from '../components/EnhancedSEO';
import ProtectedButton from '../components/ProtectedButton';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Courses = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Web Development With AI",
      subtitle: "Web Development",
      description: "Learn to build modern websites and web applications from scratch. Perfect for beginners aged 12-21.",
      price: "₹2,999",
      originalPrice: "₹4,999",
      duration: "8 weeks",
      level: "Beginner",
      students: "150+",
      rating: 4.8,
      reviews: 89,
      icon: <Code className="w-8 h-8" />,
      features: [
        "HTML, CSS & JavaScript,Github Fundamentals, How to use GenAI effectively in Web Development",
      
        "Deployment & Hosting",
        "Live Projects & Portfolio Building",
        "24/7 Doubt Support",
        "Certificate of Completion"
      ],
      // schedule: "Mon, Wed, Fri - 6:00 PM IST",
      nextBatch: "Starting Soon",
      // instructor: "Fatima Tabassum",
      // instructorExp: "5+ years in Web Development"
    },
    {
      id: 2,
      title: "MERN Stack With AI",
      subtitle: "Complete Full Stack",
      description: "Master the complete MERN stack (MongoDB, Express.js, React.js, Node.js) to build full-stack applications using AI Tools,Become a Next generation Full Stack Developer",
      price: "₹4,999",
      originalPrice: "₹6,999",
      duration: "12 weeks",
      level: "Intermediate",
      students: "120+",
      rating: 4.9,
      reviews: 67,
      icon: <Code className="w-8 h-8" />,
      features: [
        "MongoDB Database Design",
        "Express.js Backend Development",
        "React.js Frontend Framework",
        "Node.js Server Development",
        "RESTful API Development",
        "Authentication & Authorization",
        "Real-time Applications",
        "Full Stack Projects"
      ],
      // schedule: "Tue, Thu, Sat - 7:00 PM IST",
      nextBatch: "Starting Soon",
      // instructor: "Fatima Tabassum",
      // instructorExp: "6+ years in MERN Stack"
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      subtitle: "Future Technology",
      description: "Master artificial intelligence and machine learning. Build AI models and understand the future of technology.",
      price: "₹2,499",
      originalPrice: "₹3,499",
      duration: "8 weeks",
      level: "Beginner",
      students: "120+",
      rating: 4.9,
      reviews: 67,
      icon: <Code className="w-8 h-8" />,
      features: [
        "Python Programming Fundamentals",
        "Data Science & Analytics",
        "Machine Learning Algorithms",
        "Deep Learning with TensorFlow",
        "Natural Language Processing",
        "Computer Vision Projects",
        "AI Model Deployment",
        "Industry Case Studies"
      ],
      schedule: "Tue, Thu, Sat - 7:00 PM IST",
      nextBatch: "Starting Soon",
      // instructor: "Priya Patel",
      // instructorExp: "8+ years in AI/ML"
    },
    {
      id: 4,
      title: "Digital Marketing",
      subtitle: "Social Media & SEO",
      description: "Learn digital marketing strategies, social media management, and SEO to build your online presence.",
      price: "₹2,499",
      originalPrice: "₹3,499",
      duration: "10 weeks",
      level: "Beginner",
      students: "200+",
      rating: 4.7,
      reviews: 134,
      icon: <Code className="w-8 h-8" />,
      features: [
        "Social Media Marketing",
        "Search Engine Optimization (SEO)",
        "Content Marketing & Creation",
        "Google Ads & Facebook Ads",
        "Email Marketing Campaigns",
        "Analytics & Performance Tracking",
        "Brand Building Strategies",
        "Freelancing Opportunities"
      ],
      schedule: "Mon, Wed, Fri - 5:00 PM IST",
      nextBatch: "Starting Soon",
      // instructor: "Shaista Sultana",
      // instructorExp: "6+ years in Digital Marketing"
    },
    {
      id: 5,
      title: "Python Programming",
      subtitle: "Coding for Beginners",
      description: "Start your coding journey with Python. Learn programming fundamentals and build real-world projects.",
      price: "₹1,499",
      originalPrice: "₹2,499",
      duration: "6 weeks",
      level: "Beginner",
      students: "300+",
      rating: 4.8,
      reviews: 156,
      icon: <Code className="w-8 h-8" />,
      features: [
        "Python Basics & Syntax",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "File Handling & APIs",
        "Web Scraping Projects",
        "Automation Scripts",
        "Game Development",
        "Mini Projects Portfolio"
      ],
      schedule: "Tue, Thu, Sat - 4:00 PM IST",
      nextBatch: "Starting Soon",
      // instructor: "Fatima Tabassum",
      // instructorExp: "4+ years in Python Development"
    },
    {
      id: 6,
      title: "Linux Administration",
      subtitle: "Server Management",
      description: "Master Linux administration and server management. Learn command line, system administration, and DevOps basics.",
      price: "₹999",
      originalPrice: "₹1,999",
      duration: "10 weeks",
      level: "Intermediate",
      students: "100+",
      rating: 4.8,
      reviews: 78,
      icon: <Code className="w-8 h-8" />,
      features: [
        "Linux Fundamentals & Commands",
        "System Administration",
        "User & Permission Management",
        "Network Configuration",
        "Shell Scripting",
        "Server Security",
        "Docker & Containerization",
        "DevOps Basics"
      ],
      schedule: "Wed, Fri, Sun - 8:00 PM IST",
      nextBatch: "Starting Soon",
      // instructor: "Shaista Sultana",
      // instructorExp: "7+ years in Linux & DevOps"
    },
    {
      id: 7,
      title: "AWS Cloud Computing",
      subtitle: "Cloud Infrastructure",
      description: "Learn Amazon Web Services and cloud computing. Deploy applications and manage cloud infrastructure.",
      price: "₹3,999",
      originalPrice: "₹4,999",
      duration: "10 weeks",
      level: "Intermediate",
      students: "80+",
      rating: 4.9,
      reviews: 45,
      icon: <Code className="w-8 h-8" />,
      features: [
        "AWS Fundamentals & Services",
        "EC2 & Virtual Machines",
        "S3 Storage & Database Services",
        "Lambda & Serverless Computing",
        "Cloud Security & IAM",
        "DevOps & CI/CD Pipeline",
        "Cost Optimization",
        "AWS Certification Prep"
      ],
      schedule: "Wed, Fri, Sun - 8:00 PM IST",
      nextBatch: "Starting Soon",
      // instructor: "Shaista Sultana",
      // instructorExp: "7+ years in Cloud Computing"
    }
  ];

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Live Interactive Classes",
      description: "Real-time learning with expert instructors"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Group Learning",
      description: "Maximum 8 students per class for personalized attention"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Community",
      description: "Connect with students from 25+ countries"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Schedule",
      description: "Classes available in different time zones"
    }
  ];

  const handleBookDemo = (course) => {
    setSelectedCourse(course);
    setIsFormOpen(true);
  };

  const handleWhatsAppInquiry = (course) => {
    const message = `Hi! I'm interested in the ${course.title} course. Can you provide more details about:
- Course curriculum and duration
- Schedule and timing
- Pricing and payment options
- Demo class availability

Thank you!`;
    
    const whatsappUrl = `https://wa.me/8142200317?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <EnhancedSEO 
        title="Online Coding Courses - Web Development, MERN Stack, AI/ML | KodeZ Academy"
        description="Explore our live online coding courses: Web Development with AI, MERN Stack, AI/ML, and Digital Marketing. Expert instructors, small group classes, and global community for students 12-21."
        keywords={['online coding courses', 'web development course', 'MERN stack course', 'AI machine learning course', 'digital marketing course', 'live programming classes', 'coding for students']}
        type="website"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Courses', url: '/courses' }
        ]}
      />
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Live Classes for
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Young Learners</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our interactive live classes designed specifically for students aged 12-21. 
              Learn from expert instructors and connect with peers from around the world.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600">
              All courses include live classes, projects, and 24/7 support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Course Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                      <div className="text-white">
                        {course.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{course.price}</div>
                      <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-2">{course.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span>{course.rating}</span>
                      <span className="text-gray-400 ml-1">({course.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="bg-accent-50 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-accent-800 mb-1">Next Batch: {course.nextBatch}</div>
                    {/* <div className="text-xs text-accent-600">Schedule: {course.schedule}</div> */}
                  </div>
                </div>

                {/* Course Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                

                  <div className="space-y-3">
                    <button
                      onClick={() => handleBookDemo(course)}
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Free Demo Class
                    </button>
                    
                    <button
                      onClick={() => handleWhatsAppInquiry(course)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      Ask on WhatsApp
                    </button>

                    {/* <button
                      onClick={() => window.open('/notes', '_blank')}
                      disabled={course.title !== "Web Development"}
                      className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center ${
                        course.title === "Web Development"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      {course.title === "Web Development" ? "View Notes" : "Notes Coming Soon"}
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Learning Experience
            </h2>
            <p className="text-xl text-gray-600">
              Access study materials, complete tasks, and test your knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Notes Feature */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Study Notes</h3>
              <p className="text-gray-600 mb-6">
                Access comprehensive study materials and notes for all courses. 
                Download and study at your own pace with detailed explanations and examples.
              </p>
              <Link
                to="/notes"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Notes
              </Link>
            </div>

            {/* Tasks Feature */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Tasks</h3>
              <p className="text-gray-600 mb-6">
                Complete hands-on tasks and assignments to reinforce your learning. 
                Track your progress and earn points as you master new skills.
              </p>
              <Link
                to="/tasks"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Target className="w-4 h-4 mr-2" />
                View Tasks
              </Link>
            </div>

            {/* Assessments Feature */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assessments</h3>
              <p className="text-gray-600 mb-6">
                Test your knowledge with interactive quizzes and assessments. 
                Get instant feedback and track your learning progress over time.
              </p>
              <Link
                to="/assessments"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                <FileText className="w-4 h-4 mr-2" />
                Take Tests
              </Link>
            </div>

            {/* Certificate Feature */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certificates</h3>
              <p className="text-gray-600 mb-6">
                Earn professional certificates upon course completion. 
                Download, print, and share your achievements with employers and on social media.
              </p>
              <Link
                to="/certificate"
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-200"
              >
                <Award className="w-4 h-4 mr-2" />
                View Certificates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join our global community of young learners. Book your free demo class today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Book Free Demo Class
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => {
          setIsFormOpen(false);
          setSelectedCourse(null);
        }}
        courseTitle={selectedCourse?.title}
        isDemo={true}
      />
      </div>
    </>
  );
};

export default Courses; 