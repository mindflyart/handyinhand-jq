import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function FeaturedProducts() {
  const products = [
    {
      name: "TB4-L Tipping Bucket Rain Gauge",
      image: "/images/spare-parts.jpg",
      specs: ["0.2mm resolution", "Suits AS3580.14 monitoring systems", "Heated option available"],
      badge: "AS3580-compatible product range"
    },
    {
      name: "WS500 Compact Weather Station",
      image: "/images/installation.jpg",
      specs: ["5 sensors integrated", "Solar powered", "4G telemetry ready"],
      badge: "Weather Station Parts"
    },
    {
      name: "DL200 Multi-Channel Data Logger",
      image: "/images/calibration.jpg",
      specs: ["16 input channels", "SD card storage", "Modbus compatible"],
      badge: "Data Logger Parts"
    }
  ]

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Featured Products
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Popular equipment and spare parts for Australian environmental monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg border border-border overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-3">{product.name}</h3>
                <ul className="space-y-1 mb-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="#contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
