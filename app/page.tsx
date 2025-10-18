import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { SolutionsPreview } from "@/components/home/solutions-preview";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SolutionsPreview />
      <CTASection />
    </>
  );
}
