import { Linkedin } from "lucide-react"

export function TeamMembers() {
  const team = [
    {
      name: "Michael Chen",
      role: "Chief Executive Officer",
      image: "/asian-male-executive.png",
      bio: "With over 20 years in technology consulting, Michael leads our strategic vision and client partnerships.",
      linkedin: "#",
    },
    {
      name: "Sarah Martinez",
      role: "Chief Technology Officer",
      image: "/professional-latina-female-technology-executive.jpg",
      bio: "Sarah drives our technical innovation and oversees all solution architecture and implementation.",
      linkedin: "#",
    },
    {
      name: "David Thompson",
      role: "VP of Multi-Family Solutions",
      image: "/professional-male-business-executive.jpg",
      bio: "David brings deep expertise in property technology and leads our multi-family practice.",
      linkedin: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Hospitality Solutions",
      image: "/professional-female-hospitality-executive.jpg",
      bio: "Emily specializes in guest experience technology and manages our hospitality client relationships.",
      linkedin: "#",
    },
  ]

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
              <a
                href={member.linkedin}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
                Connect
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
