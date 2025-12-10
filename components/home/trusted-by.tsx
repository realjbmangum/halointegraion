export function TrustedBy() {
  const clients = [
    { name: "Eagle Eye Networks", logo: "/eagle-eye-networks-logo.jpg" },
    { name: "WorldVue", logo: "/worldvue-logo.jpg" },
    { name: "GraybaR", logo: "/graybar-logo.jpg" },
    { name: "OCC", logo: "/occ-logo.jpg" },
    { name: "Best Buy Business", logo: "/best-buy-business-logo.jpg" },
    { name: "Verkada", logo: "/verkada-logo.jpg" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Trusted Partners</h2>
          <p className="text-muted-foreground">Working with industry-leading technology providers</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <img src={client.logo || "/placeholder.svg"} alt={client.name} className="max-h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
