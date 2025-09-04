import { useEffect, useRef, useState, type RefObject } from "react";
type UseScrollAnimationReturn = [RefObject<HTMLDivElement | null>, boolean];

export const useScrollAnimation = (
  threshold = 0.1
): UseScrollAnimationReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [threshold]);

  return [ref, isVisible];
};
