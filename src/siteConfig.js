// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to set your real WhatsApp number and phone number.
// Every button on the site (navbar, hero, enquiry, footer) reads
// from these two constants — change them once, they update everywhere.
// ─────────────────────────────────────────────────────────────

// WhatsApp number in international format, digits only, no + or spaces.
// Example: India number +91 98765 43210 -> "919876543210"
export const WHATSAPP_NUMBER = "919876543210";

// Phone number used for the "Call Now" button (tel: link) and display text.
export const PHONE_DISPLAY = "+91 98765 43210";
export const PHONE_TEL = "+919876543210";

export const EMAIL = "hello@whatnext.academy";

// Builds a wa.me link with a pre-filled message.
export function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message || "Hi What Next! I'd like to know more about your courses.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const COURSES = [
  {
    id: "python",
    code: "PY-01",
    name: "Python",
    tagline: "Scripting to backend systems",
    level: "Beginner → Advanced",
  },
  {
    id: "java",
    code: "JV-02",
    name: "Java",
    tagline: "OOP, Spring & enterprise apps",
    level: "Beginner → Advanced",
  },
  {
    id: "fullstack",
    code: "FS-03",
    name: "Full Stack Development",
    tagline: "MERN, databases & deployment",
    level: "Beginner → Job-ready",
  },
  {
    id: "digital-marketing",
    code: "DM-04",
    name: "Digital Marketing",
    tagline: "SEO, ads, social & analytics",
    level: "Beginner → Advanced",
  },
  {
    id: "data-analyst",
    code: "DA-05",
    name: "Data Analyst",
    tagline: "Excel, SQL, Power BI & Tableau",
    level: "Beginner → Advanced",
  },
  {
    id: "data-science",
    code: "DS-06",
    name: "Data Science",
    tagline: "Statistics, ML & real projects",
    level: "Intermediate → Advanced",
  },
  {
    id: "ai",
    code: "AI-07",
    name: "Artificial Intelligence",
    tagline: "ML, deep learning & GenAI tools",
    level: "Intermediate → Advanced",
  },
  {
    id: "ui-ux",
    code: "UX-08",
    name: "UI / UX Design",
    tagline: "Figma, research & prototyping",
    level: "Beginner → Advanced",
  },
  {
    id: "graphic-design",
    code: "GD-09",
    name: "Graphic Designing",
    tagline: "Photoshop, Illustrator & branding",
    level: "Beginner → Advanced",
  },
  {
    id: "video-editing",
    code: "VE-10",
    name: "Video Editing",
    tagline: "Premiere Pro, After Effects & reels",
    level: "Beginner → Advanced",
  },
];
