import Link from "next/link";
import Image from "next/image";
import { CONTACT, waQuoteLink } from "@/lib/pricing-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-route bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.jpeg"
            alt="Magizhunthu Autos & Mobility — Innova Crysta Taxi Chennai logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-cover"
            priority
          />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide text-cream">
              MAGIZHUNTHU
            </div>
            <div className="-mt-1 text-[10px] tracking-[0.25em] text-gold">
              AUTOS &amp; MOBILITY
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 font-body text-sm text-cream/80 md:flex">
          <Link href="/services" className="hover:text-gold transition-colors">
            Services
          </Link>
          <Link href="/destinations" className="hover:text-gold transition-colors">
            All Destinations
          </Link>
          <Link href="/circuits" className="hover:text-gold transition-colors">
            Circuits
          </Link>
          <Link href="/pricing" className="hover:text-gold transition-colors">
            Rates
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={waQuoteLink("a fare quote")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-4 py-2 font-body text-sm font-semibold text-[#25D366] transition-transform hover:scale-105"
          >
            WhatsApp
          </a>
          <a
            href={CONTACT.phoneHref}
            className="focus-ring rounded-full bg-gold px-4 py-2 font-body text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Call {CONTACT.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
