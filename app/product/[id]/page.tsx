// app/product/[id]/page.tsx
import { products } from '@/app/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// This tells Next.js to render these pages at build time
export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  // If no product is found, show a 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative h-96 w-full rounded-lg bg-gray-100 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
             className="object-contain p-4"
            />
        </div>

        {/* Details Section */}
        <div>
          <span className="text-sm font-semibold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-2">{product.name}</h1>
          <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <label htmlFor="quantity" className="font-semibold text-lg">Quantity:</label>
            <select id="quantity" className="border border-gray-300 rounded-md p-2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}