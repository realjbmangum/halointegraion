import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Halo Integration | Infrastructure Technology Consulting",
  description:
    "Leading infrastructure technology consulting firm specializing in multi-family, hospitality, and enterprise digital solutions.",
  openGraph: {
    title: "Halo Integration | Infrastructure Technology Consulting",
    description: "Leading infrastructure technology consulting firm specializing in multi-family, hospitality, and enterprise digital solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
