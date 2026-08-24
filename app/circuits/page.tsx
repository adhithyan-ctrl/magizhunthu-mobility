import type { Metadata } from "next";
import Link from "next/link";
import { CIRCUITS, CATEGORY_META, type Category } from "@/lib/trips-data";
import { circuitBlurb } from "@/lib/seo-copy";

export const metadata: Metadata = {
  title: "Temple & Tour Circuits — Innova Crysta Taxi Chennai",
  description:
    "Book an Innova Crysta taxi from Chennai for named pilgrimage and tourist circuits — Navagraha, Arupadai Veedu, Chola Heritage Trail, Kerala Backwaters and more.",
};

export default function CircuitsPage() {
  const categories = Object.keys(CATEGORY_META) as Category[];

  return (
    <div className="pb-20">
      <div className="border-b border-route bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="font-body text-xs tracking-widest text-gold">
            INNOVA CRYSTA TAXI · NAMED CIRCUITS
          </div>
          <h1 className="mt-2 font-display text-4xl uppercase text-cream md:text-5xl">
            Temple &amp; Tour Circuits — Innova Crysta Taxi from Chennai
          </h1>
          <p className="mt-4 max-w-2xl font-body text-cream/70">
            Multi-day spiritual, hill, coastal and heritage circuits, each
            covered in one Innova Crysta taxi booking from Chennai with a
            fixed itinerary and estimated fare.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14">
        {categories.map((cat) => {
          const circuits = CIRCUITS.filter((c) => c.category === cat);
          if (circuits.length === 0) return null;
          const meta = CATEGORY_META[cat];
          return (
            <div key={cat} className="mb-14">
              <h2 className="font-display text-2xl uppercase text-cream">
                {meta.label} Circuits
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {circuits.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/circuits/${c.slug}`}
                    className="focus-ring group rounded-2xl border border-route bg-charcoal p-6 hover:border-gold/50"
                  >
                    <div className="font-body text-[11px] uppercase tracking-widest text-gold">
                      {c.days} Day{c.days > 1 ? "s" : ""} · {c.stops.length} Stops · {c.states.join(", ")}
                    </div>
                    <h3 className="mt-2 font-display text-xl text-cream group-hover:text-gold">{c.name}</h3>
                    <p className="mt-2 font-body text-sm text-cream/60 line-clamp-3">{circuitBlurb(c)}</p>
                    <span className="mt-4 inline-block font-body text-xs text-gold">View itinerary →</span>
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
