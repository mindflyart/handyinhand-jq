import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { ProductCategories } from "@/components/product-categories"
import { IndustriesSection } from "@/components/industries-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"
import { AboutSection } from "@/components/about-section"
import { CtaBanner } from "@/components/cta-banner"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustBar />
      <ProductCategories />
      <IndustriesSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <AboutSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
