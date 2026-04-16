import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              About HandyInHand
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Based in Brisbane, HandyInHand supplies quality environmental monitoring
              equipment and spare parts to Australian industry. We specialise in
              rain gauges, weather stations, and air quality monitoring systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team of certified technicians provides professional installation, calibration, 
              and maintenance services across Queensland, New South Wales, and the Northern Territory.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Australian-owned and operated
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                NATA-compatible calibration services
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                Nationwide shipping and support
              </li>
            </ul>
          </div>
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/installation.jpg"
              alt="HandyInHand technician installing equipment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
