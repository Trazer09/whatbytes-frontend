import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="block">
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <div>
          <div className="relative h-40 w-full mb-6"> 
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
          <p className="text-2xl font-bold text-gray-900 mt-2">${product.price}</p>
          
<button className="mt-4 w-full bg-[#0858A8] text-white py-2.5 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-base">

            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}