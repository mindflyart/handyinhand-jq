import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Combining Innovation, Durability, and Precision
          </h2>
        </div>

        {/* Two Column Image Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/installation.jpg"
              alt="Professional technician installing rain gauge equipment"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/spare-parts.jpg"
              alt="Precision rain gauge components and spare parts"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            RainTech Solutions is committed to advancing environmental monitoring through 
            reliable rain gauge station equipment and services. We provide sustainable solutions 
            that serve researchers, meteorologists, and agricultural enterprises worldwide.
          </p>
          <Button variant="outline" className="mt-8" asChild>
            <Link href="#contact">Our Commitment</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
