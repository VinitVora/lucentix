import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 bg-accent py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-foreground mb-6">
              Our Heritage
            </h1>
            <p className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto">
              Three generations of master craftspeople dedicated to creating
              jewelry that transcends time and tells stories.
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
                  The Lucentix Story
                </h2>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  Founded in 1987, Lucentix Jewels began as a small atelier in
                  the heart of the jewelry district. What started as a passion
                  for exceptional craftsmanship has evolved into a beacon of
                  luxury and innovation.
                </p>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  Our founder, Isabella Moretti, believed that jewelry should be
                  more than beautiful—it should be meaningful. Every piece we
                  create carries this philosophy: a commitment to quality,
                  ethics, and the personal stories our clients entrust us with.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Today, we continue this legacy by combining traditional
                  techniques with contemporary design, ensuring that each
                  Lucentix piece is both timeless and distinctly modern.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/brand-story.png"
                  alt="Jewelry workshop"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Values */}
            <div className="bg-accent rounded-lg p-12 mb-20">
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-12 text-center">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Craftsmanship */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <img
                      src="/our-values1.png"
                      alt="Craftsmanship icon"
                      className="w-24 h-24 object-cover rounded-full shadow-md"
                    />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                    Craftsmanship
                  </h3>
                  <p className="text-foreground">
                  We perfect every detail with care. Our artisans pour passion into each design, 
                  creating timeless beauty.
                  </p>
                </div>

                {/* Ethical Sourcing */}
                <div className="text-center">
                <div className="flex justify-center mb-6">
                    <img
                      src="/our-values2.png"
                      alt="Ethical Sourcing icon"
                      className="w-24 h-24 object-cover rounded-full shadow-md"
                    />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                    Ethical Sourcing
                  </h3>
                  <p className="text-foreground">
                  We choose materials with conscience. Every partnership reflects our respect for 
                  people and the planet.
                  </p>
                </div>

                {/* Personal Connection */}
                <div className="text-center">
                <div className="flex justify-center mb-6">
                    <img
                      src="/our-values3.png"
                      alt="Personal Connection icon"
                      className="w-24 h-24 object-cover rounded-full shadow-md"
                    />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">
                    Personal Connection
                  </h3>
                  <p className="text-foreground">
                    Your story matters to us. We create pieces that celebrate
                    your unique moments and memories.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div>
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-12 text-center">
                Meet Our Artisans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Isabella Moretti",
                    role: "Founder & Master Jeweler",
                    bio: "With 40+ years of experience, Isabella leads our design vision and mentors the next generation of craftspeople.",
                    image: "/testimonial1.jpg",
                  },
                  {
                    name: "Marco Rossi",
                    role: "Head of Design",
                    bio: "Marco blends traditional techniques with contemporary aesthetics, creating pieces that feel both timeless and modern.",
                    image: "/testimonial2.jpg",
                  },
                  {
                    name: "Sofia Benedetti",
                    role: "Master Gemologist",
                    bio: "Sofia's expertise in gemstones ensures every stone selected meets our exacting standards for quality and beauty.",
                    image: "testimonial3.jpg",
                  },
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="rounded-lg overflow-hidden mb-4 h-64">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-cormorant mb-3">
                      {member.role}
                    </p>
                    <p className="text-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
              Experience Lucentix
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-foreground">
              Visit our atelier for a personal consultation and discover how we
              can bring your jewelry dreams to life.
            </p>
            <Link
              href="/consultation"
              className="px-8 py-3 bg-primary text-background border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 ease-in-out font-cormorant text-lg"
            >
              Book Your Consultation
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
