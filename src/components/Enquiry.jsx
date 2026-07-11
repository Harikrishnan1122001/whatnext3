import React, { useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { COURSES, WHATSAPP_NUMBER, PHONE_DISPLAY, PHONE_TEL } from "../siteConfig";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Enquiry.css";

export default function Enquiry() {
  const revealRef = useScrollReveal();
  const [name, setName] = useState("");
  const [course, setCourse] = useState(COURSES[0].name);

  const openWhatsApp = (e) => {
    e.preventDefault();
    const who = name.trim() ? name.trim() : "there";
    const message = `Hi What Next! This is ${who}. I'd like to join the ${course} batch — please share the timings and fees.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="enquiry" id="enquire" ref={revealRef}>
      <div className="container enquiry__inner">
        <div className="enquiry__copy reveal">
          <span className="eyebrow" style={{ color: "var(--c-white)" }}>
            Talk to us today
          </span>
          <h2>No forms buried in email. Just chat or call.</h2>
          <p>
            Fill in two things and we'll open WhatsApp with your message ready
            to send — or skip straight to a call if that's faster for you.
          </p>

          <div className="enquiry__direct">
            <a className="enquiry__direct-item" href={`tel:${PHONE_TEL}`}>
              <span className="enquiry__direct-icon">
                <Phone size={18} />
              </span>
              <div>
                <strong>Call us directly</strong>
                <span>{PHONE_DISPLAY}</span>
              </div>
            </a>
            <a
              className="enquiry__direct-item"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="enquiry__direct-icon">
                <MessageCircle size={18} />
              </span>
              <div>
                <strong>Chat on WhatsApp</strong>
                <span>Usually replies in minutes</span>
              </div>
            </a>
          </div>
        </div>

        <form className="enquiry__card reveal reveal-delay-2" onSubmit={openWhatsApp}>
          <label className="enquiry__field">
            <span>Your name</span>
            <input
              type="text"
              placeholder="e.g. Aditi Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="enquiry__field">
            <span>Course you're interested in</span>
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
              {COURSES.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className="btn btn-primary enquiry__submit">
            <Send size={17} /> Send on WhatsApp
          </button>
          <p className="enquiry__note">
            Opens WhatsApp with your message pre-filled — nothing is sent from
            here directly.
          </p>
        </form>
      </div>
    </section>
  );
}
