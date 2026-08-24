// ============================================================
// USE-CASE / SERVICE PAGES
// These target searches like "Innova Crysta taxi for wedding
// Chennai", "Innova Crysta airport taxi", etc. — not tied to a
// destination, tied to a REASON for booking.
// ============================================================

export type Service = {
  slug: string;
  name: string;
  shortLabel: string; // for nav/cards
  icon: string;
  intro: string; // SEO-focused opening line, mentions Chennai + Innova Crysta
  whoFor: string;
  includes: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "wedding-car-rental",
    name: "Wedding Car Rental",
    shortLabel: "Weddings",
    icon: "💍",
    intro:
      "Book an Innova Crysta taxi in Chennai for wedding car rental — bridal party transport, guest pickups, and multi-city wedding circuits, all with a professional chauffeur.",
    whoFor:
      "Families planning a wedding who need reliable, presentable transport for the bride, groom, close family, or out-of-town guests across single or multi-day functions.",
    includes: [
      "Decorated-ready Innova Crysta on request",
      "Punctual chauffeur familiar with wedding-day timing pressure",
      "Multi-stop routing between muhurtham venue, reception, and family homes",
      "Multi-day packages for functions spread across several days",
    ],
    faqs: [
      {
        q: "Can I book an Innova Crysta taxi for just the wedding day in Chennai?",
        a: "Yes — a single day is billed under our Local package (based on hours and km used). Multi-day wedding functions are billed under our Multi-Day Rental or Outstation formula depending on whether travel stays within Chennai or goes outstation.",
      },
      {
        q: "Can the Innova Crysta taxi do multiple pickups for wedding guests?",
        a: "Yes, our fare estimator and booking process support multiple pickup and drop points — just share your full guest pickup list when booking.",
      },
      {
        q: "Do you take multi-city wedding bookings, e.g. functions in two towns?",
        a: "Yes — multi-city wedding circuits are priced using our outstation multi-day formula. Share your itinerary and we'll quote it exactly.",
      },
    ],
  },
  {
    slug: "airport-taxi",
    name: "Airport Pickup & Drop",
    shortLabel: "Airport Transfer",
    icon: "✈️",
    intro:
      "Book an Innova Crysta taxi for Chennai Airport pickup and drop — a spacious, chauffeur-driven ride with room for luggage and up to 7 passengers.",
    whoFor:
      "Travellers and families needing dependable airport transfers to or from Chennai International Airport (MAA), any time of day or night.",
    includes: [
      "Flight-tracking friendly pickup timing",
      "Ample boot space for check-in luggage",
      "Meet-and-greet at arrivals on request",
      "Fixed, flat one-way and round-trip fares",
    ],
    faqs: [
      {
        q: "Is the Innova Crysta taxi available for early morning or late night airport pickup?",
        a: "Yes, our chauffeur-driven Innova Crysta taxi is available for airport pickup and drop at any hour, including red-eye flights.",
      },
      {
        q: "How much luggage can the Innova Crysta taxi carry for airport trips?",
        a: "The Innova Crysta comfortably carries 4–5 large suitcases in the boot, plus cabin bags inside — ideal for families or group travel.",
      },
      {
        q: "Do you charge extra for waiting at the airport if my flight is delayed?",
        a: "A reasonable grace period is included; extended waiting beyond that is billed at our standard extra-hour rate. Let us know about delays as early as possible.",
      },
    ],
  },
  {
    slug: "local-city-rental",
    name: "Local City Rental",
    shortLabel: "Local Chennai",
    icon: "🏙️",
    intro:
      "Book an Innova Crysta taxi for local travel within Chennai — city errands, shopping, hospital visits, or a full day at your disposal, all chauffeur-driven.",
    whoFor:
      "Anyone needing a reliable Innova Crysta taxi for city travel in Chennai — half-day, full-day, or hourly, without leaving the city.",
    includes: [
      "5, 10, and 15-hour local packages",
      "Point-to-point or full-day-at-disposal options",
      "Transparent extra-hour and extra-km rates",
      "Same chauffeur for the full booking window",
    ],
    faqs: [
      {
        q: "What are the local Innova Crysta taxi package options in Chennai?",
        a: "We offer 5 hrs/50 km, 10 hrs/100 km, and 15 hrs/150 km packages, with extra hours and km charged separately. Full rates are on our pricing page.",
      },
      {
        q: "Can I book the Innova Crysta taxi for a full day of local errands?",
        a: "Yes — our 10-hour or 15-hour local packages are ideal for a full day of shopping, hospital visits, or multiple stops around Chennai.",
      },
    ],
  },
  {
    slug: "corporate-and-event-travel",
    name: "Corporate & Event Travel",
    shortLabel: "Corporate",
    icon: "💼",
    intro:
      "Book an Innova Crysta taxi in Chennai for corporate travel, client visits, and event transport — dependable, presentable, and available on dedicated multi-day contracts.",
    whoFor:
      "Companies and event organisers needing dependable vehicle-and-driver support — client pickups, staff transport, or multi-day event duty.",
    includes: [
      "Dedicated multi-day rental for event blocks",
      "Professionally presented chauffeur and vehicle",
      "Monthly/contract billing available on request",
      "Priority booking for recurring corporate accounts",
    ],
    faqs: [
      {
        q: "Do you offer monthly corporate contracts for Innova Crysta taxi service?",
        a: "Yes — for recurring or long-duration needs, we offer dedicated multi-day and monthly rental contracts. Contact us to discuss your requirement.",
      },
      {
        q: "Can the Innova Crysta taxi be booked for a multi-day corporate event in Chennai?",
        a: "Yes, our Multi-Day Rental package (minimum 10 days) covers dedicated vehicle and driver for event or corporate duty within Chennai.",
      },
    ],
  },
  {
    slug: "railway-station-transfer",
    name: "Railway Station Transfer",
    shortLabel: "Railway Transfer",
    icon: "🚉",
    intro:
      "Book an Innova Crysta taxi for railway station pickup and drop in Chennai — Chennai Central, Egmore, and Tambaram, with space for luggage and family.",
    whoFor:
      "Travellers arriving or departing by train who need a comfortable, on-time Innova Crysta taxi to or from Chennai's railway stations.",
    includes: [
      "Coverage for Chennai Central, Egmore & Tambaram",
      "Train-tracking friendly pickup timing",
      "Support for group and family travel with luggage",
    ],
    faqs: [
      {
        q: "Do you provide Innova Crysta taxi pickup from Chennai Central and Egmore?",
        a: "Yes, we cover pickup and drop at Chennai Central, Egmore, and Tambaram railway stations.",
      },
    ],
  },
  {
    slug: "hospital-and-medical-visits",
    name: "Hospital & Medical Visits",
    shortLabel: "Hospital Visits",
    icon: "🏥",
    intro:
      "Book an Innova Crysta taxi in Chennai for hospital visits and medical appointments — a calm, comfortable ride for patients and families.",
    whoFor:
      "Families needing safe, comfortable transport for hospital visits, check-ups, or bringing a patient home, especially where extra space and a smooth ride matter.",
    includes: [
      "Spacious cabin for easier patient entry/exit",
      "Considerate, patient chauffeur",
      "Point-to-point or waiting packages available",
    ],
    faqs: [
      {
        q: "Can I book the Innova Crysta taxi to wait during a hospital appointment?",
        a: "Yes — our local packages include disposal time where the vehicle and driver wait through your appointment.",
      },
    ],
  },
  {
    slug: "family-functions-and-outings",
    name: "Family Functions & Outings",
    shortLabel: "Family Outings",
    icon: "👨‍👩‍👧‍👦",
    intro:
      "Book an Innova Crysta taxi in Chennai for family functions, celebrations, and group outings — comfortable 7-seater travel for the whole family together.",
    whoFor:
      "Families heading to functions, celebrations, or day outings who want to travel together in one comfortable vehicle instead of multiple cars.",
    includes: [
      "Seating for up to 7 family members",
      "Flexible multi-stop local routing",
      "Half-day and full-day local packages",
    ],
    faqs: [
      {
        q: "How many people can travel in the Innova Crysta taxi for a family function?",
        a: "The Innova Crysta comfortably seats up to 7 members, ideal for extended family travelling together to functions or outings.",
      },
    ],
  },
  {
    slug: "nri-long-duration-rental",
    name: "NRI & Long-Duration Rental",
    shortLabel: "NRI Rental",
    icon: "🌍",
    intro:
      "Book an Innova Crysta taxi in Chennai on a long-duration rental — ideal for NRI families visiting home who need a dependable vehicle and driver on call for their entire stay.",
    whoFor:
      "NRI families and long-stay visitors who want one dependable vehicle and driver on call for the length of their trip, instead of booking separately each day.",
    includes: [
      "Weekly and monthly rental tiers",
      "Same driver for continuity across your stay",
      "Airport pickup on day one, drop on departure day",
    ],
    faqs: [
      {
        q: "Can NRI families book the Innova Crysta taxi for their full Chennai visit?",
        a: "Yes — our Multi-Day Rental (minimum 10 days) is well suited to NRI visits, with the same vehicle and driver on call throughout your stay.",
      },
    ],
  },
];

export function findService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
