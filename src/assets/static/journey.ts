import {
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Palette,
  Server,
  Shield,
  Smartphone,
  Terminal,
  Users,
} from "lucide-react";
import type { JourneyItem } from "../../types";

export const journeyData: JourneyItem[] = [
  {
    title: "Full Stack Development Mastery",
    timeline: "2023 - Present",
    description:
      "Advanced full-stack development focusing on scalable architectures, microservices, and modern web technologies. Building production-ready applications with emphasis on performance and security.",
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "Redis",
      "Microservices",
    ],
    achievements: [
      "Built scalable microservices architecture serving 100K+ users",
      "Implemented advanced security protocols and authentication systems",
      "Led team of 5 developers on multiple high-impact projects",
      "Optimized application performance by 60% through advanced caching strategies",
    ],
  },
  {
    title: "MERN Stack Specialization",
    timeline: "2021 - 2023",
    description:
      "Deep dive into the MERN ecosystem, mastering modern JavaScript frameworks and building responsive, dynamic web applications with focus on user experience and scalability.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "Redux",
      "Next.js",
      "Git",
      "API Design",
      "UI/UX",
    ],
    achievements: [
      "Developed 15+ full-stack web applications",
      "Mastered state management with Redux and Context API",
      "Implemented responsive designs for optimal user experience",
      "Built RESTful APIs serving millions of requests daily",
    ],
  },
  {
    title: "Web Development Foundation",
    timeline: "2019 - 2021",
    description:
      "Started the journey in web development, learning fundamental technologies and building strong foundation in programming concepts, algorithms, and software engineering principles.",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "Python",
      "MySQL",
      "Git",
      "Bootstrap",
      "jQuery",
      "PHP",
      "Security",
      "Algorithms",
    ],
    achievements: [
      "Built first 10 web projects with modern responsive design",
      "Gained proficiency in multiple programming languages",
      "Learned fundamental computer science concepts",
      "Established strong problem-solving and debugging skills",
    ],
  },
  {
    title: "Mobile & Emerging Technologies",
    timeline: "2022 - Present",
    description:
      "Expanding into mobile development and cutting-edge technologies including blockchain, AI/ML, and cloud computing to stay at the forefront of technological innovation.",
    skills: [
      "Flutter",
      "React Native",
      "Firebase",
      "Blockchain",
      "AI/ML",
      "DevOps",
      "Cloud",
      "Mobile Dev",
      "Machine Learning",
    ],
    achievements: [
      "Published mobile apps with 10K+ downloads",
      "Implemented blockchain solutions for secure transactions",
      "Integrated AI/ML models into web applications",
      "Achieved AWS certification for cloud architecture",
    ],
  },
];

export type IconComponent = (props: {
  size?: number;
  className?: string;
}) => JSX.Element;

export const iconMap: Record<string, IconComponent> = {
  React: Code,
  "Node.js": Server,
  JavaScript: Terminal,
  TypeScript: Code,
  Python: Terminal,
  MongoDB: Database,
  PostgreSQL: Database,
  MySQL: Database,
  AWS: Cloud,
  Docker: Server,
  Kubernetes: Cloud,
  Git: GitBranch,
  "HTML/CSS": Globe,
  Security: Shield,
  "UI/UX": Palette,
  "Mobile Dev": Smartphone,
  DevOps: Cpu,
  "API Design": Server,
  "Machine Learning": Brain,
  "Team Lead": Users,
  Microservices: Cloud,
  GraphQL: Database,
  Redux: Code,
  Express: Server,
  "Next.js": Globe,
  "Vue.js": Code,
  Angular: Code,
  Flutter: Smartphone,
  Firebase: Cloud,
  Blockchain: Shield,
  "AI/ML": Brain,
};
