import Link from "next/link"

export default function Footer() {
  return (
    
    <footer className="bg-accent text-foreground border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Lucentix</h3>
            <p className="text-sm leading-relaxed">Crafting timeless jewelry that tells your story.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                  About
                </Link>
              </li>
              <li>
                <Link href="/collection" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/bespoke" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                  Bespoke
                </Link>
              </li>
              <li>
                <Link href="/contact" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/bespoke" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                  Custom Design
                </Link>
              </li>
              <li>
                <Link href="#" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                  Heirloom Transformation
                </Link>
              </li>
              <li>
                <Link href="#" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                  Consultations
                </Link>
              </li>
              <li>
                <Link href="#" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full">
                  Repairs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@lucentix.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Luxury Lane, NY 10001</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-accent/20 pt-8 text-center text-sm">
          <p>&copy; 2025 Lucentix Jewels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
