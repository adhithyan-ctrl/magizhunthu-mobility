import Hero from "@/components/Hero";
import VehicleGallery from "@/components/VehicleGallery";
import ServicesBrowse from "@/components/ServicesBrowse";
import CategoryBrowse from "@/components/CategoryBrowse";
import RateCardPreview from "@/components/RateCardPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <VehicleGallery />
      <ServicesBrowse />
      <CategoryBrowse />
      <RateCardPreview />
    </>
  );
}
