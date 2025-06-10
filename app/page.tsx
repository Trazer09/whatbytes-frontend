"use client";

// We no longer need useState here as the URL is the source of truth for filters
import Sidebar from "./components/layout/Sidebar";
import ProductCard from "./components/ui/ProductCard";
import { products } from "./data/products";

// Update the component to accept all possible filter params from the URL
export default function HomePage({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    category?: string;
    price?: string;
  };
}) {
  // Read all filter values directly from the URL searchParams
  const searchTerm = searchParams?.search || '';
  const selectedCategory = searchParams?.category || 'All';
  // Convert price from string to number, with a default value
  const priceLimit = searchParams?.price ? Number(searchParams.price) : 1000;

  const filteredProducts = products.filter(product => {
    // The filter logic remains the same, as it's based on the variables above
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price <= priceLimit;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && priceMatch && searchMatch;
  });

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* The Sidebar now only needs the current values to display them correctly.
        It handles updating the URL itself.
      */}
      <Sidebar
        selectedCategory={selectedCategory}
        priceLimit={priceLimit}
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
          <p className="text-gray-500 text-center text-xl mt-12">
            No products found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}