import React from 'react';

const AssignProjects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Assign Projects</h1>
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700">Web Development Project</h2>
        <p className="text-gray-700 mb-6 text-center">
          Build a modern, responsive Portfolio website using HTML and CSS  Deploy your site online using github!
          for reference visit the project link below
        </p>
        <a
          href="https://fatimatabassum743.github.io/Project/" // Replace with actual project link
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-6 py-2 rounded-md shadow-md hover:scale-105 transition-transform"
        >
          Project Link
        </a>
      </div>
    </div>
  );
};

export default AssignProjects; 