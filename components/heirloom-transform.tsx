export default function HeirloomTransform() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6">
              Transform Your Heirlooms
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Your family's treasures deserve a second life. Our master craftspeople specialize in reimagining heirloom
              pieces into contemporary designs that honor the past while embracing the future.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground">Expert assessment and consultation</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground">Custom redesign concepts</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground">Ethical stone and metal sourcing</span>
              </li>
            </ul>
            <button className="px-8 py-3 bg-primary text-background border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 ease-in-out font-cormorant text-lg cursor-pointer">
              Start Your Transformation
            </button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/heirloom.jpg"
              alt="Heirloom transformation"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
