"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { Product } from '@/app/data/products';

export default function ProductDetails({ product }: { product: Product }) {
  // --- Your essential logic is here ---
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // <-- The line you correctly pointed out

  const handleAddToCart = () => { // <-- The handler function that uses it
    addToCart(product, quantity);
    alert(`${quantity} ${product.name}(s) added to cart!`);
  };
  // ------------------------------------

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="relative h-96 w-full rounded-lg bg-gray-100 flex items-center justify-center">
        <Image src={product.image} alt={product.name} fill className="object-contain p-4"/>
      </div>

      {/* Details Section */}
      <div>
        <span className="text-sm font-semibold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
          {product.category}
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-2">{product.name}</h1>
        <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-6">
          <label htmlFor="quantity" className="font-semibold text-lg">Quantity:</label>
          <select
            id="quantity"
            className="border border-gray-300 rounded-md p-2"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map(q => <option key={q} value={q}>{q}</option>)}
          </select>
        </div>

        {/* The onClick handler calls the function defined above */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}