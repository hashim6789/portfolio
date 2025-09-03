import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  className = "",
  children,
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-900";

  const variants = {
    solid:
      "bg-indigo-600 text-indigo-100 hover:bg-indigo-100 hover:text-indigo-600 hover:border hover:border-indigo-600",
    outline:
      "border border-indigo-600 text-indigo dark:text-indigo-600 dark:bg-indigo-100 hover:bg-indigo-600 hover:text-indigo-100",
    ghost: "text-indigo hover:bg-indigo-100 hover:text-indigo-700",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? disabledClasses : ""}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
