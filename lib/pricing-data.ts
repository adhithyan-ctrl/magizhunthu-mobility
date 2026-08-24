// ============================================================
// MAGIZHUNTHU AUTOS & MOBILITY — SINGLE SOURCE OF TRUTH
// Edit this file to update rates across the ENTIRE site.
// ============================================================

export const GARAGE = {
  name: "Magizhunthu Mobility Garage",
  locality: "Mugalivakkam, Chennai",
  lat: 12.9791,
  lng: 80.1802,
};

export const RATE_CARD = {
  local: {
    slabs: [
      { label: "5 Hrs / 50 Km", hours: 5, km: 50, price: 2250 },
      { label: "10 Hrs / 100 Km", hours: 10, km: 100, price: 4500 },
      { label: "15 Hrs / 150 Km", hours: 15, km: 150, price: 6750 },
    ],
    extraHourRate: 450,
    extraKmRate: 22,
    note: [
      "Beyond 7 hrs, the 10-hour package applies.",
      "Beyond 12 hrs, the 15-hour package applies.",
    ],
  },
  outstation: {
    package1: { label: "Package 1", kmPerDay: 250, ratePerDay: 6300 },
    package2: { label: "Package 2", kmPerDay: 300, ratePerDay: 7400 },
    extraKmRate: 22,
  },
  multiDayRental: {
    ratePerDay: 4500,
    kmIncludedNote: "Vehicle & driver included",
    extraKmRate: 15,
    minimumDays: 10,
    usage: "local", // local dedicated duty only — NOT for outstation circuits
  },
} as const;

// One-time, per-trip interstate permit fees. Applied whenever the route
// crosses into that state/UT.
export const PERMIT_FEES: Record<string, number> = {
  TN: 0,
  AP: 2000,
  KL: 500,
  KA: 1500,
  PY: 750,
};

export const UNIVERSAL_TERMS = [
  "Toll, parking & permit charges extra",
  "KM & time calculated garage to garage",
  "All actuals to be borne by the customer",
  "Seating up to 7 members",
  "Any trip extending past midnight is billed as an additional day",
];

export const CONTACT = {
  phone: "+91 80156 63289",
  phoneHref: "tel:+918015663289",
  whatsappHref: "https://wa.me/918015663289",
  whatsappNumber: "918015663289",
};

export function waQuoteLink(context: string): string {
  const message = `Hi Magizhunthu Mobility, I'd like a fare quote for: ${context}`;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const RATING = {
  value: 5.0,
  count: 12,
};
