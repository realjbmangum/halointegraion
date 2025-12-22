import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "../globals.css"
import "./globals.css"
import { GlassNavigation } from "@/components/redesign/layout/glass-navigation"
import { FooterRedesign } from "@/components/redesign/layout/footer"

export const metadata: Metadata = {
  title: "Halo Integration | Redesign Preview",
  description: "Preview of the redesigned Halo Integration website",
}

export default function RedesignLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-[#0a0a0f] text-white min-h-screen`}>
      <GlassNavigation />
      {children}
      <FooterRedesign />
    </div>
  )
}
