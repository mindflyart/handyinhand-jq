import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to discuss your requirements?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a 24-hour quote from our Brisbane-based team
          </p>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Link href="#contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
