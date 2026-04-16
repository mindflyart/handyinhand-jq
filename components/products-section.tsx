import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ProductsSection() {
  const categories = [
    {
      id: "sensors",
      title: "Rain Sensors & Collectors",
      description: "High-precision tipping bucket sensors, collection funnels, and rainfall measurement components designed for accurate data capture in all weather conditions."
    },
    {
      id: "electronics",
      title: "Electronics & Data Loggers",
      description: "Digital displays, data logging systems, transmission modules, and power supply units to ensure reliable data collection and remote monitoring capabilities."
    },
    {
      id: "mounting",
      title: "Mounting & Installation Hardware",
      description: "Poles, brackets, leveling systems, and weatherproof enclosures for secure and stable station deployment in any environment."
    },
    {
      id: "maintenance",
      title: "Maintenance Kits & Consumables",
      description: "Calibration tools, cleaning supplies, replacement filters, and seasonal maintenance packages to keep your stations operating at peak performance."
    },
    {
      id: "accessories",
      title: "Accessories & Add-ons",
      description: "Wind shields, heaters for cold climates, solar panels, and communication modules to enhance your monitoring capabilities."
    }
  ]

  return (
    <section id="products" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Description */}
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">Product Categories</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
              Quality Spare Parts for Every Need
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We stock a comprehensive range of genuine spare parts and accessories 
              for all major rain gauge manufacturers. Whether you need a simple 
              replacement component or a complete station upgrade, we have you covered.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {categories.map((category) => (
                <AccordionItem key={category.id} value={category.id} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {category.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
