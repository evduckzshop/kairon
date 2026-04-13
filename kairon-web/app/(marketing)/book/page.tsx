import type { Metadata } from "next";
import BookPageContent from "./content";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Schedule a free 30-minute strategy call with Kairon. Get custom automation recommendations for your business.",
};

export default function BookPage() {
  return <BookPageContent />;
}
