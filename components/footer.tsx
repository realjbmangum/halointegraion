import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Halo Integration</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Leading infrastructure technology consulting firm specializing in digital solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link
                  href="/services/infrastructure-consulting"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Infrastructure Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/digital-solutions" className="hover:text-primary-foreground transition-colors">
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/multi-family" className="hover:text-primary-foreground transition-colors">
                  Multi-Family
                </Link>
              </li>
              <li>
                <Link href="/services/hospitality" className="hover:text-primary-foreground transition-colors">
                  Hospitality
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@halointegration.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
                hello@halointegration.com
              </a>
              <a
                href="https://www.linkedin.com/company/halo-integration"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Halo Integration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
