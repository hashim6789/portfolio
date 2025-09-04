import { useScrollAnimation } from "../hooks";
import type { JourneyItem } from "../types";
import { Zap, Award, Calendar } from "lucide-react";
import { SkillCard } from "./ui";

// Timeline Item Props
interface TimelineItemProps {
  item: JourneyItem;
  index: number;
  isLast: boolean;
}

// Reusable Timeline Item Component
const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => {
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div
        className={`absolute left-6 top-16 w-0.5 transition-all duration-1000 ${
          contentVisible ? "h-full opacity-100" : "h-0 opacity-0"
        } ${isLast ? "hidden" : ""}`}
      ></div>

      {/* Timeline Node */}
      <div
        ref={titleRef}
        className={`relative flex items-start space-x-6 mb-12 transform transition-all duration-700 ${
          titleVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-8 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        {/* Node Circle */}
        <div
          className={`relative z-10 w-12 h-12 rounded-full border-4 border-indigo-500 flex items-center justify-center transform transition-all duration-500 ${
            titleVisible ? "scale-100 bg-indigo-500" : "scale-75 bg-transparent"
          }`}
        >
          <Calendar className="text-white" size={20} />
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          {/* Title and Timeline */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <div className="flex items-center space-x-2 text-indigo-400">
              <Calendar size={16} />
              <span className="font-medium">{item.timeline}</span>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-indigo-300 mb-6 leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Skills Grid */}
          <div
            ref={contentRef}
            className={`transform transition-all duration-700 ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200 + 300}ms` }}
          >
            <h4 className="text-lg font-semibold text-indigo-200 mb-4 flex items-center">
              <Zap className="text-yellow-400 mr-2" size={18} />
              Skills & Technologies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {item.skills.map((skill, skillIndex) => (
                <SkillCard key={skill} skill={skill} delay={skillIndex * 100} />
              ))}
            </div>
          </div>

          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-indigo-200 mb-3 flex items-center">
                <Award className="text-green-400 mr-2" size={18} />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {item.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className={`text-indigo-300 flex items-start space-x-2 transform transition-all duration-500 ${
                      contentVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${
                        index * 200 + 500 + achIndex * 100
                      }ms`,
                    }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
