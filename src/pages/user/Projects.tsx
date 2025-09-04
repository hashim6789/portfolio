import { useScrollAnimation } from "../../hooks";
import {
  pageActionBoxData,
  pageHeaderData,
  projectsData,
} from "../../assets/static";
import { ActionBox, PageHeader } from "../../components/ui";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.5);

  return (
    <div className="min-h-screen">
      {/* Background Pattern */}
      <div className="absolute"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <PageHeader
            title={pageHeaderData.projects.title}
            description={pageHeaderData.projects.description}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* No Results Message */}
        {projectsData.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-indigo-600 mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
              No projects found
            </h3>
            <p className="text-indigo-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Call to Action */}

        <ActionBox
          title={pageActionBoxData.projects.title}
          description={pageActionBoxData.projects.description}
          buttonText={pageActionBoxData.projects.buttonText}
        />
      </div>
    </div>
  );
};

export default Projects;
