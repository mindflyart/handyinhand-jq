import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-rain.jpg"
          alt="Environmental rain gauge station in the field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight text-balance">
          Precision Rain Gauge Solutions
          <br />
          <span className="text-primary-foreground/80">for Every Environment</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto text-pretty">
          Professional spare parts and expert installation services for environmental monitoring stations. 
          Trusted by meteorological agencies, research institutions, and agricultural enterprises.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="#products">Explore Parts</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
