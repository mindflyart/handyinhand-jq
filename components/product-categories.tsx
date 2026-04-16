import Link from "next/link"
import { Cloud, Droplets, Wind, Database } from "lucide-react"

export function ProductCategories() {
  const categories = [
    {
      icon: Cloud,
      name: "Weather Stations",
      description: "Complete meteorological monitoring systems for accurate weather data collection and analysis.",
      href: "#products"
    },
    {
      icon: Droplets,
      name: "Rain Gauges",
      description: "Precision tipping bucket and weighing rain gauges with AS3580 compliance certification.",
      href: "#products"
    },
    {
      icon: Wind,
      name: "Air Quality Monitors",
      description: "EPA-compliant particulate matter, gas, and dust monitoring equipment for environmental compliance.",
      href: "#products"
    },
    {
      icon: Database,
      name: "Data Loggers",
      description: "Reliable data logging and telemetry systems for remote monitoring and real-time reporting.",
      href: "#products"
    }
  ]

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Product Categories
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive spare parts and equipment for all your environmental monitoring needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group bg-secondary p-6 rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {category.description}
              </p>
              <Link
                href={category.href}
                className="text-sm font-medium text-primary hover:underline"
              >
                View Products
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
