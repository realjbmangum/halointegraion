import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/HaloIntegration.jpeg" alt="" className="w-full h-full object-cover" />
        {/* No overlay - full vivid image */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 text-balance [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)]">
            Illuminating Infrastructure with Integrity and Excellence
          </h1>
          <Button asChild size="lg" className="text-base shadow-xl bg-[#50dfb3] hover:bg-[#3fc99d] text-[#1a1a2e] font-semibold">
            <Link href="#intro">
              Explore
              <ChevronDown className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
