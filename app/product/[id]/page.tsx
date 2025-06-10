import { products } from '@/app/data/products';
import { notFound } from 'next/navigation';
import ProductDetails from './ProductDetails';

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

// The unused 'type Props' definition has been removed.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProductDetailPage({ params }: any) {
  
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <ProductDetails product={product} />
    </div>
  );
}