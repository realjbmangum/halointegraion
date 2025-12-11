import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Network, Shield, Video, Monitor, Phone, Check, Building2, Speaker } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Services | Halo Integration",
  description:
    "Comprehensive low-voltage and digital infrastructure services including structured cabling, access control, video surveillance, and VoIP solutions.",
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/HaloIntegration.jpeg" alt="" className="w-full h-full object-cover" />
          {/* No overlay - full vivid image */}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)]">
              Digital Infrastructure & Low Voltage Solutions
            </h1>
            <p className="text-xl text-white text-pretty leading-relaxed [text-shadow:_0_2px_8px_rgb(0_0_0_/_70%)]">
              We specialize in comprehensive low-voltage services, offering expert installation and maintenance of
              structured cabling solutions. Our expertise covers data, audio, voice, physical access, and security
              systems tailored for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-20 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Avoid the risk of relying solely on electricians who may lack a nuanced understanding of low-voltage cable
              needs. Trust Halo to seamlessly connect all elements within your business and efficiently manage your
              upcoming projects in both new build and retrofit environments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Digital Infrastructure */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 lg:order-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services1-i9UwL7X3b9Mpn5jiQGRAAgwr5CYROF.jpeg"
                    alt="Colorful fiber optic cables"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Network className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Digital Infrastructure / Structured Cabling
                      </h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Digital infrastructure and low-voltage technology solutions are delivering both tangible returns on
                    investment (ROI) and enhancing operational performance and digital experiences. This dual benefit is
                    increasingly essential in today's competitive business landscape, where efficiency and user
                    experience are critical factors in staying ahead.
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="text-muted-foreground leading-relaxed">
                      Effective infrastructure technology can streamline processes, optimize resource allocation, and
                      enhance connectivity, all of which contribute to improved operational performance. Additionally,
                      by focusing on digital experiences, you're recognizing the importance of user-centric design and
                      accessibility, which can lead to increased customer satisfaction and loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Access Control */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Shield className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Access Control</h2>
                      <p className="text-xl text-muted-foreground">Access Control Solutions for Any Industry</p>
                    </div>
                  </div>
                </div>
                <div className="order-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services2-IXJzfxEMa8uuwdwdYvXCzDvJiSSCCX.jpeg"
                    alt="Access control card reader with digital security overlay"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-4">Multi-Family</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Forge a contemporary smart multifamily community equipped with a tailored security platform to cater
                    to residents' desires. Enhance property management efficiency through features such as self-guided
                    tours and mobile management tools. Incorporate intelligent elements like thermostats and sensors to
                    reduce expenses and amplify asset return on investment (ROI).
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-4">Hospitality</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Explore a cloud-based access control platform designed for hospitality and multi-purpose buildings.
                    Monitor occupancy levels to safeguard the health and safety of your guests. Utilize mobile
                    credentials for seamless movement of guests from the parking garage, to the restaurant, gym, and
                    their room ensuring a frictionless experience.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-4">Enterprise</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Employ our robust Enterprise-grade access control solution for deploying a secure and scalable
                    security system. Consolidate all your assets within a single, cyber-secure platform. Seamlessly
                    integrate physical access control with identity and access management to broaden data collection
                    capabilities and attain deeper insights into your physical environment.
                  </p>
                </Card>
              </div>
            </div>

            {/* Smart Video Surveillance */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 lg:order-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services3-TbtfCRkugLih03rp1mdqdFFKZroFEj.jpeg"
                    alt="Laptop displaying security camera feeds"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Video className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Smart Video Surveillance</h2>
                      <p className="text-xl text-muted-foreground">Unlimited Possibilities on an Open Platform</p>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Harness Eagle Eye's open, genuine cloud platform and artificial intelligence (AI) to revolutionize
                      your video surveillance system, amplifying its effectiveness exponentially. With video AI, the
                      potential is boundless, ensuring community safety and involvement, enhancing operational
                      efficiency and customer service for businesses, and facilitating manufacturers in crafting
                      superior products within secure environments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Scalability</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Devote less effort to overseeing your video surveillance system and devote more attention to
                    operating and enhancing your business. Our robust analytics furnish actionable insights, unveiling
                    employee training deficiencies, flagging potential safety risks, furnishing essential audit trails,
                    and streamlining compliance reporting, enabling proactive decision-making.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">The Power of Choice</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Maximize your current infrastructure by utilizing Cloud VMS, which seamlessly integrates with a vast
                    array of digital and analog cameras from top manufacturers. Avoid unnecessary expenses and
                    disruptions by preserving your existing technology investment, eliminating the need for costly
                    replacements.
                  </p>
                </Card>
              </div>
            </div>

            {/* Digital Signage */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Monitor className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Digital Signage</h2>
                      <p className="text-xl text-muted-foreground">
                        Captivating Digital Signage Paired with User-Friendly Digital Content Management
                      </p>
                    </div>
                  </div>
                  <Card className="p-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Comprehensive digital communication solutions aimed at driving sales, enhancing engagement, and
                      improving productivity.
                    </p>
                  </Card>
                </div>
                <div className="order-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services4_signage-jsA2tnkTmJyWavTj1B7ORBZlXgERw1.jpeg"
                    alt="Woman viewing digital signage display in mall"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* VoIP Phone Services */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 lg:order-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services5_voip-yw15F9dzdBznTCUTsh96Ej7triuWeG.jpeg"
                    alt="VoIP phone with network connectivity overlay"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">VoIP Phone Services</h2>
                      <p className="text-xl text-muted-foreground">
                        Equip your business with a cutting-edge cloud-based phone system and gain a competitive edge
                      </p>
                    </div>
                  </div>

                  <Card className="p-6">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Innovative, cost-effective, and feature-rich VoIP phone service, designed for easy deployment and
                      simple scalability.
                    </p>

                    <h3 className="text-lg font-bold text-foreground mb-4">Advantages</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "99.99% SLA",
                        "24/7 Support",
                        "Call Recording",
                        "Automatic Failover",
                        "Voicemail/Text/Fax to Email",
                        "Auto Attendant & On Hold Services",
                      ].map((advantage) => (
                        <div key={advantage} className="flex items-center gap-3">
                          <div className="p-1 bg-primary/10 rounded">
                            <Check className="text-primary" size={16} />
                          </div>
                          <span className="text-muted-foreground">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Prop-Tech Consulting */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building2 className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">"Prop-Tech" Consulting</h2>
                    </div>
                  </div>

                  <Card className="p-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Halo acts as your trusted resource in the field of property technology (prop-tech). Prop-tech
                      refers to the use of technology to innovate, enhance, and streamline processes within the real
                      estate industry. Prop-tech consulting involves advising real estate companies, property
                      developers, investors, hoteliers, and other stakeholders on how to leverage technological
                      solutions to optimize various aspects of their operations, such as property management, investment
                      analysis, tenant experience, construction, and sustainability. We offer expertise in areas such as
                      data analytics, artificial intelligence, low voltage, Internet of Things (IoT), and other emerging
                      technologies tailored to the specific needs of the client. Our goal is to help clients adapt to
                      the evolving technological landscape and capitalize on opportunities for efficiency, growth, and
                      innovation.
                    </p>
                  </Card>
                </div>
                <div className="order-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services6-Oppy09CLlw73wbA27iSaJtGmZd3Qc8.jpeg"
                    alt="Digital handshake representing partnership and technology"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Audio & Video Solutions */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services7-ZmcpFHWYWllUKGolCsg2I1lZhJDe4W.jpeg"
                    alt="Conference room with audio and video equipment"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Speaker className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Audio & Video Solutions</h2>
                      <p className="text-xl text-muted-foreground">
                        Elevate Your Experience: Unleash the Power of Perfect Sound and Crystal-Clear Visuals!
                      </p>
                    </div>
                  </div>

                  <Card className="p-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We specialize in providing top-tier audiovisual solutions, collaborating closely with our clients
                      to transform their concepts into reality. Utilizing state-of-the-art technology from our network
                      of renowned industry partners, our in-house design team crafts bespoke AV solutions tailored to
                      each client's unique needs. Committed to excellence, we pride ourselves on delivering high-caliber
                      AV solutions meticulously tailored to exceed our clients' expectations.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Let's discuss how our comprehensive services can enhance your business operations
            </p>
            <Button asChild size="lg">
              <Link href="/contact#contact-form">
                Schedule a Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
