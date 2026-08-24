import type { Metadata } from "next";
import Link from "next/link";
import { PLACES, CIRCUITS, CATEGORY_META, type Category } from "@/lib/trips-data";

export const metadata: Metadata = {
  title: "All Innova Crysta Taxi Destinations from Chennai",
  description:
    "Complete list of every Innova Crysta taxi destination and circuit we cover from Chennai — spiritual, hill station, coastal and heritage trips across Tamil Nadu, Kerala, Karnataka & Andhra Pradesh.",
};

export default function AllDestinationsPage() {
  const categories = Object.keys(CATEGORY_META) as Category[];
  const totalCount = PLACES.length + CIRCUITS.length;

  return (
    <div className="pb-20">
      <div className="border-b border-route bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="font-body text-xs tracking-widest text-gold">
            FULL DIRECTORY
          </div>
          <h1 className="mt-2 font-display text-4xl uppercase text-cream md:text-5xl">
            All Innova Crysta Taxi Destinations from Chennai
          </h1>
          <p className="mt-4 max-w-2xl font-body text-cream/70">
            Every place and named circuit our Innova Crysta taxi covers from
            Chennai — {totalCount} destinations in total, across Tamil Nadu,
            Kerala, Karnataka &amp; Andhra Pradesh.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14">
        {categories.map((cat) => {
          const meta = CATEGORY_META[cat];
          const places = PLACES.filter((p) => p.category === cat);
          const circuits = CIRCUITS.filter((c) => c.category === cat);
          return (
            <div key={cat} className="mb-14">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl uppercase text-cream">
                  {meta.label}
                </h2>
                <Link href={`/${meta.slug}`} className="focus-ring font-body text-xs text-gold hover:underline">
                  Category page →
                </Link>
              </div>

              {circuits.length > 0 && (
                <>
                  <h3 className="mt-5 font-body text-xs uppercase tracking-widest text-cream/40">
                    Named Circuits
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {circuits.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/circuits/${c.slug}`}
                        className="focus-ring rounded-full border border-gold/40 bg-gold/5 px-4 py-2 font-body text-xs text-gold hover:bg-gold/10"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}

              <h3 className="mt-5 font-body text-xs uppercase tracking-widest text-cream/40">
                Individual Destinations
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {places.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/places/${p.slug}`}
                    className="focus-ring rounded-full border border-route bg-charcoal px-4 py-2 font-body text-xs text-cream/80 hover:border-gold/50 hover:text-gold"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
