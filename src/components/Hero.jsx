// import React from "react";
// import { MessageCircle, Phone, Code2, Coffee, Palette, BrainCircuit, PenTool, Clapperboard } from "lucide-react";
// import logo from "../assets/logo.png";
// import { buildWhatsAppLink, PHONE_TEL } from "../siteConfig";
// import "./Hero.css";

// const ORBIT_ICONS = [Code2, Coffee, Palette, BrainCircuit, PenTool, Clapperboard];

// export default function Hero() {
//   return (
//     <section className="hero" id="top">
//       <div className="hero__grid-lines" aria-hidden="true" />
//       <div className="hero__beam" aria-hidden="true" />
//       <div className="container hero__inner">
//         <div className="hero__copy">
//           <p className="hero__eyebrow">
//             <span className="hero__dot" /> live &middot; on google meet &middot; enquire on whatsapp
//           </p>
//           <h1 className="hero__title">
//             RISE
//             <br />
//             WITH THE
//             <br />
//             <span className="hero__title-accent">RIGHT DIRECTION</span>
//           </h1>
//           <p className="hero__sub">
//             What Next runs live, instructor-led classes over Google Meet.
//             No campus, no recordings — a mentor, a schedule, and ten tracks
//             built for where you're trying to go next.
//           </p>

//           <div className="hero__cta">
//             <a
//               className="btn btn-primary"
//               href={buildWhatsAppLink("Hi What Next! I want to know more about your live classes.")}
//               target="_blank"
//               rel="noreferrer"
//             >
//               <MessageCircle size={18} /> Chat on WhatsApp
//             </a>
//             <a className="btn btn-outline" href={`tel:${PHONE_TEL}`}>
//               <Phone size={18} /> Call now
//             </a>
//           </div>

//           <div className="hero__stats">
//             <div><strong>10</strong><span>tracks</span></div>
//             <div><strong>100%</strong><span>live classes</span></div>
//             <div><strong>6</strong><span>batches / week</span></div>
//           </div>
//         </div>

//         <div className="hero__mark">
//           <div className="hero__ring hero__ring--outer" />
//           <div className="hero__ring hero__ring--inner" />
//           <div className="hero__orbit">
//             {ORBIT_ICONS.map((Icon, i) => (
//               <div
//                 className="hero__orbit-icon"
//                 key={i}
//                 style={{ transform: `rotate(${(360 / ORBIT_ICONS.length) * i}deg) translate(150px) rotate(-${(360 / ORBIT_ICONS.length) * i}deg)` }}
//               >
//                 <div className="hero__orbit-counter">
//                   <Icon size={18} />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <img src={logo} alt="What Next" className="hero__logo" />
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { MessageCircle, Phone, Code2, Coffee, Palette, BrainCircuit, PenTool, Clapperboard } from "lucide-react";
import logo from "../assets/logo.png";
import { buildWhatsAppLink, PHONE_TEL } from "./Siteconfig";
import "./Hero.css";

const ORBIT_ICONS = [Code2, Coffee, Palette, BrainCircuit, PenTool, Clapperboard];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="hero__beam" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__dot" /> Live Mentor-Led Classes • Google Meet • Small Batches • Project-Based Learning
          </p>
          <h1 className="hero__title">
            RISE
            <br />
            WITH THE
            <br />
            <span className="hero__title-accent">RIGHT DIRECTION</span>
          </h1>
          <p className="hero__sub">
            Build practical, job-ready skills through live online classes taught
            by experienced mentors. Learn on Google Meet, work on real projects,
            ask questions in real time, and gain the confidence to move toward
            your next career opportunity.
          </p>
          <p className="hero__sub">
            Choose from industry-focused programs in Python, Java, Full Stack
            Development, Data Analytics, Data Science, Artificial Intelligence,
            Digital Marketing, UI/UX Design, Graphic Design, and Video Editing.
          </p>

          <div className="hero__cta">
            <a
              className="btn btn-primary"
              href={buildWhatsAppLink("Hi What Next! I want to know more about your live classes.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Start on WhatsApp
            </a>
            <a className="btn btn-outline" href={`tel:${PHONE_TEL}`}>
              <Phone size={18} /> Talk to a Mentor
            </a>
          </div>

          <div className="hero__stats">
            <div><strong>10+</strong><span>Career Tracks</span></div>
            <div><strong>100%</strong><span>Live Interactive Classes</span></div>
            <div><strong>6+</strong><span>New Batches Every Week</span></div>
          </div>
        </div>

        <div className="hero__mark">
          <div className="hero__ring hero__ring--outer" />
          <div className="hero__ring hero__ring--inner" />
          <div className="hero__orbit">
            {ORBIT_ICONS.map((Icon, i) => (
              <div
                className="hero__orbit-icon"
                key={i}
                style={{ transform: `rotate(${(360 / ORBIT_ICONS.length) * i}deg) translate(150px) rotate(-${(360 / ORBIT_ICONS.length) * i}deg)` }}
              >
                <div className="hero__orbit-counter">
                  <Icon size={18} />
                </div>
              </div>
            ))}
          </div>
          <img src={logo} alt="What Next" className="hero__logo" />
        </div>
      </div>
    </section>
  );
}