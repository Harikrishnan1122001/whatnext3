import React, { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import logo from "../assets/logo.png";
import { buildWhatsAppLink, PHONE_TEL } from "./Siteconfig";
import "./Navbar.css";

const LINKS = [
  { href: "#courses", label: "Courses" },
  { href: "#how-it-works", label: "How classes work" },
  { href: "#why-us", label: "Why us" },
  { href: "#enquire", label: "Enquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__row">
        <a href="#top" className="navbar__brand" onClick={handleLinkClick}>
          <img src={logo} alt="What Next" className="navbar__logo" />
        </a>

        <nav className={`navbar__links${open ? " navbar__links--open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <div className="navbar__cta-mobile">
            <a
              className="btn btn-solid-teal btn-sm"
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a className="btn btn-ghost-teal btn-sm" href={`tel:${PHONE_TEL}`}>
              <Phone size={16} /> Call
            </a>
          </div>
        </nav>

        <div className="navbar__cta">
          <a
            className="btn btn-ghost-teal btn-sm"
            href={`tel:${PHONE_TEL}`}
            aria-label="Call What Next"
          >
            <Phone size={16} /> Call
          </a>
          <a
            className="btn btn-solid-teal btn-sm"
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <button
          className="navbar__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
