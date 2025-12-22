"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutPreviewRedesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-[#12121a] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#a855f7]/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Expertise you can <span className="text-gradient">trust</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              With years of experience in infrastructure technology, Halo Integration brings unparalleled expertise to
              every project. Our team of certified professionals has successfully delivered hundreds of implementations
              across multi-family, hospitality, and enterprise sectors.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              We stay at the forefront of technology innovation, continuously expanding our knowledge and capabilities
              to ensure our clients benefit from the latest advancements in infrastructure solutions.
            </p>

            <Link
              href="/redesign/about"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Learn About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/professional-technology-team-working-on-infrastruc.jpg"
                alt="Halo Integration team"
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/20 to-transparent mix-blend-overlay" />
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
            </div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-6 -left-6 p-4 rounded-xl glass-card border border-[#a855f7]/20"
            >
              <div className="text-3xl font-bold text-gradient mb-1">500+</div>
              <div className="text-xs text-white/60">Projects Delivered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-4 rounded-xl glass-card border border-[#00ffd5]/20"
            >
              <div className="text-3xl font-bold text-gradient mb-1">99%</div>
              <div className="text-xs text-white/60">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
