import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <img src="/professional-technology-team-working-on-infrastruc.jpg" alt="Halo Integration team" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Expertise you can trust
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With years of experience in infrastructure technology, Halo Integration brings unparalleled expertise to
              every project. Our team of certified professionals has successfully delivered hundreds of implementations
              across multi-family, hospitality, and enterprise sectors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We stay at the forefront of technology innovation, continuously expanding our knowledge and capabilities
              to ensure our clients benefit from the latest advancements in infrastructure solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/about">
                Learn About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
