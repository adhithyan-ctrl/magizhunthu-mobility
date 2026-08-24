import Link from "next/link";
import { SERVICES } from "@/lib/services-data";

export default function ServicesBrowse() {
  return (
    <section className="border-b border-route bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 max-w-2xl">
          <div className="font-body text-xs tracking-widest text-gold">
            INNOVA CRYSTA TAXI FOR EVERY OCCASION
          </div>
          <h2 className="mt-2 font-display text-3xl uppercase text-cream md:text-4xl">
            Whatever the Reason, We&rsquo;ve Got You Covered
          </h2>
          <p className="mt-3 font-body text-sm text-cream/60">
            Wedding, airport run, hospital visit, corporate event — book our
            Innova Crysta taxi in Chennai for any occasion.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="focus-ring group rounded-2xl border border-route bg-charcoal p-5 hover:border-gold/50"
            >
              <div className="text-2xl">{s.icon}</div>
              <h3 className="mt-2 font-display text-sm uppercase text-cream group-hover:text-gold">
                {s.shortLabel}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
