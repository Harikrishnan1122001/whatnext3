import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref (to attach to a tall wrapper) and a 0→1 progress
 * number representing how far the viewport has travelled through
 * that element. Used to draw the Ascent Line as the page scrolls.
 */
export default function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const total = rect.height - viewportH;
      const traveled = -rect.top;
      const raw = total > 0 ? traveled / total : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, progress];
}
