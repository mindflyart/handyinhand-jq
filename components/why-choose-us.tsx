import { ShieldCheck, Truck, Wrench } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Australian Standards Compliance",
      description: "All equipment meets AS3580, EPA, and WMO standards. Full documentation and compliance certificates provided with every order."
    },
    {
      icon: Truck,
      title: "Fast Spare Parts Supply",
      description: "Extensive inventory ensures quick turnaround. Most parts shipped within 24-48 hours from our Brisbane warehouse to anywhere in Australia."
    },
    {
      icon: Wrench,
      title: "Certified Service & Calibration",
      description: "NATA-compatible calibration services and certified technicians for installation, maintenance, and repairs across all major brands."
    }
  ]

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Why Choose RainTech Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
