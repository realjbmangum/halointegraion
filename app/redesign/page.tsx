import { HeroRedesign } from "@/components/redesign/home/hero-section"
import { IntroductionRedesign } from "@/components/redesign/home/introduction"
import { ValuePropositionsRedesign } from "@/components/redesign/home/value-propositions"
import { BentoServicesRedesign } from "@/components/redesign/home/bento-services"
import { ApproachSectionRedesign } from "@/components/redesign/home/approach-section"
import { PartnerMarqueeRedesign } from "@/components/redesign/home/partner-marquee"
import { AboutPreviewRedesign } from "@/components/redesign/home/about-preview"
import { CTASectionRedesign } from "@/components/redesign/home/cta-section"

export default function RedesignHomePage() {
  return (
    <main>
      <HeroRedesign />
      <IntroductionRedesign />
      <ValuePropositionsRedesign />
      <BentoServicesRedesign />
      <ApproachSectionRedesign />
      <PartnerMarqueeRedesign />
      <AboutPreviewRedesign />
      <CTASectionRedesign />
    </main>
  )
}
