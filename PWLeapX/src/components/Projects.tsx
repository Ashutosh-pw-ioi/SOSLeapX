import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [selectedSection, setSelectedSection] = useState('tech');
  const [searchTerm, setSearchTerm] = useState('');

   // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { techProjects, managementProjects } = projectsData;
  
  // Filter projects based on search term
  const filterProjects = (projects: any[]) => {
    if (!searchTerm) return projects;
    return projects.filter(project => 
      project.technologies.some((tech: string) => 
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const currentProjects = filterProjects(
    selectedSection === 'tech' ? techProjects : managementProjects
  );

  return (
    <div className="min-h-screen bg-[#FFF5D8] text-black">
      <div className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our LeapX
            </h1>
            <p className="text-gray-900 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
              Explore the innovative projects created by our talented students across technology and management domains.
            </p>

            {/* Section Toggle Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => setSelectedSection('tech')}
                className={`w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                  selectedSection === 'tech'
                    ? 'bg-[#E68C32] text-white shadow-lg'
                    : 'bg-white text-[#E68C32] border-2 border-[#E68C32] hover:bg-[#E68C32] hover:text-white'
                }`}
              >
                 Tech Projects
              </button>

              <button
                onClick={() => setSelectedSection('management')}
                className={`w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                  selectedSection === 'management'
                    ? 'bg-[#E68C32] text-white shadow-lg'
                    : 'bg-white text-[#E68C32] border-2 border-[#E68C32] hover:bg-[#E68C32] hover:text-white'
                }`}
              >
                 Management Projects
              </button>
            </div>

            {/* Search Bar */}
            {/* <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects by technologies (e.g., React, Node.js)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div> */}
          </div>


          {/* Projects Grid */}
          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="text-gray-500 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
              <p className="text-gray-500">
                {searchTerm 
                  ? `No projects match your search for "${searchTerm}". Try different keywords.`
                  : 'No projects available in this section.'
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;