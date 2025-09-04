interface FloatingElementProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  delay = 0,
  className = "",
  children,
}) => {
  return (
    <div
      className={`animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: "3s",
      }}
    >
      {children}
    </div>
  );
};
