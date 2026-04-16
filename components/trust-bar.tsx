import { FileCheck, Shield, Clock, Truck } from "lucide-react"

export function TrustBar() {
  const badges = [
    { icon: FileCheck, label: "Government Purchase Orders Accepted" },
    { icon: Shield, label: "Parts for Australian Standard Monitoring Systems" },
    { icon: Clock, label: "24-Hour Quote Turnaround" },
    { icon: Truck, label: "Brisbane-Based, Australia-Wide Delivery" },
  ]

  return (
    <section className="bg-[#1a2e44] py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
            >
              <badge.icon className="w-4 h-4 text-white/80" />
              <span className="text-sm font-medium text-white">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
