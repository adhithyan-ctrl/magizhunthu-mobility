import Link from "next/link";
import { RATE_CARD } from "@/lib/pricing-data";

export default function RateCardPreview() {
  return (
    <section className="border-b border-route bg-charcoal">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 max-w-2xl">
          <div className="font-body text-xs tracking-widest text-gold">
            TRANSPARENT PRICING
          </div>
          <h2 className="mt-2 font-display text-3xl uppercase text-cream md:text-4xl">
            Innova Crysta Taxi Rates
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <RateBlock title="Local">
            {RATE_CARD.local.slabs.map((s) => (
              <RateRow key={s.label} label={s.label} value={`₹${s.price}`} />
            ))}
          </RateBlock>

          <RateBlock title="Outstation">
            <RateRow
              label={`${RATE_CARD.outstation.package1.label} · ${RATE_CARD.outstation.package1.kmPerDay} km/day`}
              value={`₹${RATE_CARD.outstation.package1.ratePerDay}/day`}
            />
            <RateRow
              label={`${RATE_CARD.outstation.package2.label} · ${RATE_CARD.outstation.package2.kmPerDay} km/day`}
              value={`₹${RATE_CARD.outstation.package2.ratePerDay}/day`}
            />
            <RateRow
              label="Additional km"
              value={`₹${RATE_CARD.outstation.extraKmRate}/km`}
            />
          </RateBlock>

          <RateBlock title="Multi-Day Rental (Local)">
            <RateRow
              label="Vehicle + driver"
              value={`₹${RATE_CARD.multiDayRental.ratePerDay}/day`}
            />
            <RateRow
              label="Extra km"
              value={`₹${RATE_CARD.multiDayRental.extraKmRate}/km`}
            />
            <RateRow
              label="Minimum booking"
              value={`${RATE_CARD.multiDayRental.minimumDays} days`}
            />
          </RateBlock>
        </div>

        <Link
          href="/pricing"
          className="focus-ring mt-8 inline-block font-body text-sm text-gold hover:underline"
        >
          View full rate card, permit fees &amp; toll policy →
        </Link>
      </div>
    </section>
  );
}

function RateBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-route bg-ink p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-crimsonBright" />
        <h3 className="font-display text-sm uppercase tracking-wide text-cream">
          {title}
        </h3>
      </div>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function RateRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between font-body text-sm">
      <span className="text-cream/60">{label}</span>
      <span className="text-gold">{value}</span>
    </div>
  );
}
