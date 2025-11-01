"use client";

import Link from "next/link";

const collections = [
  {
    id: 1,
    name: "Eternal Radiance",
    description: "Timeless diamond and precious stone collections",
    image: "/fc1.jpg",
  },
  {
    id: 2,
    name: "Heritage Heirlooms",
    description: "Transform family treasures into modern masterpieces",
    image: "/fc2.jpg",
  },
  {
    id: 3,
    name: "Signature Pieces",
    description: "Exclusive limited edition designs",
    image: "/fc4.jpg",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-4">
            Featured Collections
          </h2>
          <p className="text-lg sm:text-xl text-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Curated selections that celebrate craftsmanship and timeless beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-80">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                {collection.name}
              </h3>
              <p className="text-foreground/80 mb-4">
                {collection.description}
              </p>
              <Link
                href="/collection"
                className="inline-flex items-center gap-2 text-primary font-cormorant text-lg
             transition-colors duration-500 ease-in-out(0.4,0,0.2,1) group hover:text-foreground"
              >
                <span className="relative flex items-center gap-2">
                  Explore
                  <span className="relative top-0.5 transition-transform duration-500 ease-in-out(0.4,0,0.2,1) group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
