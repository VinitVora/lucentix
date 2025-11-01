"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-accent to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6 text-balance">
            Timeless Elegance, Personal Stories
          </h1>
          <p className="text-lg sm:text-xl text-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Discover luxury jewelry that transcends time. Each piece is a
            testament to craftsmanship, heritage, and the unique story you
            carry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collection"
              className="px-8 py-3 bg-primary text-background border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 ease-in-out font-cormorant text-lg"
            >
              Explore Collection
            </Link>
            <Link
              href="/bespoke"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all font-cormorant text-lg"
            >
              Design Your Own
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/hero3.jpg"
            alt="Luxury jewelry collection"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
