"use client"; // The sidebar now needs client-side interactivity to change the URL

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

// The Sidebar no longer needs setter functions, just the current values
interface SidebarProps {
  selectedCategory: string;
  priceLimit: number;
}

const categories = ['All', 'Electronics', 'Clothing', 'Home'];

export default function Sidebar({ selectedCategory, priceLimit }: SidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (name: string, value: string) => {
    // Create a new URLSearchParams object from the current URL
    const params = new URLSearchParams(searchParams.toString());
    // Set the new parameter
    params.set(name, value);
    // Push the new URL to the router
    router.push(`/?${params.toString()}`);
  };

  return (
    <aside className="w-full md:w-1/4 bg-[#0858A8] text-white p-6 rounded-lg self-start">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} htmlFor={category} className="flex items-center cursor-pointer">
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                checked={selectedCategory === category}
                // When a radio button is clicked, update the 'category' URL param
                onChange={(e) => handleFilterChange('category', e.target.value)}
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
          // When the slider is moved, update the 'price' URL param
          onChange={(e) => handleFilterChange('price', e.target.value)}
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