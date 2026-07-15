// import React from "react";
// import { MessageCircle, Phone, Mail } from "lucide-react";
// import logo from "../assets/logo.png";
// import { COURSES, buildWhatsAppLink, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "../siteConfig";
// import "./Footer.css";

// export default function Footer() {
//   const year = new Date().getFullYear();
//   return (
//     <footer className="footer">
//       <div className="container footer__inner">
//         <div className="footer__brand">
//           <img src={logo} alt="What Next" className="footer__logo" />
//           <p>
//             Live online classes over Google Meet. Rise with the right
//             direction.
//           </p>
//           <div className="footer__contact">
//             <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
//               <MessageCircle size={15} /> WhatsApp
//             </a>
//             <a href={`tel:${PHONE_TEL}`}>
//               <Phone size={15} /> {PHONE_DISPLAY}
//             </a>
//             <a href={`mailto:${EMAIL}`}>
//               <Mail size={15} /> {EMAIL}
//             </a>
//           </div>
//         </div>

//         <div className="footer__col">
//           <h4>Courses</h4>
//           <ul>
//             {COURSES.slice(0, 5).map((c) => (
//               <li key={c.id}>
//                 <a href="#courses">{c.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="footer__col">
//           <h4>&nbsp;</h4>
//           <ul>
//             {COURSES.slice(5).map((c) => (
//               <li key={c.id}>
//                 <a href="#courses">{c.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="footer__col">
//           <h4>Site</h4>
//           <ul>
//             <li><a href="#how-it-works">How classes work</a></li>
//             <li><a href="#why-us">Why us</a></li>
//             <li><a href="#enquire">Enquire</a></li>
//           </ul>
//         </div>
//       </div>
//       <div className="footer__bottom">
//         <div className="container footer__bottom-inner">
//           <span>&copy; {year} What Next. All rights reserved.</span>
//           <span>Rise with the right direction.</span>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { COURSES, buildWhatsAppLink, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "./Siteconfig";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="What Next" className="footer__logo" />
          <p>
            What Next is an online learning platform offering live
            mentor-led courses in software development, digital marketing,
            design, data, and emerging technologies. Learn from industry
            professionals through interactive Google Meet sessions and build
            practical skills with real-world projects.
          </p>
          <div className="footer__contact">
            <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={15} /> WhatsApp
            </a>
            <a href={`tel:${PHONE_TEL}`}>
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail size={15} /> {EMAIL}
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Courses</h4>
          <ul>
            {COURSES.slice(0, 5).map((c) => (
              <li key={c.id}>
                <a href="#courses">{c.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>&nbsp;</h4>
          <ul>
            {COURSES.slice(5).map((c) => (
              <li key={c.id}>
                <a href="#courses">{c.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>Site</h4>
          <ul>
            <li><a href="#how-it-works">How classes work</a></li>
            <li><a href="#why-us">Why us</a></li>
            <li><a href="#enquire">Enquire</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>&copy; {year} What Next. All rights reserved.</span>
          <span>Rise with the right direction.</span>
        </div>
      </div>
    </footer>
  );
}