import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export default function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: UseIntersectionObserverProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [wasTriggered, setWasTriggered] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Don't re-observe if this was already triggered and we only want to trigger once
    if (triggerOnce && wasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the element enters the viewport
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          setIsVisible(true);
          
          if (triggerOnce) {
            setWasTriggered(true);
            // If we only need to trigger once, disconnect the observer
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          // If we're not using triggerOnce, set visibility to false when element leaves viewport
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, wasTriggered]);

  return { ref, isVisible };
}