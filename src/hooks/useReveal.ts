import { useEffect, useRef } from "react";

/**
 * Adds an "in-view" class to the returned ref's element the first time it
 * scrolls into the viewport, pairing with the .reveal CSS in index.css.
 */
function useReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

export default useReveal;
