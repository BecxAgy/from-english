import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import FeatureMetodologySection from "@/components/sections/FeatureMetodologySection";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureMetodologySection />
    </main>
  );
}
