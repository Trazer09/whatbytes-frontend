// app/components/layout/Header.tsx
import { Search, ShoppingCart } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">Logo</h1>

        {/* Search Bar */}
        <div className="relative flex-grow max-w-xl mx-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cart Icon */}
        <div className="flex items-center">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}