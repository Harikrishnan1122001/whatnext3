import React from "react";
import { COURSES } from "./Siteconfig";
import "./Marquee.css";

export default function Marquee() {
  const track = [...COURSES, ...COURSES];
  return (
    <div className="marquee">
      <div className="marquee__track">
        {track.map((course, i) => (
          <span className="marquee__item" key={`${course.id}-${i}`}>
            {course.name}
            <span className="marquee__dot">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
