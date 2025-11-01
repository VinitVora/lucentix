import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedCollections from "@/components/featured-collections"
import Testimonials from "@/components/testimonials"
import HeirloomTransform from "@/components/heirloom-transform"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <HeirloomTransform />
      <Testimonials />
      <Footer />
    </main>
  )
}
