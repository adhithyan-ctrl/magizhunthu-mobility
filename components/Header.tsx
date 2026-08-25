"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT, waQuoteLink } from "@/lib/pricing-data";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "All Destinations" },
  { href: "/circuits", label: "Circuits" },
  { href: "/pricing", label: "Rates" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-route bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpeg"
            alt="Magizhunthu Mobility — Innova Crysta Taxi Chennai logo"
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
              MOBILITY
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 font-body text-sm text-cream/80 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          
            href={waQuoteLink("a fare quote")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-4 py-2 font-body text-sm font-semibold text-[#25D366] transition-transform hover:scale-105"
          >
            WhatsApp
          </a>
          
            href={CONTACT.phoneHref}
            className="focus-ring rounded-full bg-gold px-4 py-2 font-body text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Call {CONTACT.phone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-route text-cream md:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-route bg-ink px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1 font-body text-sm text-cream/80">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-charcoal hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-route pt-4">
            
              href={waQuoteLink("a fare quote")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="focus-ring rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-4 py-3 text-center font-body text-sm font-semibold text-[#25D366]"
            >
              WhatsApp for a Quote
            </a>
            
              href={CONTACT.phoneHref}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-full bg-gold px-4 py-3 text-center font-body text-sm font-semibold text-ink"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
