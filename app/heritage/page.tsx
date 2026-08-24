import type { Metadata } from "next";
import CategoryPageContent from "@/components/CategoryPageContent";

export const metadata: Metadata = {
  title: "Heritage & Wildlife Innova Crysta Taxi from Chennai",
  description:
    "Book an Innova Crysta taxi from Chennai for heritage cities, forts, waterfalls and wildlife reserves across South India.",
};

export default function Page() {
  return <CategoryPageContent category="heritage" />;
}
