"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Users, Target, Lightbulb, Award, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Team Member Name",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in low-voltage infrastructure and property technology, leading HALO's vision for innovative digital solutions.",
    image: null, // Placeholder - will be replaced with actual image
  },
  {
    name: "Team Member Name",
    role: "Director of Operations",
    bio: "Expert in project management and implementation, ensuring every installation meets our high standards for quality and client satisfaction.",
    image: null,
  },
  {
    name: "Team Member Name",
    role: "Lead Engineer",
    bio: "Specialized in network design and structured cabling systems, bringing technical excellence to every infrastructure project.",
    image: null,
  },
  {
    name: "Team Member Name",
    role: "Business Development",
    bio: "Focused on building lasting client relationships and identifying opportunities to deliver value through technology solutions.",
    image: null,
  },
]

const values = [
  {
    icon: Users,
    title: "Relationships First",
    description:
      "We believe in building long-lasting partnerships with our clients, becoming trusted advisors invested in their success.",
  },
  {
    icon: Target,
    title: "Client-Focused",
    description:
      "Every solution is tailored to your unique needs. We work closely with you to understand your requirements and deliver results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We stay at the forefront of technology, continuously expanding our knowledge to bring you the latest advancements.",
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description:
      "From planning to implementation, we maintain the highest standards of quality in everything we do.",
  },
]

const stats = [
  { value: "50+", label: "Years Combined Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
]

const expertise = [
  "Digital Infrastructure",
  "Access Control",
  "Video Surveillance",
  "Building Automation",
  "VoIP Systems",
  "Network Management",
  "IT Consulting",
  "Prop-Tech Solutions",
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-[#030014]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#00ffd5] bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We started with a vision of providing top-notch consulting and digital infrastructure solutions to
              businesses that demand excellence.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a0a0f] border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00ffd5] to-[#a855f7] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#030014]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                From Industry Experts to{" "}
                <span className="text-gradient">Trusted Partners</span>
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  At HALO, we started with a vision of providing top-notch consulting and digital infrastructure
                  solutions to multi-family, hospitality, and enterprise businesses.
                </p>
                <p>
                  We began our journey working inside industry-leading technology companies and built HALO with the
                  goal of connecting property owners and developers with the right approach to technology.
                </p>
                <p>
                  We believe in building long-lasting relationships with our clients and helping them achieve their
                  business goals through innovative technology solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Decorative visual */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0a0a0f] to-[#12121a] border border-white/5 overflow-hidden relative">
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute rounded-full border border-[#00ffd5]/20"
                      style={{
                        width: 100 + ring * 80,
                        height: 100 + ring * 80,
                      }}
                      animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 20 + ring * 5, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00ffd5] to-[#a855f7] flex items-center justify-center">
                    <span className="text-[#030014] font-bold text-2xl">H</span>
                  </div>
                </div>

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,255,213,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,255,213,0.3) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00ffd5]/30 transition-colors"
                  >
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                50+ Years of{" "}
                <span className="text-gradient">Combined Experience</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                With decades of experience in the technology industry, hospitality, multi-family, and enterprise
                business, we have honed our skills in providing a wide range of services.
              </p>
              <p className="text-white/60 leading-relaxed">
                Our team stays updated with the latest technologies and industry trends to provide the best solutions
                for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#030014]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#00ffd5] uppercase tracking-widest mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What Drives Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00ffd5]/30 transition-all duration-500 text-center"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#00ffd5]/20 to-[#a855f7]/20 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#00ffd5]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet the <span className="text-gradient">Experts</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our experienced team brings decades of combined expertise in low-voltage infrastructure,
              networking, and property technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#030014] border border-white/5 hover:border-[#00ffd5]/30 transition-all duration-500">
                  {/* Image Placeholder */}
                  <div className="aspect-square relative bg-gradient-to-br from-[#12121a] to-[#0a0a0f] overflow-hidden">
                    {/* Placeholder avatar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-[#00ffd5]/10 blur-3xl"
                          style={{ width: 120, height: 120, left: -60, top: -60 }}
                        />
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00ffd5]/20 to-[#a855f7]/20 border border-white/10 flex items-center justify-center">
                          <Users className="w-10 h-10 text-white/30" />
                        </div>
                      </div>
                    </div>

                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,255,213,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,255,213,0.3) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Hover overlay with social links */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-[#00ffd5] hover:border-[#00ffd5]/50 transition-colors"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-[#00ffd5] hover:border-[#00ffd5]/50 transition-colors"
                        >
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00ffd5] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#00ffd5] mb-3">{member.role}</p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-[#030014]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Personalized Solutions for{" "}
                <span className="text-gradient">Every Client</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                We understand that every business and property is unique, and so are its technology needs. That's why
                we work closely with our clients to understand their requirements and provide tailored solutions that
                fit their needs and budget.
              </p>
              <p className="text-white/50 leading-relaxed">
                We also offer flexible pricing models to ensure that our services are accessible to businesses of all
                sizes, from startups to enterprise organizations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#030014] relative overflow-hidden">
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
              Let's Build Something{" "}
              <span className="text-gradient">Great Together</span>
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Ready to work with a team that puts your success first?
            </p>
            <Link
              href="/redesign/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00ffd5] to-[#00d4b0] text-[#030014] font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,213,0.4)] transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
