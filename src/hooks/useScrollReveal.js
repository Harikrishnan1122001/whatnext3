import { useEffect, useRef } from "react";

/**
 * Adds the "is-visible" class to every descendant carrying the
 * "reveal" class once it scrolls into view. Attach the returned
 * ref to a section wrapper.
 */
export default function useScrollReveal(options) {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return undefined;

    const targets = root.classList.contains("reveal")
      ? [root, ...root.querySelectorAll(".reveal")]
      : Array.from(root.querySelectorAll(".reveal"));

    if (targets.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px", ...options }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [options]);

  return containerRef;
}
