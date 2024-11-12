import FeatureStartCard from "@/components/FeatureStartCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import FeatureMetodologySection from "@/components/sections/FeatureMetodologySection";
import HeroSection from "@/components/sections/HeroSection";
import TestemonialsSection from "@/components/sections/TestemonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureMetodologySection />
      <FeatureStartCard />
      <TestemonialsSection />
      <FaqSection />
    </main>
  );
}
