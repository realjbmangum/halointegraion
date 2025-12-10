export function ApproachSection() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
            <img
              src="/modern-technology-infrastructure-consulting-team-c.jpg"
              alt="Halo Integration approach"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              <span className="text-[#50dfb3]">Relationship</span> centered
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At the heart of everything we do is a commitment to building meaningful, lasting relationships with our
              clients. We don't just implement technology—we become your trusted partner in digital transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our team takes the time to deeply understand your business objectives, challenges, and vision for the
              future. This relationship-first approach ensures that every solution we deliver is perfectly aligned with
              your strategic goals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial consultation through implementation and beyond, we're with you every step of the way,
              providing expert guidance, responsive support, and continuous optimization to maximize your technology
              investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
