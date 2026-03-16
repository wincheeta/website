import { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About | Harry",
  description: "Learn about my professional philosophy and technical expertise in building high-performance web applications.",
};

export default function AboutPage() {
  return <AboutContent />;
}
