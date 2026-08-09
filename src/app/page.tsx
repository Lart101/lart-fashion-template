import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CollectionGrid } from "@/components/CollectionGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CollectionGrid />
      <Footer />
    </main>
  );
}
