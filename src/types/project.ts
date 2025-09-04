export type TechName =
  | "React"
  | "Node.js"
  | "JavaScript"
  | "TypeScript"
  | "MongoDB"
  | "PostgreSQL"
  | "MySQL"
  | "Express"
  | "AWS"
  | "Docker"
  | "Firebase"
  | "Redux"
  | "Tailwind"
  | "Bootstrap"
  | "Git"
  | "Linux"
  | "Nginx"
  | "Redis"
  | "OpenAI API"
  | "Socket.io"
  | "WebRTC"
  | "Vue.js"
  | "Chart.js"
  | "CoinGecko API"
  | "TensorFlow"
  | "Next.js"
  | "Stripe API";

export type TechIconsMap = {
  [key in TechName]: React.ComponentType;
};

export type ProjectStatus = "completed" | "in-progress";

export type ProjectData = {
  id: number;
  title: string;
  description: string;
  technologies: TechName[];
  category: string;
  year: string;
  status: ProjectStatus;
  featured?: boolean;
  liveUrl?: string;
  githubUrl: string;
  features: string[];
  image: string;
};
