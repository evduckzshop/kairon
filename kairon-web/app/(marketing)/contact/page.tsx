import type { Metadata } from "next";
import ContactPageContent from "./content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kairon. Let us know how we can help automate your business workflows.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
