import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ProtectedButton = ({ 
  children, 
  onClick, 
  courseName, 
  className = '', 
  disabled = false,
  showLoginPrompt = true 
}) => {
  const { user, hasAccessToCourse } = useAuth();
  const [showPrompt, setShowPrompt] = useState(false);

  const handleClick = (e) => {
    // If user is not logged in, show login prompt
    if (!user) {
      e.preventDefault();
      if (showLoginPrompt) {
        setShowPrompt(true);
        // Auto-hide prompt after 3 seconds
        setTimeout(() => setShowPrompt(false), 3000);
      }
      return;
    }

    // If course-specific access is required and user doesn't have access
    if (courseName && !hasAccessToCourse(courseName)) {
      e.preventDefault();
      setShowPrompt(true);
      setTimeout(() => setShowPrompt(false), 3000);
      return;
    }

    // If all checks pass, call the original onClick
    if (onClick) {
      onClick(e);
    }
  };

  const isDisabled = disabled;

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={isDisabled}
        className={`${className} ${(!user || (courseName && !hasAccessToCourse(courseName))) ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {children}
      </button>

      {/* Login Prompt Toast */}
      {showPrompt && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
          <div className="bg-red-500 text-white rounded-lg shadow-lg w-44 text-center">
           
            <span className="text-sm font-medium px-2 text-center">
              {!user ? 'Please login first' : `You don't have Access`}
            </span>
          </div>
          {/* Arrow pointing down */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="border-4 border-transparent border-t-red-500"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProtectedButton; 