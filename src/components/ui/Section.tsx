import React from "react";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  title = "Section",
  children,
  className = "",
}) => {
  return (
    <section className={`max-w-4xl mx-auto ${className}`}>
      <div className="bg-indigo-900 dark:bg-indigo-100 text-indigo-100 dark:text-indigo-800 backdrop-blur-sm border border-indigo-800 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="leading-relaxed text-lg space-y-4">{children}</div>
      </div>
    </section>
  );
};
