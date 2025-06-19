import React, { useState } from 'react';
import { 
  Users, 
  Globe, 
  Target, 
  Award, 
  BookOpen, 
  Video, 
  Clock, 
  CheckCircle,
  Star,
  MessageCircle,
  Calendar,
  Play
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

const About = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const stats = [
    { number: "500+", label: "Students Worldwide", icon: <Users className="w-6 h-6" /> },
    { number: "25+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Live Classes/Month", icon: <Video className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Student-First Approach",
      description: "Everything we do is designed around the needs of young learners aged 12-21"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Community",
      description: "Connect with peers from around the world and build international friendships"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Learn through live classes, hands-on projects, and real-world applications"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Education",
      description: "Expert instructors with years of industry experience and teaching expertise"
    }
  ];

  const team = [
    {
      name: "Rahul Sharma",
      role: "Founder & Lead Instructor",
      expertise: "Web Development, Full Stack",
      experience: "5+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Patel",
      role: "AI/ML Specialist",
      expertise: "Machine Learning, Data Science",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Aisha Khan",
      role: "Digital Marketing Expert",
      expertise: "Social Media, SEO, Content",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Vikram Singh",
      role: "Python & Programming",
      expertise: "Python, Game Development",
      experience: "4+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      age: "16",
      country: "India",
      course: "Web Development",
      text: "GenZ Learn has been amazing! The live classes are so interactive and I've made friends from different countries.",
      rating: 5
    },
    {
      name: "Alex Johnson",
      age: "18",
      country: "USA",
      course: "AI/ML",
      text: "Best online learning experience! The instructors are experts and very patient with us young learners.",
      rating: 5
    },
    {
      name: "Sarah Ahmed",
      age: "14",
      country: "UAE",
      course: "Digital Marketing",
      text: "I love how the classes are designed for our age group. Learning has never been this fun and engaging!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Empowering
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Young Minds</span>
                  <br />
                  <span className="text-3xl md:text-4xl">Through Live Learning</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  At GenZ Learn, we believe every young person deserves access to quality education. 
                  Our interactive live classes connect students aged 12-21 from around the world, 
                  creating a global community of learners.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary text-lg px-8 py-4 flex items-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Book Free Demo Class
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To make quality education accessible to young learners worldwide through 
                      interactive live classes and a supportive global community.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      <span className="text-gray-700">Age-appropriate learning (12-21)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      <span className="text-gray-700">International student community</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      <span className="text-gray-700">Expert instructors</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      <span className="text-gray-700">Live interactive classes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to creating an inclusive, engaging, and effective learning environment for young minds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry professionals who are passionate about teaching young minds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.expertise}</p>
                  <p className="text-xs text-gray-500">{member.experience} Experience</p>
                </div>
              </div>
            ))}
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
            Join Our Global Learning Community
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Start your learning journey with GenZ Learn. Book your free demo class today!
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

export default About; 