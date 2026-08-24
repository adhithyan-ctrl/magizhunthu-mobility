import type { Metadata } from "next";
import CategoryPageContent from "@/components/CategoryPageContent";

export const metadata: Metadata = {
  title: "Spiritual & Temple Tour Innova Crysta Taxi Chennai",
  description:
    "Book an Innova Crysta taxi from Chennai for temple tours and pilgrimage circuits — Tirupati, Rameswaram, Madurai, Navagraha & more.",
};

export default function Page() {
  return <CategoryPageContent category="spiritual" />;
}
