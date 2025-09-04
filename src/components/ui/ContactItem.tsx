import { ExternalLink, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { AnimatedContainer } from "./AnimationContainer";

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  delay?: number;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  title,
  value,
  href,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const content = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border border-indigo-800 transition-all duration-300 cursor-pointer dark:hover:bg-indigo-100 hover:bg-indigo-900 dark:hover:text-indigo-900 hover:text-indigo-100 hover:border-indigo-900 dark:hover:border-indigo-100 hover:shadow-md hover:shadow-indigo-900 dark:hover:shadow-indigo-100 ${
        isHovered ? "transform scale-105" : ""
      }`}
    >
      <div
        className={`p-3 rounded-lg transition-transform duration-300 ${
          isHovered ? "rotate-3 scale-110" : ""
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="">
        <p className="text-sm">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
      {href && <ExternalLink className="w-4 h-4 ml-auto" />}
    </div>
  );

  return (
    <AnimatedContainer delay={delay}>
      {href ? (
        <a
          href={href}
          className="block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </AnimatedContainer>
  );
};
