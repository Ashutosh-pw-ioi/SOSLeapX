import React from 'react';
import { Github, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  image?: string;
  teamSize: number;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  const handleLiveLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.liveLink) {
      window.open(project.liveLink, '_blank', 'noopener noreferrer');
    }
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.githubLink) {
      window.open(project.githubLink, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#E68C32]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E68C32]/20">
      {/* Image Section */}
      <div className="relative h-44 overflow-hidden p-4">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
          />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Project Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 transition-colors duration-200 line-clamp-2">
          {project.title}
        </h3>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-[#E68C32]/10 text-[#E68C32] rounded border border-[#E68C32]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Student Name */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <div className="w-full h-full bg-[#E68C32] flex items-center justify-center text-white font-semibold text-xs">
                {project.teamSize}
              </div>
          </div>
          <span className="text-gray-700 text-sm font-medium">
            Team Members
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
          {/* Live Demo Button */}
          <button
            onClick={handleLiveLinkClick}
            disabled={!project.liveLink}
            className={`flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg border transition-all duration-200 ${
              project.liveLink
                ? 'bg-[#E68C32]/90 hover:bg-[#E68C32] text-white border-[#E68C32]/80 hover:border-[#E68C32] cursor-pointer'
                : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
            }`}
          >
            <Globe className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs font-medium">Live Demo</span>
          </button>

          {/* GitHub Button */}
          <button
            onClick={handleGithubClick}
            disabled={!project.githubLink}
            className={`flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg border transition-all duration-200 ${
              project.githubLink
                ? 'bg-[#E68C32]/90 hover:bg-[#E68C32] text-white border-[#E68C32]/80 hover:border-[#E68C32] cursor-pointer'
                : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
            }`}
          >
            <Github className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs font-medium">GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;