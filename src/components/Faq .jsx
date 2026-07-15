import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "./Siteconfig";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Faq.css";

export default function FAQ() {
  const revealRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="faq" id="faq" ref={revealRef}>
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <div
            >
              <button
                type="button"
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <ChevronDown size={18} className="faq__chevron" />
              </button>
              {openIndex === i && <p className="faq__answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}