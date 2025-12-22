"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const partners = [
  { name: "Eagle Eye Networks", logo: "/eagle-eye-networks-logo.jpg" },
  { name: "WorldVue", logo: "/worldvue-logo.jpg" },
  { name: "GraybaR", logo: "/graybar-logo.jpg" },
  { name: "OCC", logo: "/occ-logo.jpg" },
  { name: "Best Buy Business", logo: "/best-buy-business-logo.jpg" },
  { name: "Verkada", logo: "/verkada-logo.jpg" },
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
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-12 flex items-center justify-center group"
              >
                <div className="relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto brightness-0 invert opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 rounded-xl bg-[#00ffd5]/0 group-hover:bg-[#00ffd5]/5 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-dup-${index}`}
                className="flex-shrink-0 mx-12 flex items-center justify-center group"
              >
                <div className="relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto brightness-0 invert opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-[#00ffd5]/0 group-hover:bg-[#00ffd5]/5 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
