// import React from "react";
// import {
//   Code2,
//   Coffee,
//   Layers,
//   Megaphone,
//   BarChart3,
//   BrainCircuit,
//   Cpu,
//   PenTool,
//   Palette,
//   Clapperboard,
//   MessageCircle,
// } from "lucide-react";
// import { COURSES, buildWhatsAppLink } from "../siteConfig";
// import useScrollReveal from "../hooks/useScrollReveal";
// import useScrollProgress from "../hooks/useScrollProgress";
// import AscentLine from "./AscentLine";
// import "./Courses.css";

// const ICONS = {
//   python: Code2,
//   java: Coffee,
//   fullstack: Layers,
//   "digital-marketing": Megaphone,
//   "data-analyst": BarChart3,
//   "data-science": BrainCircuit,
//   ai: Cpu,
//   "ui-ux": PenTool,
//   "graphic-design": Palette,
//   "video-editing": Clapperboard,
// };

// export default function Courses() {
//   const revealRef = useScrollReveal();
//   const [progressRef, progress] = useScrollProgress();

//   return (
//     <section className="courses" id="courses" ref={revealRef}>
//       <div className="container">
//         <div className="section-head center reveal">
//           <span className="eyebrow">10 career tracks</span>
//           <h2>Pick a track. We'll get you there.</h2>
//           <p>
//             Every course runs as small live batches on Google Meet, taught by
//             mentors who work in the field. Enquire on WhatsApp and we'll send
//             the next batch date within minutes.
//           </p>
//         </div>

//         <div className="courses__field" ref={progressRef}>
//           <AscentLine progress={progress} />
//           <div className="courses__grid">
//             {COURSES.map((course, i) => {
//               const Icon = ICONS[course.id];
//               return (
//                 <a
//                   key={course.id}
//                   href={buildWhatsAppLink(
//                     `Hi What Next! I'm interested in the ${course.name} course. Please share batch timings and fees.`
//                   )}
//                   target="_blank"
//                   rel="noreferrer"
//                   className={`course-card reveal reveal-delay-${(i % 5) + 1}${
//                     i % 2 === 1 ? " course-card--offset" : ""
//                   }`}
//                 >
//                   <span className="course-card__ghost">{String(i + 1).padStart(2, "0")}</span>
//                   <span className="course-card__code">{course.code}</span>
//                   <span className="course-card__icon">
//                     <Icon size={22} strokeWidth={2} />
//                   </span>
//                   <h3>{course.name}</h3>
//                   <p>{course.tagline}</p>
//                   <div className="course-card__foot">
//                     <span className="course-card__level">{course.level}</span>
//                     <span className="course-card__enquire">
//                       <MessageCircle size={15} /> Enquire
//                     </span>
//                   </div>
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import {
  Code2,
  Coffee,
  Layers,
  Megaphone,
  BarChart3,
  BrainCircuit,
  Cpu,
  PenTool,
  Palette,
  Clapperboard,
  MessageCircle,
} from "lucide-react";
import { COURSES, buildWhatsAppLink } from "./Siteconfig";
import useScrollReveal from "../hooks/useScrollReveal";
import useScrollProgress from "../hooks/useScrollProgress";
import AscentLine from "./AscentLine";
import "./Courses.css";

const ICONS = {
  python: Code2,
  java: Coffee,
  fullstack: Layers,
  "digital-marketing": Megaphone,
  "data-analyst": BarChart3,
  "data-science": BrainCircuit,
  ai: Cpu,
  "ui-ux": PenTool,
  "graphic-design": Palette,
  "video-editing": Clapperboard,
};

export default function Courses() {
  const revealRef = useScrollReveal();
  const [progressRef, progress] = useScrollProgress();

  return (
    <section className="courses" id="courses" ref={revealRef}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">10+ Career Tracks</span>
          <h2>Choose Your Career Track. We'll Help You Get There.</h2>
          <p>
            Every learner has a different destination. Whether you're starting
            your first tech career, switching industries, or upgrading your
            skills, our live online courses are designed to help you learn with
            clarity, practice consistently, and build real-world experience.
          </p>
          <p>
            Every program includes mentor guidance, hands-on assignments,
            practical projects, and structured learning—not just recorded
            videos.
          </p>
        </div>

        <div className="courses__field" ref={progressRef}>
          <AscentLine progress={progress} />
          <div className="courses__grid">
            {COURSES.map((course, i) => {
              const Icon = ICONS[course.id];
              return (
                <a
                  key={course.id}
                  href={buildWhatsAppLink(
                    `Hi What Next! I'm interested in the ${course.name} course. Please share batch timings and fees.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`course-card reveal reveal-delay-${(i % 5) + 1}${
                    i % 2 === 1 ? " course-card--offset" : ""
                  }`}
                >
                  <span className="course-card__ghost">{String(i + 1).padStart(2, "0")}</span>
                  <span className="course-card__code">{course.code}</span>
                  <span className="course-card__icon">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3>{course.name}</h3>
                  <p>{course.tagline}</p>
                  <div className="course-card__foot">
                    <span className="course-card__level">{course.level}</span>
                    <span className="course-card__enquire">
                      <MessageCircle size={15} /> Enquire
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}