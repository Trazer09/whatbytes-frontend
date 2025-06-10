// app/product/[id]/page.tsx
"use client"; // We need interactivity, so this must be a client component

import { useState } from 'react'; // Import useState
import { products } from '@/app/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useCart } from '@/app/context/CartContext'; // Import our custom hook
import ProductDetails from './ProductDetails'; // Import our new client component



// The generateStaticParams function can be removed or left as is.
// Since we are making the page a client component, Next.js will handle it.
// For simplicity in this step, you can remove it if you like.

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1); // State for the quantity selector
  const { addToCart } = useCart(); // Get the addToCart function from our context

  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${quantity} ${product.name}(s) added to cart!`); // Simple confirmation
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section (no changes here) */}
        <div className="relative h-96 w-full rounded-lg bg-gray-100 flex items-center justify-center">
          <Image src={product.image} alt={product.name} fill className="object-contain p-4"/>
        </div>

        {/* Details Section */}
        <div>
          {/* ...product name, price, description (no changes here) */}
          <span className="text-sm font-semibold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">{product.category}</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-2">{product.name}</h1>
          <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
          <p className="text-gray-700 leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

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

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}