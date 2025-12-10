import { HeroSection } from "@/components/home/hero-section"
import { Introduction } from "@/components/home/introduction"
import { ValuePropositions } from "@/components/home/value-propositions"
import { ApproachSection } from "@/components/home/approach-section"
import { TrustedBy } from "@/components/home/trusted-by"
import { AboutPreview } from "@/components/home/about-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Introduction />
      <ValuePropositions />
      <ApproachSection />
      <TrustedBy />
      <AboutPreview />
      <CTASection />
    </main>
  )
}
