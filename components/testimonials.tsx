import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "HandyInHand has been our go-to supplier for rain gauge spare parts for over 5 years. Their fast turnaround and AS3580-compliant equipment keeps our monitoring network running smoothly.",
      author: "David Mitchell",
      role: "Environmental Manager",
      company: "Queensland Department of Environment"
    },
    {
      quote: "Excellent service and technical expertise. They understood our compliance requirements and delivered the right equipment on time. Highly recommended for any mining operation.",
      author: "Sarah Chen",
      role: "Site Environmental Officer",
      company: "BHP Mitsubishi Alliance"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-secondary p-6 rounded-lg border border-border"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                {`"${testimonial.quote}"`}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
