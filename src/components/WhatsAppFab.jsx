import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "./Siteconfig";
import "./WhatsAppFab.css";

export default function WhatsAppFab() {
  return (
    <a
      className="whatsapp-fab"
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with What Next on WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="whatsapp-fab__ping" aria-hidden="true" />
    </a>
  );
}
