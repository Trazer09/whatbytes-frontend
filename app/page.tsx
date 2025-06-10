// app/page.tsx
"use client"; // Important: This enables client-side interactivity

import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import ProductCard from "./components/ui/ProductCard";
import { products } from "./data/products";

export default function HomePage() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceLimit, setPriceLimit] = useState<number>(1000);

  // Filtering logic
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price <= priceLimit;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="flex gap-8">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceLimit={priceLimit}
        setPriceLimit={setPriceLimit}
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Product Listing</h2>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center text-xl">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}