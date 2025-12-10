import { Mail, Phone, MapPin } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "(254) Halo-Now",
    content: "",
    link: "tel:2544256669",
  },
  {
    icon: Mail,
    title: "info@halointegration.com",
    content: "",
    link: "mailto:info@halointegration.com",
  },
  {
    icon: MapPin,
    title: "Home/Office Address",
    content: "801 Travis Street, Suite 2101\n#826 - Houston, TX 77002",
    link: "https://maps.app.goo.gl/xPojnJxzwHvXKWyV8",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon
        const content = (
          <div className="flex gap-4 group">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-1">{detail.title}</h3>
              {detail.content && <p className="text-muted-foreground whitespace-pre-line">{detail.content}</p>}
            </div>
          </div>
        )

        if (detail.link) {
          return (
            <a
              key={index}
              href={detail.link}
              target={detail.link.startsWith("http") ? "_blank" : undefined}
              rel={detail.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block hover:opacity-80 transition-opacity"
            >
              {content}
            </a>
          )
        }

        return <div key={index}>{content}</div>
      })}
    </div>
  )
}
