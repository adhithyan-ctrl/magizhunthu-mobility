import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PLACES as PLACES_LIST, CATEGORY_META } from "@/lib/trips-data";
import { CONTACT, waQuoteLink } from "@/lib/pricing-data";
import { placeBlurb, placeTitle } from "@/lib/seo-copy";

export function generateStaticParams() {
  return PLACES_LIST.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const place = PLACES_LIST.find((p) => p.slug === params.slug);
  if (!place) return {};
  return {
    title: placeTitle(place),
    description: placeBlurb(place),
  };
}

export default function PlacePage({ params }: { params: { slug: string } }) {
  const place = PLACES_LIST.find((p) => p.slug === params.slug);
  if (!place) notFound();

  const meta = CATEGORY_META[place.category];

  const faqs = [
    {
      q: `How do I get an exact Innova Crysta taxi fare to ${place.name}?`,
      a: `Message us on WhatsApp or call directly with your pickup point and travel date — we'll confirm your exact fare from our Mugalivakkam-based rate card before you book.`,
    },
    {
      q: `Is toll included in the Innova Crysta taxi fare to ${place.name}?`,
      a: "Toll is charged extra at actuals and shown upfront in your quote — never hidden in the fare.",
    },
    {
      q: `Does the ${place.name} route need an interstate permit?`,
      a: place.state === "TN"
        ? `No — ${place.name} is within Tamil Nadu, so no interstate permit fee applies.`
        : `Yes — since ${place.name} is in ${place.state}, an interstate permit fee applies in addition to the package rate. See our rate card for the exact amount.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${place.name} — Innova Crysta Taxi from Chennai`,
    description: placeBlurb(place),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="border-b border-route bg-charcoal">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <nav className="font-body text-xs text-cream/40">
            <Link href={`/${meta.slug}`} className="hover:text-gold">{meta.label}</Link> / {place.name}
          </nav>
          <div className="mt-3 font-body text-xs tracking-widest text-gold">
            {place.state}
          </div>
          <h1 className="mt-2 font-display text-4xl uppercase leading-tight text-cream md:text-5xl">
            {place.name} Taxi from Chennai
          </h1>
          <p className="mt-4 max-w-2xl font-body text-cream/70">{placeBlurb(place)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CONTACT.phoneHref} className="focus-ring rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink hover:scale-105 transition-transform">
              Call to Book
            </a>
            <a
              href={waQuoteLink(`${place.name} trip`)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-6 py-3 font-body text-sm font-semibold text-[#25D366] hover:scale-105 transition-transform"
            >
              WhatsApp for a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5">
        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">About This Trip</h2>
          <p className="mt-4 font-body text-sm text-cream/70">
            {place.name} is known for {place.significance}. Our Innova Crysta taxi from Chennai
            gets you there in comfort, with an experienced chauffeur and seating for up to 7 members —
            ideal for families and groups travelling together.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">Route</h2>
          <div className="mt-4 rounded-xl border border-route bg-charcoal p-6 font-body text-sm text-cream/70">
            Mugalivakkam Garage → Your Pickup → {place.name} → Your Drop → Mugalivakkam Garage
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">Pricing</h2>
          <div className="mt-4 rounded-2xl border border-gold/30 bg-charcoal p-6 font-body text-sm text-cream/70">
            This trip is priced under our standard Local or Outstation
            packages depending on the exact distance from your pickup
            point. See our{" "}
            <Link href="/pricing" className="text-gold hover:underline">full rate card</Link>{" "}
            for the base rates, or message us on WhatsApp with your pickup
            location and date for an exact, confirmed fare.
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-route bg-charcoal p-5">
                <summary className="cursor-pointer font-body text-sm font-semibold text-cream marker:content-none">{f.q}</summary>
                <p className="mt-3 font-body text-sm text-cream/60">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-crimson/20 border border-crimson/40 p-8 text-center">
          <h2 className="font-display text-2xl uppercase text-cream">Book Your {place.name} Innova Crysta Taxi</h2>
          <p className="mt-2 font-body text-sm text-cream/70">Call now or get an exact quote on WhatsApp.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={CONTACT.phoneHref} className="focus-ring inline-block rounded-full bg-gold px-8 py-3 font-body text-sm font-semibold text-ink hover:scale-105 transition-transform">
              Call {CONTACT.phone}
            </a>
            <a
              href={waQuoteLink(`${place.name} trip`)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-block rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-8 py-3 font-body text-sm font-semibold text-[#25D366] hover:scale-105 transition-transform"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
