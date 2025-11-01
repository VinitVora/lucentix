"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import InquiryModal from "@/components/inquiry-modal";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price?: string;
  category?: string;
  shortDesc?: string;
  details?: {
    metal?: string;
    weight?: string;
    stone?: string;
    craftsmanship?: string;
  };
}

export default function ProductPage() {
  const params = useParams();
  const id = Number(params?.id);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch product data");

        const allProducts: Product[] = await res.json();
        const found = allProducts.find((p) => p.id === id);
        if (!found) throw new Error("Product not found");

        setProduct(found);
      } catch (err: any) {
        console.error("Error fetching product:", err);
        setError("Product not found or failed to load.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center text-foreground">
        Loading product details...
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground">
        <h1 className="text-3xl font-playfair font-bold mb-4">Product Not Found</h1>
        <Link href="/collection" className="text-primary underline">
          Back to Collection
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-24 sm:pt-28">
      <Navigation />

      <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-lg overflow-hidden cursor-zoom-in group">
            <Image
              src={product.image}
              alt={product.name}
              width={700}
              height={700}
              className="rounded-lg object-cover w-full max-h-[480px] transition-transform duration-500 group-hover:scale-105"
              onClick={() => setIsZoomed(true)}
            />
          </div>

          {/* Right: Product Details */}
          <div>
            <h1 className="text-4xl font-playfair font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <p className="text-base text-foreground/80 mb-6 leading-relaxed">
              {product.shortDesc || product.description}
            </p>

            {product.details && (
              <div className="space-y-2 text-sm text-foreground/80 border-l-4 border-primary pl-5 mb-8">
                {product.details.metal && (
                  <p>
                    <strong>Metal:</strong> {product.details.metal}
                  </p>
                )}
                {product.details.weight && (
                  <p>
                    <strong>Weight:</strong> {product.details.weight}
                  </p>
                )}
                {product.details.stone && (
                  <p>
                    <strong>Stone:</strong> {product.details.stone}
                  </p>
                )}
                {product.details.craftsmanship && (
                  <p>
                    <strong>Craftsmanship:</strong> {product.details.craftsmanship}
                  </p>
                )}
              </div>
            )}

            <div className="flex gap-4">
              <Link
                href="/collection"
                className="border border-primary text-primary hover:bg-primary hover:text-background px-5 py-2 transition-colors text-sm font-medium"
              >
                Back to Collection
              </Link>
              <button
                onClick={() => setShowInquiry(true)}
                className="px-5 py-2 bg-primary text-background hover:bg-transparent hover:text-primary transition-all duration-300 ease-in-out font-cormorant border-primary border cursor-pointer"
              >
                Contact for Price
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center backdrop-blur-sm cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={1400}
            height={900}
            className="rounded-lg object-contain max-h-[90vh] w-auto transition-transform duration-300"
          />
        </div>
      )}

      {/* Inquiry Modal */}
      {showInquiry && (
        <InquiryModal
          isOpen={showInquiry}
          onClose={() => setShowInquiry(false)}
          productName={product.name}
          productImage={product.image}
        />
      )}
    </main>
  );
}