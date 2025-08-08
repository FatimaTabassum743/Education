import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Download, 
  Share2, 
  Printer, 
  Star, 
  Calendar, 
  User, 
  BookOpen,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Certificate = () => {
  const [certificateData, setCertificateData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const certificateRef = useRef(null);

  // Sample data for demonstration
  const studentNames = [
    "Aarav Patel",
    "Zara Khan",
    "Arjun Singh",
    "Maya Sharma",
    "Vihaan Reddy",
    "Anaya Joshi",
    "Advait Kumar",
    "Kiara Verma",
    "Reyansh Malhotra",
    "Aisha Gupta",
    "Dhruv Sharma",
    "Ishaan Patel",
    "Avni Singh",
    "Krishna Kumar",
    "Anika Reddy"
  ];

  const courseNames = [
    "Web Development with AI",
    "MERN Stack Development",
    "Python Programming",
    "AI & Machine Learning",
    "Digital Marketing",
    "Linux Administration",
    "AWS Cloud Computing",
    "React.js Fundamentals",
    "Node.js Backend Development",
    "Data Science Essentials"
  ];

  const generateCertificate = () => {
    setIsGenerating(true);
    
    // Simulate loading
    setTimeout(() => {
      const randomStudent = studentNames[Math.floor(Math.random() * studentNames.length)];
      const randomCourse = courseNames[Math.floor(Math.random() * courseNames.length)];
      const completionDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const certificateId = `CERT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      
      setCertificateData({
        studentName: randomStudent,
        courseName: randomCourse,
        completionDate: completionDate,
        certificateId: certificateId,
        instructor: "Fatima Tabassum",
        grade: "A+",
        duration: "8 weeks",
        totalHours: "48 hours"
      });
      setIsGenerating(false);
    }, 1500);
  };

  useEffect(() => {
    generateCertificate();
  }, []);

  const handleDownload = async () => {
    if (!certificateData) return;
    
    setIsDownloading(true);
    
    try {
      const certificateElement = certificateRef.current;
      if (!certificateElement) {
        throw new Error('Certificate element not found');
      }

      // Create canvas from certificate element
      const canvas = await html2canvas(certificateElement, {
        scale: 1.5,
        useCORS: true,
   
        backgroundColor: '#ffffff',
        width: 1200,
        height: 800
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');
      
      // Calculate dimensions to fit certificate in PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth - 20; // 10mm margin on each side
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add watermark to PDF
      pdf.setTextColor(139, 92, 246); // Primary color #8b5cf6
      pdf.setFontSize(48);
      pdf.setGState(new pdf.GState({ opacity: 0.1 })); // Transparent watermark
      
      // Add watermark text
      const watermarkText = 'KODEZ ACADEMY';
      const textWidth = pdf.getTextWidth(watermarkText);
      
      // Center watermark
      pdf.text(watermarkText, (pdfWidth - textWidth) / 2, pdfHeight / 2);
      
      // Add certificate image
      pdf.setGState(new pdf.GState({ opacity: 1 }));
      pdf.addImage(imgData, 'PNG', 10, (pdfHeight - imgHeight) / 2, imgWidth, imgHeight);
      
      // Save PDF
      const fileName = `certificate_${certificateData.studentName.replace(/\s+/g, '_')}_${certificateData.courseName.replace(/\s+/g, '_')}.pdf`;
      pdf.save(fileName);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Course Completion Certificate',
        text: `I just completed ${certificateData?.courseName} at KodeZ Academy!`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Certificate URL copied to clipboard!');
    }
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Generating Certificate...</h2>
          <p className="text-gray-500 mt-2">Creating your professional certificate</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <EnhancedSEO 
        title="Course Completion Certificate - KodeZ Academy"
        description="View and download your course completion certificate from KodeZ Academy. Professional certificates for all completed courses."
        keywords={['certificate', 'course completion', 'certification', 'online learning', 'coding certificate']}
        type="website"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Certificate', url: '/certificate' }
        ]}
      />
      
      <div className="min-h-screen pt-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Completion Certificate
            </h1>
            <p className="text-lg text-gray-600">
              Congratulations on completing your course! Your certificate is ready.
            </p>
          </div>

          {/* Certificate */}
          <div ref={certificateRef} className="bg-white rounded-2xl shadow-2xl border-8 border-double border-primary-200 p-8 md:p-12 mb-8">
            {/* Certificate Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
                KodeZ Academy
              </h2>
              <p className="text-gray-600 font-medium">Certificate of Completion</p>
            </div>

            {/* Certificate Content */}
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-4">This is to certify that</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b-2 border-primary-200 pb-2">
                {certificateData?.studentName}
              </h3>
              <p className="text-gray-600 mb-4">has successfully completed the course</p>
              <h4 className="text-xl md:text-2xl font-bold text-primary-600 mb-6">
                {certificateData?.courseName}
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold text-gray-900">Completion Date</span>
                  </div>
                  <p className="text-gray-600">{certificateData?.completionDate}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="font-semibold text-gray-900">Grade Achieved</span>
                  </div>
                  <p className="text-gray-600">{certificateData?.grade}</p>
                </div>
              </div>


        
            </div>

            {/* Signature Section */}
            <div className="flex justify-between items-end border-t-2 border-gray-200 pt-6">
              <div className="text-center">
                <div className="w-32 h-16 border-b-2 border-gray-400 mb-2"></div>
                <p className="text-sm font-semibold text-gray-700">Course Instructor</p>
                <p className="text-xs text-gray-600">{certificateData?.instructor}</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-16 border-b-2 border-gray-400 mb-2"></div>
                <p className="text-sm font-semibold text-gray-700">Director</p>
                <p className="text-xs text-gray-600">KodeZ Academy</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </>
              )}
            </button>
        
            <button
              onClick={handleShare}
              className="flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Certificate
            </button>
          </div>

          {/* Generate New Certificate Button */}
          <div className="text-center">
            <button
              onClick={generateCertificate}
              className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors duration-200"
            >
              <Award className="w-4 h-4 mr-2" />
              Generate New Certificate
            </button>
          </div>

       

          {/* CTA Section */}
          <div className="mt-8 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Explore More Courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate; 