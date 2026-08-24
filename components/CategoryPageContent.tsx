import Link from "next/link";
import { CATEGORY_META, placesByCategory, CIRCUITS, type Category } from "@/lib/trips-data";
import { placeBlurb, circuitBlurb } from "@/lib/seo-copy";

export default function CategoryPage({ category }: { category: Category }) {
  const meta = CATEGORY_META[category];
  const places = placesByCategory(category);
  const circuits = CIRCUITS.filter((c) => c.category === category);

  return (
    <div className="pb-20">
      <div className="border-b border-route bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="font-body text-xs tracking-widest text-gold">
            INNOVA CRYSTA TAXI · {meta.label.toUpperCase()}
          </div>
          <h1 className="mt-2 font-display text-4xl uppercase text-cream md:text-5xl">
            {meta.label} — Innova Crysta Taxi from Chennai
          </h1>
          <p className="mt-4 max-w-2xl font-body text-cream/70">{meta.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14">
        {circuits.length > 0 && (
          <div className="mb-14">
            <h2 className="font-display text-2xl uppercase text-cream">
              Named {meta.label} Circuits
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {circuits.map((c) => (
                <Link
                  key={c.slug}
                  href={`/circuits/${c.slug}`}
                  className="focus-ring group rounded-2xl border border-gold/30 bg-charcoal p-6 hover:border-gold/60"
                >
                  <div className="font-body text-[11px] uppercase tracking-widest text-gold">
                    {c.days} Day{c.days > 1 ? "s" : ""} · {c.stops.length} Stops
                  </div>
                  <h3 className="mt-2 font-display text-xl text-cream group-hover:text-gold">{c.name}</h3>
                  <p className="mt-2 font-body text-sm text-cream/60 line-clamp-3">{circuitBlurb(c)}</p>
                  <span className="mt-4 inline-block font-body text-xs text-gold">View itinerary →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <h2 className="font-display text-2xl uppercase text-cream">
          Individual Destinations
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p) => (
            <Link
              key={p.slug}
              href={`/places/${p.slug}`}
              className="focus-ring group rounded-2xl border border-route bg-charcoal p-6 hover:border-gold/50"
            >
              <div className="font-body text-[11px] uppercase tracking-widest text-gold">
                {p.state}
              </div>
              <h2 className="mt-2 font-display text-xl text-cream group-hover:text-gold">
                {p.name}
              </h2>
              <p className="mt-2 font-body text-sm text-cream/60 line-clamp-3">
                {placeBlurb(p)}
              </p>
              <span className="mt-4 inline-block font-body text-xs text-gold">
                View Innova Crysta taxi details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
