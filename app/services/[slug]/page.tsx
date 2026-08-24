import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/services-data";
import { CONTACT, RATE_CARD, waQuoteLink } from "@/lib/pricing-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `Innova Crysta Taxi for ${service.name} in Chennai`,
    description: service.intro,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "LocalBusiness", name: "Magizhunthu Autos & Mobility" },
    areaServed: "Chennai",
    description: service.intro,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
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
            <Link href="/services" className="hover:text-gold">Services</Link> / {service.name}
          </nav>
          <div className="mt-3 text-3xl">{service.icon}</div>
          <h1 className="mt-2 font-display text-4xl uppercase leading-tight text-cream md:text-5xl">
            Innova Crysta Taxi for {service.name} in Chennai
          </h1>
          <p className="mt-4 max-w-2xl font-body text-cream/70">{service.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CONTACT.phoneHref} className="focus-ring rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink hover:scale-105 transition-transform">
              Book This Innova Crysta Taxi
            </a>
            <a
              href={waQuoteLink(service.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-6 py-3 font-body text-sm font-semibold text-[#25D366] hover:scale-105 transition-transform"
            >
              WhatsApp for a Quote
            </a>
            <Link href="/pricing" className="focus-ring rounded-full border border-cream/30 px-6 py-3 font-body text-sm text-cream hover:border-gold hover:text-gold">
              View Rate Card
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5">
        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">Who This Is For</h2>
          <p className="mt-4 font-body text-sm text-cream/70">{service.whoFor}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">What&rsquo;s Included</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.includes.map((item, i) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-route bg-charcoal p-4">
                <span className="font-display text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-body text-sm text-cream/80">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">Pricing</h2>
          <div className="mt-4 rounded-2xl border border-gold/30 bg-charcoal p-6 font-body text-sm text-cream/70">
            This service is billed under our standard Local, Outstation, or
            Multi-Day Rental rates depending on distance and duration —
            starting from ₹{RATE_CARD.local.slabs[0].price.toLocaleString("en-IN")} for a
            short local booking. See the{" "}
            <Link href="/pricing" className="text-gold hover:underline">full rate card</Link>{" "}
            or call for an exact quote tailored to your requirement.
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl uppercase text-cream">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {service.faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-route bg-charcoal p-5">
                <summary className="cursor-pointer font-body text-sm font-semibold text-cream marker:content-none">{f.q}</summary>
                <p className="mt-3 font-body text-sm text-cream/60">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-crimson/20 border border-crimson/40 p-8 text-center">
          <h2 className="font-display text-2xl uppercase text-cream">
            Book Your Innova Crysta Taxi for {service.name}
          </h2>
          <p className="mt-2 font-body text-sm text-cream/70">Call now or get an exact quote.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={CONTACT.phoneHref} className="focus-ring inline-block rounded-full bg-gold px-8 py-3 font-body text-sm font-semibold text-ink hover:scale-105 transition-transform">
              Call {CONTACT.phone}
            </a>
            <a
              href={waQuoteLink(service.name)}
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
