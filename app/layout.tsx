import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// NOTE: Using next/font/google (Oswald + Work Sans) is recommended once
// deployed — it self-hosts the fonts at build time for zero layout shift.
// It requires network access to fonts.googleapis.com at build time, which
// this sandbox doesn't have, so the CSS @font-face import in globals.css
// is used here instead. See README "Fonts" section to switch back.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.magizhunthumobility.com"),
  title: {
    default: "Innova Crysta Taxi in Chennai | Magizhunthu Mobility",
    template: "%s | Magizhunthu Mobility",
  },
  description:
    "Chennai's 5-star rated Innova Crysta taxi for local trips, outstation journeys and temple tours across Tamil Nadu, Kerala, Karnataka & Andhra Pradesh. Premium chauffeur-driven service.",
  keywords: [
    "Innova Crysta taxi Chennai",
    "Innova Crysta taxi",
    "Innova Crysta taxi for wedding Chennai",
    "Innova Crysta airport taxi Chennai",
    "outstation taxi Chennai",
    "chauffeur driven Innova Crysta",
    "Innova Crysta rental Chennai",
    "Innova Crysta Taxi from Chennai",
    "Innova Crysta Taxi for Tours"
  ],
  openGraph: {
    title: "Innova Crysta Taxi in Chennai | Magizhunthu Mobility",
    description:
      "Premium chauffeur-driven Innova Crysta taxi for local, outstation and temple tour travel from Chennai.",
    url: "https://www.magizhunthumobility.com",
    siteName: "Magizhunthu Mobility",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Magizhunthu Mobility",
  image: "https://www.magizhunthumobility.com/og-image.jpg",
  description:
    "Premium chauffeur-driven Innova Crysta taxi service in Chennai for local, outstation and pilgrimage travel.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mugalivakkam, Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  telephone: "+91-80156-63289",
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "12",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
