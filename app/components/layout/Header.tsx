"use client";

import { Search, ShoppingCart, User } from 'lucide-react'; 
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Header() {
  const { cartCount } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearch = searchParams.get('search') || '';
  
  const [searchTerm, setSearchTerm] = useState(defaultSearch);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    
    <header className="bg-[#0858A8] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">Logo</Link>
        
        <form onSubmit={handleSubmit} className="relative flex-grow max-w-xl mx-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-white" />
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-white placeholder-white text-white rounded-md focus:outline-none "
          />
        </form>

        {/* --- Group Cart and Profile Icon Together --- */}
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <div className="relative flex items-center">
                <button className="flex items-center gap-2 bg-[#002C5A] text-white px-6 py-2 rounded-md hover:bg-blue-700 font-semibold">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart</span>
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
            </div>
          </Link>
          
          {/* --- Added Profile Icon --- */}
          <button className="p-2 rounded-full bg-white hover:bg-gray-300">
            <User className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        

      </div>
    </header>
  );
}