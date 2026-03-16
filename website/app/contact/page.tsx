import { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact | Harry",
  description: "Get in touch for high-impact project inquiries or technical collaborations.",
};

export default function ContactPage() {
  return <ContactContent />;
}
