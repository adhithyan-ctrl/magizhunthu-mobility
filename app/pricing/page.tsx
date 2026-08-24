import type { Metadata } from "next";
import { RATE_CARD, PERMIT_FEES, UNIVERSAL_TERMS } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "Innova Crysta Taxi Rates & Pricing Chennai",
  description:
    "Full rate card for our Innova Crysta taxi in Chennai — local, outstation, multi-day rental, interstate permit fees and toll policy explained.",
};

const STATE_LABELS: Record<string, string> = {
  AP: "Andhra Pradesh",
  KL: "Kerala",
  KA: "Karnataka",
  PY: "Puducherry",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
      <div className="font-body text-xs tracking-widest text-gold">
        RATE CARD
      </div>
      <h1 className="mt-2 font-display text-4xl uppercase text-cream">
        Innova Crysta Taxi Pricing
      </h1>
      <p className="mt-4 max-w-2xl font-body text-cream/60">
        Every Innova Crysta taxi booking with Magizhunthu Mobility is priced
        against this rate card. Individual tour package pages reference
        these same rates rather than showing a separate fixed price, so the
        numbers you see are always current.
      </p>

      <Section title="Local (Within Chennai)">
        <table className="w-full font-body text-sm">
          <tbody>
            {RATE_CARD.local.slabs.map((s) => (
              <tr key={s.label} className="border-b border-route">
                <td className="py-3 text-cream/70">{s.label}</td>
                <td className="py-3 text-right text-gold">₹{s.price}</td>
              </tr>
            ))}
            <tr className="border-b border-route">
              <td className="py-3 text-cream/70">Extra hour</td>
              <td className="py-3 text-right text-gold">
                ₹{RATE_CARD.local.extraHourRate}/hr
              </td>
            </tr>
            <tr>
              <td className="py-3 text-cream/70">Extra km</td>
              <td className="py-3 text-right text-gold">
                ₹{RATE_CARD.local.extraKmRate}/km
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="mt-3 space-y-1 font-body text-xs text-cream/50">
          {RATE_CARD.local.note.map((n) => (
            <li key={n}>· {n}</li>
          ))}
        </ul>
      </Section>

      <Section title="Outstation (Single & Multi-Day)">
        <table className="w-full font-body text-sm">
          <tbody>
            <tr className="border-b border-route">
              <td className="py-3 text-cream/70">
                {RATE_CARD.outstation.package1.label} —{" "}
                {RATE_CARD.outstation.package1.kmPerDay} km/day
              </td>
              <td className="py-3 text-right text-gold">
                ₹{RATE_CARD.outstation.package1.ratePerDay}/day
              </td>
            </tr>
            <tr className="border-b border-route">
              <td className="py-3 text-cream/70">
                {RATE_CARD.outstation.package2.label} —{" "}
                {RATE_CARD.outstation.package2.kmPerDay} km/day
              </td>
              <td className="py-3 text-right text-gold">
                ₹{RATE_CARD.outstation.package2.ratePerDay}/day
              </td>
            </tr>
            <tr>
              <td className="py-3 text-cream/70">Additional km</td>
              <td className="py-3 text-right text-gold">
                ₹{RATE_CARD.outstation.extraKmRate}/km
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 rounded-lg border border-gold/30 bg-gold/5 p-4 font-body text-sm text-cream/70">
          <strong className="text-gold">Multi-day circuits (2–9 days):</strong>{" "}
          Package 2 rate × number of days, plus extra km beyond 300 km/day at
          ₹{RATE_CARD.outstation.extraKmRate}/km, plus applicable permit fee
          and toll. Used for pilgrimage circuits like the Navagraha Temple
          Tour and Arupadai Veedu.
        </div>
      </Section>

      <Section title="Multi-Day Rental (Local Dedicated Duty)">
        <p className="font-body text-sm text-cream/60">
          For corporate, wedding or event duty within Chennai — not for
          outstation circuits.
        </p>
        <table className="mt-3 w-full font-body text-sm">
          <tbody>
            <tr className="border-b border-route">
              <td className="py-3 text-cream/70">Vehicle + driver</td>
              <td className="py-3 text-right text-gold">
                ₹{RATE_CARD.multiDayRental.ratePerDay}/day
              </td>
            </tr>
            <tr className="border-b border-route">
              <td className="py-3 text-cream/70">Extra km</td>
              <td className="py-3 text-right text-gold">
                ₹{RATE_CARD.multiDayRental.extraKmRate}/km
              </td>
            </tr>
            <tr>
              <td className="py-3 text-cream/70">Minimum booking</td>
              <td className="py-3 text-right text-gold">
                {RATE_CARD.multiDayRental.minimumDays} days
              </td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="Interstate Permit Fees">
        <p className="font-body text-sm text-cream/60">
          One-time, per-trip charge added whenever your route crosses into
          that state.
        </p>
        <table className="mt-3 w-full font-body text-sm">
          <tbody>
            {Object.entries(PERMIT_FEES)
              .filter(([state]) => state !== "TN")
              .map(([state, fee]) => (
                <tr key={state} className="border-b border-route">
                  <td className="py-3 text-cream/70">
                    {STATE_LABELS[state] ?? state}
                  </td>
                  <td className="py-3 text-right text-gold">₹{fee}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Section>

      <Section title="Toll Policy">
        <p className="font-body text-sm text-cream/60">
          Toll is shown as an estimated range on every tour package page, not
          buried in fine print. Interstate routes show toll and permit fee
          together as a combined additional-charges block, since together
          they can meaningfully change your total fare. Final toll is billed
          at actuals against toll receipts.
        </p>
      </Section>

      <Section title="Universal Terms">
        <ul className="space-y-2 font-body text-sm text-cream/60">
          {UNIVERSAL_TERMS.map((t) => (
            <li key={t}>· {t}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 rounded-2xl border border-route bg-charcoal p-6 md:p-8">
      <h2 className="font-display text-xl uppercase text-cream">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
