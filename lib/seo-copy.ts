import type { Place, Circuit, Category } from "./trips-data";

const PLACE_TEMPLATES: Record<Category, (p: Place) => string> = {
  spiritual: (p) =>
    `Book an Innova Crysta taxi from Chennai to ${p.name}, home to ${p.significance}. Travel in a spacious, chauffeur-driven Innova Crysta with our 5-star rated service.`,
  hill: (p) =>
    `Book an Innova Crysta taxi from Chennai to ${p.name} — ${p.significance}. A comfortable, chauffeur-driven Innova Crysta taxi for your hill station getaway.`,
  coastal: (p) =>
    `Book an Innova Crysta taxi from Chennai to ${p.name} — ${p.significance}. Enjoy a relaxed coastal drive in our chauffeur-driven Innova Crysta taxi.`,
  heritage: (p) =>
    `Book an Innova Crysta taxi from Chennai to ${p.name} — ${p.significance}. Explore in comfort with our chauffeur-driven Innova Crysta taxi service.`,
};

export function placeBlurb(p: Place): string {
  return PLACE_TEMPLATES[p.category](p);
}

export function placeTitle(p: Place): string {
  return `${p.name} Taxi from Chennai | Innova Crysta Taxi`;
}

export function circuitBlurb(c: Circuit): string {
  return `Book an Innova Crysta taxi from Chennai for the ${c.name} — ${c.theme}, covering ${c.stops.length} stops over ${c.days} day${c.days > 1 ? "s" : ""}. Travel with our chauffeur-driven, 5-star rated Innova Crysta taxi.`;
}

export function circuitTitle(c: Circuit): string {
  return `${c.name} — Innova Crysta Taxi from Chennai`;
}
