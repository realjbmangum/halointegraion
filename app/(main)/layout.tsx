import { GlassNavigation } from "@/components/redesign/layout/glass-navigation"
import { FooterRedesign } from "@/components/redesign/layout/footer"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="antialiased bg-[#0a0a0f] text-white min-h-screen">
      <GlassNavigation />
      {children}
      <FooterRedesign />
    </div>
  )
}
