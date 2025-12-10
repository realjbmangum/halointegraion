import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Building2, Hotel, Network, Smartphone } from "lucide-react"
import Link from "next/link"

export function ServicesOverview() {
  const services = [
    {
      icon: Network,
      title: "Infrastructure Consulting",
      description:
        "Comprehensive technology infrastructure planning, design, and implementation for modern enterprises.",
      href: "/services/infrastructure-consulting",
    },
    {
      icon: Smartphone,
      title: "Digital Solutions",
      description: "Custom software development, IoT integration, and digital transformation services.",
      href: "/services/digital-solutions",
    },
    {
      icon: Building2,
      title: "Multi-Family Solutions",
      description: "Specialized technology solutions for property management and resident experience.",
      href: "/services/multi-family",
    },
    {
      icon: Hotel,
      title: "Hospitality Technology",
      description: "Guest experience platforms, property management systems, and smart building solutions.",
      href: "/services/hospitality",
    },
  ]

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Technology Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            End-to-end solutions designed to meet your unique business challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="p-8 hover:shadow-lg transition-shadow group cursor-pointer">
                <Link href={service.href} className="block">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
