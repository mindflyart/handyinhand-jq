import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-rain.jpg"
          alt="Environmental rain gauge station in the field"
          fill
          className="object-cover"
          priority
        />
        {/* Dark steel-blue overlay */}
        <div className="absolute inset-0 bg-[#1a2e44]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
          Environmental Monitoring Equipment &amp; Spare Parts for Australian Industry
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto text-pretty">
          Parts for Australian Standard environmental monitoring systems. Rain gauges, weather stations, and air quality monitors.
          Brisbane-based, Australia-wide delivery. Government purchase orders accepted.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-white text-[#1a2e44] hover:bg-white/90 font-semibold">
            <Link href="#products">Browse Products</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
