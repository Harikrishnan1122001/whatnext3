import React from "react";
import { MessageCircle, CalendarCheck, Video, Award } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./HowItWorks.css";

const STEPS = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Enquire",
    text: "Message us on WhatsApp or call directly. Tell us the course you're eyeing.",
  },
  {
    n: "02",
    icon: CalendarCheck,
    title: "Get your schedule",
    text: "We share the syllabus, batch timing and a Google Meet link that fits your day.",
  },
  {
    n: "03",
    icon: Video,
    title: "Join live on Google Meet",
    text: "Learn face-to-face with a mentor, ask questions in real time, no recordings to catch up on.",
  },
  {
    n: "04",
    icon: Award,
    title: "Finish with a project",
    text: "Wrap up with a portfolio project, a certificate and placement support.",
  },
];

export default function HowItWorks() {
  const revealRef = useScrollReveal();
  return (
    <section className="how" id="how-it-works" ref={revealRef}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">From enquiry to Google Meet</span>
          <h2>Four steps. No campus required.</h2>
        </div>
        <div className="how__steps">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div className={`how__step reveal reveal-delay-${i + 1}`} key={step.n}>
                <div className="how__step-top">
                  <span className="how__step-n">{step.n}</span>
                  <span className="how__step-icon">
                    <Icon size={20} />
                  </span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {i < STEPS.length - 1 && <span className="how__connector" aria-hidden="true" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
