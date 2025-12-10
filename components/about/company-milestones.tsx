export function CompanyMilestones() {
  const milestones = [
    {
      year: "2013",
      title: "Company Founded",
      description: "Halo Integration established with a focus on infrastructure consulting.",
    },
    {
      year: "2015",
      title: "Multi-Family Expansion",
      description: "Launched dedicated practice for property technology solutions.",
    },
    {
      year: "2017",
      title: "Hospitality Division",
      description: "Expanded services to include comprehensive hospitality technology.",
    },
    {
      year: "2019",
      title: "100+ Projects",
      description: "Reached milestone of 100 successful client implementations.",
    },
    {
      year: "2021",
      title: "Enterprise Solutions",
      description: "Launched enterprise-grade infrastructure consulting services.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Named Top Infrastructure Technology Consultant by industry leaders.",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground text-pretty">Key milestones that shaped who we are today</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex items-start">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="sm:hidden text-sm font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
