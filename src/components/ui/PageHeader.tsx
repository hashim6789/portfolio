import type { FC } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}
export const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
        {title}
      </h1>
      <p className="text-xl text-indigo-300 max-w-4xl mx-auto leading-relaxed mb-8">
        {description}
      </p>
    </div>
  );
};
