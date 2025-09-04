import type { FC } from "react";
import { Button } from "./Button";

interface ActionBoxProps {
  title: string;
  description: string;
  buttonText: string;
}

export const ActionBox: FC<ActionBoxProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="text-center mt-20">
      <div className="backdrop-blur-sm border border-indigo-900 dark:border-indigo-100 rounded-2xl p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-6">{description}</p>

        <Button size="lg">{buttonText}</Button>
      </div>
    </div>
  );
};
