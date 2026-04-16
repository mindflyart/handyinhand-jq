export function KeyPointsSection() {
  const points = [
    {
      number: "1",
      title: "Expert Installation",
      description: "Professional setup and calibration of rain gauge stations ensuring accurate data collection from day one."
    },
    {
      number: "2", 
      title: "Quality Spare Parts",
      description: "Genuine replacement components and accessories for all major rain gauge brands and models."
    },
    {
      number: "3",
      title: "Ongoing Support",
      description: "Maintenance services and technical assistance to keep your monitoring equipment operating at peak performance."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-sm font-medium text-muted-foreground mb-8">Our Core Commitments</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point) => (
            <div 
              key={point.number}
              className="p-8 border border-border rounded-lg hover:border-foreground/20 transition-colors"
            >
              <span className="text-5xl font-light text-foreground">{point.number}</span>
              <h3 className="mt-6 text-lg font-medium text-foreground">{point.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
