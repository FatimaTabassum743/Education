import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Course passwords mapping
const COURSE_PASSWORDS = {
  'Webdev12': 'Web Development',
  'Mern13': 'MERN Stack',
  'Devops14': 'DevOps',
  'Python15': 'Python Programming',
  'Linux16': 'Linux Administration',
  'Aws17': 'AWS Cloud Computing',
  'Aiml18': 'AI/ML',
  'Marketing19': 'Digital Marketing'
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing login on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    // Check if password matches any course
    const course = COURSE_PASSWORDS[password];
    
    if (!course) {
      throw new Error('Invalid password. Please check your course password.');
    }

    const userData = {
      email,
      course,
      password, // Store password for session management
      loginTime: new Date().toISOString()
    };

    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasAccessToCourse = (courseName) => {
    if (!user) return false;
    return user.course === courseName;
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    hasAccessToCourse,
    COURSE_PASSWORDS
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 