// app/components/layout/Sidebar.tsx
import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-1/4 bg-blue-600 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="category" className="h-4 w-4" defaultChecked />
            <span className="ml-2">All</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="category" className="h-4 w-4" />
            <span className="ml-2">Electronics</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="category" className="h-4 w-4" />
            <span className="ml-2">Clothing</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="category" className="h-4 w-4" />
            <span className="ml-2">Home</span>
          </label>
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          defaultValue="1000"
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>
    </aside>
  );
}