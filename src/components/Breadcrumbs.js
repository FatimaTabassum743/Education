import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ customBreadcrumbs = [] }) => {
  const location = useLocation();
  
  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    if (customBreadcrumbs.length > 0) {
      return customBreadcrumbs;
    }

    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs = [
      { name: 'Home', url: '/' }
    ];

    let currentPath = '';
    pathnames.forEach((name, index) => {
      currentPath += `/${name}`;
      
      // Convert path to readable name
      const readableName = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name: readableName,
        url: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              
              {index === breadcrumbs.length - 1 ? (
                // Current page - not clickable
                <span className="text-sm font-medium text-gray-900 flex items-center">
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {breadcrumb.name}
                </span>
              ) : (
                // Clickable breadcrumb
                <Link
                  to={breadcrumb.url}
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {breadcrumb.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 