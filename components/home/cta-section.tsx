import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Join us as we bring the future forward
          </h2>
          <p className="text-lg text-white/90 leading-relaxed mb-8 text-pretty">
            Ready to transform your infrastructure with a partner who puts relationships first? Let's start a
            conversation about how Halo Integration can help you achieve your technology goals.
          </p>
          <Button asChild size="lg" className="text-base bg-[#50dfb3] hover:bg-[#3fc99d] text-[#1a1a2e] font-semibold">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
