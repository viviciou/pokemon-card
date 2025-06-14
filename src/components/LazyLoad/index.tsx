import { useEffect, useRef, useState } from "react";
import { type LazyLoadProps } from "./lazy-load.type";

/**
 * LazyLoad component that uses IntersectionObserver to determine when the children should be loaded.
 * It accepts a function as children that receives an object with `isLoaded` and `ref`.
 *
 * @param {LazyLoadProps} props - The props for the LazyLoad component.
 * @returns {JSX.Element} The rendered component.
 */
export const LazyLoad = ({
  initLoaded = false,
  loadMoreItems,
  children,
}: LazyLoadProps) => {
    const observerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const [isLoaded, setIsLoaded] = useState(initLoaded);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "100px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      });
    }, observerOptions);

    if (observerRef.current) {
      observer.observe(observerRef.current);
      if (loadMoreItems) {
        loadMoreItems();
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [loadMoreItems]);

  return children({ isLoaded, ref: observerRef });
};
