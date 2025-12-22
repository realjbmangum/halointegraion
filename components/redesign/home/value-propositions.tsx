"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Users, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Integrated Excellence",
    description:
      "We deliver comprehensive solutions that seamlessly integrate with your existing infrastructure, ensuring optimal performance and scalability across all systems.",
  },
  {
    icon: Users,
    title: "Relationships First",
    description:
      "Our success is built on lasting partnerships. We take time to understand your business, becoming a trusted advisor invested in your long-term success.",
  },
  {
    icon: TrendingUp,
    title: "Asset Mindset",
    description:
      "Every implementation is designed as a strategic asset, not just a project. We focus on solutions that grow with your business and deliver sustained value.",
  },
]

export function ValuePropositionsRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-[#12121a] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffd5]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00ffd5]/20 transition-all duration-500 h-full">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-[#00ffd5]/0 group-hover:bg-[#00ffd5]/5 transition-colors duration-500" />

                  <div className="relative z-10">
                    {/* Icon with animated ring */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00ffd5]/20 to-[#a855f7]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-[#00ffd5]" />
                      </div>
                      {/* Animated ring on hover */}
                      <div className="absolute inset-0 rounded-2xl border border-[#00ffd5]/0 group-hover:border-[#00ffd5]/30 group-hover:scale-125 transition-all duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00ffd5] transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
