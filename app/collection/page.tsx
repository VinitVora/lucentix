"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";

const categories = ["all", "rings", "necklaces", "earrings", "bracelets", "pendents"];

export default function Collection() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Apply filters
  const filteredProducts = products.filter((product: any) => {
    return selectedCategory === "all" || product.category === selectedCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 bg-accent py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-foreground mb-4">
              Our Collection
            </h1>
            <p className="text-lg text-foreground max-w-2xl">
              Explore our curated selection of timeless pieces, each crafted
              with precision and passion.
            </p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
                      Category
                    </h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <label
                          key={category}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-4 h-4 accent-primary"
                          />
                          <span className="text-foreground capitalize">
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="w-full px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                {loading && (
                  <div className="text-center py-16 text-foreground">
                    Loading products...
                  </div>
                )}

                {error && (
                  <div className="text-center py-16 text-red-600">
                    {error}
                  </div>
                )}

                {!loading && !error && (
                  <>
                    <div className="mb-6 text-foreground">
                      Showing {filteredProducts.length} of {products.length} products
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredProducts.map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>

                    {filteredProducts.length === 0 && (
                      <div className="text-center py-16">
                        <p className="text-lg text-foreground">
                          No products found matching your filters.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}