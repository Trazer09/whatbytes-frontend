// app/components/layout/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceLimit: number;
  setPriceLimit: (price: number) => void;
}

const categories = ['All', 'Electronics', 'Clothing', 'Home'];

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  priceLimit,
  setPriceLimit
}: SidebarProps) {
  return (
    <aside className="w-1/4 bg-blue-600 text-white p-6 rounded-lg self-start">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-4 w-4"
              />
              <span className="ml-2">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceLimit}
          onChange={(e) => setPriceLimit(Number(e.target.value))}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>$0</span>
          <span>${priceLimit}</span>
        </div>
      </div>
    </aside>
  );
}