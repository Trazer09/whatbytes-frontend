// app/components/layout/Header.tsx
"use client"; // The header now needs to be a client component to access context

import { Search, ShoppingCart } from 'lucide-react';
import React from 'react';
import { useCart } from '@/app/context/CartContext'; // Import the useCart hook

export default function Header() {
  const { cartCount } = useCart(); // Get the live cart count

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo (no changes) */}
        <h1 className="text-2xl font-bold text-gray-800">Logo</h1>

        {/* Search Bar (no changes) */}
        <div className="relative flex-grow max-w-xl mx-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" placeholder="Search for products..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        {/* Cart Icon */}
        <div className="relative flex items-center">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
          </button>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}