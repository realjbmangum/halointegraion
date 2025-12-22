"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Building2, Hotel, Warehouse, MapPin } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Luxury Multi-Family Complex",
    category: "Multi-Family",
    location: "Houston, TX",
    description: "Complete low-voltage infrastructure for 350-unit luxury apartment community including structured cabling, access control, video surveillance, and Wi-Fi throughout common areas.",
    services: ["Structured Cabling", "Access Control", "Video Surveillance", "Wi-Fi Networks"],
    image: null, // Placeholder - will be replaced with actual image
    stats: { units: "350", sqft: "425,000" },
  },
  {
    id: 2,
    title: "Boutique Hotel & Conference Center",
    category: "Hospitality",
    location: "Austin, TX",
    description: "Full technology refresh for a boutique hotel featuring cloud-based access control, enterprise Wi-Fi, VoIP phone systems, and integrated AV solutions for conference facilities.",
    services: ["Access Control", "Wi-Fi Networks", "VoIP Phones", "Audio & Video"],
    image: null,
    stats: { rooms: "180", sqft: "95,000" },
  },
  {
    id: 3,
    title: "Corporate Headquarters Buildout",
    category: "Enterprise",
    location: "Dallas, TX",
    description: "Ground-up infrastructure deployment for new corporate campus including fiber backbone, Cat6A throughout, enterprise security systems, and smart building integration.",
    services: ["Fiber Optic", "Structured Cabling", "Video Surveillance", "Access Control"],
    image: null,
    stats: { floors: "12", sqft: "280,000" },
  },
  {
    id: 4,
    title: "Mixed-Use Development",
    category: "Multi-Family",
    location: "San Antonio, TX",
    description: "Integrated technology solution for a mixed-use property combining retail, office, and residential spaces with unified access control and network infrastructure.",
    services: ["Structured Cabling", "Access Control", "Network Design", "Wi-Fi Networks"],
    image: null,
    stats: { units: "220", retail: "45,000 sqft" },
  },
  {
    id: 5,
    title: "Resort & Spa Network Upgrade",
    category: "Hospitality",
    location: "Galveston, TX",
    description: "Complete network modernization for oceanfront resort including high-density Wi-Fi, cloud VMS, mobile key access, and back-of-house infrastructure improvements.",
    services: ["Wi-Fi Networks", "Video Surveillance", "Access Control", "VoIP Phones"],
    image: null,
    stats: { rooms: "320", amenities: "15+" },
  },
  {
    id: 6,
    title: "Industrial Distribution Center",
    category: "Enterprise",
    location: "Katy, TX",
    description: "Large-scale warehouse technology deployment featuring industrial-grade Wi-Fi, perimeter security, access control, and integration with logistics management systems.",
    services: ["Wi-Fi Networks", "Video Surveillance", "Access Control", "Structured Cabling"],
    image: null,
    stats: { sqft: "750,000", docks: "48" },
  },
]

const categories = ["All", "Multi-Family", "Hospitality", "Enterprise"]

export default function ProjectsPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-[#030014]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.15),rgba(0,0,0,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(0,255,213,0.1),rgba(0,0,0,0))]" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[Building2, Hotel, Warehouse].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${25 + i * 25}%`,
                top: `${35 + (i % 2) * 30}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.7,
              }}
            >
              <Icon className="w-16 h-16 text-[#a855f7]/20" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Projects That{" "}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#00ffd5] bg-clip-text text-transparent">
                Deliver Results
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From multi-family communities to enterprise campuses, see how we've helped clients transform their infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#0a0a0f] border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "10M+", label: "Sq Ft Deployed" },
              { value: "50+", label: "Years Experience" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#00ffd5] to-[#a855f7] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-[#030014]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Recent Installations
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0f] border border-white/5 hover:border-[#00ffd5]/30 transition-all duration-500">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-[#12121a] to-[#0a0a0f] overflow-hidden">
                    {/* Placeholder pattern */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-[#00ffd5]/10 blur-3xl"
                          style={{ width: 150, height: 150, left: -75, top: -75 }}
                        />
                        {project.category === "Multi-Family" && <Building2 className="w-16 h-16 text-[#00ffd5]/20" />}
                        {project.category === "Hospitality" && <Hotel className="w-16 h-16 text-[#a855f7]/20" />}
                        {project.category === "Enterprise" && <Warehouse className="w-16 h-16 text-[#00ffd5]/20" />}
                      </div>
                    </div>

                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,255,213,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,255,213,0.3) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00ffd5]/10 text-[#00ffd5] border border-[#00ffd5]/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Location */}
                    <div className="flex items-center gap-1 text-sm text-white/40 mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ffd5] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/60"
                        >
                          {service}
                        </span>
                      ))}
                      {project.services.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/40">
                          +{project.services.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 pt-4 border-t border-white/5">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-lg font-bold text-[#00ffd5]">{value}</div>
                          <div className="text-xs text-white/40 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(168,85,247,0.1),transparent)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#00ffd5] bg-clip-text text-transparent">
                Next Project
              </span>
              ?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Let's discuss how we can bring the same level of excellence to your infrastructure project.
            </p>
            <Link
              href="/redesign/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,213,0.4)] transition-all duration-300 hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
