"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import InquiryModal from "@/components/inquiry-modal";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <>
      <div className="group">
        <div className="relative overflow-hidden rounded-lg mb-4 h-80 bg-accent">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
          >
            <Heart
              size={20}
              className={
                isFavorite ? "fill-primary text-primary" : "text-foreground"
              }
            />
          </button>
        </div>

        <h3 className="text-lg font-playfair font-bold text-foreground mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-foreground mb-3">{product.description}</p>

        <div className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center">
          <Link href={`/products/${product.id}`} className="w-full sm:w-auto">
            <button className="px-4 py-2 bg-primary text-background hover:bg-transparent hover:text-primary transition-all duration-300 ease-in-out font-cormorant border-primary border cursor-pointer text-sm w-full sm:w-auto">
              View Details
            </button>
          </Link>

          <button
            onClick={() => setShowInquiry(true)}
            className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-all text-sm w-full sm:w-auto cursor-pointer"
          >
            Contact for Price
          </button>
        </div>
      </div>

      {showInquiry && (
        <InquiryModal
          isOpen={showInquiry}
          onClose={() => setShowInquiry(false)}
          productName={product.name}
          productImage={product.image}
        />
      )}
    </>
  );
}
