import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { AnimatedContainer } from "./AnimationContainer";

interface SocialLinkCardProps {
  icon: LucideIcon;
  href: string;
  label: string;
  delay?: number;
}

export const SocialLinkCard: React.FC<SocialLinkCardProps> = ({
  icon: Icon,
  href,
  label,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <AnimatedContainer delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group flex items-center justify-center w-12 h-12  rounded-xl border border-indigo-800 transition-all duration-300 cursor-pointer dark:hover:bg-indigo-100 hover:bg-indigo-900 dark:hover:text-indigo-900 hover:text-indigo-100 hover:border-indigo-900 dark:hover:border-indigo-100 hover:shadow-md hover:shadow-indigo-900 dark:hover:shadow-indigo-100 ${
          isHovered ? "transform scale-110 rotate-3" : ""
        }`}
        aria-label={label}
      >
        <Icon className="w-5 h-5 transition-colors duration-300" />
      </a>
    </AnimatedContainer>
  );
};
