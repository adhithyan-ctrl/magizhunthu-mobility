import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CIRCUITS } from "@/lib/trips-data";
import { circuitBlurb, circuitTitle } from "@/lib/seo-copy";
import { PERMIT_FEES, RATE_CARD, CONTACT, waQuoteLink } from "@/lib/pricing-data";

export function generateStaticParams() {
  return CIRCUITS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const circuit = CIRCUITS.find((c) => c.slug === params.slug);
  if (!circuit) return {};
  return { title: circuitTitle(circuit), description: circuitBlurb(circuit) };
}

const STATE_LABELS: Record<string, string> = {
  TN: "Tamil Nadu",
  AP: "Andhra Pradesh",
  KL: "Kerala",
  KA: "Karnataka",
  PY: "Puducherry",
};

export default function CircuitPage({ params }: { params: { slug: string } }) {
  const circuit = CIRCUITS.find((c) => c.slug === params.slug);
  if (!circuit) notFound();

  const ratePerDay = RATE_CARD.outstation.package2.ratePerDay;
  const baseFare = ratePerDay * circuit.days;
  const permitStates = circuit.states.filter((s) => s !== "TN");
  const permitFee = permitStates.reduce((sum, s) => sum + (PERMIT_FEES[s] ?? 0), 0);

  const faqs = [
    {
      q: `How many days does the ${circuit.name} take?`,
      a: `Our Innova Crysta taxi covers the ${circuit.name} in ${circuit.days} days, visiting all ${circuit.stops.length} stops, calculated garage-to-garage from our Mugalivakkam base.`,
    },
    {
      q: "What is included in the fare?",
      a: "Your fare includes the AC Innova Crysta vehicle, an experienced professional chauffeur, and seating for up to 7 members. Toll, parking, permits and any distance beyond the included km are charged extra at actuals.",
    },
    ...(permitFee > 0
      ? [{
          q: "Does this circuit need an interstate permit?",
          a: `Yes — this circuit crosses into ${permitStates.map((s) => STATE_LABELS[s]).join(" and ")}, so a total interstate permit fee of ₹${permitFee} applies.`,
        }]
      : []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: circuitTitle(circuit),
    description: circuitBlurb(circuit),
    itinerary: circuit.stops.map((s) => ({ "@type": "Place", name: s })),
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
            <Link href="/circuits" className="hover:text-gold">Circuits</Link> / {circuit.name}
          </nav>
          <div className="mt-3 font-body text-xs tracking-widest text-gold">
            {circuit.days} DAY{circuit.days > 1 ? "S" : ""} · {circuit.states.map((s) => STATE_LABELS[s]).join(", ")}
          </div>
          <h1 className="mt-2 font-display text-4xl uppercase leading-tight text-cream md:text-5xl">
            {circuit.name} — Innova Crysta Taxi from Chennai
          </h1>
          <p className="mt-4 max-w-2xl font-body text-cream/70">{circuitBlurb(circuit)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CONTACT.phoneHref} className="focus-ring rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink hover:scale-105 transition-transform">
              Book This Innova Crysta Taxi
            </a>
            <a
              href={waQuoteLink(circuit.name)}
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
          <h2 className="font-display text-2xl uppercase text-cream">Stops on This Circuit</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {circuit.stops.map((stop, i) => (
              <div key={stop} className="flex items-start gap-3 rounded-xl border border-route bg-charcoal p-4">
                <span className="font-display text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-body text-sm text-cream/80">{stop}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">Your Route</h2>
          <div className="mt-4 rounded-xl border border-route bg-charcoal p-6 font-body text-sm text-cream/70">
            Mugalivakkam Garage → Your Pickup → {circuit.stops.join(" → ")} → Your Drop → Mugalivakkam Garage
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">Indicative Pricing</h2>
          <div className="mt-4 rounded-2xl border border-gold/30 bg-charcoal p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <span className="font-body text-cream/60">Package 2 × {circuit.days} days</span>
              <span className="font-display text-2xl text-gold">₹{baseFare.toLocaleString("en-IN")}</span>
            </div>
            {permitFee > 0 && (
              <div className="mt-3 flex items-center justify-between border-t border-route pt-3 font-body text-sm">
                <span className="text-cream/60">Interstate permit ({permitStates.join(", ")})</span>
                <span className="text-cream">₹{permitFee.toLocaleString("en-IN")}</span>
              </div>
            )}
            <p className="mt-4 font-body text-xs text-cream/40">
              Plus extra km beyond 300 km/day at ₹{RATE_CARD.outstation.extraKmRate}/km and toll at actuals.
              See our <Link href="/pricing" className="text-gold hover:underline">full rate card</Link> for the complete formula.
            </p>
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
          <h2 className="font-display text-2xl uppercase text-cream">Book Your {circuit.name}</h2>
          <p className="mt-2 font-body text-sm text-cream/70">Call now or get an exact quote for your travel dates.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={CONTACT.phoneHref} className="focus-ring inline-block rounded-full bg-gold px-8 py-3 font-body text-sm font-semibold text-ink hover:scale-105 transition-transform">
              Call {CONTACT.phone}
            </a>
            <a
              href={waQuoteLink(circuit.name)}
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
