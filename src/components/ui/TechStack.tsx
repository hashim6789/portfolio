import { Code } from "lucide-react";
import { techIcons } from "../../assets/static";
import type { TechName } from "../../types";
import type { FC } from "react";

interface TechStackProps {
  technologies: TechName[];
  className?: string;
}

export const TechStack: FC<TechStackProps> = ({
  technologies,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech, index) => {
        const Icon = techIcons[tech] || Code;
        return (
          <div
            key={index}
            className="flex items-center space-x-1 bg-gray-800/60 border border-gray-700/50 rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-200"
          >
            <Icon />
            <span>{tech}</span>
          </div>
        );
      })}
    </div>
  );
};
