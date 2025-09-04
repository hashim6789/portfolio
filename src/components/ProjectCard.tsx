import { Calendar, Code, Star, Zap } from "lucide-react";
import { Badge, Button, TechStack } from "./ui";
import { useScrollAnimation } from "../hooks";
import { useState, type FC } from "react";
import type { ProjectData } from "../types";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}
const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const [cardRef, isVisible] = useScrollAnimation(0.2);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-12 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group bg-gradient-to-br from-indigo-900/80 to-indigo-800/80 backdrop-blur-sm border border-indigo-700/50 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:scale-105">
        {/* Project Image/Preview */}
        <div className="relative h-48 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl text-indigo-400/30">
                <Code />
              </div>
            </div>
          )}

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {project.liveUrl && <Button>Live Demo</Button>}
            {project.githubUrl && <Button variant="outline">Code</Button>}
          </div>

          {/* Status Badge */}
          {project.status && (
            <div className="absolute top-3 right-3">
              <Badge
                variant={
                  project.status === "completed"
                    ? "success"
                    : project.status === "in-progress"
                    ? "warning"
                    : "info"
                }
              >
                {project.status}
              </Badge>
            </div>
          )}

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-500/30">
                <Star size={12} className="mr-1" />
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
                {project.title}
              </h3>
              <div className="flex items-center space-x-2 text-indigo-400 text-sm">
                <Calendar size={14} />
                <span>{project.year}</span>
              </div>
            </div>
            <p className="text-indigo-300 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <TechStack technologies={project.technologies} />
          </div>

          {/* Stats */}
          {/* {project.stats && (
            <div className="flex items-center space-x-4 text-sm text-indigo-400 mb-4">
              {project.stats.stars && (
                <div className="flex items-center space-x-1">
                  <Star size={14} />
                  <span>{project.stats.stars}</span>
                </div>
              )}
              {project.stats.forks && (
                <div className="flex items-center space-x-1">
                  <Github size={14} />
                  <span>{project.stats.forks}</span>
                </div>
              )}
              {project.stats.users && (
                <div className="flex items-center space-x-1">
                  <Users size={14} />
                  <span>{project.stats.users}+ users</span>
                </div>
              )}
            </div>
          )} */}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-indigo-300 mb-2 flex items-center">
                <Zap size={14} className="mr-1" />
                Key Features
              </h4>
              <ul className="text-xs text-indigo-400 space-y-1">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 pt-4 border-t border-indigo-700/50">
            {project.liveUrl && (
              <Button
                variant="solid"
                size="sm"
                className="flex-1"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
