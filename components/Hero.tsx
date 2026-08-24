import Image from "next/image";
import { CONTACT, RATING, waQuoteLink } from "@/lib/pricing-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-route">
      {/* ambient route lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="route-divider h-full w-full" />
      </div>
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-crimson/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-8">
          {/* Text column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-body text-xs tracking-wide text-gold">
              <span aria-hidden>★★★★★</span>
              {RATING.value.toFixed(1)} rated · {RATING.count} Google Reviews
            </div>

            <h1 className="mt-6 font-display text-4xl uppercase leading-[1.05] text-cream md:text-6xl">
              Chennai&rsquo;s <span className="text-gold">5-Star Rated</span>
              <br />
              Innova Crysta Taxi
            </h1>

            <p className="mt-5 max-w-xl font-body text-base text-cream/70 md:text-lg">
              Premium chauffeur-driven Innova Crysta taxi for local trips,
              outstation journeys and temple tours across Tamil Nadu, Kerala,
              Karnataka &amp; Andhra Pradesh. Comfort. Reliability. Every time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="focus-ring rounded-full bg-gold px-7 py-3 font-body text-sm font-semibold text-ink transition-transform hover:scale-105"
              >
                Explore Packages
              </a>
              <a
                href={CONTACT.phoneHref}
                className="focus-ring rounded-full border border-cream/30 px-7 py-3 font-body text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Call {CONTACT.phone}
              </a>
              <a
                href={waQuoteLink("a fare estimate")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-7 py-3 font-body text-sm font-semibold text-[#25D366] transition-transform hover:scale-105"
              >
                WhatsApp for a Quote
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 border-t border-route pt-8">
              {[
                ["7", "Seater comfort"],
                ["4", "States covered"],
                ["100%", "Chauffeur driven"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl text-gold">{stat}</div>
                  <div className="font-body text-xs text-cream/50">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-b from-gold/10 via-transparent to-transparent"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 shadow-2xl">
              <Image
                src="/images/hero-cinematic.jpeg"
                alt="Magizhunthu Autos & Mobility Innova Crysta taxi in Chennai — premium chauffeur-driven cab"
                width={1122}
                height={1402}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5">
                <p className="font-display text-sm uppercase tracking-wide text-gold">
                  Premium Chauffeur Driven
                </p>
                <p className="font-body text-xs text-cream/70">
                  Toyota Innova Crysta · TN 10 BU 9004
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
