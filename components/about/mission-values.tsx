import { Target, Users, Lightbulb, Shield } from "lucide-react"

export function MissionValues() {
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Every decision we make starts with understanding our clients' unique challenges and goals.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "We continuously explore emerging technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We believe the best outcomes come from true partnerships with our clients.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, honesty, and unwavering commitment to excellence.",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Guided by principles that shape everything we do
            </p>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 sm:p-12 mb-16">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-center max-w-3xl mx-auto">
              To empower organizations with innovative infrastructure technology solutions that drive operational
              excellence, enhance user experiences, and create lasting competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
