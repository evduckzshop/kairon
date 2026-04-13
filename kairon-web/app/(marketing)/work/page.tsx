import type { Metadata } from "next";
import WorkPageContent from "./content";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio",
  description:
    "See how Kairon helps small businesses save time and grow with AI-powered workflow automation. Real results, real businesses.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}
