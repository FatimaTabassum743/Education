import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Users, 
  Star, 
  Clock, 
  Globe, 
  BookOpen, 
  Code, 
  Smartphone, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Video,
  MessageCircle,
  Database,
  Server,
  Target,
  FileText
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import image from './image.png';

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Live Interactive Classes",
      description: "Learn in real-time with expert instructors and ask questions directly"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Community",
      description: "Connect with students from around the world aged 12-21"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Schedule",
      description: "Classes available in different time zones for international students"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Group Learning",
      description: "Personalized attention with maximum 8 students per class"
    }
  ];

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
      schedule: "Mon, Wed, Fri - 6:00 PM IST",
      nextBatch: "Starting Soon"
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
      icon: <Database className="w-8 h-8" />,
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
      schedule: "Tue, Thu, Sat - 7:00 PM IST",
      nextBatch: "Starting Soon"
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
      icon: <TrendingUp className="w-8 h-8" />,
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
      nextBatch: "Starting Soon"
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
      icon: <Smartphone className="w-8 h-8" />,
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
      nextBatch: "Starting Soon"
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
      nextBatch: "Starting Soon"
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
      icon: <Server className="w-8 h-8" />,
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
      nextBatch: "Starting Soon"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      age: "16",
      country: "India",
      course: "Web Development",
      text: "The live classes are amazing! I learned so much and made friends from different countries.",
      rating: 5
    },
    {
      name: "Alex Johnson",
      age: "18",
      country: "USA",
      course: "AI/ML",
      text: "Best online learning experience! The instructors are experts and very patient with us.",
      rating: 5
    },
    {
      name: "Sarah Ahmed",
      age: "14",
      country: "UAE",
      course: "Digital Marketing",
      text: "I love how interactive the classes are. Learning has never been this fun!",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Students Worldwide" },
    { number: "25+", label: "Countries" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "50+", label: "Live Classes/Month" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  <span>Join 500+ Students from 25+ Countries</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Learn with
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> GenZ</span>
                  <br />
                  <span className="text-3xl md:text-5xl">Live Classes</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ignite your curiosity and unlock your potential! Dive into live, interactive,engaging classes designed just for young minds aged 12-21. Build real skills in MERN Stack Development, Web Development, AI/ML, Python, Digital Marketing, and more.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="btn-primary text-lg px-5 py-2 flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Free Demo Class
                </button>
                <Link
                  to="/courses"
                  className="btn-outline text-lg px-5 py-2 flex items-center justify-center"
                >
                  View All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-600" />
                  <span>Free Demo Class</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-600" />
                  <span>International Students Welcome</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-600" />
                  <span>Age 12-21</span>
                </div>
              </div> */}
            </div>

            <div className="relative">
             <img 
                src={image} 
                alt="Learning Platform" 
                className="w-full h-[75vh] rounded-2xl shadow-2xl hidden sm:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GenZ Learn?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for young learners aged 12-21 with a focus on interactive, engaging, and practical learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Live Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our most popular courses with expert instructors and interactive learning.
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
                    <div className="text-xs text-accent-600">Schedule: {course.schedule}</div>
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
                  
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Free Demo Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access study materials, practice with hands-on tasks, and test your knowledge with assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Notes Feature */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Study Notes</h3>
              <p className="text-gray-600 mb-6">
                Access comprehensive study materials and notes for all courses. 
                Download and study at your own pace with detailed explanations.
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
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-green-200">
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
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-purple-200">
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our global community of young learners aged 12-21.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.age} years • {testimonial.country}</div>
                  </div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.course}</div>
                </div>
              </div>
            ))}
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
              <Calendar className="mr-2 h-5 w-5" />
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
        onClose={() => setIsFormOpen(false)}
        isDemo={true}
      />
    </div>
  );
};

export default Home; 

