import { Lightbulb, Users, TrendingUp } from "lucide-react"

export function ValuePropositions() {
  const values = [
    {
      icon: Lightbulb,
      title: "Integrated Excellence",
      description:
        "We deliver comprehensive solutions that seamlessly integrate with your existing infrastructure, ensuring optimal performance and scalability across all systems.",
    },
    {
      icon: Users,
      title: "Relationships First",
      description:
        "Our success is built on lasting partnerships. We take time to understand your business, becoming a trusted advisor invested in your long-term success.",
    },
    {
      icon: TrendingUp,
      title: "Asset Mindset",
      description:
        "Every implementation is designed as a strategic asset, not just a project. We focus on solutions that grow with your business and deliver sustained value.",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-[#50dfb3]/15 rounded-full">
                    <Icon className="text-[#50dfb3]" size={32} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
