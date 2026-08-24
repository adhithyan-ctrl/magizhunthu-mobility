import { CONTACT, UNIVERSAL_TERMS, waQuoteLink } from "@/lib/pricing-data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-route bg-charcoal">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-xl tracking-wide text-cream">
              MAGIZHUNTHU <span className="text-gold">AUTOS &amp; MOBILITY</span>
            </div>
            <p className="mt-3 font-body text-sm text-cream/60">
              Premium chauffeur-driven Innova Crysta taxi for local, outstation
              and temple tour travel across Chennai and South India.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-gold">
              BOOK YOUR INNOVA CRYSTA TAXI
            </h3>
            <a
              href={CONTACT.phoneHref}
              className="focus-ring mt-3 block font-body text-lg text-cream hover:text-gold"
            >
              {CONTACT.phone}
            </a>
            <a
              href={waQuoteLink("a fare quote")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-1 inline-block font-body text-sm text-[#25D366] hover:underline"
            >
              Chat on WhatsApp
            </a>
            <p className="mt-2 font-body text-xs text-cream/50">
              Garage: Mugalivakkam, Chennai
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-gold">
              GOOD TO KNOW
            </h3>
            <ul className="mt-3 space-y-1.5 font-body text-xs text-cream/60">
              {UNIVERSAL_TERMS.map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="route-divider mt-10 mb-6" />

        <p className="text-center font-body text-xs text-cream/40">
          © {new Date().getFullYear()} Magizhunthu Mobility — Innova
          Crysta Taxi, Chennai. Comfort. Reliability. Every Time.
        </p>
      </div>
    </footer>
  );
}
