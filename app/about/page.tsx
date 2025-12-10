export const metadata = {
  title: "About Us | Halo Integration",
  description:
    "Learn about Halo Integration's mission, values, and the team behind our infrastructure technology solutions.",
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/HaloIntegration.jpeg" alt="Digital Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/50" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)]">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At HALO, we started with a vision of providing top-notch consulting and digital infrastructure solutions
              to multi-family, hospitality, and enterprise businesses. We began our journey working inside
              industry-leading technology companies and built HALO with the goal of connecting property owners and
              developers with the right approach to technology. We believe in building long-lasting relationships with
              our clients and helping them achieve their business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise and Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Expertise */}
            <div className="space-y-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Our Expertise</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a combined 50+ years of experience in the technology industry, hospitality, multi-family and
                enterprise business we have honed our skills in providing a wide range of services. From digital
                infrastructure, access control, surveillance building automation, VOIP, network management, and IT
                consulting services, we have the expertise to handle all your needs. Our team stays updated with the
                latest technologies and industry trends to provide the best solutions for our clients.
              </p>
            </div>

            {/* Our Approach */}
            <div className="space-y-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Our Approach</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At HALO, we believe in providing personalized solutions to our clients. We understand that every
                business and property is unique, and so are its technology needs. That's why we work closely with our
                clients to understand their requirements and provide tailored solutions that fit their needs and budget.
                We also offer flexible pricing models to ensure that our services are accessible to small businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
