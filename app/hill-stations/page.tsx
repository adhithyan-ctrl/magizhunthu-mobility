import type { Metadata } from "next";
import CategoryPageContent from "@/components/CategoryPageContent";

export const metadata: Metadata = {
  title: "Hill Station Innova Crysta Taxi from Chennai",
  description:
    "Book an Innova Crysta taxi from Chennai to Ooty, Munnar, Kodaikanal, Coorg and other South Indian hill stations.",
};

export default function Page() {
  return <CategoryPageContent category="hill" />;
}
