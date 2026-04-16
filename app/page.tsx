import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { KeyPointsSection } from "@/components/key-points-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <KeyPointsSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
