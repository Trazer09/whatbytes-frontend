import { products } from '@/app/data/products';
import { notFound } from 'next/navigation';
import ProductDetails from './ProductDetails'; // Import the client component

// This is a SERVER component. It should be async and has NO hooks or state.
export default async function ProductDetailPage({ params }: { params: { id:string } }) {
  
  // Its only job is to find the product based on the URL parameter.
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  // Then, it renders the ProductDetails component, passing the found product as a prop.
  return (
    <div className="container mx-auto px-4 py-12">
      <ProductDetails product={product} />
    </div>
  );
}