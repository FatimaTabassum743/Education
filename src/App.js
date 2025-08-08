import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileInstallBanner from './components/MobileInstallBanner';
import Analytics from './components/Analytics';
import PerformanceOptimizer from './components/PerformanceOptimizer';

import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Notes from './pages/Notes';
import Tasks from './pages/Tasks';
import Assessments from './pages/Assessments';
import AssignProjects from './pages/AssignProjects';
import Blog from './pages/Blog';
import Certificate from './pages/Certificate';

function App() {
  const [isBannerActive, setIsBannerActive] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Analytics>
          <PerformanceOptimizer 
            preloadImages={[
              'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0',
              'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
            ]}
            deferScripts={[
              'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
            ]}
          />
          <div className="App min-h-screen flex flex-col">
            <Navbar />
            <MobileInstallBanner onBannerStateChange={setIsBannerActive} />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/assessments" element={<Assessments />} />
                <Route path="/projects" element={<AssignProjects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/certificate" element={<Certificate />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </Analytics>
      </Router>
    </AuthProvider>
  );
}

export default App; 