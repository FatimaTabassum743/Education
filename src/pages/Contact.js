import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Globe, Clock, Users } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import {FaWhatsapp} from 'react-icons/fa';

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@genzlearner.com",
      description: "Get in touch for course inquiries and support"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+91 81422 00317",
      description: "Available Mon-Sat, 9 AM - 9 PM IST"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Support",
      details: "25+ Countries",
      description: "We support students from around the world"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Live Classes",
      details: "50+ Classes/Month",
      description: "Interactive sessions for students aged 12-21"
    }
  ];

  const faqs = [
    {
      question: "What age group do you teach?",
      answer: "We specialize in teaching students aged 12-21 years old, with age-appropriate content and teaching methods."
    },
    {
      question: "Are the classes live or pre-recorded?",
      answer: "All our classes are live and interactive! You'll learn in real-time with expert instructors and can ask questions directly."
    },
    {
      question: "Do you accept international students?",
      answer: "Absolutely! We have students from 25+ countries. Classes are scheduled to accommodate different time zones."
    },
    {
      question: "How many students are in each class?",
      answer: "We keep classes small with maximum 8 students per session for personalized attention and better interaction."
    },
    {
      question: "What if I miss a class?",
      answer: "Don't worry! We provide recorded sessions and offer makeup classes to ensure you don't fall behind."
    },
    {
      question: "Do you offer free demo classes?",
      answer: "Yes! We offer free demo classes so you can experience our teaching style before enrolling in any course."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch with
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> GenzLearner</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Have questions about our live classes? Want to join our global community of young learners? 
              We're here to help students aged 12-21 from around the world.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-primary text-lg px-8 py-4 flex items-center mx-auto"
            >
              <Send className="mr-2 h-5 w-5" />
              Book Free Demo Class
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-primary-600 font-medium mb-2">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Open Contact Form
              </button>
              
              <div className="mt-6 p-4 bg-accent-50 rounded-lg">
                <h3 className="font-semibold text-accent-800 mb-2">Quick Contact Options:</h3>
                <div className="space-y-2 text-sm text-accent-700">
                  <p>• Book a free demo class</p>
                  <p>• Ask about course details</p>
                  <p>• Get pricing information</p>
                  <p>• Schedule a consultation</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">hello@genzlearner.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 81422 00317</p>
                      <p className="text-sm text-gray-500">Mon-Sat, 9 AM - 9 PM IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Globe className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Global Support</h3>
                      <p className="text-gray-600">Students from 25+ countries</p>
                      <p className="text-sm text-gray-500">Classes available in different time zones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick WhatsApp Chat</h3>
                <p className="text-gray-600 mb-4">Get instant answers to your questions via WhatsApp</p>
                <a
                  href="https://wa.me/918142200317?text=Hi! I'm interested in GenzLearner courses. Can you provide more details?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from our global community of young learners
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Community Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Global Learning Community
            </h2>
            <p className="text-xl text-primary-100">
              Connect with students from around the world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Students Worldwide</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-100">Countries</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Live Classes/Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our global community of young learners aged 12-21. Book your free demo class today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center"
            >
              <Send className="mr-2 h-5 w-5" />
              Book Free Demo Class
            </button>
            <a
              href="https://wa.me/918142200317?text=Hi! I'm interested in GenzLearner courses. Can you provide more details?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
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

export default Contact; 