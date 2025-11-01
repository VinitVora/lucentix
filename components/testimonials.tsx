const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Bride",
    content:
      "Lucentix created the most beautiful engagement ring. Every detail was perfect, and the team made the entire process seamless.",
    image: "/testimonial1.jpg",
  },
  {
    id: 2,
    name: "James Chen",
    role: "Collector",
    content:
      "The craftsmanship is unparalleled. I've been collecting for years, and Lucentix pieces are the crown jewels of my collection.",
    image: "/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Heirloom Client",
    content:
      "They transformed my grandmother's vintage brooch into a stunning modern necklace. It's like seeing her legacy reimagined.",
    image: "/testimonial3.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-4">
            Stories from Our Clients
          </h2>
          <p className="text-lg text-foreground/80">
            Real experiences from those who trust us with their most precious moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-8 bg-accent rounded-lg border border-border">
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-end gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col justify-center leading-none">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
