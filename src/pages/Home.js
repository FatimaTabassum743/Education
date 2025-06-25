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
      title: "Web Development",
      description: "Build modern websites and web applications",
      price: "₹2,999",
      duration: "8 weeks",
      level: "Beginner",
      icon: <Code className="w-8 h-8" />,
      features: ["HTML, CSS, JavaScript", "Github", "Responsive Design", "Live Projects"]
    },
    {
      title: "MERN Stack",
      description: "Complete full-stack development with MERN",
      price: "₹4,999",
      duration: "12 weeks",
      level: "Intermediate",
      icon: <Database className="w-8 h-8" />,
      features: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      title: "AI & Machine Learning",
      description: "Learn the future of technology with AI/ML",
      price: "₹1,999",
      duration: "8 weeks",
      level: "Intermediate",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Python Programming", "Data Science", "Machine Learning", "AI Projects"]
    },
    {
      title: "Digital Marketing",
      description: "Master social media and online marketing",
      price: "₹2,499",
      duration: "10 weeks",
      level: "Beginner",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Social Media Marketing", "SEO", "Content Creation", "Analytics"]
    },
    {
      title: "Linux Administration",
      description: "Master Linux and server management",
      price: "₹999",
      duration: "4 weeks",
      level: "Beginner",
      icon: <Server className="w-8 h-8" />,
      features: ["Linux Commands", "System Admin", "Shell Scripting", "DevOps"]
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
                  Join our global community of students aged 12-21. Learn from expert instructors in interactive live classes. 
                  Web Development, AI/ML, Digital Marketing & more!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="btn-primary text-lg px-8 py-3 flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Free Demo Class
                </button>
                <Link
                  to="/courses"
                  className="btn-outline text-lg px-8 py-3 flex items-center justify-center"
                >
                  View All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
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
              </div>
            </div>

            <div className="relative">
              <img 
                src={image} 
                alt="Learning Platform" 
                className="w-full h-[80vh] rounded-2xl shadow-2xl"
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
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-white">
                      {course.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Price:</span>
                      <span className="text-lg font-bold text-primary-600">{course.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="text-sm font-medium text-gray-900">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Level:</span>
                      <span className="text-sm font-medium text-gray-900">{course.level}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="w-full btn-primary"
                  >
                    Book Demo Class
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