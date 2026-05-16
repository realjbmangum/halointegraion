"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const partners = [
  { name: "Best Buy Business", logo: "/partner-logos/Best-Buy-Business-136x80.png" },
  { name: "Brivo", logo: "/partner-logos/Brivo-Web-Logo2-258x80.png" },
  { name: "Ergos", logo: "/partner-logos/ergos-312x80.png" },
  { name: "GraybaR", logo: "/partner-logos/GraybaR-204x80.png" },
  { name: "OCC", logo: "/partner-logos/OCC-297x80.png" },
  { name: "OFS", logo: "/partner-logos/OFS-logo-142x80.png" },
  { name: "SparkPlug IP", logo: "/partner-logos/SparkPlug-IP-1-267x80.png" },
  { name: "WorldVue", logo: "/partner-logos/WorldVue-101x80.png" },
]

export function PartnerMarqueeRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Double the partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section ref={ref} className="relative py-24 bg-[#0a0a0f] overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-white/40 uppercase tracking-widest">
            Trusted by Industry Leaders
          </span>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

        {/* Scrolling track */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex"
        >
          <div className="flex animate-marquee">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
              >
                <div className="w-44 h-20 flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain brightness-0 invert opacity-60"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee" aria-hidden="true">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-dup-${index}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
              >
                <div className="w-44 h-20 flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain brightness-0 invert opacity-60"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
