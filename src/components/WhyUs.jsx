// import React from "react";
// import { Users, CalendarClock, MonitorPlay, FileCheck2 } from "lucide-react";
// import useScrollReveal from "../hooks/useScrollReveal";
// import "./WhyUs.css";

// const STATS = [
//   { value: "500+", label: "students mentored" },
//   { value: "4.8/5", label: "average batch rating" },
//   { value: "95%", label: "doubt-clearing within 24hrs" },
//   { value: "12+", label: "industry mentors" },
// ];

// const FEATURES = [
//   {
//     icon: Users,
//     title: "Small live batches",
//     text: "Capped batch sizes so the mentor actually knows your name and where you're stuck.",
//   },
//   {
//     icon: CalendarClock,
//     title: "Timings that bend for you",
//     text: "Morning, evening and weekend batches — built around jobs, college and time zones.",
//   },
//   {
//     icon: MonitorPlay,
//     title: "Just Google Meet",
//     text: "No app to install, no LMS to wrestle with. Click the link, join the class.",
//   },
//   {
//     icon: FileCheck2,
//     title: "A project to show for it",
//     text: "Every track ends in a real, portfolio-ready project — not just a certificate.",
//   },
// ];

// export default function WhyUs() {
//   const revealRef = useScrollReveal();
//   return (
//     <section className="why" id="why-us" ref={revealRef}>
//       <div className="container">
//         <div className="why__stats reveal">
//           {STATS.map((s) => (
//             <div className="why__stat" key={s.label}>
//               <span className="why__stat-value">{s.value}</span>
//               <span className="why__stat-label">{s.label}</span>
//             </div>
//           ))}
//         </div>

//         <div className="why__body">
//           <div className="section-head reveal">
//             <span className="eyebrow">Why What Next</span>
//             <h2>Live classes, built to actually fit your week.</h2>
//             <p>
//               We kept the format simple on purpose: a mentor, a Meet link and a
//               small group of people learning the same thing at the same time.
//             </p>
//           </div>
//           <div className="why__grid">
//             {FEATURES.map((f, i) => {
//               const Icon = f.icon;
//               return (
//                 <div className={`why__card reveal reveal-delay-${i + 1}`} key={f.title}>
//                   <Icon size={22} />
//                   <h3>{f.title}</h3>
//                   <p>{f.text}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Users, CalendarClock, MonitorPlay, FileCheck2 } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./WhyUs.css";

const STATS = [
  { value: "500+", label: "students mentored" },
  { value: "4.8/5", label: "average batch rating" },
  { value: "95%", label: "doubt-clearing within 24hrs" },
  { value: "12+", label: "industry mentors" },
];

const FEATURES = [
  {
    icon: Users,
    title: "Small Live Batches",
    text: "Learn in focused groups where mentors know your progress and provide individual guidance.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Batch Timings",
    text: "Morning, evening, and weekend schedules designed for college students and working professionals.",
  },
  {
    icon: MonitorPlay,
    title: "Live Interactive Sessions",
    text: "No pre-recorded playlists. Join live Google Meet classes and learn directly from experienced mentors.",
  },
  {
    icon: FileCheck2,
    title: "Build an Industry Portfolio",
    text: "Complete practical projects that showcase your abilities to employers and strengthen your resume.",
  },
];

export default function WhyUs() {
  const revealRef = useScrollReveal();
  return (
    <section className="why" id="why-us" ref={revealRef}>
      <div className="container">
        <div className="why__stats reveal">
          {STATS.map((s) => (
            <div className="why__stat" key={s.label}>
              <span className="why__stat-value">{s.value}</span>
              <span className="why__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="why__body">
          <div className="section-head reveal">
            <span className="eyebrow">Why What Next</span>
            <h2>Live Online Learning That Fits Your Schedule—and Your Career Goals</h2>
            <p>
              Learning online shouldn't mean learning alone. Every course at
              What Next combines live teaching, practical exercises, mentor
              support, and project-based learning so you stay engaged from
              your first class to your final project.
            </p>
            <p>
              Whether you're a student, graduate, working professional, or
              career switcher, our flexible learning model helps you build
              skills without putting your life on hold.
            </p>
          </div>
          <div className="why__grid">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div className={`why__card reveal reveal-delay-${i + 1}`} key={f.title}>
                  <Icon size={22} />
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}