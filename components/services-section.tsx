import Image from "next/image"
import { Plus } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Spare Parts Supply",
      image: "/images/spare-parts.jpg",
      description: "Genuine components for all major rain gauge brands"
    },
    {
      title: "Installation Services",
      image: "/images/installation.jpg", 
      description: "Professional setup and site assessment"
    },
    {
      title: "Calibration & Maintenance",
      image: "/images/calibration.jpg",
      description: "Precision calibration and ongoing support"
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
          A Comprehensive Approach
          <br />
          to Environmental Monitoring
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
              
              {/* Plus Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                <Plus className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-medium text-primary-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
