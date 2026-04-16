import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="py-14 bg-[#1a2e44]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 text-balance">
          Need help choosing the right monitoring system?
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Talk to our specialists. We&apos;ll help you find the right equipment for your compliance requirements.
        </p>
        <Button asChild size="lg" className="bg-white text-[#1a2e44] hover:bg-white/90 font-semibold">
          <Link href="#contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  )
}
