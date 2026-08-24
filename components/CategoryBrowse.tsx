import Link from "next/link";
import { CATEGORY_META, placesByCategory, CIRCUITS, type Category } from "@/lib/trips-data";

const CATEGORY_ICON: Record<Category, string> = {
  spiritual: "🛕",
  hill: "🏔️",
  coastal: "🏖️",
  heritage: "🏙️",
};

export default function CategoryBrowse() {
  const categories = Object.keys(CATEGORY_META) as Category[];
  // Pick a representative spread across categories rather than the
  // first 6 in array order, so heritage/coastal circuits are visible too.
  const featuredCircuits = categories.flatMap((cat) =>
    CIRCUITS.filter((c) => c.category === cat).slice(0, 2)
  );

  return (
    <section id="packages" className="border-b border-route bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 max-w-2xl">
          <div className="font-body text-xs tracking-widest text-gold">
            INNOVA CRYSTA TAXI PACKAGES
          </div>
          <h2 className="mt-2 font-display text-3xl uppercase text-cream md:text-4xl">
            Where Would You Like to Go?
          </h2>
          <p className="mt-3 font-body text-sm text-cream/60">
            Book our Innova Crysta taxi from Chennai for spiritual tours,
            hill stations, coastal getaways and heritage circuits across
            Tamil Nadu, Kerala, Karnataka &amp; Andhra Pradesh.
          </p>
          <Link href="/destinations" className="focus-ring mt-2 inline-block font-body text-xs text-gold hover:underline">
            Browse the full destination list →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const meta = CATEGORY_META[cat];
            const placeCount = placesByCategory(cat).length;
            const circuitCount = CIRCUITS.filter((c) => c.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/${meta.slug}`}
                className="focus-ring group rounded-2xl border border-route bg-charcoal p-6 transition-colors hover:border-gold/50"
              >
                <div className="text-3xl">{CATEGORY_ICON[cat]}</div>
                <h3 className="mt-3 font-display text-lg text-cream group-hover:text-gold">
                  {meta.label}
                </h3>
                <p className="mt-2 font-body text-xs text-cream/50">
                  {placeCount} destinations{circuitCount > 0 ? ` · ${circuitCount} circuits` : ""}
                </p>
                <span className="mt-4 inline-block font-body text-xs text-gold">
                  View Innova Crysta taxi packages →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <h3 className="font-display text-xl uppercase text-cream">
            Named Pilgrimage &amp; Tour Circuits
          </h3>
          <Link href="/circuits" className="focus-ring font-body text-xs text-gold hover:underline">
            View all circuits →
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCircuits.map((c) => (
            <Link
              key={c.slug}
              href={`/circuits/${c.slug}`}
              className="focus-ring rounded-xl border border-route bg-charcoal p-5 hover:border-gold/50"
            >
              <div className="font-body text-[11px] uppercase tracking-widest text-gold">
                {c.days} Day{c.days > 1 ? "s" : ""} · {c.stops.length} Stops
              </div>
              <h4 className="mt-1 font-display text-base text-cream">{c.name}</h4>
              <p className="mt-1 font-body text-xs text-cream/50 line-clamp-2">{c.theme}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
