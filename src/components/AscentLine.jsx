import React, { useEffect, useRef, useState } from "react";
import "./AscentLine.css";

/**
 * The site's signature motif: a hand-drawn route that climbs as the
 * visitor scrolls, echoing the arrow underline in the logo and the
 * line "Rise with the right direction". `progress` is 0→1.
 */
export default function AscentLine({ progress, flip = false }) {
  const pathRef = useRef(null);
  const [length, setLength] = useState(0);
  const [point, setPoint] = useState({ x: 0, y: 0, angle: 0 });

  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const el = pathRef.current;
    if (!el || length === 0) return;
    const p = Math.min(0.999, progress);
    const pt = el.getPointAtLength(p * length);
    const ptAhead = el.getPointAtLength(Math.min(length, p * length + 1));
    const angle = (Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * 180) / Math.PI;
    setPoint({ x: pt.x, y: pt.y, angle });
  }, [progress, length]);

  return (
    <svg
      className={`ascent-line${flip ? " ascent-line--flip" : ""}`}
      viewBox="0 0 220 1200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="ascent-line__track"
        d="M 34 1170 C 34 1010, 190 1040, 190 900 C 190 790, 30 800, 30 660 C 30 540, 186 560, 186 420 C 186 300, 34 310, 34 190 C 34 110, 150 100, 150 30"
      />
      <path
        ref={pathRef}
        className="ascent-line__draw"
        d="M 34 1170 C 34 1010, 190 1040, 190 900 C 190 790, 30 800, 30 660 C 30 540, 186 560, 186 420 C 186 300, 34 310, 34 190 C 34 110, 150 100, 150 30"
        style={{
          strokeDasharray: length,
          strokeDashoffset: length - progress * length,
        }}
      />
      {length > 0 && (
        <g transform={`translate(${point.x} ${point.y}) rotate(${point.angle})`}>
          <circle className="ascent-line__halo" r="13" />
          <path className="ascent-line__arrow" d="M -6 -5 L 7 0 L -6 5 Z" />
        </g>
      )}
    </svg>
  );
}
