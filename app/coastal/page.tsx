import type { Metadata } from "next";
import CategoryPageContent from "@/components/CategoryPageContent";

export const metadata: Metadata = {
  title: "Coastal Getaway Innova Crysta Taxi from Chennai",
  description:
    "Book an Innova Crysta taxi from Chennai to Mahabalipuram, Puducherry, Kerala's backwaters and coastal getaways.",
};

export default function Page() {
  return <CategoryPageContent category="coastal" />;
}
