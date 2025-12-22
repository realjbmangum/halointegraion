"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Network, Shield, Video, Wifi, Phone, Building2, Speaker, Cpu } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Network,
    title: "Digital Infrastructure",
    description: "Structured cabling and networking solutions delivering tangible ROI and enhanced performance.",
    href: "/redesign/services",
    size: "large",
    gradient: "from-[#00ffd5] to-[#00d4b0]",
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Cloud-based security platforms for multi-family, hospitality, and enterprise.",
    href: "/redesign/services",
    size: "medium",
    gradient: "from-[#a855f7] to-[#6366f1]",
  },
  {
    icon: Video,
    title: "Smart Surveillance",
    description: "AI-powered video systems on an open cloud platform.",
    href: "/redesign/services",
    size: "medium",
    gradient: "from-[#3b82f6] to-[#00ffd5]",
  },
  {
    icon: Phone,
    title: "VoIP Solutions",
    description: "Cloud-based phone systems with 99.99% SLA.",
    href: "/redesign/services",
    size: "small",
    gradient: "from-[#f59e0b] to-[#ef4444]",
  },
  {
    icon: Wifi,
    title: "Network & Wi-Fi",
    description: "Enterprise networking and wireless solutions with expert design.",
    href: "/redesign/services",
    size: "small",
    gradient: "from-[#10b981] to-[#00ffd5]",
  },
  {
    icon: Building2,
    title: "Prop-Tech Consulting",
    description: "Strategic technology guidance for real estate innovation.",
    href: "/redesign/services",
    size: "small",
    gradient: "from-[#6366f1] to-[#a855f7]",
  },
  {
    icon: Speaker,
    title: "Audio & Video",
    description: "Premium AV solutions tailored to your needs.",
    href: "/redesign/services",
    size: "small",
    gradient: "from-[#ec4899] to-[#a855f7]",
  },
]

export function BentoServicesRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#a855f7]/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLarge = service.size === "large"
            const isMedium = service.size === "medium"

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  ${isMedium ? "md:row-span-2" : ""}
                `}
              >
                <Link
                  href={service.href}
                  className="group relative h-full p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between overflow-hidden block"
                >
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-px bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-white mb-2 ${isLarge ? "text-2xl" : "text-lg"}`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-white/50 ${isLarge ? "text-base" : "text-sm"} line-clamp-3`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="relative z-10 mt-4">
                    <span className="inline-flex items-center gap-1 text-sm text-white/40 group-hover:text-[#00ffd5] transition-colors">
                      Learn more
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
