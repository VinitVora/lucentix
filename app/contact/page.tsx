"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 bg-accent py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-lg text-foreground max-w-2xl">
              Have questions about our collections or ready to start your bespoke journey? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Visit Us</h3>
                  <p className="text-foreground leading-relaxed">
                    123 Luxury Lane
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Hours</h3>
                  <p className="text-foreground leading-relaxed">
                    Monday - Friday: 10am - 6pm
                    <br />
                    Saturday: 11am - 5pm
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Contact</h3>
                  <p className="text-foreground leading-relaxed">
                    Phone: +1 (555) 123-4567
                    <br />
                    Email: hello@lucentix.com
                    <br />
                    WhatsApp: +1 (555) 123-4567
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                      Instagram
                    </a>
                    <a href="#" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                      Facebook
                    </a>
                    <a href="#" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                      Pinterest
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-lg overflow-hidden h-96 bg-accent border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31586.0!2d2.154007!3d41.390205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498d97c0a2d3f%3A0x0!2zNDEuMzkwMjA1IDIsLjE1NDAwNw!5e0!3m2!1sen!2ses!4v0000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How long does a custom design take?",
                  answer:
                    "Custom designs typically take 4-8 weeks from consultation to completion, depending on complexity and materials.",
                },
                {
                  question: "Do you offer international shipping?",
                  answer: "Yes, we ship worldwide with full insurance and tracking. Shipping costs vary by location.",
                },
                {
                  question: "What is your return policy?",
                  answer:
                    "We offer a 30-day return policy for all pieces. Custom designs are non-returnable unless there's a defect.",
                },
                {
                  question: "Can I resize my ring?",
                  answer:
                    "We offer free resizing for the first year. After that, resizing is available at a nominal fee.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-background rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
