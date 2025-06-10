// app/components/ui/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}> {/* Wrap with Link */}
      <div className="bg-white p-4 rounded-lg shadow-sm text-center h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div>
          <div className="relative h-40 w-full mb-4">
            <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        </div>
        <div>
          <p className="text-xl font-bold text-gray-900 mt-2">${product.price}</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}