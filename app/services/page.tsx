import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Innova Crysta Taxi Services in Chennai",
  description:
    "Innova Crysta taxi in Chennai for every occasion — weddings, airport transfers, local city travel, corporate events, hospital visits and more.",
};

export default function ServicesPage() {
  return (
    <div className="pb-20">
      <div className="border-b border-route bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="font-body text-xs tracking-widest text-gold">
            INNOVA CRYSTA TAXI SERVICES
          </div>
          <h1 className="mt-2 font-display text-4xl uppercase text-cream md:text-5xl">
            Innova Crysta Taxi in Chennai — For Every Occasion
          </h1>
          <p className="mt-4 max-w-2xl font-body text-cream/70">
            Whatever the reason you need an Innova Crysta taxi in Chennai —
            wedding, airport run, hospital visit, or a corporate event —
            we&rsquo;ve got a chauffeur-driven package built for it.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="focus-ring group rounded-2xl border border-route bg-charcoal p-6 hover:border-gold/50"
            >
              <div className="text-3xl">{s.icon}</div>
              <h2 className="mt-3 font-display text-xl text-cream group-hover:text-gold">
                {s.name}
              </h2>
              <p className="mt-2 font-body text-sm text-cream/60 line-clamp-3">
                {s.intro}
              </p>
              <span className="mt-4 inline-block font-body text-xs text-gold">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
