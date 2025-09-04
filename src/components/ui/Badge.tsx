import type { FC, ReactNode } from "react";

interface BadgeProp {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  className?: string;
}

export const Badge: FC<BadgeProp> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const variants = {
    default: "bg-indigo-600/20 text-indigo-300 border-indigo-500/30",
    success: "bg-green-600/20 text-green-300 border-green-500/30",
    warning: "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
    info: "bg-blue-600/20 text-blue-300 border-blue-500/30",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
