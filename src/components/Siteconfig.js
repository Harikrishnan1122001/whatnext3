// ============================================
// CONTACT DETAILS — EDIT THESE WITH YOUR REAL INFO
// ============================================

// WhatsApp number in international format, no "+", no spaces
// e.g. India number +91 98765 43210 -> "919876543210"
export const WHATSAPP_NUMBER = "919876543210";

// Phone number shown to users (formatted, human-readable)
export const PHONE_DISPLAY = "+91 98765 43210";

// Phone number used in tel: links (digits + country code, no spaces)
export const PHONE_TEL = "+919876543210";

// Contact email
export const EMAIL = "hello@whatnext.com";

// ============================================
// WHATSAPP LINK BUILDER
// ============================================
// Usage: buildWhatsAppLink("Hi What Next! I want to know more.")
// If no message is passed, opens WhatsApp chat with no pre-filled text.
export function buildWhatsAppLink(message = "") {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// ============================================
// COURSES DATA
// ============================================
export const COURSES = [
  {
    id: "python",
    code: "PY",
    name: "Python",
    tagline:
      "Learn Python programming from fundamentals to automation, APIs, data handling, and backend development through live practical sessions.",
    level: "Beginner Friendly",
  },
  {
    id: "java",
    code: "JV",
    name: "Java",
    tagline:
      "Master Java programming, object-oriented concepts, Spring Boot fundamentals, and enterprise application development.",
    level: "Beginner Friendly",
  },
  {
    id: "fullstack",
    code: "FS",
    name: "Full Stack Development",
    tagline:
      "Build responsive websites and web applications using HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and deployment tools.",
    level: "Intermediate",
  },
  {
    id: "digital-marketing",
    code: "DM",
    name: "Digital Marketing",
    tagline:
      "Learn SEO, Google Ads, Meta Ads, content marketing, analytics, email marketing, and social media strategy.",
    level: "Beginner Friendly",
  },
  {
    id: "data-analyst",
    code: "DA",
    name: "Data Analyst",
    tagline:
      "Develop practical skills in Excel, SQL, Power BI, Tableau, and data visualization to make business decisions with confidence.",
    level: "Beginner Friendly",
  },
  {
    id: "data-science",
    code: "DS",
    name: "Data Science",
    tagline:
      "Explore statistics, Python, machine learning, data modelling, and real-world predictive analytics projects.",
    level: "Intermediate",
  },
  {
    id: "ai",
    code: "AI",
    name: "Artificial Intelligence",
    tagline:
      "Understand AI fundamentals, Generative AI, Large Language Models, prompt engineering, and AI-powered application development.",
    level: "Intermediate",
  },
  {
    id: "ui-ux",
    code: "UX",
    name: "UI / UX Design",
    tagline:
      "Design intuitive digital experiences using Figma, wireframing, user research, prototyping, and usability testing.",
    level: "Beginner Friendly",
  },
  {
    id: "graphic-design",
    code: "GD",
    name: "Graphic Design",
    tagline:
      "Create professional visual content using Photoshop, Illustrator, branding principles, and modern design techniques.",
    level: "Beginner Friendly",
  },
  {
    id: "video-editing",
    code: "VE",
    name: "Video Editing",
    tagline:
      "Learn professional video editing, motion graphics, colour correction, transitions, storytelling, and content creation workflows.",
    level: "Beginner Friendly",
  },
];

// ============================================
// FAQ DATA (from provided site copy)
// ============================================
export const FAQS = [
  {
    q: "Are the classes live or recorded?",
    a: "Every course is delivered through live online classes on Google Meet, allowing students to interact with mentors, ask questions, and receive real-time guidance.",
  },
  {
    q: "Who can join these courses?",
    a: "Students, fresh graduates, working professionals, freelancers, and career changers can join our programs based on their interests and career goals.",
  },
  {
    q: "Will I work on real projects?",
    a: "Yes. Every learning track includes practical assignments and industry-relevant projects to help you build a portfolio.",
  },
  {
    q: "Which online course is best for getting a job?",
    a: "The right course depends on your career goals. Popular choices include Full Stack Development, Python, Data Analytics, Artificial Intelligence, and Digital Marketing because of their strong industry demand.",
  },
  {
    q: "How do I enroll?",
    a: "Simply contact us through WhatsApp or call our team. We'll help you choose a suitable batch and guide you through the enrollment process.",
  },
];