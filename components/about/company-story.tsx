export function CompanyStory() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/HaloIntegration.jpeg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/60" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)]">
              Our Story
            </h1>
            <p className="text-xl text-white text-pretty [text-shadow:_0_2px_8px_rgb(0_0_0_/_70%)]">
              Building the future of infrastructure technology, one partnership at a time
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance drop-shadow-lg">Our Story</h1>
              <p className="text-xl text-white/95 text-pretty drop-shadow-md">
                Building the future of infrastructure technology, one partnership at a time
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <img
                    src="/modern-office-building-technology.jpg"
                    alt="Halo Integration headquarters"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-md">Founded on Innovation</h2>
                  <p className="text-white/95 leading-relaxed mb-4 drop-shadow-sm">
                    Halo Integration was founded in 2013 with a singular vision: to transform how organizations approach
                    infrastructure technology. What started as a small consulting practice has grown into a leading
                    provider of comprehensive technology solutions.
                  </p>
                  <p className="text-white/95 leading-relaxed drop-shadow-sm">
                    Today, we serve clients across multi-family, hospitality, and enterprise sectors, delivering
                    innovative solutions that drive operational efficiency and enhance user experiences.
                  </p>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-8 sm:p-12">
                <h2 className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg">Why We Exist</h2>
                <p className="text-lg text-white/95 leading-relaxed text-center max-w-3xl mx-auto drop-shadow-sm">
                  We believe that technology should empower organizations, not complicate them. Our purpose is to bridge
                  the gap between complex infrastructure challenges and practical, scalable solutions that deliver
                  measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
