import { HardHat, Building2, Tractor, Landmark, FileSearch, MapPin, Building } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    { icon: HardHat, label: "Mining & Resources" },
    { icon: Building2, label: "Construction" },
    { icon: Tractor, label: "Agriculture" },
    { icon: Landmark, label: "Local Government" },
    { icon: FileSearch, label: "Environmental Consultants" },
    { icon: MapPin, label: "SEQ Local Councils" },
    { icon: Building, label: "Government Agencies" },
  ]

  return (
    <section id="industries" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Who We Serve
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading Australian organisations across multiple sectors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {industries.map((industry) => (
            <div
              key={industry.label}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg border border-border min-w-[140px]"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <industry.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">{industry.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
