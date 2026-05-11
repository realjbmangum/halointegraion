"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const partners = [
  { name: "Best Buy Business", logo: "/partner-logos/Best-Buy-Business-136x80.png", href: "https://www.bestbuyforbusiness.com" },
  { name: "Brivo", logo: "/partner-logos/Brivo-Web-Logo2-258x80.png", href: "https://www.brivo.com" },
  { name: "Ergos", logo: "/partner-logos/ergos-312x80.png", href: "https://ergos.com" },
  { name: "GraybaR", logo: "/partner-logos/GraybaR-204x80.png", href: "https://www.graybar.com" },
  { name: "OCC", logo: "/partner-logos/OCC-297x80.png", href: "https://www.occfiber.com" },
  { name: "OFS", logo: "/partner-logos/OFS-logo-142x80.png", href: "https://www.ofs.com" },
  { name: "SparkPlug IP", logo: "/partner-logos/SparkPlug-IP-1-267x80.png", href: "https://sparkplugip.com" },
  { name: "WorldVue", logo: "/partner-logos/WorldVue-101x80.png", href: "https://worldvue.com" },
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
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {duplicatedPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-6 flex items-center justify-center group"
              >
                <div className="relative w-44 h-20 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00ffd5]/30 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-[#00ffd5]/0 group-hover:bg-[#00ffd5]/5 transition-colors duration-300" />
                </div>
              </a>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
            {duplicatedPartners.map((partner, index) => (
              <a
                key={`${partner.name}-dup-${index}`}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-6 flex items-center justify-center group"
              >
                <div className="relative w-44 h-20 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00ffd5]/30 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-[#00ffd5]/0 group-hover:bg-[#00ffd5]/5 transition-colors duration-300" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
