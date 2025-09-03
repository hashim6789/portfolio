import { Code } from "lucide-react";
import { iconMap } from "../../assets/static";
import { useScrollAnimation } from "../../hooks";

interface SkillCardProps {
  skill: string;
  delay?: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, delay = 0 }) => {
  const [cardRef, isVisible] = useScrollAnimation(0.2);
  const Icon = iconMap[skill] || Code;

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <Icon className="text-white" size={20} />
          </div>
          <span className="text-gray-200 font-medium">{skill}</span>
        </div>
      </div>
    </div>
  );
};
