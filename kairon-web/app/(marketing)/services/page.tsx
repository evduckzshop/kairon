import type { Metadata } from "next";
import ServicesPageContent from "./content";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "AI workflow automation packages for small businesses. Starter, Growth, and Enterprise tiers with transparent pricing.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
