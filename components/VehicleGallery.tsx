import Image from "next/image";

const EXTERIOR = [
  { src: "/images/gallery/exterior-1.jpeg", alt: "Toyota Innova Crysta taxi parked outside a Chennai residence — Magizhunthu Mobility" },
  { src: "/images/gallery/exterior-5.jpeg", alt: "Innova Crysta taxi front view — Magizhunthu Autos & Mobility, Chennai" },
  { src: "/images/gallery/exterior-2.jpeg", alt: "Innova Crysta taxi side profile — chauffeur-driven cab in Chennai" },
  { src: "/images/gallery/exterior-3.jpeg", alt: "Innova Crysta taxi exterior — Magizhunthu Mobility, Chennai" },
  { src: "/images/gallery/exterior-4.jpeg", alt: "Innova Crysta taxi rear view — TN registered chauffeur-driven cab" },
];

const INTERIOR = [
  { src: "/images/gallery/interior-1.jpeg", alt: "Innova Crysta taxi spacious leather interior — Chennai chauffeur-driven cab" },
  { src: "/images/gallery/interior-2.jpeg", alt: "Innova Crysta taxi rear cabin seating — up to 7 passengers, Chennai" },
];

export default function VehicleGallery() {
  return (
    <section className="border-b border-route bg-charcoal">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 max-w-2xl">
          <div className="font-body text-xs tracking-widest text-gold">
            OUR FLEET
          </div>
          <h2 className="mt-2 font-display text-3xl uppercase text-cream md:text-4xl">
            The Innova Crysta Taxi You&rsquo;ll Ride In
          </h2>
          <p className="mt-3 font-body text-sm text-cream/60">
            A real look at the Innova Crysta taxi we run in Chennai —
            well-maintained, professionally driven, and ready for local,
            outstation and temple tour travel.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXTERIOR.map((img) => (
            <div
              key={img.src}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-route"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <h3 className="mt-12 font-display text-xl uppercase text-cream">
          Comfortable, Spacious Interiors
        </h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {INTERIOR.map((img) => (
            <div
              key={img.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-route"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
