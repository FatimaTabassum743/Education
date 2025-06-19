import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  Globe, 
  Users, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Live Classes', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const courses = [
    { name: 'Web Development', path: '/courses' },
    { name: 'MERN Stack', path: '/courses' },
    { name: 'AI & Machine Learning', path: '/courses' },
    { name: 'Digital Marketing', path: '/courses' },
    { name: 'Python Programming', path: '/courses' },
    { name: 'Linux Administration', path: '/courses' }
  ];

  const support = [
    { name: 'Help Center', path: '/contact' },
    { name: 'Demo Classes', path: '/contact' },
    { name: 'Student Portal', path: '/contact' },
    { name: 'Parent Guide', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: '#' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  GenZ Learn
                </h3>
                <p className="text-xs text-gray-400 -mt-1">Live Classes • Global Community</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students aged 12-21 worldwide with interactive live classes. 
              Learn Web Development, AI/ML, Digital Marketing & more from expert instructors.
            </p>
            
            {/* Global Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="text-sm font-semibold">25+ Countries</div>
                  <div className="text-xs text-gray-400">Global Reach</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="text-sm font-semibold">500+ Students</div>
                  <div className="text-xs text-gray-400">Worldwide</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Live Classes</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <div>
                <div className="text-sm font-semibold">Email</div>
                <div className="text-sm text-gray-400">hello@genzlearn.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <div>
                <div className="text-sm font-semibold">Phone</div>
                <div className="text-sm text-gray-400">+91 81422 00317</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-primary-400" />
              <div>
                <div className="text-sm font-semibold">Live Classes</div>
                <div className="text-sm text-gray-400">Mon-Sat, 9 AM - 9 PM IST</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} GenZ Learn. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/contact" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 